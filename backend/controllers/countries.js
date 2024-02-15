const pais = require('../models/Country')

const obtenerPaises  = async(req, res) => {
    try {
        const paises = await pais.find()
        res.json(paises)
    } catch (error) {
        console.log('error al obtener paises');
        res.status(500).json({message: "error al obtener paises"})
    }
}

const crearPais = async(req, res) => {
    try {
        const {code, name, capital, currency, languages, continent} = req.body

        const nuevoPais = new pais ({
            code,
            name,
            capital,
            currency,
            languages,
            continent,
        })
        nuevoPais.save()
        res.status(200).json({message: "pais creado"})
    } catch (error) {
        console.log('error al crear pais');
        res.status(500).json({message: "error al crear pais"})
    }
}

module.exports = { obtenerPaises, crearPais }