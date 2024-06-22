<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="text-sm font-light">
        Admin > Data Informasi Mata Kuliah > "Nama Matkul"
      </div>
      <div class="overflow-x-hidden m-10 text-blue-950 text-lg shadow-md p-5">
        <table
          class="table-fixed w-full h-auto text-left border-separate border-spacing-2 overflow-scroll"
        >
          <tr>
            <th>Mata Kuliah</th>
            <td>Arsitektur Pembangunan</td>
          </tr>
          <tr>
            <th>Kode</th>
            <td>TK20223</td>
          </tr>
          <tr>
            <th>SKS</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Semester</th>
            <td>4</td>
          </tr>
          <tr>
            <th>Dosen Pengampu</th>
            <td>Mark Zayed, M.Eng</td>
          </tr>
        </table>
        <h2 class="font-bold text-blue-950 bg-slate-100 px-2">Jadwal</h2>
        <table
          class="table-fixed w-full text-left border-separate border-spacing-2 mx-5 text-base"
        >
          <tr>
            <th>Hari</th>
            <td>Jumat</td>
          </tr>
          <tr>
            <th class="align-top">Waktu</th>
            <td>
              <ul>
                <li>07.15-08.55</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th class="align-top">Ruang</th>
            <td>
              <ul>
                <li>HU 207</li>
              </ul>
            </td>
          </tr>
        </table>
        <table
          class="table-fixed w-full text-left border-separate border-spacing-2"
        >
          <tr>
            <th>Jenis</th>
            <td>Wajib</td>
          </tr>
        </table>
      </div>
      <div class="flex gap-5 justify-center">
        <router-link :to="{ name: 'EditPageMataKuliah' }">
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
