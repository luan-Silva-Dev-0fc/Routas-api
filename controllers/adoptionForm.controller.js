const AdoptionForm = require('../models/AdoptionForm')

exports.submitForm = async (req, res) => {
  try {
    const data = await AdoptionForm.create(req.body)
    res.status(201).json({ message: 'Formulário enviado com sucesso', data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
