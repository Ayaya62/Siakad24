<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-5 w-1/3">
      <h2 class="text-xl font-bold mb-4">Konfirmasi</h2>
      <p class="mb-4">Yakin ingin melakukan aksi ini?</p>
      <div class="flex justify-end">
        <button
          @click="cancel"
          class="bg-red-500 text-white py-2 px-4 rounded mr-2"
        >
          Tidak
        </button>
        <button
          @click="confirm"
          id="confirm-button"
          class="bg-blue-950 text-white py-2 px-4 rounded"
        >
          Ya
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
