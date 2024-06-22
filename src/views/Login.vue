<template>
  <div class="flex h-screen">
    <!-- Bagian kiri dengan gambar dan logo -->
    <div class="container flex bg-blue-950 w-2/3">
      <div class="absolute flex bottom-10 bg-blue-950 w-2/3 p-5">
        <img src="../assets/Logo.svg" class="w-42 mx-5" alt="Logo" />
        <div class="mt-7">
          <p class="text-5xl my-2 text-white font-bold">
            UNIVERSITAS WIDYA DHARMA
          </p>
          <p class="text-4xl text-yellow-400 font-bold">
            TUMBUH BERSAMA MERAIH SUKSES
          </p>
        </div>
      </div>
      <img src="../assets/Snapinsta 1.png" class="h-full w-auto" alt="Pict" />
    </div>

    <!-- Bagian kanan dengan form login -->
    <div class="p-10 my-auto w-1/3 text-center items-center justify-center">
      <div>
        <h2 class="text-4xl font-bold text-blue-950">Login</h2>
        <form @submit.prevent="login" class="">
          <div class="my-5">
            <input
              type="email"
              v-model="email"
              class="form-input p-2 bg-white shadow-md rounded w-full"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div class="my-5">
            <input
              type="password"
              v-model="password"
              class="form-input p-2 bg-white shadow-md rounded w-full"
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <router-link :to="{ name: 'DataDosen' }">
            <button
              type="submit"
              class="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
