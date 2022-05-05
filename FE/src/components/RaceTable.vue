<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <template #cell(participants)="data">
        <div>
          {{ data.item.participants }}
        </div>
      </template>

      <template #cell(moreInfo)>
        <b-button variant="success" @click="goToBetting()">BETTING</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Races",
  data() {
    return {
      fields: [
        { key: "place", label: "Place:" },
        { key: "date", label: "When:" },
        { key: "participants", label: "Participants:" },
        { key: "moreInfo", label: " " },
      ],
      items: [],
    };
  },

  async created() {
    const races = await axios({
      url: `api/races`,
      method: "GET",
    });
    this.items = races.data.allRaces;
  },

  methods: {
    goToBetting() {
      this.$router.push("/betting");
    },
  },
};
</script>
