<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="text-sm font-light">Admin > Data Informasi Dosen</div>
    <div class="flex justify-between items-center my-5">
      <h1 class="mb-5 text-4xl font-bold">Data Dosen</h1>
      <router-link :to="{ name: 'CreatePageDosen' }">
        <button
          type="button"
          class="flex items-center justify-center text-white bg-primary-950 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-semibold rounded-lg text-base px-7 py-3"
        >
          Tambah
          <svg
            class="w-5 h-5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </button>
      </router-link>
    </div>
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <!-- Start coding here -->
      <div
        class="bg-white dark:bg-blue-950 relative shadow-md sm:rounded-lg overflow-hidden"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
        >
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  v-model="searchQuery"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search NIDN or Name"
                />
              </div>
            </form>
          </div>
          <div
            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
          >
            <div class="flex items-center space-x-3 w-full md:w-auto">
              <select v-model="searchStatus" class="rounded-lg">
                <option value="" selected disabled>Status</option>
                <option value="tetap">Tetap</option>
                <option value="tidak tetap">Tidak Tetap</option>
              </select>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-4 py-3">No</th>
                <th scope="col" class="px-4 py-3">Foto</th>
                <th scope="col" class="px-4 py-3">Nama</th>
                <th scope="col" class="px-4 py-3">NIDN</th>
                <th scope="col" class="px-4 py-3">Jenis Kelamin</th>
                <th scope="col" class="px-4 py-3">Jenjang Pendidikan</th>
                <th scope="col" class="px-4 py-3">Status</th>
              </tr>
            </thead>
<<<<<<< HEAD
            <tbody class="align-center">
              <tr class="border-b dark:border-gray-700">
=======
            <tbody>
              <tr
                class="border-b dark:border-gray-700"
                v-for="(dosen, index) in filteredDosenList"
                :key="dosen.id"
              >
>>>>>>> b33ce1cb5d42514762cd7f288a743a44c1627509
                <th
                  scope="row"
                  class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ index + 1 }}.
                </th>
                <td class="px-4 py-3">
                  <img
<<<<<<< HEAD
                    src="../../assets/profilePict.png"
                    alt=""
                    width="50"
                    height="auto"
                  />
                </td>
                <router-link
                  :to="{ name: 'DetailPageDosen' }"
                >
                  <td class="px-4 py-3 align-middle">
                    Azura Alinea Michelle Zudich
                  </td>
                </router-link>
                <td class="px-4 py-3">0091282678578</td>
                <td class="px-4 py-3">Wanita</td>
                <td class="px-4 py-3">S3</td>
                <td class="px-4 py-3">Tetap</td>
=======
                    :src="getFotoUrl(dosen.foto)"
                    alt="Dosen Foto"
                    class="w-20 h-20 object-cover"
                  />
                </td>
                <td class="px-4 py-3">
                  <router-link :to="{ name: 'DetailPageDosen', params: { id: dosen.id } }">
                    {{ dosen.nama }}
                  </router-link>
                </td>
                <td class="px-4 py-3">{{ dosen.nidn }}</td>
                <td class="px-4 py-3">{{ dosen.jenis_kelamin }}</td>
                <td class="px-4 py-3">
                  {{
                    dosen.pendidikan_dosen.map((p) => p.sarjana.nama).join(", ")
                  }}
                </td>
                <td class="px-4 py-3">
                  {{ dosen.jabatan_dosen.status_pekerjaan }}
                </td>
>>>>>>> b33ce1cb5d42514762cd7f288a743a44c1627509
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<<<<<<< HEAD
<script></script>
=======
<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const dosenList = ref([]);
const searchQuery = ref("");
const searchStatus = ref("");

const fetchData = async () => {
  try {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      console.error("No authentication token found");
      return;
    }

    const response = await axios.get("http://127.0.0.1:8000/api/data-dosen", {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
      },
    });
    dosenList.value = response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};

const getFotoUrl = (foto) => {
  const baseUrl = 'http://127.0.0.1:8000/storage/fotos/';
  return `${baseUrl}${foto}`;
};

const filteredDosenList = computed(() => {
  return dosenList.value.filter((dosen) => {
    const matchesQuery =
      dosen.nidn.includes(searchQuery.value) ||
      dosen.nama.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = searchStatus.value
      ? dosen.jabatan_dosen.status_pekerjaan.toLowerCase() ===
        searchStatus.value.toLowerCase()
      : true;
    return matchesQuery && matchesStatus;
  });
});

onMounted(fetchData);
</script>
>>>>>>> b33ce1cb5d42514762cd7f288a743a44c1627509
