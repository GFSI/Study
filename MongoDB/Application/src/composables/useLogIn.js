import { ref } from 'vue'

export function useLogin() {
  const email = ref('')
  const password = ref('')
  const mensaje = ref('')

  const logIn = async () => {
    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: email.value,
          password: password.value,
        }),
      })

      const data = await res.json()
      mensaje.value = data.mensaje
      if (res.ok) {
        console.log('✅ Login correcto:', data)
      } else {
        console.warn('⚠️ Login fallido:', data.mensaje)
      }
    } catch (err) {
      console.error('❌ Error de red:', err)
    }
  }

  const register = async () => {
    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: email.value,
          password: password.value,
        }),
      })

      const data = await res.json()
      mensaje.value = data.mensaje
      if (res.ok) {
        console.log('✅ Registro correcto')
      } else {
        console.warn('⚠️ Registro fallido:', data.mensaje)
      }
    } catch (err) {
      console.error('❌ Error de red:', err)
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
