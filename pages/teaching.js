import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Teaching() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="block md:flex justify-center items-center">
          <div className="basis-1/2 flex flex-col items-center">
            <div className="accentFont uppercase text-center text-5xl pb-8">
              Fall Workshop
            </div>
            <div className="text-center pb-8">Sept 22 - 24 | 11am-3pm</div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFBsREZZ9fLEHw-2R-9_kqsVTag9fFM7cwlQi7b5e2Z2_I6g/viewform"
              target="_blank"
            >
              <button className="buttonSecondary">Register</button>
            </a>
            <div className="pt-8 w-full md:w-3/4">
              <strong>
                <div className="text-center">FRIDAY SEPT 22</div>
              </strong>
              <br /> 11:30 - 1 | Warmup + Colliding Bodies
              <br /> 1:15 - 3 | Process <br />
              <br />
              <strong>
                <div className="text-center">SATURDAY SEPT 23</div>
              </strong>{" "}
              <br />
              11:30 - 1 | ground grooves w/ Gracie
              <br /> 1:15 - 3 | Phrasework + Process <br />
              <br />
              <strong>
                <div className="text-center">SUNDAY SEPT 24</div>
              </strong>
              <br /> 11:30 - 12 | Warmup <br />
              12 - 2 | Process
              <br /> 2:30 | Informal showing
            </div>
          </div>
          <div className="basis-1/2 flex justify-center pt-8 md:pt-0">
            <video loop autoPlay muted className="w-full md:w-3/4">
              <source src="shift.mp4" />
            </video>
          </div>
        </div>
        <div className="accentFont uppercase text-center text-5xl pb-8 pt-24">
          Volta Co-Lab
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center md:max-w-6xl pb-8 text-justify md:text-center w-full md:w-3/4">
            Volta Co-Lab is a workshop series that brings together dance artists
            from different backgrounds who share a passion for inclusive and
            innovative dance-making. Stay tuned for the next iteration!
          </div>
          <video loop autoPlay muted className="w-full">
            <source src="colab.mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
