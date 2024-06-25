<template>
  <section class="bg-white dark:bg-gray-900">
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="text-sm font-light">
        Admin > Data Informasi Mahasiswa > "{{ mahasiswa.nama }}"
      </div>
      <div class="flex items-center mt-10 mx-10">
        <img :src="getFotoUrl(mahasiswa.foto)" alt="Foto Mahasiswa" class="w-20 h-20 object-cover" />
        <h1 class="mx-16 text-4xl font-bold text-blue-950">
          {{ mahasiswa.nama }}
        </h1>
      </div>
      <div class="overflow-x-hidden m-10 text-blue-950 text-lg shadow-md p-5">
        <table class="table-fixed w-full h-auto text-left border-separate border-spacing-2 overflow-scroll">
          <tr>
            <th>Nama</th>
            <td>{{ mahasiswa.nama }}</td>
          </tr>
          <tr>
            <th>Foto</th>
            <td>{{ mahasiswa.foto }}</td>
          </tr>
          <tr>
            <th>Tempat Lahir</th>
            <td>{{ mahasiswa.tempat }}</td>
          </tr>
          <tr>
            <th>Tanggal Lahir</th>
            <td>{{ mahasiswa.tanggal_lahir }}</td>
          </tr>
          <tr>
            <th>Jenis Kelamin</th>
            <td>{{ mahasiswa.jenis_kelamin }}</td>
          </tr>
          <tr>
            <th>Alamat</th>
            <td>{{ mahasiswa.alamat }}</td>
          </tr>
          <tr>
            <th>NIM</th>
            <td>{{ mahasiswa.nim }}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ mahasiswa.email }}</td>
          </tr>
          <tr>
            <th>Telepon</th>
            <td>{{ mahasiswa.telepon }}</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>{{ mahasiswa.semester }}</td>
          </tr>
          <tr>
            <th>SKS</th>
            <td>{{ mahasiswa.sks }}</td>
          </tr>
          <tr>
            <th>Angkatan</th>
            <td>{{ mahasiswa.angkatan }}</td>
          </tr>
          <tr>
            <th>Fakultas</th>
            <td>{{ mahasiswa.fakultas.nama }}</td>
          </tr>
          <tr>
            <th>Program Studi</th>
            <td>{{ mahasiswa.prodi.nama }}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{{ mahasiswa.status }}</td>
          </tr>
        </table>
      </div>
      <div class="flex gap-5 justify-center">
        <router-link :to="{ name: 'EditPageMahasiswa', params: { id: mahasiswa.id } }">
          <button class="bg-yellow-300 hover:bg-transparent border-2 hover:border-yellow-300 text-blue-950 font-bold py-1 px-10 rounded-lg shadow-lg">
            Edit
          </button>
        </router-link>

        <button @click="openModal" type="button" class="bg-transparent hover:bg-red-600 text-red-600 hover:text-white py-1 px-7 border-2 border-red-600 hover:border-transparent rounded-lg">
          Hapus
        </button>
      </div>
      <Modal :visible="isModalVisible" @cancel="closeModal" @confirm="deleteMahasiswa" />
    </div>
  </section>
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
      mahasiswa: {},
      loading: true,
      isModalVisible: false,
    };
  },
  methods: {
    fetchMahasiswa() {
      const id = this.$route.params.id;
      const authToken = localStorage.getItem('authToken');
      axios.get(`http://127.0.0.1:8000/api/data-mahasiswa/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json'
        }
      })
      .then(response => {
        this.mahasiswa = response.data.data;
        this.loading = false;
      })
      .catch(error => {
        console.error('Error fetching mahasiswa:', error.response ? error.response.data : error.message);
        this.loading = false;
      });
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
    deleteMahasiswa() {
      const id = this.$route.params.id;
      const authToken = localStorage.getItem('authToken');
      axios.delete(`http://127.0.0.1:8000/api/data-mahasiswa/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: 'application/json'
        }
      })
      .then(() => {
        this.$router.push({ name: 'DataMahasiswa' });
      })
      .catch(error => {
        console.error('Error deleting mahasiswa:', error.response ? error.response.data : error.message);
      });
    }
  },
  mounted() {
    this.fetchMahasiswa();
  }
};
</script>

