import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";

export default function Home() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer();

    const video = document.getElementById("video");
    const container = document.getElementById("videoContainer");
    container.appendChild(renderer.domElement);

    //Crazy sizing
    const ratio = video.videoWidth / video.videoHeight;
    let width = window.innerHeight * ratio;
    if (width > window.innerWidth) {
      renderer.setSize(width, window.innerHeight);
      const marginLeft = Math.abs(window.innerWidth - width) / 2;
      container.style.marginLeft = `${-marginLeft}px`;
    } else {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    const texture = new THREE.VideoTexture(video);

    const geometry = new THREE.PlaneBufferGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const glitchPass = new GlitchPass();

    let isMouseMoving = false;

    function animate() {
      if (isMouseMoving) {
        glitchPass.goWild = true;
      } else {
        glitchPass.goWild = false;
        composer.removePass(glitchPass);
      }
      requestAnimationFrame(animate);
      composer.render();
    }
    animate();

    function onWindowResize() {
      width = window.innerHeight * ratio;
      if (width > window.innerWidth) {
        renderer.setSize(width, window.innerHeight);
        const marginLeft = Math.abs(window.innerWidth - width) / 2;
        container.style.marginLeft = `${-marginLeft}px`;
      } else {
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
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
  });
  return (
    <Layout>
      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <div id="videoContainer" />
      <video
        id="video"
        className={styles.homeVideo}
        src="/volta.mp4"
        autoPlay
        loop
        muted
        playsInline={false}
      />
      <div className={styles.videoOverlay} />
    </Layout>
  );
}
