<template>
  <div id="main">
    <header>LATENT ORGANISM</header>

    <div id="shape-screen">
      <ShapeScreen></ShapeScreen>
    </div>

  </div>
</template>

<script>

export default {
  name: 'TheApp',
  props: {
  },
  computed: {

  },
}

</script>

<style scoped>

#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

header {
  padding: 0.8rem;
  font-size: 4em;
  font-weight: bold;
  text-align: center;
}

#shape-screen {
  /* border: solid 1px #ccc; */
  width: 80%;
  height: -webkit-fill-available;
  
}
</style>