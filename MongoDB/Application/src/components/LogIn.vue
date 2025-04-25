<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form @submit.prevent="logIn">
          <div class="mb-4">
            <label class="block text-gray-700 mb-1">Correo electrónico</label>
            <input
              v-model="email"
              type="email"
              placeholder="ejemplo@correo.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 mb-1">Contraseña</label>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ingresar
            </button>
            <button
              type="button"
              @click="register"
              class="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
</template>

<script setup>
import { useLogin } from '@/composables/logIn.js'

const { 
    email, 
    password,
    logIn, 
    register 
    } = useLogin()
</script>