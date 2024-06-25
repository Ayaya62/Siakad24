<template>
  <main>
    <section v-if="mataKuliah" class="bg-white dark:bg-gray-900">
      <div class="text-sm font-light">
        Admin > Data Informasi Mata Kuliah > {{ mataKuliah.nama }}
      </div>
      <div class="overflow-x-hidden m-10 text-blue-950 text-lg shadow-md p-5">
        <table
          class="table-fixed w-full h-auto text-left border-separate border-spacing-2 overflow-scroll"
        >
          <tr>
            <th>Mata Kuliah</th>
            <td>{{ mataKuliah.nama }}</td>
          </tr>
          <tr>
            <th>Kode</th>
            <td>{{ mataKuliah.kode }}</td>
          </tr>
          <tr>
            <th>SKS</th>
            <td>{{ mataKuliah.sks }}</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>{{ mataKuliah.semester }}</td>
          </tr>
          <tr>
            <th>Dosen Pengampu</th>
            <td>{{ mataKuliah.dosen.nama }}</td>
          </tr>
        </table>
        <h2 class="font-bold text-blue-950 bg-slate-100 px-2">Jadwal</h2>
        <table
          class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base"
        >
          <tr>
            <th>Hari</th>
            <td>{{ mataKuliah.jadwal.hari }}</td>
          </tr>
          <tr>
            <th class="align-top">Waktu</th>
            <td>
              <ul>
                <li>{{ mataKuliah.jadwal.sesi.waktu }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th class="align-top">Ruang</th>
            <td>
              <ul>
                <li>{{ mataKuliah.jadwal.ruang }}</li>
              </ul>
            </td>
          </tr>
        </table>
        <table
          class="table-fixed w-full text-left border-separate border-spacing-2"
        >
          <tr>
            <th>Jenis</th>
            <td>{{ mataKuliah.jenis }}</td>
          </tr>
        </table>
      </div>
      <div class="flex gap-5 justify-center">
        <router-link :to="{ name: 'EditPageMataKuliah', params: { id: mataKuliah.id } }">
          <button
            class="bg-yellow-300 hover:bg-transparent border-2 hover:border-yellow-300 text-blue-950 font-bold py-1 px-10 rounded-lg shadow-lg"
          >
            Edit
          </button>
        </router-link>

        <button
          @click="openModal"
          type="button"
          class="bg-transparent hover:bg-red-700 text-red-600 hover:text-white py-1 px-4 border-2 border-red-600 hover:border-transparent rounded-lg"
        >
          Hapus
        </button>
      </div>
    </section>
    <Modal
      :visible="isModalVisible"
      @cancel="closeModal"
      @confirm="deleteMataKuliah"
    />
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
      mataKuliah: null, // Initialize as null
    };
  },
  methods: {
    fetchMataKuliah() {
      const authToken = localStorage.getItem("authToken");
      const mataKuliahId = this.$route.params.id;
      axios
        .get(`http://127.0.0.1:8000/api/data-matkul/${mataKuliahId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          this.mataKuliah = response.data;
        })
        .catch((error) => {
          console.error("Error fetching mata kuliah:", error.response ? error.response.data : error.message);
        });
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    deleteMataKuliah() {
      const authToken = localStorage.getItem("authToken");
      const mataKuliahId = this.$route.params.id;
      axios
        .delete(`http://127.0.0.1:8000/api/data-matkul/${mataKuliahId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then(() => {
          alert("Mata kuliah berhasil dihapus!");
          this.$router.push({ name: "DataMataKuliah" });
        })
        .catch((error) => {
          console.error("Error deleting mata kuliah:", error.response ? error.response.data : error.message);
          alert("Terjadi kesalahan saat menghapus data.");
        })
        .finally(() => {
          this.isModalVisible = false;
        });
    },
  },
  mounted() {
    this.fetchMataKuliah();
  },
};
</script>
