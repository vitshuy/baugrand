(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Reset and Base Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Roboto', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;\n  line-height: 1.6;\n  color: #333;\n  background-color: #f8f9fa;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n/* Typography */\n.section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1e3a8a;\n  margin-bottom: 1rem;\n  text-align: center;\n  position: relative;\n}\n\n.section-title::after {\n  content: '';\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 4px;\n  background: linear-gradient(90deg, #3b82f6, #1e40af);\n  border-radius: 2px;\n}\n\n.section-subtitle {\n  font-size: 1.1rem;\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.section-header {\n  margin-bottom: 4rem;\n}\n\n/* Buttons */\n.btn {\n  display: inline-block;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);\n}\n\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);\n}\n\n.btn-secondary {\n  background: transparent;\n  color: #3b82f6;\n  border: 2px solid #3b82f6;\n}\n\n.btn-secondary:hover {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n\n/* Language Switcher */\n.language-switcher {\n  position: relative;\n  margin-right: 1rem;\n}\n\n.lang-main-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 120px;\n}\n\n.lang-main-btn:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n\n.current-flag {\n  font-size: 1.1rem;\n}\n\n.lang-text {\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n\n.dropdown-arrow {\n  font-size: 0.7rem;\n  transition: transform 0.3s ease;\n  margin-left: auto;\n}\n\n.dropdown-arrow.open {\n  transform: rotate(180deg);\n}\n\n.lang-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n.lang-option {\n  display: flex;\n  align-items: center;\n  grid-gap: 0.75rem;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: none;\n  color: #374151;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n\n.lang-option:last-child {\n  border-bottom: none;\n}\n\n.lang-option:hover {\n  background: #f8fafc;\n  color: #3b82f6;\n}\n\n.lang-option.active {\n  background: #3b82f6;\n  color: white;\n}\n\n.lang-option .flag {\n  font-size: 1rem;\n}\n\n.lang-option .name {\n  font-weight: 500;\n}\n\n/* Header */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  transition: all 0.3s ease;\n}\n\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0;\n}\n\n.logo h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e40af;\n  margin-bottom: 0;\n}\n\n.logo p {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n  grid-gap: 2rem;\n  gap: 2rem;\n  margin: 0;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: #374151;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.nav-link:hover,\n.nav-link.active {\n  color: #1e40af;\n  background: rgba(59, 130, 246, 0.1);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.contact-info .phone {\n  font-weight: 600;\n  color: #1e40af;\n  font-size: 1rem;\n}\n\n.menu-toggle {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n.menu-toggle span {\n  width: 25px;\n  height: 3px;\n  background: #1e40af;\n  margin: 3px 0;\n  transition: 0.3s;\n  border-radius: 2px;\n}\n\n/* Hero Section */\n.hero {\n  position: relative;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6));\n}\n\n.hero-content {\n  position: relative;\n  z-index: 2;\n  color: white;\n  max-width: 800px;\n}\n\n.hero-title {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n}\n\n.hero-title .highlight {\n  color: #60a5fa;\n}\n\n.hero-subtitle {\n  font-size: 1.25rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n\n.hero-buttons {\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 4rem;\n}\n\n.hero-stats {\n  display: flex;\n  grid-gap: 3rem;\n  gap: 3rem;\n}\n\n.stat {\n  text-align: center;\n}\n\n.stat-number {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #60a5fa;\n  margin-bottom: 0.5rem;\n}\n\n.stat-label {\n  font-size: 0.9rem;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n/* About Section */\n.about {\n  padding: 6rem 0;\n  background: white;\n}\n\n.about-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4rem;\n  gap: 4rem;\n  align-items: center;\n}\n\n.about-item {\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border-left: 4px solid #3b82f6;\n  transition: all 0.3s ease;\n}\n\n.about-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.about-icon {\n  font-size: 2rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n\n.about-item h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e40af;\n  margin-bottom: 0.5rem;\n}\n\n.about-item p {\n  color: #6b7280;\n  line-height: 1.6;\n}\n\n.about-image {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n\n.about-image img {\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n}\n\n/* Services Section */\n.services {\n  padding: 6rem 0;\n  background: #f8fafc;\n}\n\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n\n.service-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.service-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n\n.service-image {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n}\n\n.service-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.service-card:hover .service-image img {\n  transform: scale(1.05);\n}\n\n.service-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.service-card:hover .service-overlay {\n  opacity: 1;\n}\n\n.service-content {\n  padding: 2rem;\n}\n\n.service-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e40af;\n  margin-bottom: 1rem;\n}\n\n.service-description {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n\n.service-features {\n  list-style: none;\n  margin-bottom: 2rem;\n}\n\n.service-features li {\n  padding: 0.5rem 0;\n  color: #374151;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.service-features li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  color: #10b981;\n  font-weight: bold;\n}\n\n.service-btn {\n  width: 100%;\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.service-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n\n/* Projects Section */\n.projects {\n  padding: 6rem 0;\n  background: white;\n}\n\n.projects-filter {\n  display: flex;\n  justify-content: center;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n\n.filter-btn {\n  padding: 0.75rem 1.5rem;\n  background: transparent;\n  border: 2px solid #e5e7eb;\n  border-radius: 25px;\n  color: #6b7280;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.filter-btn:hover,\n.filter-btn.active {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n}\n\n.projects-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n\n.project-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n\n.project-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n\n.project-image {\n  position: relative;\n  height: 250px;\n  overflow: hidden;\n}\n\n.project-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.project-card:hover .project-image img {\n  transform: scale(1.05);\n}\n\n.project-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.7));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.project-card:hover .project-overlay {\n  opacity: 1;\n}\n\n.project-info {\n  text-align: center;\n  color: white;\n}\n\n.project-year {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n}\n\n.project-category {\n  font-size: 0.9rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.project-content {\n  padding: 1.5rem;\n}\n\n.project-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e40af;\n  margin-bottom: 0.5rem;\n}\n\n.project-description {\n  color: #6b7280;\n  line-height: 1.6;\n}\n\n/* Contact Section */\n.contact {\n  position: relative;\n  padding: 6rem 0;\n  overflow: hidden;\n}\n\n.contact-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.contact-bg-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.contact-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.8));\n}\n\n.contact .section-title,\n.contact .section-subtitle {\n  color: white;\n}\n\n.contact-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4rem;\n  gap: 4rem;\n  position: relative;\n  z-index: 2;\n}\n\n.contact-item {\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.contact-icon {\n  font-size: 1.5rem;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n\n.contact-item h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 0.5rem;\n}\n\n.contact-item p {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0.25rem 0;\n}\n\n.contact-form {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n\n.form-group input::placeholder,\n.form-group textarea::placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #60a5fa;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.form-group select option {\n  background: #1e40af;\n  color: white;\n}\n\n/* Footer */\n.footer {\n  background: #1e293b;\n  color: white;\n  padding: 3rem 0 1rem;\n}\n\n.footer-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 2rem;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n\n.footer-logo h3 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #60a5fa;\n  margin-bottom: 0.5rem;\n}\n\n.footer-logo p {\n  color: #94a3b8;\n  margin-bottom: 1rem;\n}\n\n.footer-social {\n  display: flex;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.social-link {\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.social-link:hover {\n  color: #60a5fa;\n}\n\n.footer-section h4 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: #f1f5f9;\n}\n\n.footer-section ul {\n  list-style: none;\n}\n\n.footer-section ul li {\n  margin-bottom: 0.5rem;\n}\n\n.footer-section ul li a {\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.footer-section ul li a:hover {\n  color: #60a5fa;\n}\n\n.footer-contact p {\n  margin-bottom: 0.5rem;\n  color: #94a3b8;\n}\n\n.footer-bottom {\n  border-top: 1px solid #334155;\n  padding-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n\n.footer-copyright p {\n  color: #94a3b8;\n  margin: 0;\n}\n\n.footer-links {\n  display: flex;\n  grid-gap: 2rem;\n  gap: 2rem;\n}\n\n.footer-links a {\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.3s ease;\n}\n\n.footer-links a:hover {\n  color: #60a5fa;\n}\n\n/* Responsive Design */\n@media (max-width: 1024px) {\n  .hero-title {\n    font-size: 3rem;\n  }\n  \n  .section-title {\n    font-size: 2rem;\n  }\n  \n  .about-content,\n  .contact-content {\n    grid-template-columns: 1fr;\n    grid-gap: 2rem;\n    gap: 2rem;\n  }\n  \n  .hero-stats {\n    grid-gap: 2rem;\n    gap: 2rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 0 15px;\n  }\n  \n  .menu-toggle {\n    display: flex;\n  }\n  \n  .language-switcher {\n    display: none;\n  }\n  \n  .nav {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n    transform: translateY(-100%);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.3s ease;\n  }\n  \n  .nav-open {\n    transform: translateY(0);\n    opacity: 1;\n    pointer-events: all;\n  }\n  \n  .nav-list {\n    flex-direction: column;\n    padding: 1rem;\n    grid-gap: 0;\n    gap: 0;\n  }\n  \n  .nav-link {\n    display: block;\n    padding: 1rem;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  \n  .hero-title {\n    font-size: 2.5rem;\n  }\n  \n  .hero-buttons {\n    flex-direction: column;\n    grid-gap: 1rem;\n    gap: 1rem;\n  }\n  \n  .hero-stats {\n    flex-direction: column;\n    grid-gap: 1rem;\n    gap: 1rem;\n    text-align: left;\n  }\n  \n  .stat {\n    text-align: left;\n  }\n  \n  .services-grid,\n  .projects-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .contact-info {\n    margin-bottom: 2rem;\n  }\n  \n  .footer-bottom {\n    flex-direction: column;\n    text-align: center;\n    grid-gap: 1rem;\n    gap: 1rem;\n  }\n  \n  .footer-links {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-title {\n    font-size: 2rem;\n  }\n  \n  .section-title {\n    font-size: 1.75rem;\n  }\n  \n  .header-actions .contact-info {\n    display: none;\n  }\n  \n  .projects-filter {\n    grid-gap: 0.5rem;\n    gap: 0.5rem;\n  }\n  \n  .filter-btn {\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n\n/* Animations */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero-content > * {\n  animation: fadeInUp 0.8s ease-out forwards;\n}\n\n.hero-content > :nth-child(1) { animation-delay: 0.2s; }\n.hero-content > :nth-child(2) { animation-delay: 0.4s; }\n.hero-content > :nth-child(3) { animation-delay: 0.6s; }\n.hero-content > :nth-child(4) { animation-delay: 0.8s; }\n\n/* Smooth transitions for all interactive elements */\n* {\n  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;\n}", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gFAAgF;EAChF,gBAAgB;EAChB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,2BAA2B;EAC3B,WAAW;EACX,WAAW;EACX,oDAAoD;EACpD,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,YAAY;AACZ;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,qDAAqD;EACrD,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,2BAA2B;EAC3B,8CAA8C;AAChD;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,8CAA8C;AAChD;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAW;EAAX,WAAW;EACX,qBAAqB;EACrB,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,2BAA2B;EAC3B,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,0CAA0C;EAC1C,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAY;EAAZ,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,qCAAqC;EACrC,2BAA2B;EAC3B,yCAAyC;EACzC,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,cAAS;EAAT,SAAS;EACT,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oFAAoF;AACtF;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAS;EAAT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qDAAqD;EACrD,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;AACnB;;AAEA,qBAAqB;AACrB;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;EAC1C,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oFAAoF;EACpF,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,qDAAqD;EACrD,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,8CAA8C;AAChD;;AAEA,qBAAqB;AACrB;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAS;EAAT,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;EAEE,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,0CAA0C;EAC1C,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oFAAoF;EACpF,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oFAAoF;AACtF;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,cAAS;EAAT,SAAS;EACT,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;EACT,mBAAmB;EACnB,eAAe;EACf,oCAAoC;EACpC,2BAA2B;EAC3B,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oCAAoC;EACpC,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,0CAA0C;AAC5C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;;EAGE,WAAW;EACX,aAAa;EACb,0CAA0C;EAC1C,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;;;EAGE,aAAa;EACb,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA,WAAW;AACX;EACE,mBAAmB;EACnB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,cAAS;EAAT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,cAAS;EAAT,SAAS;AACX;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;;IAEE,0BAA0B;IAC1B,cAAS;IAAT,SAAS;EACX;;EAEA;IACE,cAAS;IAAT,SAAS;EACX;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,yCAAyC;IACzC,4BAA4B;IAC5B,UAAU;IACV,oBAAoB;IACpB,yBAAyB;EAC3B;;EAEA;IACE,wBAAwB;IACxB,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,aAAa;IACb,WAAM;IAAN,MAAM;EACR;;EAEA;IACE,cAAc;IACd,aAAa;IACb,gCAAgC;EAClC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,cAAS;IAAT,SAAS;EACX;;EAEA;IACE,sBAAsB;IACtB,cAAS;IAAT,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,0BAA0B;EAC5B;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,cAAS;IAAT,SAAS;EACX;;EAEA;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAW;IAAX,WAAW;EACb;;EAEA;IACE,oBAAoB;IACpB,iBAAiB;EACnB;AACF;;AAEA,eAAe;AACf;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE,0CAA0C;AAC5C;;AAEA,gCAAgC,qBAAqB,EAAE;AACvD,gCAAgC,qBAAqB,EAAE;AACvD,gCAAgC,qBAAqB,EAAE;AACvD,gCAAgC,qBAAqB,EAAE;;AAEvD,oDAAoD;AACpD;EACE,0HAA0H;AAC5H","sourcesContent":["/* Reset and Base Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Roboto', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;\n  line-height: 1.6;\n  color: #333;\n  background-color: #f8f9fa;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n/* Typography */\n.section-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1e3a8a;\n  margin-bottom: 1rem;\n  text-align: center;\n  position: relative;\n}\n\n.section-title::after {\n  content: '';\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 4px;\n  background: linear-gradient(90deg, #3b82f6, #1e40af);\n  border-radius: 2px;\n}\n\n.section-subtitle {\n  font-size: 1.1rem;\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 3rem;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.section-header {\n  margin-bottom: 4rem;\n}\n\n/* Buttons */\n.btn {\n  display: inline-block;\n  padding: 14px 28px;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);\n}\n\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);\n}\n\n.btn-secondary {\n  background: transparent;\n  color: #3b82f6;\n  border: 2px solid #3b82f6;\n}\n\n.btn-secondary:hover {\n  background: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n\n/* Language Switcher */\n.language-switcher {\n  position: relative;\n  margin-right: 1rem;\n}\n\n.lang-main-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-width: 120px;\n}\n\n.lang-main-btn:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);\n}\n\n.current-flag {\n  font-size: 1.1rem;\n}\n\n.lang-text {\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n\n.dropdown-arrow {\n  font-size: 0.7rem;\n  transition: transform 0.3s ease;\n  margin-left: auto;\n}\n\n.dropdown-arrow.open {\n  transform: rotate(180deg);\n}\n\n.lang-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n.lang-option {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: none;\n  color: #374151;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n\n.lang-option:last-child {\n  border-bottom: none;\n}\n\n.lang-option:hover {\n  background: #f8fafc;\n  color: #3b82f6;\n}\n\n.lang-option.active {\n  background: #3b82f6;\n  color: white;\n}\n\n.lang-option .flag {\n  font-size: 1rem;\n}\n\n.lang-option .name {\n  font-weight: 500;\n}\n\n/* Header */\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  transition: all 0.3s ease;\n}\n\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0;\n}\n\n.logo h1 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e40af;\n  margin-bottom: 0;\n}\n\n.logo p {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n  margin: 0;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: #374151;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.nav-link:hover,\n.nav-link.active {\n  color: #1e40af;\n  background: rgba(59, 130, 246, 0.1);\n}\n\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.contact-info .phone {\n  font-weight: 600;\n  color: #1e40af;\n  font-size: 1rem;\n}\n\n.menu-toggle {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n}\n\n.menu-toggle span {\n  width: 25px;\n  height: 3px;\n  background: #1e40af;\n  margin: 3px 0;\n  transition: 0.3s;\n  border-radius: 2px;\n}\n\n/* Hero Section */\n.hero {\n  position: relative;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\n.hero-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.hero-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6));\n}\n\n.hero-content {\n  position: relative;\n  z-index: 2;\n  color: white;\n  max-width: 800px;\n}\n\n.hero-title {\n  font-size: 3.5rem;\n  font-weight: 800;\n  margin-bottom: 1.5rem;\n  line-height: 1.1;\n}\n\n.hero-title .highlight {\n  color: #60a5fa;\n}\n\n.hero-subtitle {\n  font-size: 1.25rem;\n  margin-bottom: 2.5rem;\n  opacity: 0.9;\n  line-height: 1.6;\n}\n\n.hero-buttons {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 4rem;\n}\n\n.hero-stats {\n  display: flex;\n  gap: 3rem;\n}\n\n.stat {\n  text-align: center;\n}\n\n.stat-number {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #60a5fa;\n  margin-bottom: 0.5rem;\n}\n\n.stat-label {\n  font-size: 0.9rem;\n  opacity: 0.8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n/* About Section */\n.about {\n  padding: 6rem 0;\n  background: white;\n}\n\n.about-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n\n.about-item {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border-left: 4px solid #3b82f6;\n  transition: all 0.3s ease;\n}\n\n.about-item:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.about-icon {\n  font-size: 2rem;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n\n.about-item h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1e40af;\n  margin-bottom: 0.5rem;\n}\n\n.about-item p {\n  color: #6b7280;\n  line-height: 1.6;\n}\n\n.about-image {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);\n}\n\n.about-image img {\n  width: 100%;\n  height: 500px;\n  object-fit: cover;\n}\n\n/* Services Section */\n.services {\n  padding: 6rem 0;\n  background: #f8fafc;\n}\n\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 2rem;\n}\n\n.service-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.service-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n\n.service-image {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n}\n\n.service-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.service-card:hover .service-image img {\n  transform: scale(1.05);\n}\n\n.service-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.6));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.service-card:hover .service-overlay {\n  opacity: 1;\n}\n\n.service-content {\n  padding: 2rem;\n}\n\n.service-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1e40af;\n  margin-bottom: 1rem;\n}\n\n.service-description {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n  line-height: 1.6;\n}\n\n.service-features {\n  list-style: none;\n  margin-bottom: 2rem;\n}\n\n.service-features li {\n  padding: 0.5rem 0;\n  color: #374151;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.service-features li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  color: #10b981;\n  font-weight: bold;\n}\n\n.service-btn {\n  width: 100%;\n  background: linear-gradient(135deg, #3b82f6, #1e40af);\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.service-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);\n}\n\n/* Projects Section */\n.projects {\n  padding: 6rem 0;\n  background: white;\n}\n\n.projects-filter {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n\n.filter-btn {\n  padding: 0.75rem 1.5rem;\n  background: transparent;\n  border: 2px solid #e5e7eb;\n  border-radius: 25px;\n  color: #6b7280;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.filter-btn:hover,\n.filter-btn.active {\n  background: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n  transform: translateY(-2px);\n}\n\n.projects-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n\n.project-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n\n.project-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n\n.project-image {\n  position: relative;\n  height: 250px;\n  overflow: hidden;\n}\n\n.project-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.project-card:hover .project-image img {\n  transform: scale(1.05);\n}\n\n.project-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.7));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.project-card:hover .project-overlay {\n  opacity: 1;\n}\n\n.project-info {\n  text-align: center;\n  color: white;\n}\n\n.project-year {\n  display: block;\n  font-size: 2rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n}\n\n.project-category {\n  font-size: 0.9rem;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.project-content {\n  padding: 1.5rem;\n}\n\n.project-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e40af;\n  margin-bottom: 0.5rem;\n}\n\n.project-description {\n  color: #6b7280;\n  line-height: 1.6;\n}\n\n/* Contact Section */\n.contact {\n  position: relative;\n  padding: 6rem 0;\n  overflow: hidden;\n}\n\n.contact-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.contact-bg-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.contact-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.8));\n}\n\n.contact .section-title,\n.contact .section-subtitle {\n  color: white;\n}\n\n.contact-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  position: relative;\n  z-index: 2;\n}\n\n.contact-item {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.contact-icon {\n  font-size: 1.5rem;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n\n.contact-item h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 0.5rem;\n}\n\n.contact-item p {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 0.25rem 0;\n}\n\n.contact-form {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  padding: 2rem;\n  border-radius: 16px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  padding: 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n\n.form-group input::placeholder,\n.form-group textarea::placeholder {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #60a5fa;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.form-group select option {\n  background: #1e40af;\n  color: white;\n}\n\n/* Footer */\n.footer {\n  background: #1e293b;\n  color: white;\n  padding: 3rem 0 1rem;\n}\n\n.footer-content {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n\n.footer-logo h3 {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #60a5fa;\n  margin-bottom: 0.5rem;\n}\n\n.footer-logo p {\n  color: #94a3b8;\n  margin-bottom: 1rem;\n}\n\n.footer-social {\n  display: flex;\n  gap: 1rem;\n}\n\n.social-link {\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.social-link:hover {\n  color: #60a5fa;\n}\n\n.footer-section h4 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  color: #f1f5f9;\n}\n\n.footer-section ul {\n  list-style: none;\n}\n\n.footer-section ul li {\n  margin-bottom: 0.5rem;\n}\n\n.footer-section ul li a {\n  color: #94a3b8;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n\n.footer-section ul li a:hover {\n  color: #60a5fa;\n}\n\n.footer-contact p {\n  margin-bottom: 0.5rem;\n  color: #94a3b8;\n}\n\n.footer-bottom {\n  border-top: 1px solid #334155;\n  padding-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.footer-copyright p {\n  color: #94a3b8;\n  margin: 0;\n}\n\n.footer-links {\n  display: flex;\n  gap: 2rem;\n}\n\n.footer-links a {\n  color: #94a3b8;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: color 0.3s ease;\n}\n\n.footer-links a:hover {\n  color: #60a5fa;\n}\n\n/* Responsive Design */\n@media (max-width: 1024px) {\n  .hero-title {\n    font-size: 3rem;\n  }\n  \n  .section-title {\n    font-size: 2rem;\n  }\n  \n  .about-content,\n  .contact-content {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  \n  .hero-stats {\n    gap: 2rem;\n  }\n}\n\n@media (max-width: 768px) {\n  .container {\n    padding: 0 15px;\n  }\n  \n  .menu-toggle {\n    display: flex;\n  }\n  \n  .language-switcher {\n    display: none;\n  }\n  \n  .nav {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n    transform: translateY(-100%);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.3s ease;\n  }\n  \n  .nav-open {\n    transform: translateY(0);\n    opacity: 1;\n    pointer-events: all;\n  }\n  \n  .nav-list {\n    flex-direction: column;\n    padding: 1rem;\n    gap: 0;\n  }\n  \n  .nav-link {\n    display: block;\n    padding: 1rem;\n    border-bottom: 1px solid #e5e7eb;\n  }\n  \n  .hero-title {\n    font-size: 2.5rem;\n  }\n  \n  .hero-buttons {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .hero-stats {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: left;\n  }\n  \n  .stat {\n    text-align: left;\n  }\n  \n  .services-grid,\n  .projects-grid {\n    grid-template-columns: 1fr;\n  }\n  \n  .contact-info {\n    margin-bottom: 2rem;\n  }\n  \n  .footer-bottom {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  \n  .footer-links {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-title {\n    font-size: 2rem;\n  }\n  \n  .section-title {\n    font-size: 1.75rem;\n  }\n  \n  .header-actions .contact-info {\n    display: none;\n  }\n  \n  .projects-filter {\n    gap: 0.5rem;\n  }\n  \n  .filter-btn {\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n\n/* Animations */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero-content > * {\n  animation: fadeInUp 0.8s ease-out forwards;\n}\n\n.hero-content > :nth-child(1) { animation-delay: 0.2s; }\n.hero-content > :nth-child(2) { animation-delay: 0.4s; }\n.hero-content > :nth-child(3) { animation-delay: 0.6s; }\n.hero-content > :nth-child(4) { animation-delay: 0.8s; }\n\n/* Smooth transitions for all interactive elements */\n* {\n  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\",\n        \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n        \"Helvetica Neue\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n        monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;IACI,SAAS;IACT;;oCAEgC;IAChC,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI;iBACa;AACjB","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nbody {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\",\n        \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\",\n        \"Helvetica Neue\", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n        monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations */ "./src/translations.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\vital\\Desktop\\\u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0438\\Baugrand3.com-main\\frontend\\src\\App.js",
  _s = __webpack_require__.$Refresh$.signature();





function App() {
  _s();
  const [isMenuOpen, setIsMenuOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [activeSection, setActiveSection] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home');
  const [currentLanguage, setCurrentLanguage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('uk');
  const t = _translations__WEBPACK_IMPORTED_MODULE_2__["translations"][currentLanguage];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      isMenuOpen: isMenuOpen,
      setIsMenuOpen: setIsMenuOpen,
      activeSection: activeSection,
      scrollToSection: scrollToSection,
      currentLanguage: currentLanguage,
      setCurrentLanguage: setCurrentLanguage,
      t: t
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeroSection"], {
        t: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["AboutSection"], {
        t: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["ServicesSection"], {
        t: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["ProjectsSection"], {
        t: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["ContactSection"], {
        t: t
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      t: t
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_s(App, "FUSWASJGm1p3HaAg527TLI0MXj8=");
_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/*! exports provided: Header, HeroSection, AboutSection, ServicesSection, ProjectsSection, ContactSection, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSection", function() { return HeroSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSection", function() { return AboutSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSection", function() { return ServicesSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSection", function() { return ProjectsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return ContactSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\vital\\Desktop\\\u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0438\\Baugrand3.com-main\\frontend\\src\\components.js",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature(),
  _s3 = __webpack_require__.$Refresh$.signature();


// Language Switcher Component

const LanguageSwitcher = ({
  currentLanguage,
  setCurrentLanguage
}) => {
  _s();
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const languages = [{
    code: 'uk',
    name: 'Українська',
    flag: '🇺🇦'
  }, {
    code: 'ru',
    name: 'Русский',
    flag: '🇷🇺'
  }, {
    code: 'en',
    name: 'English',
    flag: '🇬🇧'
  }];
  const currentLang = languages.find(lang => lang.code === currentLanguage);
  const handleLanguageSelect = langCode => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const handleClickOutside = event => {
      if (!event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "language-switcher",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "lang-main-btn",
      onClick: () => setIsOpen(!isOpen),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "current-flag",
        children: currentLang === null || currentLang === void 0 ? void 0 : currentLang.flag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "lang-text",
        children: "\u041C\u041E\u0412\u0410"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: `dropdown-arrow ${isOpen ? 'open' : ''}`,
        children: "\u25BC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "lang-dropdown",
      children: languages.map(lang => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: `lang-option ${currentLanguage === lang.code ? 'active' : ''}`,
        onClick: () => handleLanguageSelect(lang.code),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "flag",
          children: lang.flag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          className: "name",
          children: lang.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }, undefined)]
      }, lang.code, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

// Header Component
_s(LanguageSwitcher, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = LanguageSwitcher;
const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  currentLanguage,
  setCurrentLanguage,
  t
}) => {
  const menuItems = [{
    id: 'home',
    label: t.nav.home,
    href: '#home'
  }, {
    id: 'about',
    label: t.nav.about,
    href: '#about'
  }, {
    id: 'services',
    label: t.nav.services,
    href: '#services'
  }, {
    id: 'projects',
    label: t.nav.projects,
    href: '#projects'
  }, {
    id: 'contact',
    label: t.nav.contact,
    href: '#contact'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "header-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "logo",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: t.company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: t.tagline
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
          className: `nav ${isMenuOpen ? 'nav-open' : ''}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "nav-list",
            children: menuItems.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: item.href,
                className: `nav-link ${activeSection === item.id ? 'active' : ''}`,
                onClick: e => {
                  e.preventDefault();
                  scrollToSection(item.id);
                },
                children: item.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 19
              }, undefined)
            }, item.id, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "header-actions",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(LanguageSwitcher, {
            currentLanguage: currentLanguage,
            setCurrentLanguage: setCurrentLanguage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "contact-info",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              className: "phone",
              children: t.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "menu-toggle",
            onClick: () => setIsMenuOpen(!isMenuOpen),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, undefined);
};

// Hero Section Component
_c2 = Header;
const HeroSection = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    id: "home",
    className: "hero",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "hero-background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: "images/3.jpg",
        alt: "Metal structures",
        className: "hero-image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "hero-overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "hero-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "hero-title",
          children: [t.hero.title, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 28
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "highlight",
            children: t.hero.titleHighlight
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "hero-subtitle",
          children: t.hero.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "hero-buttons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-primary",
            children: t.hero.orderProject
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            className: "btn btn-secondary",
            children: t.hero.ourWorks
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "hero-stats",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "stat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-number",
              children: "10+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-label",
              children: t.hero.stats.years
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "stat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-number",
              children: "500+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-label",
              children: t.hero.stats.projects
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "stat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-number",
              children: "24/7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "stat-label",
              children: t.hero.stats.support
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 5
  }, undefined);
};

// About Section Component
_c3 = HeroSection;
const AboutSection = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    id: "about",
    className: "about",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "section-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "section-title",
          children: t.about.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "section-subtitle",
          children: t.about.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "about-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "about-text",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "about-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "about-icon",
              children: "\uD83C\uDFD7\uFE0F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.about.ownFactory.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.about.ownFactory.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "about-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "about-icon",
              children: "\uD83D\uDC65"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.about.qualifiedSpecialists.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.about.qualifiedSpecialists.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "about-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "about-icon",
              children: "\uD83C\uDFAF"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.about.qualityGuaranteed.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.about.qualityGuaranteed.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "about-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "about-icon",
              children: "\u26A1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.about.fastDeadlines.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.about.fastDeadlines.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "about-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: "images/a.png",
            alt: "Servicestroy Team"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 5
  }, undefined);
};

// Services Section Component
_c4 = AboutSection;
const ServicesSection = ({
  t
}) => {
  const services = [{
    id: 1,
    title: t.services.list.metalStructures.title,
    description: t.services.list.metalStructures.description,
    image: 'images/metal.png',
    features: t.services.list.metalStructures.features
  }, {
    id: 2,
    title: t.services.list.warehouses.title,
    description: t.services.list.warehouses.description,
    image: 'images/warehouse.png',
    features: t.services.list.warehouses.features
  }, {
    id: 3,
    title: t.services.list.agricultural.title,
    description: t.services.list.agricultural.description,
    image: 'images/farm.png',
    features: t.services.list.agricultural.features
  }, {
    id: 4,
    title: t.services.list.commercial.title,
    description: t.services.list.commercial.description,
    image: 'https://images.unsplash.com/photo-1637393932938-b9c209e67d5c',
    features: t.services.list.commercial.features
  }, {
    id: 5,
    title: t.services.list.industrial.title,
    description: t.services.list.industrial.description,
    image: 'images/factory.png',
    features: t.services.list.industrial.features
  }, {
    id: 6,
    title: t.services.list.highStructures.title,
    description: t.services.list.highStructures.description,
    image: 'https://images.unsplash.com/photo-1650383673322-48c8a6469e33',
    features: t.services.list.highStructures.features
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    id: "services",
    className: "services",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "section-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "section-title",
          children: t.services.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "section-subtitle",
          children: t.services.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "services-grid",
        children: services.map(service => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "service-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "service-image",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: service.image,
              alt: service.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "service-overlay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "service-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              className: "service-title",
              children: service.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "service-description",
              children: service.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
              className: "service-features",
              children: service.features.map((feature, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                children: feature
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              className: "service-btn",
              children: t.services.learnMore
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, undefined)]
        }, service.id, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 277,
    columnNumber: 5
  }, undefined);
};

// Projects Section Component
_c5 = ServicesSection;
const ProjectsSection = ({
  t
}) => {
  _s2();
  const projects = [{
    id: 1,
    title: t.projects.list.logistics.title,
    category: t.projects.list.logistics.category,
    image: 'images/armazem.png',
    description: t.projects.list.logistics.description,
    year: '2024'
  }, {
    id: 2,
    title: t.projects.list.industrial.title,
    category: t.projects.list.industrial.category,
    image: 'images/factory.png',
    description: t.projects.list.industrial.description,
    year: '2023'
  }, {
    id: 3,
    title: t.projects.list.shopping.title,
    category: t.projects.list.shopping.category,
    image: 'https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg',
    description: t.projects.list.shopping.description,
    year: '2023'
  }, {
    id: 4,
    title: t.projects.list.office.title,
    category: t.projects.list.office.category,
    image: 'https://images.unsplash.com/photo-1637393934999-0177bedc0085',
    description: t.projects.list.office.description,
    year: '2024'
  }];
  const [selectedCategory, setSelectedCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(t.projects.filters.all);
  const categories = [t.projects.filters.all, t.projects.filters.warehouses, t.projects.filters.factories, t.projects.filters.commercial];
  const filteredProjects = selectedCategory === t.projects.filters.all ? projects : projects.filter(project => project.category === selectedCategory);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    id: "projects",
    className: "projects",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "section-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "section-title",
          children: t.projects.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "section-subtitle",
          children: t.projects.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "projects-filter",
        children: categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: `filter-btn ${selectedCategory === category ? 'active' : ''}`,
          onClick: () => setSelectedCategory(category),
          children: category
        }, category, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "projects-grid",
        children: filteredProjects.map(project => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "project-card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "project-image",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: project.image,
              alt: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "project-overlay",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "project-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "project-year",
                  children: project.year
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 389,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                  className: "project-category",
                  children: project.category
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 390,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "project-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              className: "project-title",
              children: project.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              className: "project-description",
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 15
          }, undefined)]
        }, project.id, true, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 361,
    columnNumber: 5
  }, undefined);
};

// Contact Section Component
_s2(ProjectsSection, "b8WvnbfpShpnQbPuBALmWzI3b1U=");
_c6 = ProjectsSection;
const ContactSection = ({
  t
}) => {
  _s3();
  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    id: "contact",
    className: "contact",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "contact-background",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: "https://images.unsplash.com/photo-1637393934065-25cc36bca316",
        alt: "Contact",
        className: "contact-bg-image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "contact-overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "section-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: "section-title",
          children: t.contact.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "section-subtitle",
          children: t.contact.subtitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "contact-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "contact-info",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "contact-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contact-icon",
              children: "\uD83D\uDCCD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 459,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.contact.address.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 461,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.contact.address.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 462,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "contact-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contact-icon",
              children: "\uD83D\uDCDE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 467,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.contact.phone.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 469,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "+380 (67) 482-90-40"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "+380 (93) 231-24-88"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "contact-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contact-icon",
              children: "\u2709\uFE0F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.contact.email.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 478,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "info@baugrand.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: "order@baugrand.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 480,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 477,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "contact-item",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "contact-icon",
              children: "\uD83D\uDD52"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 485,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                children: t.contact.workingHours.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.contact.workingHours.weekdays
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                children: t.contact.workingHours.saturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 486,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          className: "contact-form",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              name: "name",
              placeholder: t.contact.form.name,
              value: formData.name,
              onChange: handleChange,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "tel",
              name: "phone",
              placeholder: t.contact.form.phone,
              value: formData.phone,
              onChange: handleChange,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "email",
              name: "email",
              placeholder: t.contact.form.email,
              value: formData.email,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 517,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
              name: "service",
              value: formData.service,
              onChange: handleChange,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "",
                children: t.contact.form.selectService
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 533,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "metalwork",
                children: t.contact.form.services.metalwork
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "warehouse",
                children: t.contact.form.services.warehouse
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 535,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "agricultural",
                children: t.contact.form.services.agricultural
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 536,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "commercial",
                children: t.contact.form.services.commercial
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 537,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "industrial",
                children: t.contact.form.services.industrial
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 538,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                value: "high-structures",
                children: t.contact.form.services.highStructures
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 539,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 527,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("textarea", {
              name: "message",
              placeholder: t.contact.form.message,
              rows: "5",
              value: formData.message,
              onChange: handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 544,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 543,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-primary",
            children: t.contact.form.submit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 553,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 438,
    columnNumber: 5
  }, undefined);
};

// Footer Component
_s3(ContactSection, "Anq/jqcb718j/DEb3TVWdBSDcKA=");
_c7 = ContactSection;
const Footer = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "footer-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "footer-logo",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
              children: t.company
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 571,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: t.footer.tagline
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 572,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 570,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "footer-social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: "#",
              className: "social-link",
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: "#",
              className: "social-link",
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 576,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: "#",
              className: "social-link",
              children: "LinkedIn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 577,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 569,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: t.footer.sections.services
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 582,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#services",
                children: t.services.list.metalStructures.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 584,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#services",
                children: t.services.list.warehouses.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 585,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 585,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#services",
                children: t.services.list.agricultural.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 586,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 586,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#services",
                children: t.services.list.commercial.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 587,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 587,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 581,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: t.footer.sections.company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#about",
                children: t.footer.links.about
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 594,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 594,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#projects",
                children: t.footer.links.projects
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 595,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#contact",
                children: t.footer.links.contacts
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 596,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 596,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                href: "#",
                children: t.footer.links.careers
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 597,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 593,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 591,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
            children: t.footer.sections.contacts
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "footer-contact",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: ["\uD83D\uDCCD ", t.contact.address.value]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 604,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "\uD83D\uDCDE +380 (67) 482-90-40"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 605,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
              children: "\u2709\uFE0F info@baugrand.com.ua"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 603,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "footer-bottom",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-copyright",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            children: t.footer.copyright
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 613,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "footer-links",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: "#",
            children: t.footer.links.privacy
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 616,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: "#",
            children: t.footer.links.terms
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 617,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 566,
    columnNumber: 5
  }, undefined);
};
_c8 = Footer;
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__webpack_require__.$Refresh$.register(_c, "LanguageSwitcher");
__webpack_require__.$Refresh$.register(_c2, "Header");
__webpack_require__.$Refresh$.register(_c3, "HeroSection");
__webpack_require__.$Refresh$.register(_c4, "AboutSection");
__webpack_require__.$Refresh$.register(_c5, "ServicesSection");
__webpack_require__.$Refresh$.register(_c6, "ProjectsSection");
__webpack_require__.$Refresh$.register(_c7, "ContactSection");
__webpack_require__.$Refresh$.register(_c8, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "C:\\Users\\vital\\Desktop\\\u0437\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0438\\Baugrand3.com-main\\frontend\\src\\index.js";





const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/translations.js":
/*!*****************************!*\
  !*** ./src/translations.js ***!
  \*****************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translations", function() { return translations; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const translations = {
  uk: {
    // Header
    company: 'БАУГРАНД',
    tagline: 'Будівельна компанія',
    nav: {
      home: 'Головна',
      about: 'Про нас',
      services: 'Послуги',
      projects: 'Проекти',
      contact: 'Контакти'
    },
    phone: '+380 (67) 482-90-40',
    // Hero Section
    hero: {
      title: 'Професійне будівництво',
      titleHighlight: 'металевих конструкцій',
      subtitle: 'З 2015 року надаємо повний спектр послуг у сфері проєктування, виготовлення та монтажу металоконструкцій в Україні',
      orderProject: 'Замовити проект',
      ourWorks: 'Наші роботи',
      stats: {
        years: 'років досвіду',
        projects: 'проектів',
        support: 'підтримка'
      }
    },
    // About Section
    about: {
      title: 'Про компанію',
      subtitle: 'Баугранд - надійний партнер у сфері будівництва металевих конструкцій',
      ownFactory: {
        title: 'Власний завод',
        description: 'Сучасне обладнання для виготовлення металоконструкцій будь-якої складності'
      },
      qualifiedSpecialists: {
        title: 'Кваліфіковані спеціалісти',
        description: 'Команда досвідчених інженерів, проектувальників та монтажників'
      },
      qualityGuaranteed: {
        title: 'Якість гарантована',
        description: 'Використовуємо тільки сертифіковані матеріали та дотримуємось стандартів'
      },
      fastDeadlines: {
        title: 'Швидкі терміни',
        description: 'Оптимізовані процеси виробництва дозволяють виконувати замовлення в стислі терміни'
      }
    },
    // Services Section
    services: {
      title: 'Наші послуги',
      subtitle: 'Повний спектр робіт від проектування до введення в експлуатацію',
      learnMore: 'Дізнатися більше',
      list: {
        metalStructures: {
          title: 'Металоконструкції',
          description: 'Проектування, виготовлення та монтаж металевих каркасів будь-якої складності',
          features: ['Сучасне обладнання', 'Досвідчені спеціалісти']
        },
        warehouses: {
          title: 'Складські приміщення',
          description: 'Будівництво сучасних складів та логістичних центрів',
          features: ['Швидке будівництво', 'Економічність', 'Функціональність']
        },
        agricultural: {
          title: 'Сільськогосподарські споруди',
          description: 'Ангари, свинарники, пташники та інші агропромислові об\'єкти',
          features: ['Спеціалізовані рішення', 'Оптимальний мікроклімат', 'Довговічність']
        },
        commercial: {
          title: 'Комерційні будівлі',
          description: 'Автосалони, офіси, торгово-розважальні центри',
          features: ['Сучасний дизайн', 'Енергоефективність', 'Індивідуальний підхід']
        },
        industrial: {
          title: 'Промислові об\'єкти',
          description: 'Заводи, фабрики та інші виробничі приміщення',
          features: ['Високі навантаження', 'Безпека', 'Надійність']
        },
        highStructures: {
          title: 'Високі конструкції',
          description: 'Башти, мачти,  та інші висотні споруди',
          features: ['Точні розрахунки', 'Спеціальне обладнання', 'Безпека висоти']
        }
      }
    },
    // Projects Section
    projects: {
      title: 'Наші проекти',
      subtitle: 'Портфоліо реалізованих проектів різної складності',
      filters: {
        all: 'Всі',
        warehouses: 'Складські приміщення',
        factories: 'Заводи',
        commercial: 'Комерційні споруди'
      },
      list: {
        logistics: {
          title: 'Логістичний центр',
          category: 'Складські приміщення',
          description: 'Сучасний логістичний центр площею 15,000 м²'
        },
        industrial: {
          title: 'Промисловий комплекс',
          category: 'Заводи',
          description: 'Виробничий комплекс з металевими конструкціями'
        },
        shopping: {
          title: 'Торговельний центр',
          category: 'Комерційні споруди',
          description: 'Сучасний ТРЦ з унікальним дизайном'
        },
        office: {
          title: 'Офісний центр',
          category: 'Комерційні споруди',
          description: 'Багатоповерхова офісна будівля'
        }
      }
    },
    // Contact Section
    contact: {
      title: 'Контакти',
      subtitle: 'Зв\'яжіться з нами для консультації та розрахунку вартості',
      address: {
        title: 'Адреса',
        value: 'Україна, м. Одеса, 65000, вул. Центральний аеропорт, 104'
      },
      phone: {
        title: 'Телефон'
      },
      email: {
        title: 'Email'
      },
      workingHours: {
        title: 'Робочі години',
        weekdays: 'Пн-Пт: 8:00 - 18:00',
        saturday: 'Сб: 9:00 - 15:00'
      },
      form: {
        name: 'Ваше ім\'я *',
        phone: 'Телефон *',
        email: 'Email',
        service: 'Оберіть послугу',
        message: 'Ваше повідомлення',
        submit: 'Відправити заявку',
        selectService: 'Оберіть послугу',
        services: {
          metalwork: 'Металоконструкції',
          warehouse: 'Складські приміщення',
          agricultural: 'Сільськогосподарські споруди',
          commercial: 'Комерційні будівлі',
          industrial: 'Промислові об\'єкти',
          highStructures: 'Високі конструкції'
        },
        successMessage: 'Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом.'
      }
    },
    // Footer
    footer: {
      tagline: 'Надійний партнер у будівництві',
      sections: {
        services: 'Послуги',
        company: 'Компанія',
        contacts: 'Контакти'
      },
      links: {
        about: 'Про нас',
        projects: 'Проекти',
        contacts: 'Контакти',
        careers: 'Вакансії',
        privacy: 'Політика конфіденційності',
        terms: 'Умови використання'
      },
      copyright: '© 2025 Baugrand. Всі права захищені.'
    }
  },
  ru: {
    // Header
    company: 'БАУГРАНД',
    tagline: 'Строительная компания',
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    phone: '+380 (67) 482-90-40',
    // Hero Section
    hero: {
      title: 'Профессиональное строительство',
      titleHighlight: 'металлических конструкций',
      subtitle: 'С 2015 года предоставляем полный спектр услуг в сфере проектирования, изготовления и монтажа металлоконструкций в Украине',
      orderProject: 'Заказать проект',
      ourWorks: 'Наши работы',
      stats: {
        years: 'лет опыта',
        projects: 'проектов',
        support: 'поддержка'
      }
    },
    // About Section
    about: {
      title: 'О компании',
      subtitle: 'Баугранд - надежный партнер в сфере строительства металлических конструкций',
      ownFactory: {
        title: 'Собственный завод',
        description: 'Современное оборудование для изготовления металлоконструкций любой сложности'
      },
      qualifiedSpecialists: {
        title: 'Квалифицированные специалисты',
        description: 'Команда опытных инженеров, проектировщиков и монтажников'
      },
      qualityGuaranteed: {
        title: 'Качество гарантировано',
        description: 'Используем только сертифицированные материалы и соблюдаем стандарты'
      },
      fastDeadlines: {
        title: 'Быстрые сроки',
        description: 'Оптимизированные процессы производства позволяют выполнять заказы в кратчайшие сроки'
      }
    },
    // Services Section
    services: {
      title: 'Наши услуги',
      subtitle: 'Полный спектр работ от проектирования до ввода в эксплуатацию',
      learnMore: 'Узнать больше',
      list: {
        metalStructures: {
          title: 'Металлоконструкции',
          description: 'Проектирование, изготовление и монтаж металлических каркасов любой сложности',
          features: ['Современное оборудование', 'Опытные специалисты']
        },
        warehouses: {
          title: 'Складские помещения',
          description: 'Строительство современных складов и логистических центров',
          features: ['Быстрое строительство', 'Экономичность', 'Функциональность']
        },
        agricultural: {
          title: 'Сельскохозяйственные сооружения',
          description: 'Ангары, свинарники, птичники и другие агропромышленные объекты',
          features: ['Специализированные решения', 'Оптимальный микроклимат', 'Долговечность']
        },
        commercial: {
          title: 'Коммерческие здания',
          description: 'Автосалоны, торгово-развлекательные центры',
          features: ['Современный дизайн', 'Энергоэффективность', 'Индивидуальный подход']
        },
        industrial: {
          title: 'Промышленные объекты',
          description: 'Заводы, фабрики и другие производственные помещения',
          features: ['Высокие нагрузки', 'Безопасность', 'Надежность']
        },
        highStructures: {
          title: 'Высотные конструкции',
          description: 'Башни, мачты, дымоходы и другие высотные сооружения',
          features: ['Точные расчеты', 'Специальное оборудование', 'Безопасность высоты']
        }
      }
    },
    // Projects Section
    projects: {
      title: 'Наши проекты',
      subtitle: 'Портфолио реализованных проектов различной сложности',
      filters: {
        all: 'Все',
        warehouses: 'Складские помещения',
        factories: 'Заводы',
        commercial: 'Коммерческие сооружения'
      },
      list: {
        logistics: {
          title: 'Логистический центр',
          category: 'Складские помещения',
          description: 'Современный логистический центр площадью 15,000 м²'
        },
        industrial: {
          title: 'Промышленный комплекс',
          category: 'Заводы',
          description: 'Производственный комплекс с металлическими конструкциями'
        },
        shopping: {
          title: 'Торговый центр',
          category: 'Коммерческие сооружения',
          description: 'Современный ТРЦ с уникальным дизайном'
        },
        office: {
          title: 'Офисный центр',
          category: 'Коммерческие сооружения',
          description: 'Многоэтажное офисное здание'
        }
      }
    },
    // Contact Section
    contact: {
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами для консультации и расчета стоимости',
      address: {
        title: 'Адрес',
        value: 'Украина, г. Одесса, 65000, ул. Центральный аэропорт, 104'
      },
      phone: {
        title: 'Телефон'
      },
      email: {
        title: 'Email'
      },
      workingHours: {
        title: 'Рабочие часы',
        weekdays: 'Пн-Пт: 8:00 - 18:00',
        saturday: 'Сб: 9:00 - 15:00'
      },
      form: {
        name: 'Ваше имя *',
        phone: 'Телефон *',
        email: 'Email',
        service: 'Выберите услугу',
        message: 'Ваше сообщение',
        submit: 'Отправить заявку',
        selectService: 'Выберите услугу',
        services: {
          metalwork: 'Металлоконструкции',
          warehouse: 'Складские помещения',
          agricultural: 'Сельскохозяйственные сооружения',
          commercial: 'Коммерческие здания',
          industrial: 'Промышленные объекты',
          highStructures: 'Высотные конструкции'
        },
        successMessage: 'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.'
      }
    },
    // Footer
    footer: {
      tagline: 'Надежный партнер в строительстве',
      sections: {
        services: 'Услуги',
        company: 'Компания',
        contacts: 'Контакты'
      },
      links: {
        about: 'О нас',
        projects: 'Проекты',
        contacts: 'Контакты',
        careers: 'Вакансии',
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования'
      },
      copyright: '© 2025 Baugrand. Все права защищены.'
    }
  },
  en: {
    // Header
    company: 'BAUGRAND',
    tagline: 'Construction Company',
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    phone: '+380 (67) 482-90-40',
    // Hero Section
    hero: {
      title: 'Professional construction of',
      titleHighlight: 'metal structures',
      subtitle: 'Since 2015, we have been providing a full range of services in the field of design, manufacturing and installation of metal structures in Ukraine',
      orderProject: 'Order Project',
      ourWorks: 'Our Works',
      stats: {
        years: 'years experience',
        projects: 'projects',
        support: 'support'
      }
    },
    // About Section
    about: {
      title: 'About Company',
      subtitle: 'Baugrand is a reliable partner in the field of metal construction',
      ownFactory: {
        title: 'Own Factory',
        description: 'Modern equipment for manufacturing metal structures of any complexity'
      },
      qualifiedSpecialists: {
        title: 'Qualified Specialists',
        description: 'Team of experienced engineers, designers and installers'
      },
      qualityGuaranteed: {
        title: 'Quality Guaranteed',
        description: 'We use only certified materials and comply with standards'
      },
      fastDeadlines: {
        title: 'Fast Deadlines',
        description: 'Optimized production processes allow orders to be completed in the shortest possible time'
      }
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Full range of work from design to commissioning',
      learnMore: 'Learn More',
      list: {
        metalStructures: {
          title: 'Metal Structures',
          description: 'Design, manufacturing and installation of metal frames of any complexity',
          features: ['Own factory', 'Modern equipment', 'Experienced specialists']
        },
        warehouses: {
          title: 'Warehouse Buildings',
          description: 'Construction of modern warehouses and logistics centers',
          features: ['Fast construction', 'Cost efficiency', 'Functionality']
        },
        agricultural: {
          title: 'Agricultural Buildings',
          description: 'Hangars, pig farms, poultry houses and other agro-industrial facilities',
          features: ['Specialized solutions', 'Optimal microclimate', 'Durability']
        },
        commercial: {
          title: 'Commercial Buildings',
          description: 'Car dealerships, offices, shopping and entertainment centers',
          features: ['Modern design', 'Energy efficiency', 'Individual approach']
        },
        industrial: {
          title: 'Industrial Facilities',
          description: 'Factories, plants and other production facilities',
          features: ['High loads', 'Safety', 'Reliability']
        },
        highStructures: {
          title: 'High-rise Structures',
          description: 'Towers, masts, chimneys and other high-rise buildings',
          features: ['Precise calculations', 'Special equipment', 'Height safety']
        }
      }
    },
    // Projects Section
    projects: {
      title: 'Our Projects',
      subtitle: 'Portfolio of completed projects of various complexity',
      filters: {
        all: 'All',
        warehouses: 'Warehouse Buildings',
        factories: 'Factories',
        commercial: 'Commercial Buildings'
      },
      list: {
        logistics: {
          title: 'Logistics Center',
          category: 'Warehouse Buildings',
          description: 'Modern logistics center with an area of 15,000 m²'
        },
        industrial: {
          title: 'Industrial Complex',
          category: 'Factories',
          description: 'Production complex with metal structures'
        },
        shopping: {
          title: 'Shopping Center',
          category: 'Commercial Buildings',
          description: 'Modern shopping center with unique design'
        },
        office: {
          title: 'Office Center',
          category: 'Commercial Buildings',
          description: 'Multi-story office building'
        }
      }
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'Contact us for consultation and cost calculation',
      address: {
        title: 'Address',
        value: 'Ukraine, Odesa, 65000, Central Airport str., 104'
      },
      phone: {
        title: 'Phone'
      },
      email: {
        title: 'Email'
      },
      workingHours: {
        title: 'Working Hours',
        weekdays: 'Mon-Fri: 8:00 - 18:00',
        saturday: 'Sat: 9:00 - 15:00'
      },
      form: {
        name: 'Your Name *',
        phone: 'Phone *',
        email: 'Email',
        service: 'Select Service',
        message: 'Your Message',
        submit: 'Send Request',
        selectService: 'Select Service',
        services: {
          metalwork: 'Metal Structures',
          warehouse: 'Warehouse Buildings',
          agricultural: 'Agricultural Buildings',
          commercial: 'Commercial Buildings',
          industrial: 'Industrial Facilities',
          highStructures: 'High-rise Structures'
        },
        successMessage: 'Thank you for your request! We will contact you shortly.'
      }
    },
    // Footer
    footer: {
      tagline: 'Reliable partner in construction',
      sections: {
        services: 'Services',
        company: 'Company',
        contacts: 'Contacts'
      },
      links: {
        about: 'About',
        projects: 'Projects',
        contacts: 'Contacts',
        careers: 'Careers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use'
      },
      copyright: '© 2025 Baygrand. All rights reserved.'
    }
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\vital\Desktop\заготовки\Baugrand3.com-main\frontend\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\vital\Desktop\заготовки\Baugrand3.com-main\frontend\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! C:\Users\vital\Desktop\заготовки\Baugrand3.com-main\frontend\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\vital\Desktop\заготовки\Baugrand3.com-main\frontend\src\index.js */"./src/index.js");


/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map