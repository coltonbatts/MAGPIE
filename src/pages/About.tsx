import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Hello! I'm [Artist Name], an embroidery artist based in [Location]. My journey
              with needle and thread began over a decade ago, and since then, I've been
              creating unique pieces that blend traditional techniques with contemporary
              designs.
            </p>
            
            <p className="text-lg text-gray-600">
              Each piece I create is a labor of love, carefully crafted using high-quality
              materials and time-honored techniques. My work is inspired by nature,
              architecture, and the beautiful interplay of colors and textures in our
              everyday world.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-gray-900">My Process</h2>
              <p className="text-lg text-gray-600">
                Every piece begins with a sketch, followed by careful color selection and
                planning. I use a combination of traditional and contemporary embroidery
                techniques to bring each design to life. The process can take anywhere from
                several days to several weeks, depending on the complexity of the design.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src="/images/artist-at-work.jpg"
                alt="Artist at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                My Commitment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-600">
                    Using sustainable and high-quality materials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-600">
                    Creating unique, one-of-a-kind pieces
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-gray-600">
                    Supporting the handmade art community
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Exhibitions & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add exhibition/recognition cards here */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
