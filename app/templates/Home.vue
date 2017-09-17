<template>
  <div id="home">
    <h1>Welcome to {{ appName }}!</h1>
    <div>
      <p>Use this template for your own Vue.js + Material Design frontend projects!</p>
      <p>Based on the following technologies</p>
      <ul>
        <li>JavaScript with ECMAScript 6 standard</li>
        <li>Webpack 2.6.1</li>
        <li>Vue 2.3.3</li>
        <li>Vue-Router 2.7.0</li>
        <li>Vue-Material 0.7.4</li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  data: () => {
    return {
      appName: 'Vue.js + Material Design Boilerplate "Penguin Edition"'
    }
  }
};
</script>

<style scoped>
</style>