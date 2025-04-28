import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/miapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, '❌ Error de conexión a MongoDB:'))
db.once('open', async () => {
  console.log('✅ Conexión exitosa a MongoDB desde backend')

  // Crear esquema y modelo
  const usuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
  })

  const Usuario = mongoose.model('Usuario', usuarioSchema)

  // Crear nuevo usuario
  const nuevoUsuario = new Usuario({
    nombre: 'Prueba',
    correo: 'prueba@correo.com',
  })

  try {
    const resultado = await nuevoUsuario.save()
    console.log('✅ Usuario guardado:', resultado)
  } catch (err) {
    console.error('❌ Error al guardar el usuario:', err)
  } finally {
    // Cierra la conexión después de guardar
    mongoose.connection.close()
  }
})
