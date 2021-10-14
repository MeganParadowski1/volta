import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GlitchVideo = dynamic(() => import("../components/GlitchVideo"), {
  ssr: false,
});

let firstLoad = true;
export default function Home() {
  const [loading, setLoading] = useState(true);
  const doneLoading = () => {
    if (firstLoad) {
      setLoading(false);
      firstLoad = false;
    }
  };
  useEffect(() => {
    if (firstLoad) {
      console.log("what");
      // document.addEventListener("DOMContentLoaded", function () {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (
          entries,
          observer
        ) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (
                  typeof videoSource.tagName === "string" &&
                  videoSource.tagName === "SOURCE"
                ) {
                  videoSource.src = videoSource.dataset.src;
                }
              }
              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
      // });
    }
  }, []);
  return (
    <Layout>
      <AnimatePresence>
        {loading && firstLoad && (
          <motion.div
            // initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={styles.loading}
          >
            <div className={styles.titleContainer}>
              <img className={styles.logo} src="/volta_white_logo.png" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.titleContainer}>
        <img className={styles.logo} src="/volta_white_logo.png" />
        <div className={styles.subtitle}>collective</div>
      </div>
      <GlitchVideo doneLoading={doneLoading} />
      <div className={styles.videoOverlay} />
      <video
        style={{ display: "none" }}
        className="lazy"
        autoPlay
        muted
        loop
        playsInline
      >
        <source data-src="/volta_cut_2.mp4" type="video/mp4" />
      </video>
      <video
        style={{ display: "none" }}
        className="lazy"
        autoPlay
        muted
        loop
        playsInline
      >
        <source data-src="/volta.mp4" type="video/mp4" />
      </video>
    </Layout>
  );
}
