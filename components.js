import React, { useState } from 'react';

// Language Switcher Component
const LanguageSwitcher = ({ currentLanguage, setCurrentLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageSelect = (langCode) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher">
      <button 
        className="lang-main-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="current-flag">{currentLang?.flag}</span>
        <span className="lang-text">МОВА</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-option ${currentLanguage === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Header Component
export const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection, currentLanguage, setCurrentLanguage, t }) => {
  const menuItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'contact', label: t.nav.contact, href: '#contact' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>{t.company}</h1>
            <p>{t.tagline}</p>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {menuItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header-actions">
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              setCurrentLanguage={setCurrentLanguage} 
            />
            <div className="contact-info">
              <span className="phone">{t.phone}</span>
            </div>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = ({ t }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="images/3.jpg" 
        
          alt="Metal structures" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t.hero.title} <br />
            <span className="highlight">{t.hero.titleHighlight}</span>
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">{t.hero.orderProject}</button>
            <button className="btn btn-secondary">{t.hero.ourWorks}</button>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">{t.hero.stats.years}</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">{t.hero.stats.projects}</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t.hero.stats.support}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
export const AboutSection = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">
            {t.about.subtitle}
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <div className="about-icon">🏗️</div>
              <div>
                <h3>{t.about.ownFactory.title}</h3>
                <p>{t.about.ownFactory.description}</p>
              </div>
            </div>
            
            <div className="about-item">
              <div className="about-icon">👥</div>
              <div>
                <h3>{t.about.qualifiedSpecialists.title}</h3>
                <p>{t.about.qualifiedSpecialists.description}</p>
              </div>
            </div>
            
            <div className="about-item">
              <div className="about-icon">🎯</div>
              <div>
                <h3>{t.about.qualityGuaranteed.title}</h3>
                <p>{t.about.qualityGuaranteed.description}</p>
              </div>
            </div>
            
            <div className="about-item">
              <div className="about-icon">⚡</div>
              <div>
                <h3>{t.about.fastDeadlines.title}</h3>
                <p>{t.about.fastDeadlines.description}</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="images/a.png" 
              alt="Servicestroy Team" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
export const ServicesSection = ({ t }) => {
  const services = [
    {
      id: 1,
      title: t.services.list.metalStructures.title,
      description: t.services.list.metalStructures.description,
      image: 'images/metal.png',
      features: t.services.list.metalStructures.features
    },
    {
      id: 2,
      title: t.services.list.warehouses.title,
      description: t.services.list.warehouses.description,
      image: 'images/warehouse.png',
      features: t.services.list.warehouses.features
    },
    {
      id: 3,
      title: t.services.list.agricultural.title,
      description: t.services.list.agricultural.description,
      image: 'images/farm.png',
      features: t.services.list.agricultural.features
    },
    {
      id: 4,
      title: t.services.list.commercial.title,
      description: t.services.list.commercial.description,
      image: 'https://images.unsplash.com/photo-1637393932938-b9c209e67d5c',
      features: t.services.list.commercial.features
    },
    {
      id: 5,
      title: t.services.list.industrial.title,
      description: t.services.list.industrial.description,
      image: 'images/factory.png',
      features: t.services.list.industrial.features
    },
    {
      id: 6,
      title: t.services.list.highStructures.title,
      description: t.services.list.highStructures.description,
      image: 'https://images.unsplash.com/photo-1650383673322-48c8a6469e33',
      features: t.services.list.highStructures.features
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">{t.services.learnMore}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
export const ProjectsSection = ({ t }) => {
  const projects = [
    {
      id: 1,
      title: t.projects.list.logistics.title,
      category: t.projects.list.logistics.category,
      image: 'images/armazem.png',
      description: t.projects.list.logistics.description,
      year: '2024'
    },
    {
      id: 2,
      title: t.projects.list.industrial.title,
      category: t.projects.list.industrial.category,
      image: 'images/factory.png',
      description: t.projects.list.industrial.description,
      year: '2023'
    },
    {
      id: 3,
      title: t.projects.list.shopping.title,
      category: t.projects.list.shopping.category,
      image: 'https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg',
      description: t.projects.list.shopping.description,
      year: '2023'
    },
    {
      id: 4,
      title: t.projects.list.office.title,
      category: t.projects.list.office.category,
      image: 'https://images.unsplash.com/photo-1637393934999-0177bedc0085',
      description: t.projects.list.office.description,
      year: '2024'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(t.projects.filters.all);
  const categories = [
    t.projects.filters.all, 
    t.projects.filters.warehouses, 
    t.projects.filters.factories, 
    t.projects.filters.commercial
  ];

  const filteredProjects = selectedCategory === t.projects.filters.all 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
export const ContactSection = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(t.contact.form.successMessage);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <img 
          src="https://images.unsplash.com/photo-1637393934065-25cc36bca316" 
          alt="Contact" 
          className="contact-bg-image"
        />
        <div className="contact-overlay"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>{t.contact.address.title}</h3>
                <p>{t.contact.address.value}</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>{t.contact.phone.title}</h3>
                <p>+380 (67) 482-90-40</p>
                <p>+380 (93) 231-24-88</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>{t.contact.email.title}</h3>
                <p>info@baugrand.com</p>
                <p>order@baugrand.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>{t.contact.workingHours.title}</h3>
                <p>{t.contact.workingHours.weekdays}</p>
                <p>{t.contact.workingHours.saturday}</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={t.contact.form.phone}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">{t.contact.form.selectService}</option>
                <option value="metalwork">{t.contact.form.services.metalwork}</option>
                <option value="warehouse">{t.contact.form.services.warehouse}</option>
                <option value="agricultural">{t.contact.form.services.agricultural}</option>
                <option value="commercial">{t.contact.form.services.commercial}</option>
                <option value="industrial">{t.contact.form.services.industrial}</option>
                <option value="high-structures">{t.contact.form.services.highStructures}</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>{t.company}</h3>
              <p>{t.footer.tagline}</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>{t.footer.sections.services}</h4>
            <ul>
              <li><a href="#services">{t.services.list.metalStructures.title}</a></li>
              <li><a href="#services">{t.services.list.warehouses.title}</a></li>
              <li><a href="#services">{t.services.list.agricultural.title}</a></li>
              <li><a href="#services">{t.services.list.commercial.title}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t.footer.sections.company}</h4>
            <ul>
              <li><a href="#about">{t.footer.links.about}</a></li>
              <li><a href="#projects">{t.footer.links.projects}</a></li>
              <li><a href="#contact">{t.footer.links.contacts}</a></li>
              <li><a href="#">{t.footer.links.careers}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>{t.footer.sections.contacts}</h4>
            <div className="footer-contact">
              <p>📍 {t.contact.address.value}</p>
              <p>📞 +380 (67) 482-90-40</p>
              <p>✉️ info@baugrand.com.ua</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>{t.footer.copyright}</p>
          </div>
        <div className="footer-links">
            <a href="#">{t.footer.links.privacy}</a>
            <a href="#">{t.footer.links.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};