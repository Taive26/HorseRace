<template>
  <div id="app">
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div class="bg-gray-100 rounded-lg px-3 py-3 column-double-width rounded mr-4">
          <div class="row">
           <img src="https://us.123rf.com/450wm/scusi/scusi1803/scusi180300041/98289180-jockeys-with-race-horses-on-the-racetrack.jpg?ver=6" alt="">
          </div>
          <add-horse class="my-3" />
          <new-task class="my-3" @task-added="getTasksByAuthor" />
        </div>
      </div>

      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div v-for="column in columns" :key="column.title" class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
          <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
            {{ column.title }}
          </p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable
            :list="column.tasks"
            :animation="200"
            :style="{ height: !column.tasks.length ? '300px' : '' }"
            ghost-class="ghost-card"
            group="tasks"
            @change="moveTask($event, column)"
          >
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="task in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move"
              @task-deleted="getTasksByAuthor"
            ></task-card>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import TaskCard from '../components/TaskCard';
import NewTask from '../components/NewTask';
import AddHorse from '../components/AddHorse';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TaskCard,
    draggable,
    NewTask,
    AddHorse,
  },

  data() {
    return {
      apiURL: process.env.VUE_APP_BACKEND_URL,
      authors: [],
      columns: [
        {
          title: 'Todo',
          tasks: [],
        },
        {
          title: 'Done',
          tasks: [],
        },
      ],
    };
  },

  async created() {
    await this.getTasksByAuthor();
  },
  beforeMount() {
    this.getUniqueAuthors();
  },
  methods: {
    changeAuthor(event) {
      this.$store.state.author = event.target.options[event.target.options.selectedIndex].text;
    },
    async getTasksByAuthor() {
      let authorEntered = this.$store.state.author;
      const tasksByAuthor = await axios({
        url: `${this.apiURL}/api/tasks/${authorEntered}`,
        method: 'GET',
      });
      this.columns = tasksByAuthor.data;
    },
    async getUniqueAuthors() {
      const res = await axios({
        url: `${this.apiURL}/api/authorsList`,
        method: 'GET',
      });
      this.authors = res.data;
    },

    async getTasks() {
      const res = await axios({
        url: `${this.apiURL}/api/tasks`,
        method: 'GET',
      });
      this.columns = res.data;
    },
    async moveTask(event, column) {
      if (event.added) {
        if (column.title === 'Done') {
          await axios({
            url: `${this.apiURL}/api/moveTask/${event.added.element._id}/done`,

            method: 'GET',
          });
        } else if (column.title === 'Todo') {
          await axios({
            url: `${this.apiURL}/api/moveTask/${event.added.element._id}/todo`,
            method: 'GET',
          });
        }
      }
    },
    backToEnterName() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.column-double-width {
  min-width: 460px;
  width: 460px;
}
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
.form-control {
  margin-inline: 15px;
  margin-bottom: 20px;
}
button {
  margin-right: 15px;
}
</style>
