import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function MilkFootage() {
  return (
    <Layout>
      <div className="wrapper">
        <video
          id="video"
          className=""
          src="/milktrailer.mp4"
          autoPlay
          loop
          controls
          playsInline="False"
        />
      </div>
      <Footer />
    </Layout>
  );
}
