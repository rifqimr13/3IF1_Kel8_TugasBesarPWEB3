const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const User = require('../models/User');

module.exports.postRegister = (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    User.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            username: req.body.username,
            email: req.body.email,
            password: hash,
            roles: req.body.roles
        }
    }).then((user) => {
        res.json(user);
    }).catch((error) => {
        console.log(error);
    })
}

module.exports.postLogin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            res.status(400).send('User not found!');
        }
        bcrypt.compare(req.body.password, user.get('password'), (error, isMatch) => {
            if (error) {
                res.status(400).send('wrong match error');
            }
            if (isMatch) {
                jwt.sign({
                    id: user.get('id'),
                    username: user.get('username'),
                    roles: user.get('roles')
                }, process.env.SECRETKEY, (error, token) => {
                    res.json({
                        token: token
                    })
                })
            } else {
                res.status(400).send('wrong password');
            }
        })
    })
}


