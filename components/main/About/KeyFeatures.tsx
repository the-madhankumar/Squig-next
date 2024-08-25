import React from 'react';

interface FeatureBlockProps {
  title: string;
  content: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, content }) => (
  <blockquote className=' pl-6 transition-all duration-300 hover:border-blue-800 hover:pl-8'>
    <h3 className='text-2xl font-semibold mb-3'>{title}</h3>
    <p className='text-lg leading-relaxed'>{content}</p>
  </blockquote>
)

const KeyFeatures: React.FC = () => {
  return (
    <div className='flex flex-col sm:my-1 mx-auto rounded-lg p-8 shadow-md'>
      <section className='mb-12'>
        <h2 className={`text-center text-transparent h-[1.5em] bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold `}>
          Overview
        </h2>
        {/* <h3 className='text-2xl font-semibold mb-4 '>What is Squig?</h3>
         */}
         <h2 className={`text-transparent h-[1.5em] bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-4xl  font-extrabold `}>
              What is Squig?
          </h2>
        <p className='text-lg leading-relaxed'>
          Squig stands out by offering more choices in coding simplicity and efficiency exploration. In a world where traditional complexity often reigns supreme, Squig emerges as a distinctive player, providing alternative paths to coding without compromising power.
        </p>
      </section>

      <section>
        {/* <h2 className='text-4xl font-bold mb-8 '>Key Features</h2> */}
        <h2 className={`text-transparent h-[1.5em] bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-4xl font-extrabold `}>
              Key Features
          </h2>
        <div className='space-y-8 grid grid-cols-2'>
          <FeatureBlock
            title="Expanded Options in Simplicity"
            content="Squig isn't just about minimalism; it's about giving developers additional avenues to explore simplicity, allowing for a coding experience tailored to individual preferences."
          />
          <FeatureBlock
            title="Versatility with a Twist"
            content="While Squig might not claim superiority over traditional programming languages, it stands as an alternative, offering different possibilities. Explore the uncharted territories of coding with Squig's distinctive approach."
          />
        </div>
      </section>
    </div>
  )
}

export default KeyFeatures;
