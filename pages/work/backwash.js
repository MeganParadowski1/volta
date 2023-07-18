import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function Backwash() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex items-center relative">
          <div className="basis-1/2">
            <div className="font-bold text-lg">BACKWASH</div>
            <div className="paragraph italic pb-4">Navel LA</div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Choreography</div> by Mamie
                Green and Megan Paradowski, in collaboration with the dancers
              </div>
              <div>
                <div className="font-bold inline">Live sound</div> by noise
                artist Peter Kalisch
              </div>
              <div>
                <div className="font-bold inline">Shot</div> by Anna Tse
              </div>
              <div>
                <div className="font-bold inline">Performed</div> by Keilan
                Stafford, Paige Amicon, Nat Wilson, Mamie Green, and Megan
                Paradowski
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
                src="https://player.vimeo.com/video/748347467?h=86fedfb47b"
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
