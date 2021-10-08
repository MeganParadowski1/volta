import { useEffect, useLayoutEffect } from "react";
import styles from "../styles/Home.module.css";

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function GlitchVideo() {
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
    renderer.setSize(window.innerWidth, window.innerHeight);

    const texture = new THREE.VideoTexture(video);

    const geometry = new THREE.PlaneBufferGeometry(ratio, 1);
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
      console.log("resize");

      setTimeout(() => {
        renderer.setSize(0, 0);
        width = window.innerHeight * ratio;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
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
      if (!isMouseMoving) {
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
    <>
      <div
        id="videoContainer"
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: "-1",
        }}
      />
      <video
        id="video"
        className={styles.homeVideo}
        // style={{ opacity: 0, width: 100, height: 100 }}
        src="/volta_perf.mp4"
        autoPlay
        loop
        muted
        playsInline="False"
      />
    </>
  );
}
