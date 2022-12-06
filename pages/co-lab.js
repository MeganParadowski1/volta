import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function CoLab() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="accentFont uppercase text-center text-5xl pb-8">
          Volta Co-Lab
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center md:max-w-6xl pb-12">
            <div className="pb-4">
              Volta Co-Lab is a workshop series that brings together dance
              artists from different backgrounds who share a passion for
              inclusive and innovative dance-making. This month we invite you to
              take class with Nat Wilson, Brian Golden, and Mamie and Meg of
              Volta.
            </div>
            <div className="pb-6">
              Saturday, January 14th | 12-4pm |{" "}
              <div className="inline underline underline-offset-4 decoration-1">
                <a href="https://brockusprojectdance.org/space" target="_blank">
                  Brockus Dance Project
                </a>
              </div>{" "}
              | Sliding scale $25-50
            </div>
            <a href="https://forms.gle/FLZRWMAX8v2sFgDcA" target="_blank">
              <button className="buttonSecondary">Apply</button>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-24 pb-12">
          <div>
            <img src="1.png" />
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">n(body) with Nat Wilson</div>A
              n(body) class celebrates the joy of sharing space with people and
              stretching our limits together. Inspired by the movement practices
              of Yin Yue and Danielle Agami, this class mixes creativity and
              clarity to create an atmosphere of mutual inspiration and growth.
              We'll activate our muscles through guided exercises, explore
              improvisational tasks, and develop an expressive and embodied
              movement language. Together, we'll sweat, smile, discover new
              sensations, and expand our possibilities.
            </div>
          </div>
          <div>
            <img src="3.png" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
                Colliding Bodies with Meg and Mamie
              </div>
              Colliding Bodies is a partnering class that explores highly
              physical and acrobatic partnering in a safe and grounded way.
              Rebound, theatricality, and gesture are used to tell stories
              through connection to another body. We will discover how to manage
              each other’s weight in unusual contexts and learn partnering
              repertory from Volta’s recent work, “MILK.”
            </div>
          </div>
          <div>
            <img src="2.png" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
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
