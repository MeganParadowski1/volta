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
              take class with Annalise Gehling, Ryan Ruiz, and Meg and Mamie of
              Volta.
            </div>
            <div className="pb-6">
              Saturday, February 25th | 2-5pm |{" "}
              <div className="inline underline underline-offset-4 decoration-1">
                <a href="https://brockusprojectdance.org/space" target="_blank">
                  Brockus Dance Project
                </a>
              </div>{" "}
              | Sliding scale $25-50
            </div>
            <a href="https://forms.gle/n5dQVRqwfHoG5ee47" target="_blank">
              <button className="buttonSecondary">Register</button>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-24 pb-12">
          <div>
            <img src="2.png" />
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
                (un)becoming with Annalise Gehling
              </div>
              An (un)becoming class investigates the pleasure in embodied
              storytelling. Inspired by the modes of contemporary dance and
              physical theatre, this class asks us to be curious about how
              theatrical expression informs the fullness of our physicality. We
              will activate the senses through a durational “shake”, move into a
              combination that calls for deep inner-listening, and play together
              to write a new movement story.
            </div>
          </div>
          <div>
            <img src="3.png" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">Creation with Volta</div>
              This class explores ways of making using gesture, memory, and
              time. Dive into a dreamlike world of storytelling through
              physicality and theatricality. We will compose our own material
              and play within Volta’s choreographic framework.
            </div>
          </div>
          <div>
            <img src="1.png" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
                Function & Floor with Ryan Ruiz
              </div>
              Function & Floor is a class that focuses around the strength of
              grounding one’s body. This class will begin with a warm up using
              mobility and strengthening dynamic movements to increase the
              mover’s range of motion and heat the body to prepare contact with
              the floor. We will find the connection between body and floor
              through various movements across the space ending with a phrase.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
