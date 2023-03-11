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
              take class with Cody Brunelle-Potter, Luke Dakota Zender, and Meg
              and Mamie of Volta.
            </div>
            <div className="pb-6">
              Saturday, March 25th | 12-3:30pm |{" "}
              <div className="inline underline underline-offset-4 decoration-1">
                <a href="https://brockusprojectdance.org/space" target="_blank">
                  Brockus Dance Project
                </a>
              </div>{" "}
              | Sliding scale $25-50
            </div>
            <a href="https://forms.gle/Lu342rirCbgc7LN17" target="_blank">
              <button className="buttonSecondary">Register</button>
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-24 pb-12">
          <div>
            <img src="Luke.jpg" />
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
                Energetic Organization with Luke Dakota Zender
              </div>
              Luke Dakota Zender prioritizes making connections between our
              mental, emotional states and our physical being. They are informed
              always by the expansive quality of Mother Nature herself and they
              hope to cultivate a physical and metaphysical understanding or
              relationship within their students. Luke Dakota has been inspired
              by an array of different codified kinesthetic techniques including
              release, counter technique, floor work, sensory and imagery based
              improv, breath work and more. Through a thoughtfully curated
              vocabulary Zender attempts to catalyze a sense of “efficient
              expansion” that reflects the universe and bodies we were born
              into.
            </div>
          </div>
          <div>
            <img src="Cody.jpg" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">
                Sculpture: Inside/Outside with Cody Brunelle-Potter
              </div>
              In this workshop we’ll be exploring the ideas of sculpture from
              both inside and outside perspectives. This will happen through a
              series of play and debrief sessions. The hope for participants is
              that there is a time and space to create sculpture to be viewed
              and embodied while learning about ourselves in the process.
            </div>
          </div>
          <div>
            <img src="rep.jpg" />{" "}
            <div className="text-justify pt-4">
              <div className="accentFont pb-4">Rep with Volta</div>
              This class guides you through an explorative warmup incorporating
              gesture, core-work, and memory. Next, we will jump in to Volta's
              movement vocabulary, learning and practicing phrasework or solo
              work from one of our rep pieces.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
