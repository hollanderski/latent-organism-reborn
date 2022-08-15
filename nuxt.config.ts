import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "@/layouts/global.css",
    ],

    head: {
        script: [
            { src: "sdfdfthree/build/three.js"},
            { src: "https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/curves/CurveExtras.js" },
            /* { src: "~/assets/scripts/three.min.js" }, */
            { src: "~/assets/scripts/SubsurfaceScatteringShader.js" }
        ],
    },

    /* plugins: ['~/assets/scripts/three.min.js','~/assets/scripts/SubsurfaceScatteringShader.js'] */

})
