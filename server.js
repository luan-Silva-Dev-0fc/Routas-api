const express = require('express')
const cors = require('cors')
require('dotenv').config()

const sequelize = require('./config/database')
const adoptionRoutes = require('./routes/adoptionForm.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/adocao', adoptionRoutes)

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001 e banco sincronizado')
  })
}).catch((err) => {
  console.error('Erro ao conectar com o banco:', err)
})
