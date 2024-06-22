<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="text-sm font-light">
      Admin > Data Informasi Mahasiswa > "Nama Mahasiswa"
    </div>
    <div class="flex items-center mt-10 mx-10">
      <img src="../../assets/profilePict.png" alt="" class="" />
      <h1 class="mx-16 text-4xl font-bold text-blue-950">
        Azura Alinea Michelle Zudich
      </h1>
    </div>
    <div class="overflow-x-hidden m-10 text-blue-950 text-lg shadow-md p-5">
      <table
        class="table-fixed w-full h-auto text-left border-separate border-spacing-2 overflow-scroll"
      >
        <tr>
          <th>Nama</th>
          <td>Azura Alinea Michelle Zudich</td>
        </tr>
        <tr>
          <th>Foto</th>
          <td>Azura.jpeg</td>
        </tr>
        <tr>
          <th>Tempat Lahir</th>
          <td>Toronto</td>
        </tr>
        <tr>
          <th>Tanggal Lahir</th>
          <td>2 Agustus 2004</td>
        </tr>
        <tr>
          <th>Jenis Kelamin</th>
          <td>Wanita</td>
        </tr>
        <tr>
          <th>Alamat</th>
          <td>Jl Taman Asri No 3, Sleman, Jogja</td>
        </tr>
        <tr>
          <th>NIM</th>
          <td>22/493981/TK/27709</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>azura.zudich@mail.unwidha.ac.id</td>
        </tr>
        <tr>
          <th>Telepon</th>
          <td>081234567890</td>
        </tr>
        <tr>
          <th>Semester</th>
          <td>4</td>
        </tr>
        <tr>
          <th>SKS</th>
          <td>58</td>
        </tr>
        <tr>
          <th>Angkatan</th>
          <td>2022</td>
        </tr>
        <tr>
          <th>Fakultas</th>
          <td>Teknik</td>
        </tr>
        <tr>
          <th>Program Studi</th>
          <td>S1 - Arsitektur</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>Aktif</td>
        </tr>
      </table>
    </div>
    <div class="flex gap-5 justify-center">
      <router-link :to="{ name: 'EditPageMahasiswa' }">
        <button
          class="bg-yellow-300 hover:bg-transparent border-2 hover:border-yellow-300 text-blue-950 font-bold py-1 px-10 rounded-lg shadow-lg"
        >
          Edit
        </button>
      </router-link>

      <button
        @click="openModal"
        type="button"
        class="bg-transparent hover:bg-red-600 text-red-600 hover:text-white py-1 px-7 border-2 border-red-600 hover:border-transparent rounded-lg"
      >
        Hapus
      </button>
    </div>
    <Modal
      :visible="isModalVisible"
      @cancel="closeModal"
      @confirm="submitForm"
    />
  </section>
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
