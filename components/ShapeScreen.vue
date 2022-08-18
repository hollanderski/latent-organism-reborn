<template>
        <div id="text_1">Latent organism creates a novel technique for the creation of 3D objects using a tangible
            interface.<br/><br/>

            Building on creations by generative algorithms, our tool allows anyone to create unique and complex 3D
            shapes through natural and playful interactions with an intuitive and sensitive tactile interface. </div>
    <div id="shape_canvas" ref="shape_canvas">
    </div>
</template>

<script>

import { toRaw } from '@vue/reactivity'

function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

export default {
    head() {
        return {
            script: [
                { src: 'assets/scripts/three.min.js' },
                { src: 'assets/scripts/SubsurfaceScatteringShader.js' },
                { src: 'assets/scripts/perlin.js' },
                { src: 'assets/scripts/socket.io.js' },
                { src: 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/curves/CurveExtras.js' },
            ],
        }
    },
    name: 'ShapeScreen',
    data() {
        return {
            // scene: null,
            // camera: null,
            // renderer: null,
            // uniforms: null
            sensors: {
                emancipacing: 1,
                peaking: 0.1,
            },
            changeco: -1,
            changepat: -1,
            camera_zoom: 5,
            camera_zoom_max: 5,
            camera_zoom_min: 2,
            camera_zoom_speed: 0.1,
            flag_intro_finished: false
        }
    },
    props: {},
    watch: {
        flag_intro_finished() {

        }
    },
    computed: {},
    methods: {
        mandariane(kx, ky) {

            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length; i++) {
                const x = vertices[i];
                const y = vertices[i + 1];
                const z = vertices[i + 2];
                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(p.x * kx, p.y * ky, time));
                //p.add(p.clone().normalize().multiplyScalar(2 * noise.perlin3(p.x * k, p.y * k, p.z * k)));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();

        },
        fire() {

            const k = 3;
            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length; i++) {

                let uv = geometry.getAttribute('uv').array;
                // (uv[0].x*k, uv[0].y*k,

                x = vertices[i];
                y = vertices[i + 1];
                z = vertices[i + 2];
                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                //p.normalize().multiplyScalar(emancipacing+peaking*noise.perlin3(p.x*k, p.y*k, time));
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(uv[i] * k, uv[i] * k, time));
                p.add(p.clone().normalize().multiplyScalar(2 * noise.perlin3(p.x * k, p.y * k, p.z * k)));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
        },
        flower() {

            const k = 3;
            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length; i++) {

                let uv = geometry.getAttribute('uv').array;
                // (uv[0].x*k, uv[0].y*k,

                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                //p.normalize().multiplyScalar(emancipacing+peaking*noise.perlin3(p.x*k, p.y*k, time));
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(uv[i * 3] * k, uv[i * 3 + 1] * k, time));
                //p.add(p.clone().normalize().multiplyScalar(2 * noise.perlin3(p.x * k, p.y * k, p.z * k)));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
        },
        futur() {

            const k = 3;
            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length; i++) {

                let uv = this.cube.geometry.getAttribute('uv').array;
                // (uv[0].x*k, uv[0].y*k,

                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                //p.normalize().multiplyScalar(emancipacing+peaking*noise.perlin3(p.x*k, p.y*k, time));
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(uv[i * 2] * k, uv[i * 2] * k, time));
                //p.add(p.clone().normalize().multiplyScalar(2 * noise.perlin3(p.x * k, p.y * k, p.z * k)));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
        },
        blob() {

            const k = 3;
            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length / 3; i++) {

                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
                //p.normalize().multiplyScalar(emancipacing+peaking*noise.perlin3(uv[i * 2]*k, uv[i * 2 ]*k, time));
                //p.add(p.clone().normalize().multiplyScalar(2 * noise.perlin3(p.x * k, p.y * k, p.z * k)));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.verticesNeedUpdate = true;
        },
        anemone() {

            const k = 3;
            let time = performance.now() * 0.0005;
            let vertices = this.cube.geometry.attributes.position.array;

            for (let i = 0; i <= vertices.length; i++) {

                let uv = geometry.getAttribute('uv').array;

                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                p.normalize().multiplyScalar(this.sensors['emancipacing'] + this.sensors['peaking'] * noise.perlin3(uv[i] * 5, uv[i] * 5, time));
                //p.normalize().multiplyScalar(emancipacing2+peaking2*noise.perlin3(uv[i]*k, uv[i]*k, time));

                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
            }

            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
        },
        twist(geometry, sens = 'right', twistAmount = 2) {

            const quaternion = new THREE.Quaternion();
            let vertices = geometry.attributes.position.array;

            let direction
            if (sens == 'right') {
                direction = Math.PI / 180
            } else {
                direction = -Math.PI / 180
            }

            for (let i = 0; i < vertices.length; i++) {
                // a single vertex Y position
                const yPos = vertices[i * 3 + 1] // geometry.vertices[i].y;
                const upVec = new THREE.Vector3(0, 1, 0);
                quaternion.setFromAxisAngle(upVec, direction * (yPos / twistAmount));
                const p = new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
                p.applyQuaternion(quaternion);
                vertices[i * 3] = p.x;
                vertices[i * 3 + 1] = p.y;
                vertices[i * 3 + 2] = p.z;
                //geometry.vertices[i].applyQuaternion(quaternion);
            }
            // tells Three.js to re-render this mesh
            this.cube.geometry.attributes.position.needsUpdate = true;
            this.cube.geometry.computeVertexNormals();
            this.cube.geometry.verticesNeedUpdate = true;
            this.cube.geometry.normalsNeedUpdate = true;
            this.cube.geometry.verticesNeedUpdate = true;
        },
        colorChange() {
            let nb = randomNumber(3)
            if (!nb)
                this.uniforms['diffuse'].value = new THREE.Vector3(1.0, 0.2, 0.2); // beige - jaune
            if (nb == 1) {
                this.uniforms['diffuse'].value = new THREE.Vector3(0, 0.4, 2); // blue
            }
            if (nb == 2)
                this.uniforms['diffuse'].value = new THREE.Vector3(0, 1, 0.7); //green

            this.changeco = -1;
        },
        patternChange() {
            let nb = randomNumber(13)

            console.log(nb, this.loader)

            switch (nb) {
                case 0: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/biopsy.png'); break;
                case 1: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/bunny_thickness.jpg'); break;
                case 2: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/waves.jpg'); break;
                case 3: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot1.jpg'); break;
                case 4: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot3.jpg'); break;
                case 5: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot4.jpg'); break;
                case 6: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot5.jpg'); break;
                case 7: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot6.jpg'); break;
                case 8: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/mandelbrot7.jpg'); break;
                case 9: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/buttercup.png'); break;
                case 10: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/celery.jpg'); break;
                case 11: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/cells.jpg'); break;
                case 12: this.uniforms['thicknessMap'].value = this.loader.load('assets/textures/bacteria.jpg'); break;
            }

            this.changepat = -1
        },
        opaque() {
            this.uniforms['thicknessDistortion'].value += 0.005;
            //this.uniforms[ 'thicknessColor' ].value.z+=1;
        }
    },
    mounted() {

        // non reactive data : scene, camera, renderer, cube

        let self = this;

        let socket = io();
        let arduino = 0
        let twisting = -1
        let blobing = -1
        let mandaring = 0
        let anemoning = 0
        let iteration = 0
        let coloring = 0;
        let changeco = 0;
        let changepat = 0;
        let flowering = 0;
        let futuring = 0;
        let flag = false
        const max_twist = 2000//400
        let goback = false;

        window.addEventListener("wheel", (event) => {
            if (self.flag_intro_finished == false & parseFloat(self.camera.position.z) != self.camera_zoom_min) {
                /* if(event.deltaY > 0){ */
                self.camera_zoom = Math.max(self.camera_zoom - (event.deltaY / 50).toFixed(2), self.camera_zoom_min)
                console.info(event.deltaY, '->', self.camera_zoom, '->', self.camera.position.z)
                /* } */
            } else {
                self.flag_intro_finished = true
            }
        });

        // Create an empty scene
        self.scene = new THREE.Scene();

        const forced_height = 600;

        // Create a basic perspective camera
        self.camera = new THREE.PerspectiveCamera(75, self.$refs.shape_canvas.offsetWidth / forced_height, 0.1, 1000);
        self.camera.position.z = self.camera_zoom;
        window.addEventListener('keyup', function (ev) {
            console.log(ev); // declared in your component methods
            console.log(ev['key']); // declared in your component methods
            if (ev['key'] == 'a') {
                self.camera_zoom = 10
                console.log(self.camera_zoom)
            }
        });
        // Create a renderer with Antialiasing
        self.renderer = new THREE.WebGLRenderer({ antialias: true });
        // Configure renderer clear color
        self.renderer.setClearColor("#000000");
        self.renderer.setPixelRatio(window.devicePixelRatio);
        self.renderer.outputEncoding = THREE.sRGBEncoding;

        // Configure renderer size
        console.log(self.$refs.shape_canvas.offsetWidth, forced_height)
        self.renderer.setSize(self.$refs.shape_canvas.offsetWidth, forced_height);
        // Append Renderer to DOM
        self.$refs.shape_canvas.appendChild(self.renderer.domElement);

        // SUBSURFACE SCATTERING
        //let scene = toRaw(this.scene)

        self.scene.add(new THREE.AmbientLight(0x888888));

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.03);
        directionalLight.position.set(0.0, 0.5, 0.5).normalize();
        self.scene.add(directionalLight);

        const pointLight1 = new THREE.Mesh()// new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x888888 } ) );
        pointLight1.add(new THREE.PointLight(0x888888, 7.0, 300));
        self.scene.add(pointLight1);
        pointLight1.position.x = 0;
        pointLight1.position.y = - 50;
        pointLight1.position.z = 350;

        const pointLight2 = new THREE.Mesh()// new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x888800 } ) );
        pointLight2.add(new THREE.PointLight(0x888800, 1.0, 500));
        self.scene.add(pointLight2);
        pointLight2.position.x = - 100;
        pointLight2.position.y = 20;
        pointLight2.position.z = - 260;


        self.loader = new THREE.TextureLoader();
        const imgTexture = self.loader.load('assets/textures/white.jpg');
        const thicknessTexture = self.loader.load('assets/textures/bunny_thickness.jpg');
        //const thicknessTexture = self.loader.load('assets/textures/biopsy.png')
        imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping;

        const shader = THREE.SubsurfaceScatteringShader;
        self.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

        self.uniforms['map'].value = imgTexture;

        self.uniforms['diffuse'].value = new THREE.Vector3(1, 0, 1); //  color : 1.0, 0.2, 0.2
        self.uniforms['shininess'].value = 500;

        self.uniforms['thicknessMap'].value = thicknessTexture;
        self.uniforms['thicknessColor'].value = new THREE.Vector3(0.5, 0.3, 0.0);
        self.uniforms['thicknessDistortion'].value = 0.1;
        self.uniforms['thicknessAmbient'].value = 0.4;
        self.uniforms['thicknessAttenuation'].value = 0.8;
        self.uniforms['thicknessPower'].value = 2.0;
        self.uniforms['thicknessScale'].value = 16.0;


        const material = new THREE.ShaderMaterial({
            uniforms: self.uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            lights: true
        });
        material.extensions.derivatives = true;



        // ------------------------------------------------
        // FUN STARTS HERE
        // ------------------------------------------------
        // Create a Cube Mesh with basic material

        const geometry = new THREE.SphereGeometry(1, 128, 128);// new THREE.BoxGeometry(20, 20, 20, 20, 20, 20);
        //const material = new THREE.MeshNormalMaterial({ wireframe: false } ); //
        self.cube = new THREE.Mesh(geometry, material);
        self.scene.add(self.cube);

        ////////////////////////////////////////////////////////////////

        // MORPHO BLOB

        let max_peaking = 2
        let max_emancipating = 3
        let kx = 3
        let ky = 3
        let seuil_trigg = 600


        // TEXTURE CHANGE
        setTimeout(function () { changeco = 0; changepat = 0; }, 10000);


        /////////////////////////////////////////// RENDER LOOP ///////////////////////////////////////////
        let render = function () {

            //console.log(self.camera.position.z)

            requestAnimationFrame(render);
            let nbr = 0

            //camera osc
            if (Math.abs(self.camera.position.z - self.camera_zoom) <= self.camera_zoom_speed) {
                self.camera.position.z = self.camera_zoom
            } else if (self.camera.position.z > self.camera_zoom) {
                self.camera.position.z = (parseFloat(self.camera.position.z) - self.camera_zoom_speed).toFixed(2);
            } else if (self.camera.position.z < self.camera_zoom) {
                self.camera.position.z = (parseFloat(self.camera.position.z) + self.camera_zoom_speed).toFixed(2);
            }


            if (twisting == 0 && iteration < max_twist && !goback) {
                nbr++
                self.twist(geometry, 'right')
                iteration += 1
            }
            else if (flag == false && iteration != 0 && goback) {
                nbr++
                self.twist(geometry, 'left')
                iteration -= 1;
                if (!iteration)
                    goback = false;
            }
            if (blobing == 1) {
                nbr++
                self.blob();
            }
            if (mandaring == 1 && nbr <= 2) {
                nbr++
                self.mandariane(kx, ky);
            }
            if (anemoning == 1 && nbr <= 2) {
                nbr++
                self.anemone();
            }
            if (coloring == 1 && nbr <= 2) {
                nbr++
                self.opaque();
            }
            if (changeco == 1 && nbr <= 2) {
                nbr++
                self.colorChange();
            }
            if (changepat == 1 && nbr <= 2) {
                nbr++
                self.patternChange();
            }
            if (flowering == 1 && nbr <= 2) {
                nbr++
                self.flower();  //
            }
            if (futuring == 1 && nbr <= 2) {
                nbr++
                self.futur(); //
            }
            self.cube.rotation.y += 0.005
            self.renderer.render(self.scene, self.camera);
        };

        self.blob(kx, ky);
        render();

        socket.on('arduino', function (data) {

            //arduino = eval(data)
            arduino = [randomNumber(1000), randomNumber(1000), randomNumber(1000), randomNumber(1000), randomNumber(1000), randomNumber(1000), randomNumber(1000), randomNumber(1000)]
            console.log(arduino)
            flag = false

            if (arduino[6] < 700) {
                blobing = 1
                flag = true
            }
            if (arduino[5] < seuil_trigg && !changeco) {
                changeco = 1
                flag = true
            }

            /*if (arduino[0] < seuil_trigg && !changepat){
                changepat = 1
                flag = true
            }*/

            if (arduino[4] < seuil_trigg) {
                coloring = 1
                flag = true
            }
            if (arduino[3] < seuil_trigg) {

                anemoning = 1
                self.sensors['peaking'] += 0.1
                self.sensors['emancipacing'] += 0.1
                self.sensors['emancipacing'] = Math.min(self.sensors['emancipacing'], 2);
                self.sensors['peaking'] = Math.min(self.sensors['peaking'], max_peaking);
                flag = true
            }
            if (arduino[2] < seuil_trigg) {
                mandaring = 1
                self.sensors['emancipacing'] += 0.01
                self.sensors['peaking'] += 0.1
                self.sensors['emancipacing'] = Math.min(self.sensors['emancipacing'], max_emancipating);
                self.sensors['peaking'] = Math.min(self.sensors['peaking'], max_peaking);
                kx += 2
                flag = true
            }
            if (arduino[1] < seuil_trigg) {
                if (iteration == 0) {
                    setTimeout(function () {
                        goback = true;
                    }, 10000);
                }

                twisting = 0
                flag = true
            }
            if (arduino[0] < seuil_trigg) {
                blobing = 1
                self.sensors['peaking'] += 0.1
                self.sensors['emancipacing'] += 0.03
                self.sensors['emancipacing'] = Math.min(self.sensors['emancipacing'], max_emancipating);
                self.sensors['peaking'] = Math.min(self.sensors['peaking'], max_peaking);
                flag = true
            }

            if (flag == false) {
                coloring = 0
                twisting = -1
                diminution = 0.01
                self.sensors['emancipacing'] = Math.max(self.sensors['emancipacing'] - diminution, 1);
                self.sensors['peaking'] = Math.max(self.sensors['peaking'] - diminution, 0.1);
                kx = Math.max(kx - 0.1, 3);
                peaking2 = 0
                self.uniforms['thicknessDistortion'].value = Math.max(self.uniforms['thicknessDistortion'].value - 0.001, 0.1);

            }
        });




        ////////////////////////////////////////////////////////////////
    },
}

</script>

<style scoped>
#shape_canvas {
    transform: v-bind("flag_intro_finished == true ? 'translateX(-25%)' : 'translateX(0%)'");
    transition: transform 1s ease;
}

#text_1 {
    font-family: 'Raleway';
    text-transform: uppercase;
    line-height: 1.2rem;
    position: absolute;
    width: 45%;
    right: 25%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
}
</style>