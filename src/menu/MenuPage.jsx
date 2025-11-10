import React, { useState } from 'react';
import './MenuPage.css';
import menuData from './menuData.json';

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [showSplash, setShowSplash] = useState(true);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const sidebarRef = React.useRef(null);

  // Hide splash screen after animation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds splash screen
    return () => clearTimeout(timer);
  }, []);

  // Handle sidebar scroll to hide/show arrow
  React.useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = sidebar;
      // Check if sidebar is scrollable
      const isScrollable = scrollHeight > clientHeight;
      // Check if at bottom with larger threshold
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20; // 20px threshold
      
      // Only show arrow if scrollable and not at bottom
      setShowScrollArrow(isScrollable && !isAtBottom);
    };

    sidebar.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
    
    // Also check on window resize
    window.addEventListener('resize', handleScroll);

    return () => {
      sidebar.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const sidebarItems = [
    { key: 'popular', label: 'POPULAR', icon: '🔥' },
    { key: 'burgersAndSandwiches', label: 'BURGERS', icon: '🍔' },
    { key: 'donerAndWraps', label: 'WRAPS', icon: '🌯' },
    { key: 'friesAndTaco', label: 'FRIES', icon: '🍟' },
    { key: 'pasta', label: 'PASTA', icon: '🍝' },
    { key: 'plattersAndBowls', label: 'PLATTERS', icon: '🍱' },
    { key: 'soup', label: 'SOUP', icon: '🍲' },
    { key: 'snowFlakeIceCream', label: 'ICE CREAM', icon: '🍨' },
    { key: 'refreshingDrinks', label: 'DRINKS', icon: '🥤' },
    { key: 'simpleDrinks', label: 'BEVERAGES', icon: '🥤' }
  ];

  const renderMenuItems = () => {
    let items = [];
    let categoryTitle = "";

    if (selectedCategory === 'popular') {
      // Collect all items with popular: true from all categories
      categoryTitle = "POPULAR ITEMS";
      Object.values(menuData).forEach(category => {
        category.items.forEach(item => {
          if (item.popular === true) {
            items.push(item);
          }
        });
      });
    } else {
      // Get items from selected category
      const data = menuData[selectedCategory];
      categoryTitle = data.category;
      items = data.items;
    }

    return (
      <div className="category-section">
        <h2 className="category-title">{categoryTitle}</h2>
        {selectedCategory === 'popular' && (
          <div className="explore-message">
            ✨ Explore our full menu by scrolling through the categories on the left! ✨
          </div>
        )}
        <div className="menu-grid">
          {items.map((item, index) => (
            <div key={index} className="product-card">
              {item.dealBadge && (
                <div className="deal-badge">{item.dealBadge}</div>
              )}
              <div className="price-ribbon">
                {item.discounted_price ? (
                  <>
                    <span className="price-amount" style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: '8px' }}>{item.price}</span>
                    <span className="price-amount">{item.discounted_price}</span>
                    <span className="price-currency">PKR</span>
                  </>
                ) : (
                  <>
                    <span className="price-amount">{item.price}</span>
                    <span className="price-currency">PKR</span>
                  </>
                )}
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
  };

  // Show splash screen
  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <div className="welcome-text">Welcome to</div>
          <img src="/images/Istanbul-Sofra-Black-Logo.png" alt="Istanbul Sofra" className="splash-logo" />
          <div className="welcome-subtitle">Experience Authentic Turkish Flavors</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar" ref={sidebarRef}>
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
        {showScrollArrow && (
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img src="/images/Istanbul-Sofra-Black-Logo.png" alt="Istanbul Sofra" className="main-logo" />
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

export default MenuPage;

