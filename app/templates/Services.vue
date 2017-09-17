<template>
  <md-layout md-row id="activities">
    <md-layout md-column md-flex="50">
      <md-layout md-row>
        <h3>Get current date from Service!</h3>
      </md-layout>
      <md-layout md-row>
        <md-button class="md-raised" v-on:click="getDate()">Get current date</md-button>
      </md-layout>
      <md-layout md-row>
        <pre>{{ dateVal }}</pre>
      </md-layout>
    </md-layout>
    <md-layout md-column md-flex="50">
      <md-layout md-row>
        <h3>Get a random number from Service!</h3>
      </md-layout>
      <md-layout md-row>
        <md-layout md-column md-flex="33">
          <md-input-container>
            <label>Min</label>
            <md-input type="number" placeholder="0" v-model="min" min="0"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout md-column md-flex="33">
          <md-input-container>
            <label>Max</label>
            <md-input type="number" placeholder="10" v-model="max" min="0"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout md-column md-flex="33">
          <md-button class="md-raised" v-on:click="getRandomNumber()">Get a random number</md-button>
        </md-layout>
      </md-layout>
      <md-layout md-row>
        <pre>{{ randNum }}</pre>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
import DateService from '../services/date';
import RandomNumberService from '../services/randomNumber';

export default {
  data() {
    return {
      dateVal: '',
      randNum: '',
      min: null,
      max: null
    }
  },
  methods: {
    getDate() {
      DateService.getDate().then((res) => {
       this.dateVal = res;
      });
    },
    getRandomNumber() {
      RandomNumberService.getNumber(this.min, this.max).then((res) => {
        this.randNum = res
      });
    }
  }
};
</script>

<style scoped>
.top-padding {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>