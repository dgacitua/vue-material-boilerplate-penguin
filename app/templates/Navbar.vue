<template>
  <div id="navbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Vue-Material Boilerplate "Penguin"</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Template Sidenav</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link exact to="/">
            <md-icon>home</md-icon> <span>Home</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link exact to="/services">
            <md-icon>assignment_turned_in</md-icon> <span>Services</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link exact to="/about">
            <md-icon>help</md-icon> <span>About</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
};
</script>

<style scoped>
</style>