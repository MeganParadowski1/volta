import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Info() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="md:flex flex-row md:px-16 items-center">
          <div>
            <img src="biopic.jpg" className="md:max-w-sm" />
            <div className="text-[8px] pt-2">Photo by Katy Shayne</div>
          </div>
          <div className="paragraph md:pt-0 pt-8 md:pl-8 md:text-left text-justify">
            Directed by Mamie Green and Megan Paradowski, Volta fuses
            physicality, theatricality and multidisciplinary approaches to
            performance. Volta is passionate about presenting dance in
            accessible, nontraditional spaces, often collaborating with artists
            across mediums. Volta’s work has been presented in the US, abroad,
            and dance festivals and has been reviewed by such publications as
            the LA Times.
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
