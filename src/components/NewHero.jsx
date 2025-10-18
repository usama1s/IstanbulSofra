import React from 'react'

const NewHero = () => {
  const dishes = [
    'Chicken Doner Wrap',
    'İskender',
    'Gözleme',
    'Lahmacun',
    'Menemen'
  ]

  return (
    <section className="w-full h-screen bg-black flex items-center justify-center">
      <div className="overflow-hidden w-full h-full">
        <div className="flex w-[500%] h-full animate-[slide_20s_infinite_ease-in-out]">
          {dishes.map((dish, index) => (
            <div 
              key={index}
              className="w-1/5 h-full bg-black flex items-center justify-center"
            >
              <h2 className="text-white text-6xl font-bold text-center">
                {dish}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewHero
