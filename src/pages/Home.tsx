import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b-3 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="py-20 md:py-32">
              <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6">
                MAGPIE
                <br />
                EMBROIDERY
              </h1>
              <p className="font-mono text-lg mb-8 max-w-md">
                HANDCRAFTED CONTEMPORARY EMBROIDERY
                FROM NEEDLE TO NARRATIVE
              </p>
              <Link
                to="/shop"
                className="inline-block bg-black text-white font-mono px-8 py-4 hover:bg-white hover:text-black border-3 border-black transition-colors"
              >
                VIEW COLLECTION →
              </Link>
            </div>
            <div className="relative h-[400px] md:h-auto border-l-3 border-black">
              <img
                src="/images/hero.jpg"
                alt="Featured embroidery piece"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="border-b-3 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-mono font-bold mb-12">LATEST WORKS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="border-3 border-black group cursor-pointer">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img
                    src={`/images/work-${item}.jpg`}
                    alt={`Featured work ${item}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-mono">VIEW PIECE →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-b-3 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative h-[400px] md:h-auto border-r-3 border-black">
              <img
                src="/images/artist.jpg"
                alt="Artist at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="py-20 md:py-32 pl-8">
              <h2 className="text-3xl font-mono font-bold mb-6">THE ARTIST</h2>
              <p className="font-mono text-lg mb-8 max-w-md">
                CREATING CONTEMPORARY EMBROIDERY ART
                THAT CHALLENGES TRADITIONAL BOUNDARIES
                AND EXPLORES MODERN NARRATIVES.
              </p>
              <Link
                to="/about"
                className="inline-block bg-black text-white font-mono px-8 py-4 hover:bg-white hover:text-black border-3 border-black transition-colors"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="border-3 border-black p-8 md:p-12">
            <h2 className="text-3xl font-mono font-bold mb-6 text-center">
              JOIN THE COLLECTIVE
            </h2>
            <p className="font-mono text-center mb-8">
              SUBSCRIBE FOR UPDATES ON NEW PIECES AND EXHIBITIONS
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-grow px-4 py-3 border-3 border-black font-mono focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white font-mono px-8 py-3 hover:bg-white hover:text-black border-3 border-black transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
