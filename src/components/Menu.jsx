import React, { useState } from 'react'
import { Star } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: 'Appetizers', turkish: 'Mezeler' },
    { id: 'mains', name: 'Main Courses', turkish: 'Ana Yemekler' },
    { id: 'grills', name: 'Grilled Specialties', turkish: 'Izgara' },
    { id: 'desserts', name: 'Desserts', turkish: 'Tatlılar' },
    { id: 'beverages', name: 'Beverages', turkish: 'İçecekler' }
  ]

  const menuItems = {
    appetizers: [
      { 
        name: 'Hummus', 
        turkish: 'Humus',
        description: 'Creamy chickpea dip with tahini, olive oil, and spices',
        price: '₺45',
        popular: true
      },
      { 
        name: 'Baba Ganoush', 
        turkish: 'Baba Ganuş',
        description: 'Roasted eggplant puree with garlic, lemon, and herbs',
        price: '₺48'
      },
      { 
        name: 'Stuffed Grape Leaves', 
        turkish: 'Yaprak Sarma',
        description: 'Rice-stuffed grape leaves with pine nuts and herbs',
        price: '₺52'
      },
      { 
        name: 'Turkish Cheese Platter', 
        turkish: 'Peynir Tabağı',
        description: 'Selection of traditional Turkish cheeses with honey and nuts',
        price: '₺65'
      },
      { 
        name: 'Cacık', 
        turkish: 'Cacık',
        description: 'Yogurt dip with cucumber, garlic, mint, and olive oil',
        price: '₺38'
      }
    ],
    mains: [
      { 
        name: 'Ottoman Lamb Stew', 
        turkish: 'Osmanlı Kuzu Güveç',
        description: 'Slow-cooked lamb with vegetables in traditional clay pot',
        price: '₺125',
        popular: true
      },
      { 
        name: 'Stuffed Eggplant', 
        turkish: 'Karnıyarık',
        description: 'Eggplant stuffed with ground meat, onions, and spices',
        price: '₺85'
      },
      { 
        name: 'Turkish Meatballs', 
        turkish: 'Köfte',
        description: 'Seasoned ground meat balls in rich tomato sauce',
        price: '₺78'
      },
      { 
        name: 'Chicken Casserole', 
        turkish: 'Tavuk Güveç',
        description: 'Tender chicken with vegetables in ceramic pot',
        price: '₺88'
      },
      { 
        name: 'Imam Bayildi', 
        turkish: 'İmam Bayıldı',
        description: 'Eggplant stuffed with onions, garlic, and tomatoes',
        price: '₺75'
      }
    ],
    grills: [
      { 
        name: 'Mixed Grill Platter', 
        turkish: 'Karışık Izgara',
        description: 'Assorted grilled meats: lamb, chicken, and beef kebabs',
        price: '₺165',
        popular: true
      },
      { 
        name: 'Adana Kebab', 
        turkish: 'Adana Kebap',
        description: 'Spicy ground lamb on skewers, grilled over charcoal',
        price: '₺95'
      },
      { 
        name: 'Chicken Shish', 
        turkish: 'Tavuk Şiş',
        description: 'Marinated chicken cubes grilled to perfection',
        price: '₺85'
      },
      { 
        name: 'Lamb Chops', 
        turkish: 'Kuzu Pirzola',
        description: 'Tender lamb chops seasoned with Turkish herbs',
        price: '₺145'
      },
      { 
        name: 'Fish Kebab', 
        turkish: 'Balık Şiş',
        description: 'Fresh fish cubes marinated in lemon and herbs',
        price: '₺115'
      }
    ],
    desserts: [
      { 
        name: 'Baklava', 
        turkish: 'Baklava',
        description: 'Layers of phyllo pastry with nuts and honey syrup',
        price: '₺42',
        popular: true
      },
      { 
        name: 'Turkish Delight', 
        turkish: 'Lokum',
        description: 'Traditional soft confection in various flavors',
        price: '₺35'
      },
      { 
        name: 'Rice Pudding', 
        turkish: 'Sütlaç',
        description: 'Creamy rice pudding topped with cinnamon',
        price: '₺38'
      },
      { 
        name: 'Künefe', 
        turkish: 'Künefe',
        description: 'Shredded phyllo pastry with cheese and syrup',
        price: '₺55'
      },
      { 
        name: 'Turkish Coffee Ice Cream', 
        turkish: 'Türk Kahvesi Dondurması',
        description: 'Rich ice cream flavored with authentic Turkish coffee',
        price: '₺45'
      }
    ],
    beverages: [
      { 
        name: 'Turkish Tea', 
        turkish: 'Çay',
        description: 'Traditional black tea served in crystal glasses',
        price: '₺15'
      },
      { 
        name: 'Turkish Coffee', 
        turkish: 'Türk Kahvesi',
        description: 'Finely ground coffee cooked in traditional pot',
        price: '₺25',
        popular: true
      },
      { 
        name: 'Ayran', 
        turkish: 'Ayran',
        description: 'Refreshing yogurt drink with salt',
        price: '₺18'
      },
      { 
        name: 'Pomegranate Juice', 
        turkish: 'Nar Suyu',
        description: 'Fresh pressed pomegranate juice',
        price: '₺28'
      },
      { 
        name: 'Apple Tea', 
        turkish: 'Elma Çayı',
        description: 'Aromatic apple-flavored herbal tea',
        price: '₺20'
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Discover the authentic flavors of Turkey with our carefully curated menu. 
            Each dish is prepared using traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-slate-200 hover:bg-gray-700 border border-slate-700'
              }`}
            >
              <span className="block">{category.name}</span>
              <span className="text-xs opacity-75">{category.turkish}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-lg hover:border-red-600/50 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-red-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <div className="flex items-center gap-1 bg-red-600/20 px-2 py-1 rounded-full border border-red-600/30">
                        <Star size={12} className="text-red-400 fill-current" />
                        <span className="text-xs text-red-300 font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-red-400 font-medium mb-2 italic">
                    {item.turkish}
                  </p>
                </div>
                <span className="text-2xl font-bold text-red-500 ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-800 to-slate-800 border border-slate-700 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-4">
            Ready to Experience Turkish Cuisine?
          </h3>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Reserve your table now and embark on a culinary journey through the flavors of Turkey. 
            Our chefs are waiting to serve you an unforgettable dining experience.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu
