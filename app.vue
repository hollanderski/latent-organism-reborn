<template>
  <div id="main" >
    <header>LATENT ORGANISM</header>

    <div id="text_1">Latent organism creates a novel technique for the creation of 3D objects using a tangible
      interface.<br /><br />

      Building on creations by generative algorithms, our tool allows anyone to create unique and complex 3D
      shapes through natural and playful interactions with an intuitive and sensitive tactile interface. </div>

    <div id="shape-screen">
      <ShapeScreen @stade-update.once="update_stade"></ShapeScreen>
    </div>

  </div>
</template>

<script>

export default {
  name: 'TheApp',
  props: {
  },
  data() {
    return {
      stade: 0
    }
  },
  computed: {

  },
  methods: {
    update_stade(n) {
      console.log('stade',n)
      this.stade = n;
    }
  },
}

</script>

<style scoped>
#main {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

}

header {
  padding: 1rem;
  font-size: 4em;
  font-weight: bold;
  text-align: center;
}

#shape-screen {
  /* border: solid 1px #ccc; */
  position: relative;
  width: 50%;
  height: -webkit-fill-available;

}

#text_1 {
  font-family: 'Raleway';
  text-transform: uppercase;
  line-height: 1.2rem;
  position: absolute;
  width: 40%;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  opacity: v-bind("stade == 0 ? 0 : 1");
  transition: opacity 1s ease;
}
</style>