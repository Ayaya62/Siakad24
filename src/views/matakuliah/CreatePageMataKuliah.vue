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
    <form class="w-full grid gap-5 px-4 shadow-md p-5" @submit.prevent="openModal">
      <div class="flex justify-between items-center">
        <label for="nama" class="w-32 pr-4 font-bold text-gray-700">Mata Kuliah</label>
        <div class="flex-1">
          <input
            v-model="mataKuliah.nama"
            required
            placeholder="Mata Kuliah"
            type="text"
            id="nama"
            class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <label for="kode" class="w-32 pr-4 font-bold text-gray-700">Kode</label>
        <input
          v-model="mataKuliah.kode"
          required
          placeholder="Kode"
          type="text"
          id="kode"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="sks" class="w-32 pr-4 font-bold text-gray-700">SKS</label>
        <input
          v-model="mataKuliah.sks"
          required
          placeholder="SKS"
          type="number"
          id="sks"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="semester" class="w-32 pr-4 font-bold text-gray-700">Semester</label>
        <select
          v-model="mataKuliah.semester"
          required
          id="semester"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="" disabled selected>Pilih Semester</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="dosen" class="w-32 pr-4 font-bold text-gray-700">Dosen Pengampu</label>
        <select
          v-model="mataKuliah.id_data_dosen"
          required
          id="dosen"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="" disabled selected>Pilih Dosen</option>
          <option v-for="dosen in dosenList" :key="dosen.id" :value="dosen.id">{{ dosen.nama }}</option>
        </select>
      </div>

      <div class="mt-10 text-xl font-bold text-blue-950">Jadwal</div>
      <div class="w-full grid gap-5 px-4 pr-0 p-5">
        <div class="flex justify-between items-center">
          <label for="hari" class="w-32 pr-4 font-bold text-gray-700">Hari</label>
          <select
            v-model="jadwal.hari"
            required
            id="hari"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          >
            <option value="" disabled selected>Pilih Hari</option>
            <option value="Senin">Senin</option>
            <option value="Selasa">Selasa</option>
            <option value="Rabu">Rabu</option>
            <option value="Kamis">Kamis</option>
            <option value="Jumat">Jumat</option>
          </select>
        </div>
        <div class="flex justify-between items-center">
          <label for="waktu" class="w-32 pr-4 font-bold text-gray-700">Waktu</label>
          <select
            v-model="jadwal.id_sesi"
            required
            id="waktu"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          >
            <option value="" disabled selected>Pilih Waktu</option>
            <option v-for="sesi in sesiList" :key="sesi.id" :value="sesi.id">{{ sesi.waktu }}</option>
          </select>
        </div>
        <div class="flex justify-between items-center">
          <label for="ruang" class="w-32 pr-4 font-bold text-gray-700">Ruang</label>
          <input
            v-model="jadwal.ruang"
            required
            placeholder="Ruang"
            type="text"
            id="ruang"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <label for="jenis" class="w-32 pr-4 font-bold text-gray-700">Jenis</label>
        <select
          v-model="mataKuliah.jenis"
          required
          id="jenis"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="" disabled selected>Pilih Jenis</option>
          <option value="wajib">Wajib</option>
          <option value="pilihan">Pilihan</option>
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
          id="submit-datamatkul"
          class="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
        >
          Simpan
        </button>
      </div>
    </form>
    <Modal :visible="isModalVisible" @cancel="closeModal" @confirm="submitForm" />
  </main>
</template>

<script>
import Modal from "../../components/ConfirmComponent.vue";
import axios from "axios";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      mataKuliah: {
        nama: "",
        kode: "",
        sks: "",
        semester: "",
        id_user: "", // Initialize id_user
        id_data_dosen: "",
        jenis: "",
      },
      jadwal: {
        hari: "",
        id_sesi: "", // Add id_sesi for session ID
        ruang: "",
      },
      dosenList: [],
      sesiList: [], // Initialize sesiList
    };
  },
  methods: {
    async fetchDosen() {
      const authToken = localStorage.getItem("authToken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/data-dosen", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        this.dosenList = response.data;
      } catch (error) {
        console.error("Error fetching dosen:", error.response ? error.response.data : error.message);
      }
    },
    async fetchSesi() {
      const authToken = localStorage.getItem("authToken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/sesi", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        this.sesiList = response.data;
      } catch (error) {
        console.error("Error fetching sesi:", error.response ? error.response.data : error.message);
      }
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async submitForm() {
      const authToken = localStorage.getItem("authToken");
      try {
        const payload = { 
          ...this.mataKuliah,
          jadwal: this.jadwal
        };
        const response = await axios.post("http://127.0.0.1:8000/api/data-matkul", payload, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        console.log("Response from server:", response.data);
        alert("Data mata kuliah berhasil ditambahkan!");
        this.$router.push({ name: "DataMataKuliah" });
      } catch (error) {
        console.error("Error adding mata kuliah:", error.response ? error.response.data : error.message);
        alert("Terjadi kesalahan saat menambahkan data.");
      } finally {
        this.isModalVisible = false;
      }
    },
  },
  mounted() {
    this.fetchDosen();
    this.fetchSesi();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.mataKuliah.id_user = user.id;  // Set the id_user to the logged-in user's ID
    }
  },
};
</script>
