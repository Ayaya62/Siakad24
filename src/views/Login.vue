<template>
  <div class="flex h-screen">
    <!-- Left part with image and logo -->
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

    <!-- Right part with login form -->
    <div class="p-10 my-auto w-1/3 text-center items-center justify-center">
      <div>
        <h2 class="text-4xl font-bold text-blue-950">Login</h2>
        <form @submit.prevent="handleLogin">
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
          <button
            type="submit"
            class="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    // Dapatkan token reCAPTCHA
    const token = await grecaptcha.execute('6LdheZQpAAAAACh5hG5OStPRlFNNt7wiWbSUbjqY', { action: 'login' });

    // Kirim permintaan login ke backend
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: email.value,
      password: password.value,
      'g-recaptcha-response': token,
    });

    // Simpan token atau lakukan tindakan lainnya
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));  // Store user data
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

    console.log('Login successful:', response.data);

    // Arahkan ke halaman yang sesuai berdasarkan peran pengguna
    const user = response.data.user;
    if (user.role === 'admin') {
      router.push({ name: 'DataDosen' });
    } else if (user.role === 'dosen') {
      router.push({ name: 'User' });
    } else if (user.role === 'mahasiswa') {
      router.push({ name: 'Mahasiswa' });
    }
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    alert('Login failed. Please check your credentials and reCAPTCHA.');
  }
};

// Muat reCAPTCHA saat komponen dimuat
onMounted(() => {
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=6LdheZQpAAAAACh5hG5OStPRlFNNt7wiWbSUbjqY`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});
</script>
