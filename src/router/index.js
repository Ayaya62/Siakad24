import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Wrapper from "../views/Wrapper.vue";
import DataMahasiswa from "../views/mahasiswa/DataMahasiswa.vue";
import DataDosen from "../views/dosen/DataDosen.vue";
import CreatePageMahasiswa from "../views/mahasiswa/CreatePageMahasiswa.vue";
import CreatePageDosen from "../views/dosen/CreatePageDosen.vue";
import DataMataKuliah from "../views/matakuliah/DataMataKuliah.vue";
import CreatePageMataKuliah from "../views/matakuliah/CreatePageMataKuliah.vue";
import DetailPageDosen from "../views/dosen/DetailPageDosen.vue";
import DetailPageMahasiswa from "../views/mahasiswa/DetailPageMahasiswa.vue";
import DetailPageMataKuliah from "../views/matakuliah/DetailPageMataKuliah.vue";
import EditPageDosen from "../views/dosen/EditPageDosen.vue";
import EditPageMahasiswa from "../views/mahasiswa/EditPageMahasiswa.vue";
import EditPageMataKuliah from "../views/matakuliah/EditPageMataKuliah.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Wrapper,
    children: [
      {
        name: "DataMahasiswa",
        path: "/data_mahasiswa",
        component: DataMahasiswa,
      },
      {
        name: "DataDosen",
        path: "/data_dosen",
        component: DataDosen,
      },
      {
        name: "DataMataKuliah",
        path: "/data_mata_kuliah",
        component: DataMataKuliah,
      },
      {
        name: "CreatePageMahasiswa",
        path: "/tambah_data_mahasiswa",
        component: CreatePageMahasiswa,
      },
      {
        name: "CreatePageDosen",
        path: "/tambah_data_dosen",
        component: CreatePageDosen,
      },
      {
        name: "CreatePageMataKuliah",
        path: "/tambah_data_mata_kuliah",
        component: CreatePageMataKuliah,
      },
      {
        name: "DetailPageDosen",
        path: "/detail_dosen",
        component: DetailPageDosen,
      },
      {
        name: "DetailPageMahasiswa",
        path: "/detail_mahasiswa",
        component: DetailPageMahasiswa,
      },
      {
        name: "DetailPageMataKuliah",
        path: "/detail_mata_kuliah",
        component: DetailPageMataKuliah,
      },
      {
        name: "EditPageDosen",
        path: "/edit_page_dosen",
        component: EditPageDosen,
      },
      {
        name: "EditPageMahasiswa",
        path: "/edit_page_mahasiswa",
        component: EditPageMahasiswa,
      },
      {
        name: "EditPageMataKuliah",
        path: "/edit_page_matakuliah",
        component: EditPageMataKuliah,
      },
    ],
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
