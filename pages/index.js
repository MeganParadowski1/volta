import { useEffect, useLayoutEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Home() {
  useEffect(() => {
    const scene = new THREE.Scene();
    // const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer();

    const video = document.getElementById("video");
    const container = document.getElementById("videoContainer");
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    //Crazy sizing
    const ratio = 1.7777777777777777;
    console.log(window.innerWidth, window.innerHeight);
    let width = window.innerHeight * ratio;
    console.log(ratio, width);
    // if (width > window.innerWidth) {
    //   console.log("mobile");
    //   renderer.setSize(width, window.innerHeight);
    //   const marginLeft = Math.abs(window.innerWidth - width) / 2;
    //   container.style.marginLeft = `${-marginLeft}px`;
    // } else {
    renderer.setSize(window.innerWidth, window.innerHeight);
    // }

    const texture = new THREE.VideoTexture(video);

    const geometry = new THREE.PlaneBufferGeometry(ratio, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    // plane.scale.set(0.3, 0.3, 0.5);
    scene.add(plane);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const glitchPass = new GlitchPass();

    let isMouseMoving = false;

    let frame;
    function animate() {
      controls.update();
      if (isMouseMoving) {
        glitchPass.goWild = true;
      } else {
        glitchPass.goWild = false;
        composer.removePass(glitchPass);
      }
      frame = requestAnimationFrame(animate);
      composer.render();
    }
    animate();

    function onWindowResize() {
      console.log("resize");
      // setTimeout(() => {
      renderer.setSize(0, 0);
      width = window.innerHeight * ratio;
      console.log(window.innerWidth, window.innerHeight);
      // if (width > window.innerWidth) {
      //   renderer.setSize(width, window.innerHeight);
      //   const marginLeft = Math.abs(window.innerWidth - width) / 2;
      //   container.style.marginLeft = `${-marginLeft}px`;
      // } else {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // }
      // }, 1000);
    }
    function onMouseMove() {
      if (!isMouseMoving) {
        isMouseMoving = true;
        composer.addPass(glitchPass);
        setTimeout(() => {
          isMouseMoving = false;
        }, 200);
      }
    }
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <Layout>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <div
        id="videoContainer"
        style={{ position: "absolute", overflow: "hidden" }}
      />
      <video
        id="video"
        className={styles.homeVideo}
        // style={{ opacity: 0, width: 100, height: 100 }}
        src="/volta.mp4"
        autoPlay
        loop
        muted
        playsInline="False"
      />
      <div className={styles.videoOverlay} />
    </Layout>
  );
}
