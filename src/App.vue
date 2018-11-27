<template>
  <div id="app">
    <div id="content">
      <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Signika', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#content {
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 50px auto;
}
</style>
