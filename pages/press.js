import Footer from "../components/Footer";
import Layout from "../components/Layout";

const quotes = [
  {
    text: "What struck me was how immersive it was.",
    publication: "LA Times",
    link: "https://www.latimes.com/entertainment-arts/newsletter/2022-11-16/la-goes-out-watts-towers-reopens-l-a-goes-out#:~:text=The%20Volta%20Collective%20performs%20in%20%E2%80%9CMilk.%E2%80%9D(Anna%20Tse)",
  },
  {
    text: "their physical strength and choreography deserves to be seen.",
    publication: "LA Dance Chronicle",
    link: "https://www.ladancechronicle.com/volta-collective-at-glendales-museum-of-neon-art/",
  },
  {
    text: "[Volta] viscerally tackles the subject matter of emotion overtaking reason, of love spurned so intensely it morphs into a dark mania.",
    publication: "Hyperallergenic",
    link: "https://hyperallergic.com/780317/finding-medea-in-las-chinatown-milk-iao/",
  },
];

export default function Press() {
  return (
    <Layout>
      <div className="wrapper press">
        {quotes.map((quote) => (
          <div className="relative z-[2] text-center text-xl uppercase pb-8">
            "{quote.text}"{" "}
            <a href={quote.link} className="underline underline-offset-4">
              -{quote.publication}
            </a>
          </div>
        ))}
        <div className="flex justify-center pt-8">
          <img src="milk.jpg" className="max-w-lg" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
