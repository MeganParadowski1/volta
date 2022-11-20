import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const works = [
  {
    title: "MILK",
    thumbnail: "milkThumbnail.png",
    link: "/milk",
  },
  {
    title: "I Want To Be In Love",
    thumbnail: "IWTBIL.png",
    link: "/iwtbil",
  },
  {
    title: "BACKWASH",
    thumbnail: "backwashpaige.png",
    link: "/backwash",
  },
  {
    title: "Orange County Dance Festival",
    thumbnail: "OCDF.jpg",
    link: "/ocdf",
  },
  {
    title: "In Liquid Light",
    thumbnail: "ILL.png",
    link: "/ill",
  },
  {
    title: "Frenzy",
    thumbnail: "Frenzy.png",
    link: "/frenzy",
  },
];

export default function Work() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-24">
          {works.map((work) => (
            <div className="z-[2] cursor-pointer" key={work.title}>
              <Link href={work.link}>
                <div>
                  <img src={work.thumbnail} className="aspect-[2/1.1]" />
                  <div className="subtitle pt-4 text-center">{work.title}</div>
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
