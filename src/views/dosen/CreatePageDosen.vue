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
        <label for="photo" class="pr-4 w-40 font-bold">Foto</label>
        <input
          required
          type="file"
          accept="image/*"
          class="text-sm text-gray-400 file:mr-2 file:py-1 file:px-1 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white hover:file:bg-gray-100"
          @change="handleFileChange"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="nidn" class="pr-4 w-40 font-bold text-gray-700">NIDN</label>
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
        <label for="nip" class="pr-4 w-40 font-bold text-gray-700">NIP</label>
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
        <label for="email" class="pr-4 w-40 font-bold text-gray-700">Email</label>
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
<<<<<<< HEAD
        <label for="phone" class="pr-4 w-40 font-bold text-gray-700"
          >Telepon</label
        >
=======
        <label for="telepon" class="pr-4 w-40 font-bold text-gray-700">Telepon</label>
>>>>>>> b33ce1cb5d42514762cd7f288a743a44c1627509
        <input
          v-model="dosen.no_telepon"
          required
          placeholder="Telepon"
<<<<<<< HEAD
          type="tel"
          id="phone"
=======
          type="text"
          id="telepon"
>>>>>>> b33ce1cb5d42514762cd7f288a743a44c1627509
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="jenis-kelamin" class="pr-4 w-40 font-bold text-gray-700">Jenis Kelamin</label>
        <select
          v-model="dosen.jenis_kelamin"
          required
          id="jenis-kelamin"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="pria">Laki-laki</option>
          <option value="wanita">Perempuan</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="alamat" class="pr-4 w-40 font-bold text-gray-700">Alamat</label>
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
        <label for="jenjang" class="pr-4 w-40 font-bold text-gray-700 align-top">Jenjang Pendidikan</label>
        <div class="w-full">
          <ul class="w-53">
            <li class="flex gap-2 mb-2">
              <p>S1</p>
              <input
                v-model="dosen.s1_jurusan"
                required
                placeholder=""
                type="text"
                id="s1_jurusan"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S2</p>
              <input
                v-model="dosen.s2_jurusan"
                placeholder=""
                type="text"
                id="s2_jurusan"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
            <li class="flex gap-2 my-2">
              <p>S3</p>
              <input
                v-model="dosen.s3_jurusan"
                placeholder=""
                type="text"
                id="s3_jurusan"
                class="rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="text-xl font-bold text-blue-950">Jabatan</div>
      <div class="w-full grid gap-5 px-4 pr-0 p-5">
        <div class="flex justify-between items-center">
          <label for="fungsional" class="pr-4 w-40 font-bold text-gray-700">Fungsional</label>
          <input
            v-model="dosen.fungsional"
            required
            placeholder="Jabatan Fungsional"
            type="text"
            id="fungsional"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
        <div class="flex justify-between items-center">
          <label for="struktural" class="pr-4 w-40 font-bold text-gray-700">Struktural</label>
          <input
            v-model="dosen.struktural"
            required
            placeholder="Jabatan Struktural"
            type="text"
            id="struktural"
            class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex justify-between items-center">
        <label for="status-pekerjaan" class="pr-4 w-40 font-bold text-gray-700">Status Pekerjaan</label>
        <select
          v-model="dosen.status_pekerjaan"
          required
          id="status-pekerjaan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="tetap">Tetap</option>
          <option value="tidak tetap">Tidak Tetap</option>
        </select>
      </div>

      <div class="flex justify-between items-center">
        <label for="status-keaktifan" class="pr-4 w-40 font-bold text-gray-700">Status Keaktifan</label>
        <select
          v-model="dosen.status_keaktifan"
          required
          id="status-keaktifan"
          class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
        >
          <option selected></option>
          <option value="aktif">Aktif</option>
          <option value="tidak aktif">Tidak Aktif</option>
          <option value="tugas belajar">Tugas Belajar</option>
        </select>
      </div>
      <div class="flex justify-between items-center">
        <label for="minat-penelitian" class="pr-4 w-40 font-bold text-gray-700">Minat Penelitian</label>
        <input
          v-model="dosen.minat_penelitian"
          required
          placeholder="Minat Penelitian"
          type="text"
          id="minat-penelitian"
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
import axios from 'axios';
import Modal from "../../components/ConfirmComponent.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      dosen: {
        id_user: 1,
        nama: '',
        foto: null,
        nidn: '',
        nip: '',
        email: '',
        no_telepon: '',
        jenis_kelamin: '',
        alamat: '',
        s1_jurusan: '',
        s2_jurusan: '',
        s3_jurusan: '',
        fungsional: '',
        struktural: '',
        status_pekerjaan: '',
        status_keaktifan: '',
        minat_penelitian: ''
      },
      isModalVisible: false,
    };
  },
  methods: {
    handleFileChange(event) {
      this.dosen.foto = event.target.files[0];
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async submitForm() {
      try {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
          console.error('No authentication token found');
          return;
        }

        const formData = new FormData();
        for (const key in this.dosen) {
          formData.append(key, this.dosen[key]);
        }

        const response = await axios.post('http://127.0.0.1:8000/api/data-dosen', formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Data saved successfully:', response.data);
        this.isModalVisible = false;
        this.$router.push({ name: 'DataDosen' });
      } catch (error) {
        console.error('Error saving data:', error.response ? error.response.data : error.message);
      }
    },
  },
};
</script>
