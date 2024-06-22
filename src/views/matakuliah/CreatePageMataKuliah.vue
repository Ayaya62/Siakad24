import DataMahasiswa from './DataMahasiswa.vue';
<template>
  <main class="mx-auto flex flex-col overscroll-y-none">
    <div class="text-sm font-light">
      Admin > Data Mata Kuliah > Tambah Data Mata Kuliah
    </div>

    <header class="my-6">
      <h2 class="font-bold text-4xl text-blue-950">
        Tambah Data Informasi Mata Kuliah
      </h2>
    </header>
    <form
      class="w-full grid gap-5 px-4 shadow-md p-5"
      @submit.prevent="openModal"
    >
      <div class="flex justify-between items-center">
        <label for="name" class="w-32 pr-4 font-bold text-gray-700"
          >Mata Kuliah</label
        >
        <div class="flex-1">
          <input
            required
            placeholder="Mata Kuliah"
            type="text"
            id="name"
            class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <label
          for="jenis-kelamin"
          class="w-32 pr-4 font-bold text-gray-700"
          >Kode
        </label>
        <input
          required
          placeholder="Kode"
          type="text"
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="alamat" class="w-32 pr-4 font-bold text-gray-700"
          >SKS</label
        >
        <input
          required
          placeholder="SKS"
          type="text"
          id="alamat"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label
          for="semester"
          class="w-32 pr-4 font-bold text-gray-700"
          >Semester</label
        >
        <select
          required
          id="semester"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="dst">dst</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label
          for="angkatan"
          class="w-32 pr-4 font-bold text-gray-700"
          >Dosen Pengampu</label
        >
        <input
          required
          placeholder="Dosen Pengampu"
          type="text"
          id="angkatan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="mt-10 text-xl font-bold text-blue-950">Jadwal</div>
      <div class="w-full grid gap-5 px-4 pr-0 p-5">
        <div class="flex justify-between items-center">
          <label for="hari" class="w-32 pr-4 font-bold text-gray-700"
            >Hari</label
          >
          <select
            required
            id="hari"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          >
            <option selected></option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
            <option value="Jumat">Jumat</option>
          </select>
        </div>
        <div class="flex justify-between items-center">
          <label
            for="waktu"
            class="w-32 pr-4 font-bold text-gray-700"
            >Waktu</label
          >
          <select
            required
            id="waktu"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          >
            <option selected></option>
            <option value="">07.15-08.55</option>
            <option value="">09.15-10.55</option>
            <option value="">12.15-13.55</option>
            <option value="">14.15-15.55</option>
          </select>
        </div>
        <div class="flex justify-between items-center">
          <label
            for="ruang"
            class="w-32 pr-4 font-bold text-gray-700"
            >Ruang</label
          >
          <input
            required
            placeholder="Ruang"
            type="text"
            id="ruang"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <label for="sks" class="w-32 pr-4 font-bold text-gray-700"
          >Jenis</label
        >
        <select
          required
          id="sks"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Wajib</option>
          <option value="Perempuan">Tidak Wajib</option>
        </select>
      </div>

      <div class="flex justify-center">
        <router-link :to="{ name: 'DataMahasiswa' }">
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
