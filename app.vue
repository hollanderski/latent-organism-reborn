<template>
  <div id="main">
    <header><div id="title">LATENT ORGANISM</div><div class="menu_section">github</div><div class="menu_section">Contact us</div></header>

    <div v-if="stade == 1" id="text_1">
      <div v-html="script[current_script_index]"></div>
      <div class="press_enter">Press enter</div>
    </div>

    <div id="shape-screen">
      <ShapeScreen @stade-update.once="update_stade" :stade="stade"></ShapeScreen>
    </div>

    <div id="scroll_down" v-if="stade == 0">Scroll Down</div>

    <footer></footer>

  </div>
</template>

<script>

export default {
  name: 'TheApp',
  props: {
  },
  data() {
    return {
      stade: 0,
      current_script_index: 0,
      script: [
        `Latent organism creates a novel technique for the creation of 3D objects using a tangible
      interface.
      <br /><br />
      Building on creations by generative algorithms, our tool allows anyone to create unique and complex 3D
      shapes through natural and playful interactions with an intuitive and sensitive tactile interface.`,
        `This work proposes a process of co-creation between the human and the machine through a balanced interaction and a way of appropriating what we could call an artificial imagination. 
      <br /><br />
      In this work « Latent organism », we propose an interactive installation that exemplifies how a reincarnated form could be provided by the huge amount of data collected from our bodies. `,
        `For this experiment, the machine was fed thousands of photos of living organisms. Its property of learning and generalization allows it to converge towards an abstract conception of the idea of organic flesh. It is then possible to navigate in this continuous space of potentiality. `,
        `The spectator is in control, using the imagination of the machine as clay, as a moldable material. Our sympoietic machine takes the physiological data from the spectator as inputs and then translates it into a generative shape and texture using the latent space of a 3D GAN (Generative Adversarial Network). The human is actively participating in the process since he can manipulate, twist, rotate the physical object to transform the shape.`,
        `How it works

Different sensors react to the successive pressures and to the position in space of the human.
The 3D shape and its texture evolves in real time when the spectator interacts with the physical artifact.
The interaction can be more or less active, and can also be experienced in a contemplative way.
Each generated shape, combining the human inputs and the machine’s imagination, is unique.`,
        `How it was built

The interface was built using e-textile, DIY pressure sensors, conductive paint, silicone and thermochromic pigments. 3D visuals were created with NVIDIA Kaolin and three.js. This is a joint work with Adrien Chuttarsing, Sophie Chen and Marianne Canu.
Check our git repo `,
`The installation won the second prize of the creARTathon Paris-Saclay, an interdisciplinary workshop that brings together Arts, Design, Artificial Intelligence and Human-Computer Interaction.`
      ]
    }
  },
  computed: {

  },
  methods: {
    update_stade(n) {
      console.log('stade', n)
      this.stade = n;
    }
  },
  mounted() {
    let self = this;
    window.addEventListener('keyup', function handler(ev) {
      console.log(ev); // declared in your component methods
      console.log(ev['key']); // declared in your component methods
      if (ev['key'] == 'Enter') {
        self.current_script_index += 1
        if (self.current_script_index >= self.script.length) {
          this.removeEventListener('keyup', handler);
          self.stade = 2;
        }
      }
    });
  }
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
  /* border: solid; */
  width: 100%;
  height: 8rem;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.menu_section {
  margin: 1rem;
  font-family: 'Raleway';
  text-transform: uppercase;
  opacity: v-bind("stade == 0 ? 0 : 1");
  transition: opacity 1s ease;
}

#title {
  position: absolute;
  display: block;
  font-size: 5rem;
  top: 50%;
  padding: 1rem;
  transform: v-bind("stade == 0 ? 'translate(-50%, -50%)' : 'translate(4%, -50%)'");
  left: v-bind("stade == 0 ? '50%' : '0%'");
  transition: left 0.5s ease-in-out, transform 0.5s ease-in-out;
}


#shape-screen {
  /* border: solid 1px red; */
  position: relative;
  width: 50%;
  height: -webkit-fill-available;
  transform: v-bind("stade == 1 ? 'translateX(-45%)' : 'translateX(0%)'");
  transition: transform 1s ease;
}

#text_1 {
  /* border: solid; */
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

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

.press_enter {
  /* border: solid; */
  margin-top: 2rem;
  text-align: right;
  width: 100%;
  animation: blinker 1s linear infinite;
}

#scroll_down {
  font-family: 'Raleway';
  text-transform: uppercase;
  animation: blinker 1s linear infinite;
}

footer {
  /* border: solid; */
  height: 2rem;
  width: 100%;
  padding: 1rem;
}
</style>