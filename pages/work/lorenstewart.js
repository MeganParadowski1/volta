import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

export default function LorenStewart() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:px-16 items-center pb-16">
          <div className="basis-1/2">
            <div className="font-bold text-lg">Loren Stewart</div>
            <div className="paragraph italic pb-4">Los Angeles, CA</div>
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Movement:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">Photographer:</div> Niki Byrne
              </div>
              <div>
                <div className="font-bold inline">Stylist:</div> Hayley McCune
              </div>
              <div>
                <div className="font-bold inline">Dancers:</div> Megan
                Paradowski, Mamie Green
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4 pb-16">
          <img src="../ls21.png" className="w-full h-full object-cover" />
          <img src="../ls23.png" className="w-full h-full object-contain" />
          <img src="../ls22.png" className="w-full h-full object-cover" />
        </div>
        <div className="lg:flex lg:px-16 items-center pb-16">
          <div className="basis-1/2">
            <div className="paragraph">
              <div>
                <div className="font-bold inline">Movement:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">Casting:</div> VOLTA
              </div>
              <div>
                <div className="font-bold inline">Photographer:</div> Adeline
                Wohlwend
              </div>
              <div>
                <div className="font-bold inline">Dancers:</div> Kayla Gabrielle
                Aguila, Marirosa Crawford, Megan Paradowski, Mamie Green
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4">
          <img src="../ls2.jpg" className="w-full h-full object-cover" />
          <img src="../ls3.jpg" className="w-full h-full object-cover" />
          <img src="../ls4.jpg" className="w-full h-full object-cover" />
          <img src="../ls9.jpg" className="w-full h-full object-cover" />
          <img src="../ls8.jpg" className="w-full h-full object-cover" />
          <img src="../ls10.jpg" className="w-full h-full object-cover" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
