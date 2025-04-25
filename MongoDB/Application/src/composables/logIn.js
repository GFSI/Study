import { ref } from 'vue'

export function useLogin() {
  const email = ref('')
  const password = ref('')
  const mensaje = ref('') // Para mostrar mensajes si quieres

  const logIn = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: email.value,
          password: password.value,
        }),
      })

      const data = await response.json()
      mensaje.value = data.mensaje

      if (response.ok) {
        console.log('✅ Login exitoso:', data)
      } else {
        console.warn('⚠️ Fallo en login:', data.mensaje)
      }
    } catch (err) {
      console.error('❌ Error de red o conexión:', err)
    }
  }

  const register = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: email.value,
          password: password.value,
        }),
      })

      const data = await response.json()
      mensaje.value = data.mensaje

      if (response.ok) {
        console.log('✅ Registro exitoso:', data)
      } else {
        console.warn('⚠️ Fallo en registro:', data.mensaje)
      }
    } catch (err) {
      console.error('❌ Error de red o conexión:', err)
    }
  }

  return {
    email,
    password,
    mensaje,
    logIn,
    register,
  }
}