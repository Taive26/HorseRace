<template>
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          class="bg-gray-100 rounded-lg px-100 py-3 column-double-width rounded mr-4"
        >
          <div class="row">
            <img
              src="https://us.123rf.com/450wm/scusi/scusi1803/scusi180300041/98289180-jockeys-with-race-horses-on-the-racetrack.jpg?ver=6"
              alt=""
            />
          </div>
          <betting class="my-3" />
        </div>
    </div>
  </div>
</template>

<script>
import Betting from "../components/Betting";

export default {
  name: "App",
  components: {
    Betting
  },

  data() {
    return {

    };
  },

  methods: {

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