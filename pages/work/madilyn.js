import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Madilyn() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:px-16 items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">Madilyn Bailey</div>
            <div className="paragraph italic pb-4">
              Tattoos & Therapy (Official Music Video)
            </div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Director:</div> Matthew
                Trainor
              </div>
              <div>
                <div className="font-bold inline">CD:</div> Jade Ehlers
              </div>
              <div>
                <div className="font-bold inline">Producer:</div> Carmen Magaña
              </div>
              <div>
                <div className="font-bold inline">DP:</div> Gabe Kimpson
              </div>
              <div>
                <div className="font-bold inline">AC:</div> Steven Neel
              </div>
              <div>
                <div className="font-bold inline">Gaffer:</div> Kevin Yr Cho
              </div>
              <div>
                <div className="font-bold inline">KG:</div> Thorn Shaffer
              </div>
              <div>
                <div className="font-bold inline">Movement:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">PA:</div> Alejandra Navarro
              </div>
              <div>
                <div className="font-bold inline">VFX:</div> Austin Hodaie
              </div>
              <div>
                <div className="font-bold inline">Color:</div> Cameron Marygold
              </div>
              <div>
                <div className="font-bold inline">Management:</div> Red Light
                Management
              </div>
              <div>
                <div className="font-bold inline">Starring:</div> Ivan Casanova,
                Tyrone White, Marinos Aristidou, Raymond Guzman, Mike Smith,
                James Benrud, Jordan Kemp, Matthew Gerrish
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
                src="https://www.youtube.com/embed/NTyiHHtHJrk"
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
