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

const links = [
  {
    title: "LA Weekly",
    url: "https://www.laweekly.com/get-on-up-arts-calendar-november-10-16/#:~:text=delavallade.com.-,Volta%3A%20MILK%20at%20IAO,-Volta%3A%20MILK",
  },
  {
    title: "LAist",
    url: "https://laist.com/news/arts-and-entertainment/best-events-things-to-do-this-week-los-angeles-southern-california-november-7-10-2022#:~:text=6%20p.m.-,Milk%20with%20Volta,-Institute%20of%20Art",
  },
  {
    title: "ArtsBeatLA",
    url: "https://www.artsbeatla.com/2022/09/dance-perfume/",
  },
  {
    title: "Venn Journal",
    url: "https://global.venn.city/venn-journal/programming/volta-dance-collective-la/?fbclid=PAAaZjvqDCIf4ajI8pIl2s6YCjjAU3Hz_9XnGFbgaZ2GbRRdO39M9tK2WQC-o",
  },
];

export default function Press() {
  return (
    <Layout>
      <div className="wrapper press">
        {quotes.map((quote) => (
          <div className="relative z-[2] text-center text-xl uppercase pb-8">
            "{quote.text}"{" "}
            <a
              href={quote.link}
              target="_blank"
              className="underline underline-offset-4"
            >
              -{quote.publication}
            </a>
          </div>
        ))}
        <div className="flex justify-center py-8">
          <div>
            <img src="milk.jpg" className="max-w-lg" />
            <div className="text-[8px] pt-2">Photo by Anna Tse</div>
          </div>
        </div>
        <div className="text-xl text-center pt-8">
          |
          {links.map((link) => (
            <div className="inline">
              {" "}
              <a
                href={link.url}
                target="_blank"
                className="underline underline-offset-4"
              >
                {link.title}
              </a>{" "}
              |
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
