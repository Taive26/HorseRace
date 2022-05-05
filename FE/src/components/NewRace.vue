<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="col">
        <p>Add a new race</p>
        <label for="author" class="block text-sm font-medium text-gray-700"
          >Place</label
        >
        <input
          v-model="place"
          type="text"
          name="place"
          class="mt-1 block w-full border-gray p-1"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label for="author" class="block text-sm font-medium text-gray-700"
          >When:</label
        >
        <input
          v-model="date"
          type="text"
          name="place"
          class="mt-1 block w-full border-gray p-1"
        />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <label
          for="priority"
          class="inline-block text-sm font-medium text-gray-700"
          >Horses</label
        >
        <vselect multiple v-model="participants" :options="options"></vselect>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
        <button class="bg-green-400 px-4 py-2 rounded" @click="addRace">
          Add race
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import vselect from "vue-select";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      place: "",
      date: "",
      participants: [],
      options: [],
    };
  },
  components: {
    vselect,
  },

  async created() {
    const listOfHorses = await axios({
      url: `/api/horses`,
      method: "GET",
    });
    for (let i = 0; i < listOfHorses.data.allHorses.length; i++) {
      const horseName = listOfHorses.data.allHorses[i].name;
      this.options.push(horseName);
    }
  },

  methods: {
    async addRace() {
      let newRace = {
        place: this.place,
        date: this.date,
        participants: this.participants,
      };


      await axios({
        url: `api/addRace`,
        method: "POST",
        data: newRace,
      });
      this.$router.push("/races");
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
