export const scrollToElement = (elementId, delay = 100) => {
  setTimeout(() => {
    const element = document.getElementById(elementId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }, delay)
}

export const handleAnchorClick = (href, navigate) => {
  if (href.startsWith('#')) {
    // If it's an anchor link and we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/')
      scrollToElement(href, 500) // Wait a bit longer for page to load
    } else {
      scrollToElement(href)
    }
  }
}
