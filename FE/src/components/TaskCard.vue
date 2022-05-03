<template>
  <div
    class="bg-white shadow rounded px-1 pt-2 pb-3 border-2"
    :class="'border-' + task.color.toLowerCase() + '-400'"
  >
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        Author: {{ task.author }}
      </p>
    </div>
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        Task: {{ task.title }}
      </p>
    </div>
    <div class="flex justify-between date">
      <p>Due-date:</p>
      <span class="text-sm text-gray-600">
        {{ moment(task.date).format("DD.MM.YYYY") }}</span
      >
      <badge v-if="task.priority" :color="badgeColor"
        ><span class="capitalize">{{
          task.priority.toLowerCase()
        }}</span></badge
      >
      <button class="bg-red-200 px-2 py-2 rounded" @click="deleteTodo">
        X
      </button>
    </div>
  </div>
</template>
<script>
import Badge from "./Badge.vue";
import moment from "moment";
import axios from "axios";

export default {
  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
    };
  },
  components: {
    Badge,
  },
  props: {
    task: {
      priority: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        HIGH: "red",
        MEDIUM: "yellow",
        LOW: "green",
        default: "teal",
      };
      return mappings[this.task.priority] || mappings.default;
    },
  },
  methods: {
    moment,
    async deleteTodo() {
      await axios({
        //url: "https://greatsuccess-todo.herokuapp.com/api/deleteTask",

        url: `${this.apiURL}/api/deleteTask`,
        method: "DELETE",
        data: this.task,
      });
      this.$emit("task-deleted");
    },
  },
};
</script>
