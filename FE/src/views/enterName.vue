<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form class="text-center border border-grey p-5" style="margin-top: 30px; height: auto; padding-top: 100px !important">
          <input type="text" id="author" class="form-control mb-5" placeholder="Enter your name here" v-model="author" />

          <center>
            <button class="bg-green-400 px-4 py-2 rounded" type="submit" @click="btnClick(), $store.commit('nameEntered', author)">
              View my tasks
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    btnClick() {
      this.$router.push('tasks');
    },
  },
};
</script>
