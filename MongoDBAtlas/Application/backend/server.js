import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = 3000

// Middlewares
app.use(cors())
app.use(express.json())

// Conexión a MongoDB
mongoose.connect('mongodb+srv://gonzalosalinas:dEbLPPAc9k1oiiRl@cluster0.kpagxdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const usuarioSchema = new mongoose.Schema({
  correo: String,
  password: String, // agregamos password
})

const Usuario = mongoose.model('Usuario', usuarioSchema)

// Ruta de registro
app.post('/register', async (req, res) => {
  const { correo, password } = req.body

  try {
    const usuarioExistente = await Usuario.findOne({ correo })
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' })
    }

    const nuevoUsuario = new Usuario({ correo, password })
    await nuevoUsuario.save()

    res.status(201).json({ mensaje: 'Usuario registrado' })
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el servidor' })
  }
})

// Ruta de login
app.post('/login', async (req, res) => {
  const { correo, password } = req.body

  try {
    const usuario = await Usuario.findOne({ correo, password })

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
    }

    res.status(200).json({ mensaje: 'Login exitoso', id: usuario._id })
  } catch (err) {
    res.status(500).json({ mensaje: 'Error en el servidor' })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`)
})
