import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function iwtbil() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex items-center">
          <div className="basis-1/2">
            <div className="font-bold text-lg">I Want To Be In Love</div>
            <div className="paragraph italic pb-4">
              Hosek Contemporary, Berlin, Germany
            </div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Choreography</div> by Mamie
                Green and Megan Paradowski, in collaboration with the dancers
              </div>
              <div>
                <div className="font-bold inline">Live music</div> by Ana Luisa
                Pereira
              </div>
              <div>
                <div className="font-bold inline">Recorded sound</div> by
                Melissa Achten
              </div>
              <div>
                <div className="font-bold inline">Shot</div> by Ed James Harding
              </div>
              <div>
                <div className="font-bold inline">Performed</div> by Shay Saver,
                Sydney Rabin, Hannah Ackerman, Mamie Green, and Megan Paradowski
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
                src="https://player.vimeo.com/video/748346281?h=7a40d3ba0e"
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
