import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "@/layouts/global.css",
    ],

    head: {
        script: [

        ],
    },

    /* plugins: ['~/assets/scripts/three.min.js','~/assets/scripts/SubsurfaceScatteringShader.js'] */

})
