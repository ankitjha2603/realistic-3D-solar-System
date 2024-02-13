//////////////////////////////////////
//SECTION Import
import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
import {
  basicInformation,
  constant,
  sunData,
  showInfo,
  select,
} from "./constant.js";
//////////////////////////////////////

//////////////////////////////////////
//SECTION texture loader
const textureLoader = new THREE.TextureLoader();
//////////////////////////////////////

//////////////////////////////////////
//SECTION import all texture
const getTexture = (name) => textureLoader.load(`./image/${name}`);
const starTexture = getTexture("stars.jpg");
const sunTexture = getTexture("sun.jpg");
const mercuryTexture = getTexture("mercury.jpg");
const venusTexture = getTexture("venus.jpg");
const earthTexture = getTexture("earth.jpg");
const marsTexture = getTexture("mars.jpg");
const jupiterTexture = getTexture("jupiter.jpg");
const saturnTexture = getTexture("saturn.jpg");
const uranusTexture = getTexture("uranus.jpg");
const neptuneTexture = getTexture("neptune.jpg");
const plutoTexture = getTexture("pluto.jpg");
const saturnRingTexture = getTexture("saturn_ring.png");
const uranusRingTexture = getTexture("uranus_ring.png");
//////////////////////////////////////

//////////////////////////////////////
//SECTION planet information
const planetData = {
  approx: [
    {
      radius: 3.2,
      distance: 28,
      planet_name: "mercury",
      name: mercuryTexture,
      rsas: 0.004,
      srs: 0.004,
    },
    {
      radius: 5.8,
      distance: 44,
      planet_name: "venus",
      name: venusTexture,
      rsas: 0.015,
      srs: 0.002,
    },
    {
      radius: 6,
      distance: 62,
      planet_name: "earth",
      name: earthTexture,
      rsas: 0.01,
      srs: 0.02,
    },
    {
      radius: 4,
      distance: 78,
      planet_name: "mars",
      name: marsTexture,
      rsas: 0.008,
      srs: 0.018,
    },
    {
      radius: 12,
      distance: 100,
      planet_name: "jupiter",
      name: jupiterTexture,
      rsas: 0.002,
      srs: 0.04,
    },
    {
      radius: 10,
      distance: 138,
      planet_name: "saturn",
      name: saturnTexture,
      ring: {
        innerRadius: 10,
        outerRadius: 20,
        ringmat: saturnRingTexture,
      },
      rsas: 0.0009,
      srs: 0.038,
    },
    {
      radius: 7,
      distance: 176,
      planet_name: "uranus",
      name: uranusTexture,
      ring: {
        innerRadius: 7,
        outerRadius: 12,
        ringmat: uranusRingTexture,
      },
      rsas: 0.0004,
      srs: 0.03,
    },
    {
      radius: 7,
      distance: 200,
      planet_name: "neptune",
      name: neptuneTexture,
      rsas: 0.0001,
      srs: 0.032,
    },
    {
      radius: 2.8,
      distance: 216,
      planet_name: "pluto",
      name: plutoTexture,
      rsas: 0.0007,
      srs: 0.008,
    },
  ],
  real: [
    {
      radius: 2.4397,
      distance: 57.9,
      planet_name: "mercury",
      name: mercuryTexture,
      rsas: 0.00043, // Adjusted rotating speed around the sun for Mercury
      srs: 0.01083,
    },
    {
      radius: 6.0518,
      distance: 108.2,
      planet_name: "venus",
      name: venusTexture,
      rsas: 0.00035, // Adjusted rotating speed around the sun for Venus
      srs: -0.24302,
    },
    {
      radius: 6.371,
      distance: 149.6,
      planet_name: "earth",
      name: earthTexture,
      rsas: 0.00029, // Adjusted rotating speed around the sun for Earth
      srs: 1.0,
    },
    {
      radius: 3.3895,
      distance: 227.9,
      planet_name: "mars",
      name: marsTexture,
      rsas: 0.00024, // Adjusted rotating speed around the sun for Mars
      srs: 1.03,
    },
    {
      radius: 69.911,
      distance: 778.3,
      planet_name: "jupiter",
      name: jupiterTexture,
      rsas: 0.00002, // Adjusted rotating speed around the sun for Jupiter
      srs: 0.04,
    },
    {
      radius: 58.232,
      distance: 1427,
      planet_name: "saturn",
      name: saturnTexture,
      ring: {
        innerRadius: 65.232,
        outerRadius: 138.232,
        ringmat: saturnRingTexture,
      },
      rsas: 0.000009, // Adjusted rotating speed around the sun for Saturn
      srs: 0.038,
    },
    {
      radius: 25.362,
      distance: 2870,
      planet_name: "uranus",
      name: uranusTexture,
      ring: {
        innerRadius: 30.362,
        outerRadius: 45.362,
        ringmat: uranusRingTexture,
      },
      rsas: 0.000004, // Adjusted rotating speed around the sun for Uranus
      srs: 0.03,
    },
    {
      radius: 24.622,
      distance: 4496,
      planet_name: "neptune",
      name: neptuneTexture,
      rsas: 0.000001, // Adjusted rotating speed around the sun for Neptune
      srs: 0.032,
    },
    {
      radius: 1.186,
      distance: 5906,
      planet_name: "pluto",
      name: plutoTexture,
      rsas: 0.000007, // Adjusted rotating speed around the sun for Pluto
      srs: 0.008,
    },
  ],
  store: {
    approx: {},
    real: {},
  },
};
//////////////////////////////////////

