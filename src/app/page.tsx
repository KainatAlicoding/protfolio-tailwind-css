import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Kainat Ali.</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li><Link href="#hero">Home</Link></li>
            <li><Link href="#about">About</Link></li> {/* Scrolls to About Section */}
            <li><Link href="#services">Services</Link></li> {/* Scrolls to Services Section */}
            <li><Link href="#contact">Contact</Link></li> {/* Scrolls to Contact Section */}
          </ul>
        </nav>
        <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-4 rounded">
          Hire Me
        </button>
      </header>

      {/* Hero Section */}
      <main id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between p-10 md:p-20">
        <div className="space-y-4 max-w-md">
          <h2 className="text-4xl">I Am a</h2>
          <h1 className="text-6xl font-bold">
            Web <span className="text-purple-600">Developer</span>
          </h1>
          <p className="text-gray-700">
            I am a web developer, proficient in coding and maintaining websites to ensure functionality and responsiveness.
          </p>
          <div className="flex space-x-4">
            <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
              About Me
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 mt-8 md:mt-0">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-purple-600">
            <Image
              src="/pic.webp"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-8 md:px-20 lg:px-32">
          <h2 className="text-5xl font-bold text-center mb-10">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/pic.webp"
                alt="About Me"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I am a passionate web designer with a knack for creating beautiful, functional, and responsive websites.
                With experience in typescript and nextjs, I aim to build seamless web solutions tailored 
                to meet business needs and user expectations.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-8 md:px-20 lg:px-32">
          <h2 className="text-5xl font-bold text-center mb-10">
            My <span className="text-purple-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Web Design</h3>
              <p className="text-gray-700">
                I design beautiful and functional user interfaces with a focus on responsive and modern design trends.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Development</h3>
              <p className="text-gray-700">
                I build robust and scalable websites using the latest technologies and frameworks.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-700">
                I provide consulting services to help businesses improve their online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-8 md:px-20 lg:px-32">
          <h2 className="text-5xl font-bold text-center mb-10">
            <span className="text-purple-600">Contact</span> Me
          </h2>
          <form className="max-w-xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={5}
            ></textarea>
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center space-x-6 mt-10 py-6 bg-white shadow-inner">
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fab fa-dribbble text-2xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
      </footer>
    </div>
  );
};

export default Home;
