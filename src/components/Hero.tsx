import React from 'react'

const Hero:React.FC = () => {
  return (
    <div>
          <div className="hero-section relative bg-cover bg-center h-screen" 
         style={{ backgroundImage: "url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="content relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold mb-4">Clothing Utopia</h1>
        <p className="text-lg mb-6">Explore our latest collection of exclusive clothing and accessories.</p>
        <a href="/product" className="bg-white text-black py-3 px-8 font-semibold rounded-md hover:bg-gray-300">
          Shop Now
        </a>
      </div>
    </div>
    </div>
  )
}

export default Hero
