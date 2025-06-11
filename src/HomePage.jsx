import img1 from "./assets/Bitmap.png";
import Navbar from "./Header/Navbar";
import img2 from "./assets/Bitmap2.png";
import img3 from "./assets/Bitmap3.png";
import img4 from "./assets/Bitmap4.png";
import img5 from "./assets/Bitmap5.png";
import img6 from "./assets/Bitmap6.png";
import { useState } from "react";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    message:
      "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    name: "Jane",
    location: "Dundee",
  },
  {
    message: "I really enjoyed the process of bringing this design to life!",
    name: "Theodora",
    location: "Newcastle",
  },
];
const HomePage = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  return (
    <>
      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        <div className="relative z-50">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center px-4 text-center">
          <div className="font-serif max-w-3xl mx-auto">
            <p className="text-gray-100 text-sm font-sans font-light leading-loose mb-2">
              DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY
            </p>
            <p className="text-4xl font-bold font-Helvetica text-white mb-6">
              Bespoke & made to measure <br />
              handmade kitchen design
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-4 px-10 py-3 border bg-primary border-primary font-sans font-light text-white rounded-full hover:bg-secondary hover:border-secondary  transition"
            >
              ORDER NOW
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-10 mb-6">
          <span className="w-10 h-1 bg-primary rounded-full"></span>{" "}
          {/* Active */}
          <span className="w-10 h-1 bg-white opacity-50 rounded-full"></span>
          <span className="w-10 h-1 bg-white opacity-50 rounded-full"></span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 bg-white">
        <div className="flex items-start justify-start">
          <img
            src={img2}
            alt="Kitchen img"
            className="w-full h-full object-cover pt-1 md:rounded-none"
          />
        </div>

        {/* Text Content */}
        <div className="flex items-center justify-center py-10 md:py-28 px-6 md:px-16">
          <div className="space-y-6 font-serif max-w-xl text-left">
            <p className="text-sm text-primary uppercase tracking-wide">
              Quality Craftsmanship from Build to Delivery
            </p>

            <h2 className="text-3xl md:text-5xl font-Helvetica leading-tight">
              Discover the beauty of a handmade kitchen
            </h2>

            <p className="text-base md:text-lg leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-2 px-8  py-3 border font-sans bg-primary border-primary text-white rounded-full hover:bg-secondary hover:border-secondary transition"
            >
              ABOUT US
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-10 px-6 md:px-20  font-sans overflow-hidden items-center justify-center">
        <h2 className="text-sm text-primary md:my-10 uppercase tracking-wide text-center mb-4">
          What Our Customers Say
        </h2>

        <h2 className="text-xl md:text-2xl text-gray-800 text-center mb-3 pb-5">
          Over 35 years experience designing <br></br>handmade kitchens
        </h2>

        <div className="relative flex items-center justify-center max-w-4xl mx-auto  text-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="arrow arrow-left absolute left-0 px-5 top-1/2 -translate-y-1/2"
            aria-label="Previous Testimonial"
          />

          <div className="px-10">
            <p className="text-l md:text-base text-gray-800 mb-6">
              {testimonials[current].message}
            </p>
            <p className="text-gray-800  font-normal">
              {testimonials[current].name}, {testimonials[current].location}{" "}
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="arrow arrow-right absolute right-0 px-5 top-1/2 -translate-y-1/2"
            aria-label="Next Testimonial"
          />
        </div>
        <div className="flex justify-center font-sans mt-8">
          <button
            onClick={() => navigate("/about")}
            className="w-full sm:w-auto mt-4 px-6 sm:px-10 py-4 sm:py-5 border uppercase tracking-wide font-light bg-primary border-primary text-white rounded-full hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            Frequently Asked Questions
          </button>
        </div>
      </section>
      <section
        id="gallery"
        className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 md:px-16 lg:px-20 font-sans"
      >
        <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold text-center mb-10">
          Customer Gallery
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-center gap-4 place-items-center mb-6 w-full max-w-screen-xl">
          <li>
            <img
              src={img3}
              alt="Gallery img1"
              className="w-[310px] h-[310px] sm:w-[250px] sm:h-[250px] object-cover shadow-md"
            ></img>
          </li>
          <li>
            <img
              src={img4}
              alt="Gallery img1"
              className="w-[310px] h-[310px] sm:w-[250px] sm:h-[250px] object-cover shadow-md"
            ></img>
          </li>
          <li>
            <img
              src={img5}
              alt="Gallery img1"
              className="w-[310px] h-[310px] sm:w-[250px] sm:h-[250px] object-cover shadow-md"
            ></img>
          </li>
          <li>
            <img
              src={img6}
              alt="Gallery img1"
              className="w-[310px] h-[310px] sm:w-[250px] sm:h-[250px] object-cover shadow-md"
            ></img>
          </li>
        </ul>
        <button className="w-full sm:w-auto mt-4 px-6 sm:px-10 py-3 sm:py-3 border uppercase tracking-wide font-light bg-primary border-primary text-white rounded-full hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 text-sm sm:text-base">
          View More
        </button>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
