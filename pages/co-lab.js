import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function CoLab() {
  return (
    <Layout>
      <div className="wrapper">
        <div
          className="uppercase text-center text-5xl pb-4"
          style={{ fontFamily: "acumin-pro, sans-serif" }}
        >
          Volta Co-Lab
        </div>
        <div className="text-center pb-4">
          Saturday, January 14th | 12-4pm | Brockus Dance Project
        </div>
        <div className="text-center pb-12 underline underline-offset-4 font-bold">
          <a href="https://forms.gle/FLZRWMAX8v2sFgDcA" target="_blank">
            Apply!
          </a>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-24 pb-12">
          <div>
            <img src="1.png" />
            <div className="text-justify pt-4">
              <div
                style={{ fontFamily: "acumin-pro, sans-serif" }}
                className="pb-4"
              >
                n(body) with Nat Wilson
              </div>
              A n(body) class celebrates the joy of sharing space with people
              and stretching our limits together. Inspired by the movement
              practices of Yin Yue and Danielle Agami, this class mixes
              creativity and clarity to create an atmosphere of mutual
              inspiration and growth. We'll activate our muscles through guided
              exercises, explore improvisational tasks, and develop an
              expressive and embodied movement language. Together, we'll sweat,
              smile, discover new sensations, and expand our possibilities.
            </div>
          </div>
          <div>
            <img src="3.png" />{" "}
            <div className="text-justify pt-4">
              <div
                style={{ fontFamily: "acumin-pro, sans-serif" }}
                className="pb-4"
              >
                Colliding Bodies with Meg and Mamie
              </div>
            </div>
          </div>
          <div>
            <img src="2.png" />{" "}
            <div className="text-justify pt-4">
              <div
                style={{ fontFamily: "acumin-pro, sans-serif" }}
                className="pb-4"
              >
                Improv and Phrase Work with Brian Golden
              </div>
              This class explores various improvisational tasks that will expand
              the boundaries of both mental and physical, providing artists with
              tools that develop their choice-making abilities. We will research
              movements that have elements of conflict, expression, and
              sensation in order to connect with dramatic and multi-dimensional
              characters.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
