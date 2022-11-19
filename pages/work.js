import { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import styles from "../styles/Work.module.css";

const works = [
  {
    title: "MILK",
    text1: "Institute for Art and Olfaction, Los Angeles, CA",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3:
      "Scents by Saskia-Wilson Brown for the Institute for Art and Olfaction",
    vimeo: "",
    thumbnail: "milkThumbnail.png",
  },
  {
    title: "I Want To Be In Love",
    text1: "Hosek Contemporary, Berlin, Germany",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3: "Shot by Ed James Harding",
    vimeo: "https://vimeo.com/748346281",
    thumbnail: "IWTBIL.png",
  },
  {
    title: "BACKWASH",
    text1: "NAVEL, Los Angeles, CA",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3: "Noise by Peter Kalisch, shot by Anna Tse",
    vimeo: "https://vimeo.com/721255783",
    thumbnail: "backwashpaige.png",
  },
  {
    title: "Orange County Dance Festival",
    text1: "Rose Center Theatre, Westminster, CA",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3: "",
    vimeo: "",
    thumbnail: "OCDF.jpg",
  },
  {
    title: "In Liquid Light",
    text1: "Museum of Modern Art, Glendale, CA",
    text2:
      "Choreography by Mamie Green and Megan Paradowski, in collaboration with the dancers",
    text3: "",
    vimeo: "https://vimeo.com/689043359",
    thumbnail: "ILL.png",
  },
  {
    title: "BITE",
    text1: "Gallery SADE, Los Angeles, CA",
    text2: "Choreographed and performed by Mamie Green and Megan Paradowski",
    text3: "Live music by Ariel Klevecz",
    vimeo: "https://vimeo.com/641693637",
    thumbnail: "Bite.png",
  },
  {
    title: "Frenzy",
    text1: "Debuted in Sizzle! Dance & Film Online Festival",
    text2: "Choreographed and performed by Mamie Green and Megan Paradowski",
    text3: "Shot by Ariel Klevecz",
    vimeo: "https://vimeo.com/616193285",
    thumbnail: "Frenzy.png",
  },
  {
    title: "MILIEU",
    text1: "The Lash Social, Los Angeles, CA",
    text2:
      "Created and performed by Mamie Green and Megan Paradowski with sound by teh Raptor",
    text3: "Captured by Brenton Cooper",
    vimeo: "https://vimeo.com/658669181",
    thumbnail: "Milieu.png",
  },
];

export default function Work() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-24">
          {works.map((work) => (
            <div className="z-[2]">
              <a href={work.vimeo} target="_blank">
                <img src={work.thumbnail} className="aspect-[2/1.1]" />
                <div className="subtitle pt-4 text-center">{work.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
