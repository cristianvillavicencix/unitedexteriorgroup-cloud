import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      id: 'services',
      label: 'Servicios',
      items: [
        { name: 'Techos', href: '#roofing', icon: '🏠' },
        { name: 'Revestimientos', href: '#siding', icon: '🧱' },
        { name: 'Canales', href: '#gutters', icon: '💧' },
        { name: 'Reparación de Chimenea', href: '#chimney', icon: '🔥' },
        { name: 'Ventanas', href: '#windows', icon: '🪟' },
      ]
    },
    {
      id: 'company',
      label: 'Empresa',
      items: [
        { name: 'Acerca de Nosotros', href: '#about' },
        { name: 'Nuestro Proceso', href: '#process' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Blog', href: '#blog' },
      ]
    },
    {
      id: 'resources',
      label: 'Recursos',
      items: [
        { name: 'Galería', href: '#gallery' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Preguntas Frecuentes', href: '#common-questions' },
        { name: 'Contacto', href: '#contact' },
      ]
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-primary-500 font-bold text-lg hidden sm:inline">United Exteriors</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((menu) => (
              <div key={menu.id} className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary-500 transition font-medium">
                  {menu.label}
                  <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="invisible group-hover:visible absolute left-0 top-full pt-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="bg-white shadow-lg rounded-lg p-6 min-w-max border-t-4 border-secondary-500">
                    <div className="grid grid-cols-1 gap-4">
                      {menu.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary-50 transition group/item"
                        >
                          {item.icon && <span className="text-2xl">{item.icon}</span>}
                          <div>
                            <div className="text-primary-500 font-semibold group-hover/item:text-secondary-500">
                              {item.name}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:6143737444" className="text-primary-500 hover:text-primary-700 font-bold">
              (614) 373-7444
            </a>
            <button className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-semibold">
              Cotización Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((menu) => (
              <div key={menu.id}>
                <button
                  onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                  className="w-full text-left py-2 font-semibold text-primary-500 flex justify-between items-center"
                >
                  {menu.label}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${activeMenu === menu.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeMenu === menu.id && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50 rounded">
                    {menu.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center gap-2 py-2 text-gray-700 hover:text-secondary-500 transition"
                      >
                        {item.icon && <span>{item.icon}</span>}
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:6143737444" className="block py-2 text-primary-500 font-bold">
              (614) 373-7444
            </a>
            <button className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-2 rounded-lg font-semibold">
              Cotización Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
