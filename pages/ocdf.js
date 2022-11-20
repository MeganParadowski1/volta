import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Ocdf() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex items-center">
          <div>
            <div className="font-bold text-lg">OCDF</div>
            <div className="paragraph italic pb-4">
              Rose Center Theatre, Westminster, CA
            </div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Choreography</div> by Mamie
                Green and Megan Paradowski, in collaboration with the dancers
              </div>
              <div>
                <div className="font-bold inline">Performed</div> by Paige
                Amicon, Nat Wilson, Mamie Green, and Megan Paradowski
              </div>
            </div>
          </div>
          <div className="pt-8 lg:pl-8">
            <img src="OCDF.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
