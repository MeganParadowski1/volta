import Footer from "../components/Footer";
import Layout from "../components/Layout";

const events = [
  {
    date: "Wednesday 10/12",
    title: "Open company class",
    time: "12:30-2pm",
    location: "Wallichs Theatre",
  },
  {
    date: "Wednesday 10/12",
    title: "Open rehearsal followed by Q&A",
    time: "2-6pm",
    location: "Wallichs Theatre",
  },
  {
    date: "Thursday 10/13",
    title: "Open company class",
    time: "12:30-2pm",
    location: "Wallichs Theatre",
  },
  {
    date: "Thursday 10/13",
    title: "Open rehearsal followed by Q&A",
    time: "2-6pm",
    location: "Wallichs Theatre",
  },
  {
    date: "Friday 10/14",
    title: "BITE II Performance",
    time: "7:30pm",
    location: "Wallichs Theatre",
    linkText: "Buy tickets",
    link: "",
  },
];

export default function Redlands() {
  return (
    <Layout>
      <div className="title">VOLTA at University of Redlands</div>
      <div className="font-thin text-center">
        A weeklong residency from Oct 10-14, 2022
      </div>
      <div className="md:max-w-2xl max-w-xs m-auto">
        <div className="uppercase text-lg py-12 text-center font-medium">
          Schedule of events
        </div>
        <div>
          {events.map((event) => (
            <div
              key={event}
              className="flex border-b-[1px] border-[hsla(0,0%,51%,.15)] py-4"
            >
              <div className="w-full text-left">
                <div className="uppercase font-medium">{event.date}</div>
                <div className="font-thin">{event.title}</div>
              </div>
              <div className="w-full text-right">
                <div className="uppercase">{event.time}</div>
                <div className="font-thin">{event.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
