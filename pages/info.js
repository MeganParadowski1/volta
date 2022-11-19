import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Info() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="flex flex-row px-16 items-center">
          <img src="MM.jpg" className="max-w-xs" />
          <div className="paragraph pl-8">
            Directed by Mamie Green and Megan Paradowski, Volta fuses
            physicality, theatricality and multidisciplinary approaches to
            performance. Volta is passionate about presenting dance in
            accessible, nontraditional spaces, often collaborating with artists
            across mediums. Volta's work expresses the communal rage, wonder,
            and love that connects us all.
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
