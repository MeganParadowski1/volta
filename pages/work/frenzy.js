import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Frenzy() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">Frenzy</div>
            <div className="paragraph italic pb-4">Los Angeles, CA</div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Choreography</div> by Mamie
                Green and Megan Paradowski
              </div>
              <div>
                <div className="font-bold inline">Shot</div> by Ariel Klevecz
              </div>
              <div>
                <div className="font-bold inline">Performed</div> by Mamie Green
                and Megan Paradowski
              </div>
              <div>Debuted in Sizzle! Dance & Film Online Festival</div>
            </div>
          </div>
          <div className="pt-8 lg:pl-8 basis-1/2">
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/616193285?h=1ea9c3f079"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