//////////////////////////////////////
//SECTION create scene
const createScene = (view, isshow) => {
  //////////////////////////////////////
  //NOTE constant
  const {
    sizeConst,
    distanceConst,
    selfRotateConst,
    rotaingSpeedAroundSunConst,
    max_view,
    max_speed,
    min_speed,
    point_light_limit,
  } = constant[view];
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE Creating renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.display = isshow;
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE Creating scene
  const scene = new THREE.Scene();
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE screen bg
  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const cubeTexture = cubeTextureLoader.load([
    starTexture,
    starTexture,
    starTexture,
    starTexture,
    starTexture,
    starTexture,
  ]);
  scene.background = cubeTexture;
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE Perspective Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    max_view
  );
  camera.position.set(-50, 90, 150);
  ////////////////////////////////////

  //////////////////////////////////////
  //NOTE Percpective controll
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.zoomSpeed = 1.5;
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - sun
  const sungeo = new THREE.SphereGeometry(sunData[view], 50, 50);
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture,
  });
  const sun = new THREE.Mesh(sungeo, sunMaterial);
  scene.add(sun);
  planetData.store[view].sun = sun;
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - sun light (point light)
  const sunLight = new THREE.PointLight(0xffffff, 3, point_light_limit);
  scene.add(sunLight);
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
  scene.add(ambientLight);
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - path for planet
  const path_of_planets = [];
  function createLineLoopWithMesh(radius, color, width) {
    const material = new THREE.LineBasicMaterial({
      color: color,
      linewidth: width,
    });
    const geometry = new THREE.BufferGeometry();
    const lineLoopPoints = [];

    // Calculate points for the circular path
    const numSegments = 100; // Number of segments to create the circular path
    for (let i = 0; i <= numSegments; i++) {
      const angle = (i / numSegments) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      lineLoopPoints.push(x, 0, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(lineLoopPoints, 3)
    );
    const lineLoop = new THREE.LineLoop(geometry, material);
    scene.add(lineLoop);
    path_of_planets.push(lineLoop);
  }
  //////////////////////////////////////
  /////////////////////////////////////
  //SECTION create planet
  const genratePlanet = (dplanet) => {
    const size = sizeConst * dplanet.radius;
    const planetTexture = dplanet.name;
    const x = distanceConst * dplanet.distance;
    const ring = dplanet.ring;
    const planetGeometry = new THREE.SphereGeometry(size, 50, 50);
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    const planetObj = new THREE.Object3D();
    planet.position.set(x, 0, 0);
    if (ring) {
      const ringGeo = new THREE.RingGeometry(
        sizeConst * ring.innerRadius,
        sizeConst * ring.outerRadius,
        32
      );
      const ringMat = new THREE.MeshBasicMaterial({
        map: ring.ringmat,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      planetObj.add(ringMesh);
      ringMesh.position.set(x, 0, 0);
      ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(planetObj);

    planetObj.add(planet);
    createLineLoopWithMesh(x, 0xffffff, 3);
    return {
      planetObj: planetObj,
      planet: planet,
    };
  };

  planetData[view].forEach((dplanet) => {
    const { planetObj, planet } = genratePlanet(dplanet);
    dplanet.planetObj = planetObj;
    dplanet.planet = planet;
    planetData.store[view][dplanet.planet_name] = planet;
  });
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - GUI options
  var GUI = dat.gui.GUI;
  const gui = new GUI();
  const options = {
    "Natural Lighting": true,
    "Show path": true,
    speed: 1,
    focus: "sun",
  };
  gui.add(options, "Natural Lighting").onChange((e) => {
    ambientLight.intensity = e ? 0.15 : 0.75;
    sunLight.intensity = e ? 3 : 1;
  });
  gui.add(options, "Show path").onChange((e) => {
    path_of_planets.forEach((dpath) => {
      dpath.visible = e;
    });
  });
  gui.add(options, "speed", min_speed, max_speed);
  const makeFocus = () => showInfo(options.focus);
  gui.add(options, "focus", Object.keys(basicInformation)).onChange(makeFocus);
  gui.domElement.style.display = isshow;
  //////////////////////////////////////

  //////////////////////////////////////
  //NOTE - animate function
  function animate() {
    if (cview === view) {
      sun.rotateY(options.speed * 0.004);
      planetData[view].forEach(({ planetObj, planet, rsas, srs }) => {
        planetObj.rotateY(options.speed * rsas * rotaingSpeedAroundSunConst);
        planet.rotateY(options.speed * srs * selfRotateConst);
      });
      var innerBodyGlobalPosition = new THREE.Vector3();
      planetData.store[view][options.focus].getWorldPosition(
        innerBodyGlobalPosition
      );
      let { x, y, z } = innerBodyGlobalPosition;
      camera.lookAt(new THREE.Vector3(x, y, z));
      orbit.target.set(x, y, z);
    }
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
  //////////////////////////////////////
  return { gui, renderer, camera, makeFocus };
};
//////////////////////////////////////

//////////////////////////////////////
//SECTION - init
let cview = "real";
const scene = {
  real: createScene("real", "block"),
  approx: createScene("approx", "none"),
};
showInfo("sun");
//////////////////////////////////////

//////////////////////////////////////
//SECTION - event
const changeSceneSelect = select(".change-scene-select");
changeSceneSelect.onclick = () => {
  changeSceneSelect.classList.toggle("selected");
  let temp = cview == "real";
  cview = temp ? "approx" : "real";
  scene.real.gui.domElement.style.display = temp ? "none" : "block";
  scene.real.renderer.domElement.style.display = temp ? "none" : "block";

  scene.approx.gui.domElement.style.display = temp ? "block" : "none";
  scene.approx.renderer.domElement.style.display = temp ? "block" : "none";
  scene[cview].makeFocus();
};
const show_info_container = select(".show-info-container");
const hide_info = select(".show-info-container>.hide-info");
const show_info = select(".show-info-container>.show-info");
hide_info.onclick = () => show_info_container.setAttribute("show", "false");
show_info.onclick = () => show_info_container.setAttribute("show", "true");

//////////////////////////////////////

//////////////////////////////////////
//SECTION - resize camera view
window.addEventListener("resize", () => {
  Object.values(scene).forEach(({ camera, renderer }) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
//////////////////////////////////////
