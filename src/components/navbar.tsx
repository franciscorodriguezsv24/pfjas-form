import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
<>
      <header>
        <nav className="flex flex-row justify-between items-center relative scroll-enhance-header">
          <h1 className="w-3/6 p-2 text-lg md:text-xl font-semibold">PFJAS 2025</h1>
          
          <button 
            onClick={openMenu}
            className="md:hidden p-4 focus:outline-none z-[60]"
            aria-label="Open menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block w-3/6">
            <ul className="flex flex-row justify-between items-center w-full p-4">
              <li><a href="/" className="hover:text-gray-600 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gray-600 transition-colors">About Us</a></li>
              <li><a href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbRxHRFE0aP0BHvB_MG7iEBqlUOTJQSFcwN0RUUzcxRkdNVUdYUlVGSExPWi4u&fbclid=PAQ0xDSwMSLaRleHRuA2FlbQIxMQABp8ubke-Qxti3wA1fVflZfcAOQVfoFox7lZdEsYt_Z_PaqNE8Ed7R01O-SIgH_aem_gUAbZXYvLe3F2-nThtZ_pA&route=shorturls" className="hover:text-gray-600 transition-colors">Join Us!</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile menu - FUERA del header */}
      <div 
        className={`fixed top-0 right-0 h-full w-3/6 bg-gray-100 shadow-lg z-[9999] transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 z-[10000]"
          aria-label="Close menu"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <ul className="flex flex-col justify-center items-center w-full p-8 h-full space-y-8">
          <li><a href="/" className="hover:text-gray-600 transition-colors text-lg">Home</a></li>
          <li><a href="/about" className="hover:text-gray-600 transition-colors text-lg">About Us</a></li>
          <li><a href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=v4j5cvGGr0GRqy180BHbRxHRFE0aP0BHvB_MG7iEBqlUOTJQSFcwN0RUUzcxRkdNVUdYUlVGSExPWi4u&fbclid=PAQ0xDSwMSLaRleHRuA2FlbQIxMQABp8ubke-Qxti3wA1fVflZfcAOQVfoFox7lZdEsYt_Z_PaqNE8Ed7R01O-SIgH_aem_gUAbZXYvLe3F2-nThtZ_pA&route=shorturls" className="hover:text-gray-600 transition-colors text-lg">Join Us!</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;