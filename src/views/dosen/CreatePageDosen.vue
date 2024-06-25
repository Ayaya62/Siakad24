import DataMahasiswa from './DataMahasiswa.vue';
<template>
  <main class="mx-auto flex flex-col overscroll-y-none">
    <div class="text-sm font-light">Admin > Data Dosen > Tambah Data Dosen</div>

    <header class="my-6">
      <h2 class="font-bold text-4xl text-blue-950">
        Tambah Data Informasi Dosen
      </h2>
    </header>
    <form
      class="w-full grid gap-5 px-4 shadow-md p-5"
      @submit.prevent="openModal"
    >
      <div class="flex justify-between items-center">
        <label for="name" class="pr-4 w-40 font-bold text-gray-700">Nama</label>
        <div class="flex-1">
          <input
            required
            placeholder="Nama Dosen"
            type="text"
            id="name"
            class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-start items-center">
        <label for="photo" class="pr-4 w-40 font-bold">Foto</label>
        <input
          required
          type="file"
          accept="image/*"
          class="text-sm text-gray-400 file:mr-2 file:py-1 file:px-1 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white hover:file:bg-gray-100"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nidn" class="pr-4 w-40 font-bold text-gray-700">NIDN</label>
        <input
          required
          placeholder="NIDN"
          type="text"
          id="nidn"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nip" class="pr-4 w-40 font-bold text-gray-700">NIP</label>
        <input
          required
          placeholder="NIP"
          type="text"
          id="nip"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nip" class="pr-4 w-40 font-bold text-gray-700">Email</label>
        <input
          required
          placeholder="Email"
          type="email"
          id="nip"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="phone" class="pr-4 w-40 font-bold text-gray-700"
          >Telepon</label
        >
        <input
          required
          placeholder="Telepon"
          type="tel"
          id="phone"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="jenis-kelamin" class="pr-4 w-40 font-bold text-gray-700"
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
        <label for="alamat" class="pr-4 w-40 font-bold text-gray-700"
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

      <div class="flex">
        <label for="jenjang" class="pr-4 w-40 font-bold text-gray-700 align-top"
          >Jenjang Pendidikan</label
        >
        <div class="w-full">
          <!-- <button
            class="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            +
          </button> -->
          <ul class="w-53">
            <li class="flex gap-2 mb-2">
              <p>S1</p>
              <input
                required
                placeholder=""
                type="text"
                id="fungsional"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S2</p>
              <input
                required
                placeholder=""
                type="text"
                id="fungsional"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S3</p>
              <input
                required
                placeholder=""
                type="text"
                id="fungsional"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="text-xl font-bold text-blue-950">Jabatan</div>
      <div class="w-full grid gap-5 px-4 pr-0 p-5">
        <div class="flex justify-between items-center">
          <label for="fungsional" class="pr-4 w-40 font-bold text-gray-700"
            >Fungsional</label
          >
          <input
            required
            placeholder="Jabatan Fungsional"
            type="text"
            id="fungsional"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
        <div class="flex justify-between items-center">
          <label for="struktural" class="pr-4 w-40 font-bold text-gray-700"
            >Struktural</label
          >
          <input
            required
            placeholder="Jabatan Struktural"
            type="text"
            id="struktural"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <label for="status-pekerjaan" class="pr-4 w-40 font-bold text-gray-700"
          >Status Pekerjaan</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Tetap</option>
          <option value="Perempuan">Tidak Tetap</option>
        </select>
      </div>

      <div class="flex justify-between items-center">
        <label for="status-keaktifan" class="pr-4 w-40 font-bold text-gray-700"
          >Status Keaktifan</label
        >
        <select
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="Laki">Aktif</option>
          <option value="Perempuan">Tidak Aktif</option>
          <option value="Perempuan">Tugas Belajar</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="struktural" class="pr-4 w-40 font-bold text-gray-700"
          >Minat Penelitian</label
        >
        <input
          required
          placeholder="Minat Penelitian"
          type="text"
          id="penelitian"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'DataDosen' }">
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
      alert("Aksi berhasil!"); // Replace with actual form submission logic
      window.history.back();
    },
  },
};
</script>
