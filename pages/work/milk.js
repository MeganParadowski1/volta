import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Milk() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:px-16 items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">Milk</div>
            <div className="paragraph italic pb-4">
              Institute for Art and Olfaction, Los Angeles, CA
            </div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Choreography</div> by Mamie
                Green and Megan Paradowski, in collaboration with the dancers
              </div>
              <div>
                <div className="font-bold inline">Live music</div> composed and
                performed by harpist Melissa Achten and sound architect Nicolas
                Snyder
              </div>
              <div>
                <div className="font-bold inline">Scents</div> by Saskia-Wilson
                Brown for the Institute for Art and Olfaction
              </div>
              <div>
                <div className="font-bold inline">Original text</div> written
                and performed by Alexis Okeowo
              </div>
              <div>
                <div className="font-bold inline">Performed</div> by Keilan
                Stafford, Marirosa Crawford, Claire You, Madi Tanguay, Mamie
                Green, and Megan Paradowski
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
                src="https://player.vimeo.com/video/776655074?h=c355a80a0f"
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
