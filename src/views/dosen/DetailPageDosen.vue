<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="text-sm font-light">
      Admin > Data Informasi Dosen > "Nama Dosen"
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
          <th>NIDN</th>
          <td>0091282678578</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>azura@mail.unwidha.ac.id</td>
        </tr>
        <tr>
          <th>Telepon</th>
          <td>081234567890</td>
        </tr>
        <tr>
          <th>NIP</th>
          <td>1238798800183</td>
        </tr>
        <tr>
          <th>Jenis Kelamin</th>
          <td>Wanita</td>
        </tr>
        <tr>
          <th>Alamat</th>
          <td>
            Jl. Perintis Kemerdekaan No 90, Kedungwuri, Jember, Jawa Timur
          </td>
        </tr>
        <tr>
          <th class="align-top">Jenjang Pendidikan</th>
          <td>
            <ul>
              <li>S1</li>
              <li>S2</li>
              <li>S3</li>
            </ul>
          </td>
        </tr>
      </table>
      <h2 class="font-bold text-blue-950 bg-slate-100 px-2">Jabatan</h2>
      <table
        class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base"
      >
        <tr>
          <th>Fungsional</th>
          <td>Pembina HIMA Arsitektur</td>
        </tr>
        <tr>
          <th>Struktural</th>
          <td>Kepala Bidang Akademik</td>
        </tr>
      </table>
      <table
        class="table-fixed w-full text-left border-separate border-spacing-2"
      >
        <tr>
          <th>Status Pekerjaan</th>
          <td>Tetap</td>
        </tr>
        <tr>
          <th>Status Keaktifan</th>
          <td>Tetap</td>
        </tr>
      </table>
      <h2 class="font-bold text-blue-950 bg-slate-100 px-2">
        Minat Penelitian
      </h2>
      <table
        class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base"
      >
        <tr>
          <th></th>
          <td>Pembina HIMA Arsitektur</td>
        </tr>
        <tr>
          <th></th>
          <td>Kepala Bidang Akademik</td>
        </tr>
      </table>
    </div>
    <div class="flex gap-5 justify-center">
      <router-link :to="{ name: 'EditPageDosen' }">
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
