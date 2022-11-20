import Footer from "../components/Footer";
import Layout from "../components/Layout";

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
            <img src="milkThumbnail.png" />
            <div className="text-[10px] pt-2 text-right">Photo by Anna Tse</div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
