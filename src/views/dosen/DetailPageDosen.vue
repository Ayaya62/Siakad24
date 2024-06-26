<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="text-sm font-light">
      Admin > Data Informasi Dosen > "{{ dosen?.nama }}"
    </div>
    <div class="flex items-center mt-10 mx-10">
      <img :src="getFotoUrl(dosen?.foto)" alt="Profile Picture" class="w-20 h-20 object-cover" v-if="dosen?.foto" />
      <h1 class="mx-16 text-4xl font-bold text-blue-950">
        {{ dosen?.nama }}
      </h1>
    </div>
    <div class="overflow-x-hidden m-10 text-blue-950 text-lg shadow-md p-5">
      <table class="table-fixed w-full h-auto text-left border-separate border-spacing-2 overflow-scroll">
        <tr>
          <th>Nama</th>
          <td>{{ dosen?.nama }}</td>
        </tr>
        <tr>
          <th>Foto</th>
          <td>{{ dosen?.foto }}</td>
        </tr>
        <tr>
          <th>NIDN</th>
          <td>{{ dosen?.nidn }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ dosen?.email }}</td>
        </tr>
        <tr>
          <th>Telepon</th>
          <td>{{ dosen?.no_telepon }}</td>
        </tr>
        <tr>
          <th>NIP</th>
          <td>{{ dosen?.nip }}</td>
        </tr>
        <tr>
          <th>Jenis Kelamin</th>
          <td>{{ dosen?.jenis_kelamin }}</td>
        </tr>
        <tr>
          <th>Alamat</th>
          <td>{{ dosen?.alamat }}</td>
        </tr>
        <tr>
          <th class="align-top">Jenjang Pendidikan</th>
          <td>
            <ul>
              <li v-for="(pendidikan, index) in dosen?.pendidikan_dosen" :key="index">
                {{ pendidikan.sarjana.nama }} - {{ pendidikan.jurusan }}
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <h2 class="font-bold text-blue-950 bg-slate-100 px-2">Jabatan</h2>
      <table class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base">
        <tr>
          <th>Fungsional</th>
          <td>{{ dosen?.jabatan_dosen?.fungsional }}</td>
        </tr>
        <tr>
          <th>Struktural</th>
          <td>{{ dosen?.jabatan_dosen?.struktural }}</td>
        </tr>
      </table>
      <table class="table-fixed w-full text-left border-separate border-spacing-2">
        <tr>
          <th>Status Pekerjaan</th>
          <td>{{ dosen?.jabatan_dosen?.status_pekerjaan }}</td>
        </tr>
        <tr>
          <th>Status Keaktifan</th>
          <td>{{ dosen?.jabatan_dosen?.status_keaktifan }}</td>
        </tr>
      </table>
      <h2 class="font-bold text-blue-950 bg-slate-100 px-2">Minat Penelitian</h2>
      <table class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base">
        <tr>
          <th></th>
          <td>{{ dosen?.minat_penelitian?.nama }}</td>
        </tr>
      </table>
    </div>
    <div class="flex gap-5 justify-center">
      <router-link :to="{ name: 'EditPageDosen', params: { id: dosen?.id } }">
        <button class="bg-yellow-300 hover:bg-transparent border-2 hover:border-yellow-300 text-blue-950 font-bold py-1 px-10 rounded-lg shadow-lg">
          Edit
        </button>
      </router-link>
      <button @click="openModal" type="button" class="bg-transparent hover:bg-red-600 text-red-600 hover:text-white py-1 px-7 border-2 border-red-600 hover:border-transparent rounded-lg">
        Hapus
      </button>
    </div>
    <Modal :visible="isModalVisible" @cancel="closeModal" @confirm="deleteDosen" />
  </section>
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
      dosen: null,
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
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
      }
    },
    getFotoUrl(foto) {
      const baseUrl = 'http://127.0.0.1:8000/storage/fotos/';
      return `${baseUrl}${foto}`;
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async deleteDosen() {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        console.error('No authentication token found');
        return;
      }

      try {
        await axios.delete(`http://127.0.0.1:8000/api/data-dosen/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: 'application/json',
          },
        });
        alert('Data dosen berhasil dihapus!');
        this.$router.push({ name: 'DataDosen' });
      } catch (error) {
        console.error('Error deleting data:', error.response ? error.response.data : error.message);
        alert('Terjadi kesalahan saat menghapus data.');
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
