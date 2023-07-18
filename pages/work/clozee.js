import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Clozee() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:px-16 items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">CloZee</div>
            <div className="paragraph italic pb-4">
              Courage (feat. ROZET) (Official Music Video)
            </div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Director:</div> Matthew
                Trainor
              </div>
              <div>
                <div className="font-bold inline">Starring:</div> Jalen Rashad
              </div>
              <div>
                <div className="font-bold inline">Director of Photography:</div>{" "}
                Jeremy Belack
              </div>
              <div>
                <div className="font-bold inline">First AC:</div> Bennett Lees
              </div>
              <div>
                <div className="font-bold inline">Gaffer:</div> Tristan Moffatt
              </div>
              <div>
                <div className="font-bold inline">Grip:</div> Travis Moffatt
              </div>
              <div>
                <div className="font-bold inline">Steadicam:</div> Donald Turner
              </div>
              <div>
                <div className="font-bold inline">Movement:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">VFX:</div> Jade Ananda
              </div>
              <div>
                <div className="font-bold inline">Color:</div> Gabriel Sanchez
              </div>
              <div>
                <div className="font-bold inline">Production Support:</div>{" "}
                Isaiah Goltara
              </div>
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
                src="https://www.youtube.com/embed/Axd3LP1k6NI"
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
