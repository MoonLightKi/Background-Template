<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <header>
      <router-link to='/home'>To Home</router-link>

      <router-link to="/user/123">User123</router-link>
      <router-link to="/user/456">User456</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

