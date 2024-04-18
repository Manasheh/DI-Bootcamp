const express = require('express');
const bcrypt = require('bcrypt');
const data = require('../config/data.js');
const { _toGet,
     _toRegister,
     _toGetUserByName,
    } = require('../model/model.js');

const toGet = async (req, res) => {
    try {
        const result = await _toGet();
        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const toRegister = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await _toRegister(username, hashPassword);
        res.json(user);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const login = async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await _toGetUserByName(username);
            if (!user || !user.length) {
                return res.json({ msg: 'User not found' });
            }
            const hashedPassword = user[0].password;
            const passwordMatch = await bcrypt.compare(password, hashedPassword);
            if (!passwordMatch) {
                return res.json({ msg: 'Invalid password' });
            }
            res.json({ msg: 'Login successful' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
    
};


module.exports = {
    toGet,
    toRegister,
    login
};
