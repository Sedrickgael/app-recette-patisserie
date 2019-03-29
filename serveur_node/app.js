require('babel-register')
const {success, error} = require('./functions')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const cors = require('cors')

const db = mysql.createConnection({
    host: 'localhost',
    database: 'patisserie',
    user: 'root',
    password: ''
})

db.connect((err) => {

    if (err)
        console.log(err.message)
    else {

        console.log('Connected.')

        const app = express()

        let Affichage = express.Router()

        app.use(morgan('dev'))
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        Affichage.route('/:id')

            // récupère les recettes d'une catégorie
            .get((req, res) => {

                db.query('SELECT * FROM recettes WHERE id_categorie = ?', [req.params.id], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                         res.json(success(result))
                    }
                })

            })

        Affichage.route('/details/:id')

            // récupère les détais des recettes
            .get((req, res) => {

                db.query('SELECT * FROM recettes WHERE id = ?', [req.params.id], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {
                         res.json(success(result))
                    }
                })

            })


        // recupère un seul et unique catégorie

        Affichage.route('/seul/:id')
            .get((req, res) => { 
                db.query('SELECT * FROM categorie WHERE id = ?', [req.params.id], (err, result) => {
                    if (err) {
                        res.json(error(err.message))
                    } else {

                        if (result[0] != undefined) {
                            res.json(success(result[0]))
                        } else {
                            res.json(error('Wrong id'))
                        }

                    }
                })
            })

            //recupère toutes les categorie

            Affichage.route('/')
            .get((req, res) => {
                if (req.query.max != undefined && req.query.max > 0) {

                    db.query('SELECT * FROM categorie LIMIT 0, ?', [req.query.max], (err, result) => {
                        if (err) {
                            res.json(error(err.message))
                        } else {
                            res.json(success(result))
                        }
                    })

                } else if (req.query.max != undefined) {
                    res.json(error('Wrong max value'))
                } else {

                    db.query('SELECT * FROM categorie', (err, result) => {
                        if (err) {
                            res.json(error(err.message))
                        } else {
                            res.json(success(result))
                        }
                    })

                }
            })

           
        
        app.use(cors())
        app.use("/categorie", Affichage)

        app.listen(config.port, () => console.log('Started on port '+config.port))

    }

})