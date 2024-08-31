// import React from 'react';

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
  const content = `Squig, a programming language crafted with a passion for exploration. Unlike traditional languages, Squig doesn't chase performance efficiency or real-world applications—at least not yet.
        Instead, it's a playground, a place to experiment and learn without the pressure of practical use. Think of Squig as a canvas for your coding creativity, where you're free to explore ideas and push the boundaries of what's possible in programming.`
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
        {content}
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
