import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Levis() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:px-16 items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">Levi's</div>
            <div className="paragraph italic pb-4">Confidence</div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Director:</div> Matthew
                Trainor
              </div>
              <div>
                <div className="font-bold inline">DP:</div> Gabe Kimpson
              </div>
              <div>
                <div className="font-bold inline">AC:</div> Steven Neel
              </div>
              <div>
                <div className="font-bold inline">Sound:</div> Evan Millard
              </div>
              <div>
                <div className="font-bold inline">Art:</div> Kyle Busick
              </div>
              <div>
                <div className="font-bold inline">Production Support:</div>{" "}
                Carmen Magaña
              </div>
              <div>
                <div className="font-bold inline">Movement:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">Edit:</div> Ethan Sperber
              </div>
              <div>
                <div className="font-bold inline">Sound Design:</div> Ethan
                Sperber
              </div>
              <div>
                <div className="font-bold inline">Dancers:</div> Mamie Green,
                Megan Paradowski, Marirosa Crawford, Keilan Stafford, Tippy
                Dringman
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
                src="https://player.vimeo.com/video/800960611?h=c355a80a0f"
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
