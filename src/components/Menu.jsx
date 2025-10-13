import React, { useState } from 'react'
import { Star } from 'lucide-react'

export const menuItems = {
    turkish: [
      { 
        name: 'Chicken Doner Wrap', 
        turkish: 'Tavuk Döner Dürüm',
        description: 'Tender chicken doner wrapped in fresh lavash',
        price: '₺270',
        popular: true,
        featured: true,
        image: 'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      { 
        name: 'Chicken Doner Plate', 
        turkish: 'Tavuk Döner Tabağı',
        description: 'Salad, sauce, chicken, fries, rice, and yogurt, mashed flavoured potatoes',
        price: '₺290'
      },
      { 
        name: 'Tantuni Wrap', 
        turkish: 'Tantuni Dürüm',
        description: 'Traditional spiced meat wrapped in lavash',
        price: '₺250'
      },
      { 
        name: 'Tantuni Plate', 
        turkish: 'Tantuni Tabağı',
        description: 'Salad, sauce, chicken, fries, rice, and yogurt, mashed flavoured potatoes',
        price: '₺290'
      },
      { 
        name: 'Gözleme (Stuffed)', 
        turkish: 'Gözleme',
        description: 'Traditional Turkish flatbread with various fillings',
        price: '₺150',
        featured: true,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      { 
        name: 'Lahmacun', 
        turkish: 'Lahmacun',
        description: 'Roti with layer of chicken qeema on top with salad and yogurt',
        price: '₺180'
      },
      { 
        name: 'İskender', 
        turkish: 'İskender',
        description: 'Chicken slices layered with naan and yogurt',
        price: '₺320',
        popular: true,
        featured: true,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      { 
        name: 'Menemen Rice Bowl', 
        turkish: 'Menemen Pirinç Kasesi',
        description: 'Traditional scrambled eggs with tomatoes and peppers over rice',
        price: '₺200'
      }
    ],
    breakfast: [
      { 
        name: 'Mushroom Omelette', 
        turkish: 'Mantarlı Omlet',
        description: 'Fluffy eggs cooked with fresh mushrooms',
        price: '₺350'
      },
      { 
        name: 'Mushroom & Cheese Omelette', 
        turkish: 'Mantarlı Peynirli Omlet',
        description: 'Classic omelette with mushrooms and melted cheese',
        price: '₺370',
        popular: true
      },
      { 
        name: 'Kaymaklı Yumurta', 
        turkish: 'Kaymaklı Yumurta',
        description: 'Eggs served with rich Turkish clotted cream',
        price: '₺380'
      },
      { 
        name: 'Turkish Poached Egg (Çılbır)', 
        turkish: 'Çılbır',
        description: 'Poached eggs topped with garlic yogurt and chili butter',
        price: '₺390'
      },
      { 
        name: 'Menemen', 
        turkish: 'Menemen',
        description: 'Traditional scrambled eggs with tomatoes, peppers, and spices',
        price: '₺400',
        popular: true,
        featured: true,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      { 
        name: 'Sucuklu Yumurta', 
        turkish: 'Sucuklu Yumurta',
        description: 'Fried eggs with spicy Turkish sausage sucuk',
        price: '₺420'
      }
    ],
    salads: [
      { 
        name: 'Turkish Special Salad', 
        turkish: 'Türk Özel Salata',
        description: 'Cherry tomatoes, onion, cucumber, chickpeas, yogurt, cheese, mushroom',
        price: '₺280',
        popular: true,
        featured: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      },
      { 
        name: 'Greek Salad', 
        turkish: 'Yunan Salatası',
        description: 'Cucumbers, tomatoes, green bell pepper, cheese, vinegar/lemon juice, black pepper',
        price: '₺250'
      },
      { 
        name: 'Pasta Salad', 
        turkish: 'Makarna Salatası',
        description: 'Vegetables, pasta, mayonnaise, milk cream',
        price: '₺230'
      },
      { 
        name: 'Chicken Salad', 
        turkish: 'Tavuk Salatası',
        description: 'Sliced chicken, vegetables, mayonnaise or Greek yogurt',
        price: '₺300'
      }
    ],
    drinks: [
      { 
        name: 'Turkish Chai', 
        turkish: 'Türk Çayı',
        description: 'Traditional Turkish black tea served in crystal glasses',
        price: '₺25'
      },
      { 
        name: 'Hot Kiwi Turkish Drink', 
        turkish: 'Sıcak Kivi İçeceği',
        description: 'Warm and refreshing kiwi flavored Turkish drink',
        price: '₺60',
        popular: true
      },
      { 
        name: 'Hot Orange Turkish Drink', 
        turkish: 'Sıcak Portakal İçeceği',
        description: 'Traditional hot orange flavored Turkish beverage',
        price: '₺60',
        featured: true,
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
    ]
  }

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('turkish')

  const categories = [
    { id: 'turkish', name: 'Special Turkish Items', turkish: 'Özel Türk Yemekleri' },
    { id: 'breakfast', name: 'Breakfast', turkish: 'Kahvaltı' },
    { id: 'salads', name: 'Salads', turkish: 'Salatalar' },
    { id: 'drinks', name: 'Drinks', turkish: 'İçecekler' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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

      </div>
    </section>
  )
}

export default Menu

