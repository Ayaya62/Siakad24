<template>
  <main class="mx-auto flex flex-col overscroll-y-none">
    <div class="text-sm font-light">Admin > Data Mahasiswa > Edit Data Mahasiswa</div>

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
            v-model="mahasiswa.nama"
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
          type="file"
          accept="image/*"
          @change="handleFileChange"
          class="text-sm text-gray-400 file:mr-2 file:py-1 file:px-1 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white hover:file:bg-gray-100"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="tempat lahir" class="w-32 pr-4 font-bold text-gray-700">Tempat Lahir</label>
        <input
          v-model="mahasiswa.tempat"
          required
          placeholder="Tempat Lahir"
          type="text"
          id="tempat lahir"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="tanggal lahir" class="w-32 pr-4 font-bold text-gray-700">Tanggal Lahir</label>
        <input
          v-model="mahasiswa.tanggal_lahir"
          required
          placeholder="Tanggal Lahir"
          type="date"
          id="tanggal lahir"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="flex justify-between items-center">
        <label for="jenis-kelamin" class="w-32 pr-4 font-bold text-gray-700">Jenis Kelamin</label>
        <select
          v-model="mahasiswa.jenis_kelamin"
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value=""></option>
          <option value="pria">Laki-laki</option>
          <option value="wanita">Perempuan</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="email" class="w-32 pr-4 font-bold text-gray-700">Email</label>
        <input
          v-model="mahasiswa.email"
          required
          placeholder="Email"
          type="email"
          id="email"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="telepon" class="w-32 pr-4 font-bold text-gray-700">Telepon</label>
        <input
          v-model="mahasiswa.telepon"
          required
          placeholder="Telepon"
          type="text"
          id="telepon"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="alamat" class="w-32 pr-4 font-bold text-gray-700">Alamat</label>
        <input
          v-model="mahasiswa.alamat"
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
          v-model="mahasiswa.nim"
          required
          placeholder="NIM"
          type="text"
          id="nim"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="angkatan" class="w-32 pr-4 font-bold text-gray-700">Angkatan</label>
        <input
          v-model="mahasiswa.angkatan"
          required
          placeholder="Angkatan"
          type="text"
          id="angkatan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="flex justify-between items-center">
        <label for="semester" class="w-32 pr-4 font-bold text-gray-700">Semester</label>
        <input
          v-model="mahasiswa.semester"
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
        <label for="fakultas" class="w-32 pr-4 font-bold text-gray-700">Fakultas</label>
        <select
          v-model="mahasiswa.id_fakultas"
          required
          id="fakultas"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value=""></option>
          <option v-for="fakultas in fakultasList" :key="fakultas.id" :value="fakultas.id">{{ fakultas.nama }}</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="prodi" class="w-32 pr-4 font-bold text-gray-700">Program Studi</label>
        <select
          v-model="mahasiswa.id_prodi"
          required
          id="prodi"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value=""></option>
          <option v-for="prodi in filteredProdiList" :key="prodi.id" :value="prodi.id">{{ prodi.nama }}</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="status" class="w-32 pr-4 font-bold text-gray-700">Status</label>
        <select
          v-model="mahasiswa.status"
          required
          id="status"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value=""></option>
          <option value="aktif">Aktif</option>
          <option value="tidak aktif">Tidak Aktif</option>
        </select>
      </div>
      <div class="flex justify-center">
        <router-link :to="{ name: 'DetailPageMahasiswa', params: { id: mahasiswa.id } }">
          <button type="button" class="bg-white py-2 px-2 border border-red-700 rounded-md shadow-sm font-bold text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
            Batal
          </button>
        </router-link>
        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
          Simpan
        </button>
      </div>
    </form>
    <Modal :visible="isModalVisible" @cancel="closeModal" @confirm="updateMahasiswa" />
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
      mahasiswa: {
        nama: '',
        foto: '',
        tempat: '',
        tanggal_lahir: '',
        jenis_kelamin: '',
        email: '',
        telepon: '',
        alamat: '',
        nim: '',
        semester: '',
        angkatan: '',
        id_fakultas: '',
        id_prodi: '',
        status: ''
      },
      fakultasList: [],
      prodiList: [],
      isModalVisible: false,
      selectedFile: null,
    };
  },
  computed: {
    filteredProdiList() {
      return this.prodiList.filter(prodi => prodi.id_fakultas === this.mahasiswa.id_fakultas);
    }
  },
  methods: {
    async fetchMahasiswa() {
      const id = this.$route.params.id;
      const authToken = localStorage.getItem('authToken');
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/data-mahasiswa/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json'
          }
        });
        this.mahasiswa = response.data.data;
      } catch (error) {
        console.error('Error fetching mahasiswa:', error.response ? error.response.data : error.message);
      }
    },
    async fetchFakultasAndProdi() {
      const authToken = localStorage.getItem('authToken');
      try {
        const [fakultasRes, prodiRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/fakultas', {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: 'application/json'
            }
          }),
          axios.get('http://127.0.0.1:8000/api/prodi', {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: 'application/json'
            }
          })
        ]);
        this.fakultasList = fakultasRes.data;
        this.prodiList = prodiRes.data;
      } catch (error) {
        console.error('Error fetching fakultas and prodi:', error.response ? error.response.data : error.message);
      }
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async updateMahasiswa() {
      const id = this.$route.params.id;
      const authToken = localStorage.getItem('authToken');
      const formData = new FormData();

      for (const key in this.mahasiswa) {
        if (key !== 'foto' || this.selectedFile) { // Only append 'foto' if a file is selected
          formData.append(key, this.mahasiswa[key]);
          console.log(key, this.mahasiswa[key]); // Log each key-value pair
        }
      }

      if (this.selectedFile) {
        formData.append('foto', this.selectedFile);
      }

      console.log('FormData before sending:', Array.from(formData.entries()));

      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/data-mahasiswa/${id}?_method=PATCH`, formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Response from server:', response.data);
        alert('Data mahasiswa berhasil diperbarui!');
        this.$router.push({ name: 'DetailPageMahasiswa', params: { id: this.mahasiswa.id } });
      } catch (error) {
        console.error('Error updating mahasiswa:', error.response ? error.response.data : error.message);
        alert('Terjadi kesalahan saat memperbarui data.');
      } finally {
        this.isModalVisible = false;
      }
    }
  },
  mounted() {
    this.fetchMahasiswa();
    this.fetchFakultasAndProdi();
  }
};
</script>
