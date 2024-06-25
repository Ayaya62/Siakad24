<template>
  <main class="mx-auto flex flex-col overscroll-y-none">
    <div class="text-sm font-light">Admin > Data Dosen > Edit Data Dosen</div>

    <header class="my-6">
      <h2 class="font-bold text-4xl text-blue-950">
        Edit Data Informasi Dosen
      </h2>
    </header>
    <form
      class="w-full grid gap-5 px-4 shadow-md p-5"
      @submit.prevent="openModal"
    >
      <div class="flex justify-between items-center">
        <label for="name" class="w-40 pr-4 font-bold text-gray-700">Nama</label>
        <div class="flex-1">
          <input
            v-model="dosen.nama"
            required
            placeholder="Nama Dosen"
            type="text"
            id="name"
            class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-start items-center">
        <label for="photo" class="w-40 pr-4 font-bold">Foto</label>
        <input
          type="file"
          accept="image/*"
          @change="onFileChange"
          class="text-sm text-gray-400 file:mr-2 file:py-1 file:px-1 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white hover:file:bg-gray-100"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nidn" class="w-40 pr-4 font-bold text-gray-700">NIDN</label>
        <input
          v-model="dosen.nidn"
          required
          placeholder="NIDN"
          type="text"
          id="nidn"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nip" class="w-40 pr-4 font-bold text-gray-700">NIP</label>
        <input
          v-model="dosen.nip"
          required
          placeholder="NIP"
          type="text"
          id="nip"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="email" class="w-40 pr-4 font-bold text-gray-700">Email</label>
        <input
          v-model="dosen.email"
          required
          placeholder="Email"
          type="email"
          id="email"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="telepon" class="w-40 pr-4 font-bold text-gray-700">Telepon</label>
        <input
          v-model="dosen.no_telepon"
          required
          placeholder="Telepon"
          type="text"
          id="telepon"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="jenis-kelamin" class="w-40 pr-4 font-bold text-gray-700"
          >Jenis Kelamin</label
        >
        <select
          v-model="dosen.jenis_kelamin"
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="pria">Laki-laki</option>
          <option value="wanita">Perempuan</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="alamat" class="w-40 pr-4 font-bold text-gray-700"
          >Alamat</label
        >
        <input
          v-model="dosen.alamat"
          required
          placeholder="Alamat"
          type="text"
          id="alamat"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>

      <div class="flex">
        <label for="jenjang" class="w-40 pr-4 font-bold text-gray-700 align-top"
          >Jenjang Pendidikan</label
        >
        <div class="w-full">
          <ul class="w-53">
            <li class="flex gap-2 mb-2">
              <p>S1</p>
              <input
                v-model="jenjangS1"
                placeholder="Jurusan S1"
                type="text"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S2</p>
              <input
                v-model="jenjangS2"
                placeholder="Jurusan S2"
                type="text"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S3</p>
              <input
                v-model="jenjangS3"
                placeholder="Jurusan S3"
                type="text"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="text-xl font-bold text-blue-950">Jabatan</div>
      <div class="w-full grid gap-5 px-4 pr-0 p-5">
        <div class="flex justify-between items-center">
          <label for="fungsional" class="w-40 pr-4 font-bold text-gray-700"
            >Fungsional</label
          >
          <input
            v-model="dosen.jabatan_dosen.fungsional"
            required
            placeholder="Jabatan Fungsional"
            type="text"
            id="fungsional"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
        <div class="flex justify-between items-center">
          <label for="struktural" class="w-40 pr-4 font-bold text-gray-700"
            >Struktural</label
          >
          <input
            v-model="dosen.jabatan_dosen.struktural"
            required
            placeholder="Jabatan Struktural"
            type="text"
            id="struktural"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <label for="status-pekerjaan" class="w-40 pr-4 font-bold text-gray-700"
          >Status Pekerjaan</label
        >
        <select
          v-model="dosen.jabatan_dosen.status_pekerjaan"
          required
          id="status-pekerjaan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="tetap">Tetap</option>
          <option value="tidak tetap">Tidak Tetap</option>
        </select>
      </div>

      <div class="flex justify-between items-center">
        <label for="status-keaktifan" class="w-40 pr-4 font-bold text-gray-700"
          >Status Keaktifan</label
        >
        <select
          v-model="dosen.jabatan_dosen.status_keaktifan"
          required
          id="status-keaktifan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option value="aktif">Aktif</option>
          <option value="tidak aktif">Tidak Aktif</option>
          <option value="tugas belajar">Tugas Belajar</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="penelitian" class="w-40 pr-4 font-bold text-gray-700"
          >Minat Penelitian</label
        >
        <input
          v-model="dosen.minat_penelitian.nama"
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
      @confirm="updateDosen"
    />
  </main>
</template>

<script>
import axios from 'axios';
import Modal from "../../components/ConfirmComponent.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      dosen: {
        nama: '',
        foto: '',
        nidn: '',
        nip: '',
        email: '',
        no_telepon: '',
        jenis_kelamin: '',
        alamat: '',
        pendidikan_dosen: [],
        jabatan_dosen: {
          fungsional: '',
          struktural: '',
          status_pekerjaan: '',
          status_keaktifan: '',
        },
        minat_penelitian: {
          nama: ''
        }
      },
      jenjangS1: '',
      jenjangS2: '',
      jenjangS3: '',
      selectedFile: null,
    };
  },
  methods: {
    async fetchDosen() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No authentication token found');
        return;
      }

      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/data-dosen/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
          },
        });
        this.dosen = response.data;
        this.jenjangS1 = this.dosen.pendidikan_dosen.find(p => p.sarjana.nama === 'S1')?.jurusan || '';
        this.jenjangS2 = this.dosen.pendidikan_dosen.find(p => p.sarjana.nama === 'S2')?.jurusan || '';
        this.jenjangS3 = this.dosen.pendidikan_dosen.find(p => p.sarjana.nama === 'S3')?.jurusan || '';
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      }
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async updateDosen() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No authentication token found');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('_method', 'PUT'); // Add this line for method spoofing
        formData.append('nama', this.dosen.nama);
        formData.append('nidn', this.dosen.nidn);
        formData.append('nip', this.dosen.nip);
        formData.append('email', this.dosen.email);
        formData.append('no_telepon', this.dosen.no_telepon);
        formData.append('jenis_kelamin', this.dosen.jenis_kelamin);
        formData.append('alamat', this.dosen.alamat);
        formData.append('s1_jurusan', this.jenjangS1);
        formData.append('s2_jurusan', this.jenjangS2);
        formData.append('s3_jurusan', this.jenjangS3);
        formData.append('fungsional', this.dosen.jabatan_dosen.fungsional);
        formData.append('struktural', this.dosen.jabatan_dosen.struktural);
        formData.append('status_pekerjaan', this.dosen.jabatan_dosen.status_pekerjaan);
        formData.append('status_keaktifan', this.dosen.jabatan_dosen.status_keaktifan);
        formData.append('minat_penelitian', this.dosen.minat_penelitian.nama);

        if (this.selectedFile) {
          formData.append('foto', this.selectedFile);
        }

        await axios.post(`http://127.0.0.1:8000/api/data-dosen/${this.$route.params.id}`, formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('Data dosen berhasil diperbarui!');
        this.$router.push({ name: 'DataDosen' });
      } catch (error) {
        console.error('Error updating data:', error.response ? error.response.data : error.message);
        alert('Terjadi kesalahan saat memperbarui data.');
      } finally {
        this.isModalVisible = false;
      }
    },
  },
  mounted() {
    this.fetchDosen();
  },
};
</script>
