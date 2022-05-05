<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">

    <div class="row mt-4">
      <div class="col">
        <label
          for="priority"
          class="inline-block text-sm font-medium text-gray-700"
          >Guess who is winning?</label
        >
        <vselect multiple v-model="participants" :options="options"></vselect>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
        <button class="bg-green-400 px-4 py-2 rounded" @click="addBet">
          BET
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import vselect from "vue-select";

export default {
  data() {
    return {
   
    };
  },
  components: {
    vselect,
  },


  methods: {

    }
};
</script>
<style scoped>
.border-gray {
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  border-radius: 0;
}
</style>