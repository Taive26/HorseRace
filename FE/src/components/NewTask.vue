<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row">
      <div class="col">
        <p>Add a new race</p>
        <label for="author" class="block text-sm font-medium text-gray-700"
          >Place</label
        >
        <input
          v-model="form.place"
          type="text"
          name="place"
          class="mt-1 block w-full border-gray p-1"
        />
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <label for="first_name" class="block text-sm font-medium text-gray-700"
          >Date</label
        >
        <datepicker
          class="block text-sm font-medium text-gray-700 p-1"
          placeholder="Select Date"
          v-model="form.date"
          :format="'dd.MM.yyyy'"
        ></datepicker>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <label
          for="priority"
          class="inline-block text-sm font-medium text-gray-700"
          >Horses</label
        >
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          name="horses"
        ></b-form-checkbox-group>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
        <button class="bg-green-400 px-4 py-2 rounded" @click="addTodo">
          Add todo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Datepicker from "vuejs-datepicker";
import { mapState } from "vuex";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      form: {
        author: "",
        title: "",
        date: new Date(),
        priority: "MEDIUM",
        color: "#ffca00",
      },
      selected: [],
      options: [],
    };
  },
  components: {
    Datepicker,
  },
  computed: {
    ...mapState({
      author: (state) => state.author,
      nameAlias: "author",
    }),
  },

  async created() {
    const listOfHorses = await axios({
        url: `/api/horses`,
        method: 'GET',
      });
      for (let i = 0; i < listOfHorses.data.allHorses.length; i++) {
      const horseName = listOfHorses.data.allHorses[i].name;
      this.options.push(horseName);
    }
  },

  methods: {
    async addTodo() {
      await axios({
        url: `${this.apiURL}/api/createTask`,
        //url: "api/createTask",
        method: "POST",
        data: this.form,
      });
      this.$emit("task-added");
      this.form = {
        author: this.$store.state.author,
        title: "",
        date: new Date(),
        priority: "MEDIUM",
        color: "GRAY",
      };
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
