import Footer from "../components/Footer";
import Layout from "../components/Layout";

const salt_images = [
  "salt1.jpg",
  "salt3.jpg",
  "salt4.jpg",
  "salt2.png",
  "salt5.jpg",
  "salt6.jpg",
];

export default function Salt() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="lg:flex lg:flex-col items-center">
          <div className="font-bold text-7xl">SALT</div>
          <div className="paragraph italic pb-4">
            2220 Arts + Archives, Los Angeles, CA
          </div>
          <div className="lg:flex lg:px-16 pb-16  pt-8">
            <div className="basis-1/2 lg:pb-0 pb-8">
              <div className="paragraph text-justify">
                Directed by{" "}
                <div className="font-bold inline">Megan Paradowski</div> and{" "}
                <div className="font-bold inline">Mamie Green</div> of Volta,
                writers <div className="font-bold inline">Sammy Loren</div> and{" "}
                <div className="font-bold inline">Ellington Wells</div>{" "}
                reimagine Euripides’ <i>Medea</i>, setting the iconic tragedy in
                LA's shimmering art world. Harpist{" "}
                <div className="font-bold inline">Melissa Achten</div> and
                composer <div className="font-bold inline">Eli Klausner</div>{" "}
                score the piece live as actors{" "}
                <div className="font-bold inline">Ellington Wells</div> (Medea),
                and <div className="font-bold inline">August Gray Gall</div>{" "}
                (Jason) split the audience in two and recount their side of the
                story, all while leading them through edible installations by
                multidisciplinary artist and chef{" "}
                <div className="font-bold inline">Heidi Ross.</div> Performed by
                dancers{" "}
                <div className="font-bold inline">
                  Marirosa Crawford, Ryley Polak, Mamie Green,
                </div>{" "}
                and <div className="font-bold inline">Megan Paradowski</div>,
                SALT makes audiences question their assumpitons of right and
                wrong, truth and power, all while leaving everyone with
                conflicting conclusions about what was just witnessed.
              </div>
            </div>
            <div className="lg:pl-8 basis-1/2 flex flex-col justify-center">
              <div
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/845612933?h=c355a80a0f"
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
          <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-4 ">
            <img src="../salt1.jpg" className="w-full h-full object-cover" />
            <img src="../salt3.jpg" className="w-full h-full object-cover" />
            <img src="../salt4.jpg" className="w-full h-full object-cover" />
            <img src="../salt2.png" className="row-span-2 row-end-auto" />
            <img src="../salt7.jpg" className="w-full h-full object-cover" />
            <img src="../salt8.jpg" className="w-full h-full object-cover" />
            <img src="../salt5.jpg" className="w-full h-full object-cover" />
            <img src="../salt6.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="text-xs pt-2 text-right w-full pb-16">
            Photos by Anya GTA
          </div>
          <div className="flex flex-col w-full pb-16">
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/jRjUEyqhgW4"
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
          <div className="press text-justify uppercase pb-8 md:px-16">
            "SALT is a true full-body experience. Jason and Medea split the
            audience into two, each telling their side of the story until a
            culminating monologue from each brings your loyalty into question.
            Can you blame me? they ask. Text by Wells and Sammy Loren ropes you
            into the conflict; it is impossible to remain impartial. Above all,
            the movement morphs the atmosphere into an enthralling reality,
            grounded in the human experience but contorted by suspicion and
            paranoia. Disorientation has never been more luscious."
            <a
              href="https://www.ladancechronicle.com/pick-a-side-voltas-salt-sways-senses-and-loyalties/"
              target="_blank"
              className="underline underline-offset-4"
            >
              {" "}
              -LA Dance Chronicle
            </a>
          </div>
          <div className="press text-justify uppercase md:px-16">
            "Still, this was immersive theater at its best: In between bites of
            Chef Heidi’s divine dishes, the choreography and its execution
            seemed a perfect fit for the bare-boned space, which did happen to
            house several book-laden shelves."
            <a
              href="https://fjordreview.com/blogs/all/volta-collective-salt"
              target="_blank"
              className="underline underline-offset-4"
            >
              {" "}
              -Fjord Review
            </a>
          </div>
          <div className="flex flex-col w-full pt-16">
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/822536847?h=c355a80a0f"
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
