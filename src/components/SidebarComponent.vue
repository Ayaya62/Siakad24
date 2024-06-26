<template>
  <aside
    id="default-sidebar"
    class="fixed left-0 w-auto h-screen"
    aria-label="Sidenav"
  >
    <a href="" class="flex p-5 bg-blue-950 items-center" id="sidebar-logo">
      <img src="../assets/Logo.svg" class="mr-3 h-16" alt="Flowbite Logo" id="sidebar-logo-image"/>
      <div class="bg-blue-950" id="sidebar-logo-text">
        <p class="self-center text-xl sm:text-lg font-bold text-white">
          UNIVERSITAS WIDYA DHARMA
        </p>
        <p class="self-center text-md font-semibold text-yellow-300">
          TUMBUH BERSAMA MERAIH SUKSES
        </p>
      </div>
    </a>
    <div
      class="overflow-y-auto py-5 px-3 h-full bg-blue-950 dark:bg-gray-800 dark:border-gray-700"
      id="sidebar-menu"
    >
      <ul class="space-y-7">
        <li id="menu-item-dosen">
          <router-link :to="{ name: 'DataDosen' }">
            <a
              href="#"
              class="flex items-center justify-between p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-yellow-300 hover:text-blue-950 group"
              id="menu-link-dosen"
            >
              <div class="flex items-center" id="menu-dosen">
                <img src="../assets/Lecturer.svg" class="mr-3 h-8" alt="" id="menu-dosen-image"/>
                <span class="mx-3 text-lg font-semibold" id="menu-dosen-text"
                  >Data Informasi Dosen</span
                >
              </div>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="menu-dosen-icon"
              >
                <path
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </a>
          </router-link>
        </li>
        <li id="menu-item-mahasiswa">
          <router-link :to="{ name: 'DataMahasiswa' }">
            <a
              href="#"
              class="flex items-center justify-between p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-yellow-300 hover:text-blue-950 group"
              id="menu-link-mahasiswa"
            >
              <div class="flex items-center" id="menu-mahasiswa">
                <img
                  src="../assets/Graduation Cap.svg"
                  class="mr-3 h-8"
                  alt=""
                  id="menu-mahasiswa-image"
                />
                <span class="mx-3 text-lg font-semibold" id="menu-mahasiswa-text"
                  >Data Informasi Mahasiswa</span
                >
              </div>
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="menu-mahasiswa-icon"
              >
                <path
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </a>
          </router-link>
        </li>
        <li id="menu-item-matakuliah">
          <router-link
            :to="{ name: 'DataMataKuliah' }"
            class="flex items-center justify-between p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-yellow-300 hover:text-blue-950 group"
            id="menu-link-matakuliah"
          >
            <div class="flex items-center" id="menu-matakuliah">
              <img src="../assets/Book.svg" class="mr-3 h-8" alt="" id="menu-matakuliah-image"/>
              <span class="mx-3 text-lg font-semibold" id="menu-matakuliah-text"
                >Data Informasi Mata Kuliah</span
              >
            </div>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              id="menu-matakuliah-icon"
            >
              <path
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </router-link>
        </li>
        <li id="menu-item-logout">
          <a
            href="#"
            @click.prevent="logout"
            class="flex items-center justify-between p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-yellow-300 hover:text-blue-950 group"
            id="menu-link-logout"
          >
            <div class="flex items-center" id="menu-logout">
              <img src="../assets/Logout.svg" class="mr-3 h-8" alt="" id="menu-logout-image"/>
              <span class="mx-3 text-lg font-semibold" id="menu-logout-text">Logout</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async logout() {
      const authToken = localStorage.getItem("authToken");
      try {
        await axios.post(
          "http://127.0.0.1:8000/api/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      } catch (error) {
        console.error(
          "Error during logout:",
          error.response ? error.response.data : error.message
        );
      } finally {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>
