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
    const ratio = 1.7777777777777777;
    let width = window.innerHeight * ratio;
    console.log(ratio, width);
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

    let frame;
    let frameCount = 0;
    function animate() {
      if (isMouseMoving) {
        glitchPass.goWild = true;
      }
      if (frameCount > 30) {
        glitchPass.goWild = false;
        composer.removePass(glitchPass);
      }
      frame = requestAnimationFrame(animate);
      frameCount += 1;
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
    let timer;
    function checkMouseStop() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        isMouseMoving = false;
      }, 200);
    }
    function onMouseMove() {
      checkMouseStop();
      if (!isMouseMoving && frameCount > 50) {
        isMouseMoving = true;
        frameCount = 0;
        composer.addPass(glitchPass);
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
      <div id="videoContainer" />
      <video
        id="video"
        className={styles.homeVideo}
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
