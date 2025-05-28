import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on resize to desktop
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
    <header>
        <nav className="flex flex-row justify-between items-center bg-red-400 relative">
        <h1 className="w-3/6 p-4">PFJAS El Salvador</h1>
        
            <button 
                onClick={openMenu}
                className="md:hidden p-4 focus:outline-none"
                aria-label="Open menu"
                type="button"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            </button>

            <div 
                className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 md:static md:translate-x-0 md:bg-transparent md:shadow-none md:w-3/6 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
            <button 
                onClick={closeMenu}
                className="md:hidden absolute top-4 right-4 p-2"
                aria-label="Close menu"
                type="button"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>

            <ul className="flex flex-col md:flex-row justify-between items-center w-full p-8 md:p-4 h-full md:h-auto">
                <li className="mb-4 md:mb-0">
                    <a href="/" className="hover:text-gray-600 transition-colors">Home</a>
                </li>
                <li className="mb-4 md:mb-0">
                    <a href="/" className="hover:text-gray-600 transition-colors">Testimonies</a>
                </li>
                <li className="mb-4 md:mb-0">
                    <a href="/about" className="hover:text-gray-600 transition-colors">About Us</a>
                </li>
                <li>
                    <a href="/form" className="hover:text-gray-600 transition-colors">Join Us!</a>
                </li>
            </ul>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;