import DataMahasiswa from './DataMahasiswa.vue';
<template>
  <main class="mx-auto flex flex-col overscroll-y-none">
    <div class="text-sm font-light">
      Admin > Data Mahasiswa > Edit Data Mahasiswa
    </div>

    <header class="my-6">
      <h2 class="font-bold text-4xl text-blue-950">
        Edit Data Informasi Mahasiswa
      </h2>
    </header>
    <form
      class="w-full grid gap-5 px-4 shadow-md p-5"
      @submit.prevent="openModal"
    >
      <div class="flex justify-between items-center">
        <label for="name" class="w-32 pr-4 font-bold text-gray-700">Nama</label>
        <div class="flex-1">
          <input
            required
            placeholder="Nama Mahasiswa"
            type="text"
            id="name"
            class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-start items-center">
        <label for="photo" class="w-32 pr-4 font-bold">Foto</label>
        <input
          required
          type="file"
          accept="image/*"
          class="text-sm text-gray-400 file:mr-2 file:py-1 file:px-1 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white hover:file:bg-gray-100"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="tempat lahir" class="w-32 pr-4 font-bold text-gray-700"
          >Tempat Lahir</label
        >
        <input
          required
          placeholder="Tempat Lahir"
          type="text"
          id="tempat lahir"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="tanggal lahir" class="w-32 pr-4 font-bold text-gray-700"
          >Tanggal Lahir</label
        >
        <input
          required
          placeholder="Tanggal Lahir"
          type="date"
          id="tanggal lahir"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="flex justify-between items-center">
        <label for="jenis-kelamin" class="w-32 pr-4 font-bold text-gray-700"
          >Jenis Kelamin</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="email" class="w-32 pr-4 font-bold text-gray-700"
          >Email</label
        >
        <input
          required
          placeholder="Email"
          type="email"
          id="email"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="telepon" class="w-32 pr-4 font-bold text-gray-700"
          >Telepon</label
        >
        <input
          required
          placeholder="Telepon"
          type="text"
          id="telepon"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="alamat" class="w-32 pr-4 font-bold text-gray-700"
          >Alamat</label
        >
        <input
          required
          placeholder="Alamat"
          type="text"
          id="alamat"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nim" class="w-32 pr-4 font-bold text-gray-700">NIM</label>
        <input
          required
          placeholder="NIM"
          type="text"
          id="nim"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="angkatan" class="w-32 pr-4 font-bold text-gray-700"
          >Angkatan</label
        >
        <input
          required
          placeholder="Angkatan"
          type="text"
          id="angkatan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="flex justify-between items-center">
        <label for="semester" class="w-32 pr-4 font-bold text-gray-700"
          >Semester</label
        >
        <input
          required
          placeholder="Semester"
          type="number"
          id="semester"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          min="1"
          max="14"
        />
      </div>

      <div class="flex justify-between items-center">
        <label for="fakultas" class="w-32 pr-4 font-bold text-gray-700"
          >Fakultas</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Fakultas 1</option>
          <option value="Perempuan">Fakultas 2</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="prodi" class="w-32 pr-4 font-bold text-gray-700"
          >Program Studi</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Prodi 1</option>
          <option value="Perempuan">Prodi 2</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="sks" class="w-32 pr-4 font-bold text-gray-700"
          >Jumlah SKS</label
        >
        <!-- <input
          placeholder="Jumlah SKS"
          type="number"
          id="sks"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        /> -->
      </div>
      <div class="flex justify-between items-center">
        <label for="status" class="w-32 pr-4 font-bold text-gray-700"
          >Status</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Aktif</option>
          <option value="Perempuan">Tidak Aktif</option>
        </select>
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'DetailPageMahasiswa' }">
          <button
            type="button"
            class="bg-white py-2 px-2 border border-red-700 rounded-md shadow-sm font-bold text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            Batal
          </button>
        </router-link>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
        >
          Simpan
        </button>
      </div>
    </form>
    <Modal
      :visible="isModalVisible"
      @cancel="closeModal"
      @confirm="submitForm"
    />
  </main>
</template>

<script>
import Modal from "../../components/ConfirmComponent.vue";
// import VueRouter from "vue-router";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submitForm() {
      // Handle form submission here
      this.isModalVisible = false;
      alert("Aksi berhasil"); // Replace with actual form submission logic
      window.history.back();
    },
  },
};
</script>
