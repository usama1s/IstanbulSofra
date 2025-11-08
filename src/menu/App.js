import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuData = {
    burgersAndSandwiches: {
      category: "BURGERS & SANDWICHES",
      sidebarLabel: "BURGERS",
      icon: "🍔",
      items: [
        {
          name: "Turkish Grilled Burger",
          price: 290,
          description: "Juicy grilled chicken patty marinated in Turkish spices, served in a toasted bun with fresh lettuce, tomatoes, and a signature garlic-yogurt sauce."
        },
        {
          name: "Turkish BBQ Burger",
          price: 280,
          description: "Smoky BBQ chicken infused with Turkish herbs, flame-grilled and layered with crisp veggies, cheese, and a rich barbecue mayo in a soft burger bun."
        },
        {
          name: "Grilled Sandwich",
          price: 250,
          description: "Tender grilled chicken slices tucked in toasted bread with melted cheese, fresh veggies, and a zesty house sauce – a hearty and satisfying bite."
        },
        {
          name: "BBQ Sandwich",
          price: 250,
          description: "Savory BBQ chicken shredded and stacked inside a crusty sandwich roll, finished with tangy slaw and smoky sauce for a bold flavor hit."
        },
        {
          name: "Egg Sandwich",
          price: 200,
          description: "Fluffy scrambled eggs combined with grilled chicken, layered in toasted bread with cheese, fresh greens, and a creamy dressing – perfect for any time of day."
        },
        {
          name: "Turkish Panini",
          price: 280,
          description: "A crispy pressed panini filled with spiced Turkish-style chicken, melted cheese, and veggies, finished with a drizzle of garlic yogurt sauce."
        }
      ]
    },
    donerAndWraps: {
      category: "DONER & WRAPS",
      sidebarLabel: "WRAPS",
      icon: "🌯",
      items: [
        {
          name: "Turkish Grilled Doner",
          price: 290,
          description: "Juicy grilled chicken doner, marinated in traditional Turkish spices, thinly sliced and served in warm flatbread with crisp veggies and garlic-yogurt sauce."
        },
        {
          name: "Turkish BBQ Doner",
          price: 280,
          description: "Smoky and tender BBQ chicken doner, slow-cooked with Turkish herbs, wrapped in flatbread with tangy pickles, onions, and signature BBQ mayo."
        },
        {
          name: "Tantuni",
          price: 280,
          description: "A spicy Turkish street-food classic — finely chopped chicken sautéed in oil, peppers, and herbs, wrapped in lavash bread with fresh vegetables and sumac onions."
        },
        {
          name: "Lahmachun Wrap",
          price: 300,
          description: "A thin, soft Turkish flatbread topped with seasoned minced chicken, rolled with lettuce, onions, and a squeeze of lemon — light, fresh, and flavorful."
        },
        {
          name: "Turkish Adana Kebab Wrap",
          price: 270,
          description: "Inspired by the famous Adana kebab — spicy minced chicken skewers grilled to perfection, wrapped with garlic sauce, sumac onions, and salad in lavash."
        },
        {
          name: "Turkish Shawarma",
          price: 350,
          description: "Succulent layers of marinated grilled chicken shaved from the spit, wrapped in soft flatbread with garlic tahini sauce, pickles, and fresh veggies."
        }
      ]
    },
    friesAndTaco: {
      category: "FRIES & TACO",
      sidebarLabel: "FRIES",
      icon: "🍟",
      items: [
        {
          name: "Simple Fries",
          price: 180,
          description: "Crispy golden fries, lightly salted and served hot — the perfect classic side or snack."
        },
        {
          name: "Simple Fries L",
          price: 300,
          description: "Crispy golden fries, lightly salted and served hot — the perfect classic side or snack in large size."
        },
        {
          name: "Doner Loaded Fries",
          price: 280,
          description: "Crispy fries loaded with juicy grilled chicken doner, drizzled with garlic-yogurt sauce and tangy toppings — a bold and filling street-style treat."
        },
        {
          name: "Doner Loaded Fries L",
          price: 400,
          description: "Crispy fries loaded with juicy grilled chicken doner, drizzled with garlic-yogurt sauce and tangy toppings — a bold and filling street-style treat in large size."
        },
        {
          name: "Simple Loaded Fries",
          price: 280,
          description: "A generous serving of fries topped with creamy sauces, melted cheese, and light seasoning — simple, satisfying, and packed with flavor."
        },
        {
          name: "Taco",
          price: 300,
          description: "A soft taco shell filled with seasoned chicken, crisp lettuce, fresh veggies, and flavorful sauces — a fusion twist with Turkish-inspired taste."
        }
      ]
    },
    pasta: {
      category: "PASTA",
      sidebarLabel: "PASTA",
      icon: "🍝",
      items: [
        {
          name: "Spaghetti Pasta",
          price: 420,
          description: "Traditional spaghetti served in your choice of sauce (red, white, or pink), topped with herbs and grilled chicken."
        },
        {
          name: "Penne Pasta",
          price: 500,
          description: "Classic penne pasta served in your choice of red, white, or pink sauce — garnished with herbs."
        },
        {
          name: "Alfredo Pasta",
          price: 350,
          description: "Silky and creamy Alfredo sauce over tender pasta, infused with garlic and parmesan, perfect for lovers of rich and comforting flavors."
        },
        {
          name: "Turkish Pasta Salad",
          price: 600,
          description: "A light and refreshing Mediterranean-style salad made with tender orzo pasta, crisp cucumbers, creamy feta cheese, juicy pomegranate seeds, and fresh herbs."
        },
        {
          name: "Anna Paul Turkish Pasta",
          price: 350,
          description: "Creamy Turkish-style pasta featuring penne tossed in a rich, spiced tomato-cream sauce, finished with herbs and optional chili flakes."
        }
      ]
    },
    plattersAndBowls: {
      category: "PLATTERS & BOWLS",
      sidebarLabel: "PLATTERS",
      icon: "🍱",
      items: [
        {
          name: "Turkish Karışık Platter",
          price: 340,
          description: "A flavorful mix of grilled and BBQ-style chicken chunks, served with aromatic rice, mashed potatoes, crispy fries, salad, yogurt, and a side of sauce."
        },
        {
          name: "Turkish Köri Soslu Platter",
          price: 360,
          description: "Grilled chicken chunks smothered in rich Turkish-style curry sauce, served with seasoned rice, creamy mashed potatoes, fresh salad, crispy fries, yogurt, and house sauce."
        },
        {
          name: "Double Turkish Karışık Platter",
          price: 640,
          description: "A generous double portion of mixed grilled and BBQ chicken chunks, served with rice, salad, fries, mashed potatoes, yogurt, and sauce. (2 Persons)",
          dealBadge: "SAVE 40 PKR"
        },
        {
          name: "Double Köri Soslu Platter",
          price: 670,
          description: "Double the serving of our curry-infused grilled chicken chunks, paired with rice, mashed potatoes, fresh salad, fries, yogurt, and sauce. (2 Persons)",
          dealBadge: "SAVE 50 PKR"
        },
        {
          name: "Menemen Bowl",
          price: 200,
          description: "A traditional Turkish scrambled egg dish with tomatoes, peppers, and spices, served with fresh bread."
        },
        {
          name: "Donner Platter",
          price: 320,
          description: "Succulent layers of marinated grilled chicken shaved from the spit, served with rice, salad, and signature sauces."
        }
      ]
    },
    refreshingDrinks: {
      category: "REFRESHING DRINKS",
      sidebarLabel: "DRINKS",
      icon: "🥤",
      items: [
        {
          name: "Turkish Tea",
          price: 70,
          description: "Turkish tea, traditionally brewed with black tea leaves, is light, aromatic, and gentle on the stomach. Known for aiding digestion, it can help soothe bloating and discomfort after meals. Rich in antioxidants, it supports heart health and may improve circulation."
        },
        {
          name: "Summer Drink",
          price: 160,
          description: "A vibrant, electric-blue mocktail made with a citrusy blend of lemon and lime, topped with a splash of soda and a hint of sweetness. Served chilled over ice it's the perfect mix of tangy and refreshing."
        },
        {
          name: "Mint Margarita",
          price: 160,
          description: "A cool and zesty twist on the classic margarita blended with fresh mint leaves, tangy lemon juice, and a splash of soda for a crisp, refreshing burst of flavor. Perfectly chilled and naturally invigorating."
        }
      ]
    },
    snowFlakeIceCream: {
      category: "SNOW FLAKE ICE CREAM",
      sidebarLabel: "ICE CREAM",
      icon: "🍨",
      items: [
        {
          name: "Vanilla",
          price: 200,
          description: "Delicately shaved, cloud-soft ice cream infused with smooth, classic vanilla flavor. Light, creamy, and perfectly sweet — a timeless treat that melts in your mouth like snow."
        },
        {
          name: "Chocolate",
          price: 200,
          description: "Indulgently smooth and airy chocolate-flavored ice cream, shaved to a snow-like softness. A dreamy delight for chocolate lovers — rich in taste, light in texture, and topped with pure happiness."
        },
        {
          name: "Mango",
          price: 200,
          description: "A tropical twist on our signature snowflake ice cream — infused with the rich, juicy flavor of ripe mangoes. Light as snow, smooth as cream, and bursting with sunny sweetness in every bite."
        }
      ]
    },
    simpleDrinks: {
      category: "SIMPLE DRINKS",
      sidebarLabel: "BEVERAGES",
      icon: "🥤",
      items: [
        { name: "Pepsi Small", price: 90, description: "Refreshing Pepsi cola served chilled." },
        { name: "7Up Small", price: 90, description: "Crisp and refreshing lemon-lime soda." },
        { name: "Dew Small", price: 90, description: "Energizing citrus flavored soft drink." },
        { name: "7UP Mint Small", price: 90, description: "Refreshing 7Up with a hint of mint." },
        { name: "Sprite 1/2 Litre", price: 120, description: "Lemon-lime flavored soft drink in half liter." },
        { name: "Pepsi Tin", price: 120, description: "Pepsi cola in convenient tin packaging." },
        { name: "Coke Tin", price: 120, description: "Classic Coca-Cola in tin packaging." },
        { name: "Revive", price: 50, description: "Hydrating isotonic sports drink." }
      ]
    }
  };

  const sidebarItems = [
    { key: 'burgersAndSandwiches', label: 'BURGERS', icon: '🍔' },
    { key: 'donerAndWraps', label: 'WRAPS', icon: '🌯' },
    { key: 'friesAndTaco', label: 'FRIES', icon: '🍟' },
    { key: 'pasta', label: 'PASTA', icon: '🍝' },
    { key: 'plattersAndBowls', label: 'PLATTERS', icon: '🍱' },
    { key: 'refreshingDrinks', label: 'DRINKS', icon: '🥤' },
    { key: 'snowFlakeIceCream', label: 'ICE CREAM', icon: '🍨' },
    { key: 'simpleDrinks', label: 'BEVERAGES', icon: '🥤' }
  ];

  const renderMenuItems = () => {
    if (selectedCategory === 'all') {
      return Object.entries(menuData).map(([key, data]) => (
        <div key={key} className="category-section">
          <h2 className="category-title">{data.category}</h2>
          <div className="menu-grid">
            {data.items.map((item, index) => (
              <div key={index} className="product-card">
                {item.dealBadge && (
                  <div className="deal-badge">{item.dealBadge}</div>
                )}
                <div className="price-ribbon">
                  <span className="price-amount">{item.price}</span>
                  <span className="price-currency">PKR</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      const data = menuData[selectedCategory];
      return (
        <div className="category-section">
          <h2 className="category-title">{data.category}</h2>
          <div className="menu-grid">
            {data.items.map((item, index) => (
              <div key={index} className="product-card">
                {item.dealBadge && (
                  <div className="deal-badge">{item.dealBadge}</div>
                )}
                <div className="price-ribbon">
                  <span className="price-amount">{item.price}</span>
                  <span className="price-currency">PKR</span>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
          <span className="menu-text">MORE</span>
        </button>

        <button
          className={`sidebar-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          <span className="sidebar-icon">📋</span>
          <span className="sidebar-label">ALL MENU</span>
        </button>

        <div className="sidebar-divider"></div>

        <div className="sidebar-items">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              className={`sidebar-btn ${selectedCategory === item.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(item.key)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img src="/TURKISHLogo.png" alt="Istanbul Sofra" className="main-logo" />
          </div>
        </header>

        {/* Menu Content */}
        <div className="content-wrapper">
          {renderMenuItems()}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            We've grilled, stirred, spiced, and maybe cried a little (onions, we swear)
            all to bring you a delicious experience. If you love it, tell everyone.
            If not… tell us!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
