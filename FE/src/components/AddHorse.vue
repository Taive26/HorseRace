<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="col">
        <label for="horseName" class="block text-sm font-medium text-gray-700"
          >Add a horse to the racers database:</label
        >
        <input
          v-model="form.horseName"
          type="text"
          name="author"
          class="mt-1 block w-full border-gray p-1"
        />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col text-center">
        <button class="bg-green-400 px-4 py-2 rounded" @click="addHorse">
          Add horse
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      form: {
        horseName: "",
        color: null,
      },
    };
  },

  methods: {
    generateColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.form.color = "#" + randomColor;
    },
    async addHorse() {
      this.generateColor();
      let newHorse = {
        name: this.form.horseName,
        color: this.form.color,
      };
      axios
        .post(`/api/addHorse`, newHorse)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        this.form.horseName= "";
    },
  },
};
</script>
<style scoped>
.border-gray {
  border-bottom: 1px solid rgba(55, 65, 81, 0.3);
  border-radius: 0;
}
</style>
