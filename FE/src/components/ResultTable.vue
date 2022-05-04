<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">


      <!-- Nupp lisainfoks -->
      <template #cell(moreInfo)="data">
        <b-button
          v-b-modal.modal-1
          variant="success"
          @click="showInfo(data.item.productName, data.item.description)"
          >Lisainfo</b-button
        >
      </template>
    </b-table>

    <!-- LISAINFO -->
    <b-modal id="modal-1" :title="descriptionModalName" size="xl">
      <p>{{ productDescription }}</p>
    </b-modal>
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
      ],
      items: [],
      descriptionModalName: "productName",
      productDescription: "description",
      productLocation: "address",
      productCoordinates: "coordinates",
      center: { lat: 45.508, lng: -73.587 },
      marker: {
        position: {
          lat: null,
          lng: null,
        },
      },
    };
  },

  async created() {
    const races = await axios({
      url: `api/races`,
      method: "GET",
    });
    console.log(races);
    this.items = races.data.allRaces;
  },

  methods: {
    showInfo(productName, description, address, coordinates) {
      this.descriptionModalName = productName;
      this.productDescription = description;
      this.productLocation = address;
      this.productCoordinates = coordinates; //ei saa lisada 2 sama nimega asja ja . ei lase panna
      this.marker.position = {
        lat: coordinates[0],
        lng: coordinates[1],
      };
    },
  },
};
</script>
