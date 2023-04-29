import Link from "next/link";
import Image from "next/image";
import FooterWhite from "../components/FooterWhite";

export default function Salt() {
  return (
    <div className="relative w-full">
      <Image
        className="brightness-75 z-[-1]"
        src="/salt.jpg"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute z-10 md:p-[3rem] p-[2rem] flex w-full">
        <Link href="/">
          <img className="h-[20px] cursor-pointer" src="/volta_white.png" />
        </Link>
      </div>
      <div className="wrapper relative text-white">
        <div className="uppercase text-center font-bold pb-4 leading-4">
          Volta X 2220 Arts + Archives present
        </div>
        <div className="accentFont uppercase text-center text-8xl pb-4">
          SALT
        </div>
        <div className="text-center text-sm pb-2">
          <i>Witness a woman’s unraveling and pick a side.</i>
        </div>
        <div className="text-center font-bold">06.11.2023 - 06.13.2023</div>
        <div className="flex flex-col items-center">
          <video
            id="video"
            className="md:w-1/2 w-full py-8"
            src="/SALT.mp4"
            autoPlay
            muted
            loop
            playsInline="False"
          />
          <div className="text-center md:max-w-4xl pb-12">
            <div className="pb-8">
              Directed and choreographed by Megan Paradowski and Mamie Green of
              Volta, writer Veronica Gonzalez Peña breaks open Euripide’s iconic
              tragedy <i>Medea</i>, musicians Melissa Achten and Eli Klausner
              score the piece live, and chef and artist Heidi Ross creates
              edible installations based on Euripide’s characters.
            </div>
            <a
              href="https://dice.fm/event/9wyk7-salt-volta-x-michelle-tea-x-heidi-ross-11th-jun-2220-arts-archives-los-angeles-tickets"
              target="_blank"
            >
              <button className="buttonSecondary !bg-white !text-black">
                Tickets
              </button>
            </a>
          </div>
        </div>
      </div>
      <FooterWhite />
    </div>
  );
}
