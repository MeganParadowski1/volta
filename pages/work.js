import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const performance_works = [
  {
    title: "SALT",
    thumbnail: "saltcover.png",
    link: "/salt",
  },
  {
    title: "MILK",
    thumbnail: "milkThumbnail.png",
    link: "/work/milk",
  },
  {
    title: "I Want To Be In Love",
    thumbnail: "IWTBIL.png",
    link: "/work/iwtbil",
  },
  {
    title: "BACKWASH",
    thumbnail: "backwashpaige.png",
    link: "/work/backwash",
  },
  {
    title: "Orange County Dance Festival",
    thumbnail: "ocdf.png",
    link: "/work/ocdf",
  },
  {
    title: "In Liquid Light",
    thumbnail: "ILL.png",
    link: "/work/ill",
  },
  {
    title: "Frenzy",
    thumbnail: "Frenzy.png",
    link: "/work/frenzy",
  },
];

const commercial_works = [
  {
    title: "CloZee feat. ROZET",
    thumbnail: "clozee.png",
    link: "/work/clozee",
  },
  {
    title: "Madilyn Bailey",
    thumbnail: "madilyn.png",
    link: "/work/madilyn",
  },
  {
    title: "Levi's",
    thumbnail: "Levis.png",
    link: "/work/levis",
  },
  {
    title: "Loren Stewart",
    thumbnail: "ls4.jpg",
    link: "/work/lorenstewart",
  },
];

export default function Work() {
  const [showCommercial, setshowCommercial] = useState(false);

  const router = useRouter();
  // Clean up url on refresh
  useEffect(() => {
    if (!router.asPath.includes("commercial")) {
      setshowCommercial(false);
    } else {
      setshowCommercial(true);
    }
  }, []);

  const changeRoute = (route) => {
    setshowCommercial(route == "commercial");
    router.push("?" + route);
  };

  return (
    <Layout>
      <div className="wrapper">
        <div className="flex w-full justify-center pb-16">
          <button
            onClick={() => changeRoute("performance")}
            className={
              "pr-8 subtitle" +
              (!showCommercial
                ? " underline decoration-[0.5px] underline-offset-4 duration-300"
                : "")
            }
          >
            Performance
          </button>
          <button
            onClick={() => changeRoute("commercial")}
            className={
              "subtitle" +
              (showCommercial
                ? " underline decoration-[0.5px] underline-offset-4 duration-300"
                : "")
            }
          >
            Commercial
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-24">
          {showCommercial
            ? commercial_works.map((work) => (
                <div className="z-[2] cursor-pointer" key={work.title}>
                  <Link href={work.link}>
                    <div>
                      <img
                        src={work.thumbnail}
                        className="aspect-[2/1.1] object-cover"
                      />
                      <div className="subtitle pt-4 text-center">
                        {work.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : performance_works.map((work) => (
                <div className="z-[2] cursor-pointer" key={work.title}>
                  <Link href={work.link}>
                    <div>
                      <img
                        src={work.thumbnail}
                        className="aspect-[2/1.1] object-cover"
                      />
                      <div className="subtitle pt-4 text-center">
                        {work.title}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
