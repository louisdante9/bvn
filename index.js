const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { User, Bvn } = require('./db/models')
const { Op } = require("sequelize");


const app = express();
const PORT =  process.env.PORT || 9000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to bvn portals')
})
app.get('/bvn', async (req, res) => {
    const { phone, accountNo } = req.body
    try {
        const bvn = await User.findOne({
            where: {
                [Op.or]: [
                    {
                        phone
                    },
                    {
                        accountNo
                    }
                ]
            },
            include: [
                {
                    model: Bvn
                }
            ]
        })
        res.status(200).send({
            message: 'Your request was successful',
            bvn
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message)
    }

})


app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Bvn
                }
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.post('/users/new', async (req, res) => {
    const rn = Math.floor(100000000 + Math.random() * 900000000);
    const { firstName, lastName, phone, accountNo } = req.body;
    try {
        const [user, created] = await User.findOrCreate({
            where: {
                [Op.or]: [
                    {
                        phone
                    },
                    {
                        accountNo
                    }
                ]
            },
            defaults: {
                firstName,
                lastName,
                phone,
                accountNo
            }
        });
        if (!created) {
            res.status(400).send({
                message: 'Phone number or account number already exists'
            })
        }

        let bvn
        try {
             bvn = await Bvn.create({
                bvnNo: rn,
                userId: user.id
            })
        } catch (err) {
            return res.status(500).json({
                error: err.message
            })
        }
        return res.status(201).json({
            user, 
            bvnNo: bvn.bvnNo
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


app.listen(PORT, (err) => {
    if (err) {
        throw new Error('something happened')
    }
    console.log(`Server is running on ${PORT}`);
})