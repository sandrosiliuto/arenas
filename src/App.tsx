import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-arenas-navy text-arenas-offwhite selection:bg-arenas-gold selection:text-arenas-navy">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-arenas-navy/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl font-serif font-bold tracking-widest cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            ARENAS
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('collection')} className="hover:text-arenas-gold transition-colors uppercase text-xs tracking-widest font-medium">
              {t.nav.collection}
            </button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-arenas-gold transition-colors uppercase text-xs tracking-widest font-medium">
              {t.nav.reviews}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-arenas-gold transition-colors uppercase text-xs tracking-widest font-medium">
              {t.nav.gallery}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-arenas-gold transition-colors uppercase text-xs tracking-widest font-medium">
              {t.nav.contact}
            </button>
            
            <div className="flex items-center space-x-2 ml-4 border-l border-arenas-offwhite/20 pl-4">
              {(['es', 'en', 'de'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-bold uppercase ${lang === l ? 'text-arenas-gold' : 'text-arenas-offwhite/50 hover:text-arenas-offwhite'}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-arenas-offwhite" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-arenas-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              <button onClick={() => scrollToSection('collection')} className="text-2xl font-serif">{t.nav.collection}</button>
              <button onClick={() => scrollToSection('reviews')} className="text-2xl font-serif">{t.nav.reviews}</button>
              <button onClick={() => scrollToSection('gallery')} className="text-2xl font-serif">{t.nav.gallery}</button>
              <button onClick={() => scrollToSection('contact')} className="text-2xl font-serif">{t.nav.contact}</button>
              
              <div className="flex justify-center space-x-6 pt-8 border-t border-arenas-offwhite/10">
                {(['es', 'en', 'de'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsMenuOpen(false); }}
                    className={`text-lg font-bold uppercase ${lang === l ? 'text-arenas-gold' : 'text-arenas-offwhite/50'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/sandrosiliuto/arenas/main/playa.jpeg" 
            alt="El Médano - Playa Chica" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-arenas-navy/40 via-transparent to-arenas-navy"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif mb-6 tracking-tight text-balance leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-10 text-arenas-sand tracking-wide uppercase"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => scrollToSection('collection')}
            className="bg-arenas-gold text-arenas-navy px-10 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-arenas-offwhite transition-all duration-300 flex items-center space-x-2 mx-auto group"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-arenas-offwhite"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="collection" className="py-24 px-6 bg-arenas-offwhite text-arenas-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-4">{t.products.title}</h2>
            <p className="text-lg text-arenas-navy/60 font-light italic">{t.products.subtitle}</p>
            <div className="w-24 h-px bg-arenas-gold mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.products.items.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-arenas-navy/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-arenas-navy text-arenas-offwhite px-3 py-1 text-[10px] uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif">{product.name}</h3>
                  <span className="font-medium text-arenas-gold">{product.price}</span>
                </div>
                <p className="text-sm text-arenas-navy/70 mb-6 font-light leading-relaxed">
                  {product.description}
                </p>
                <a 
                  href={`https://wa.me/34922176196?text=Hola, me gustaría consultar sobre el producto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold border-b border-arenas-gold pb-1 hover:text-arenas-gold transition-colors"
                >
                  <span>{t.products.whatsapp}</span>
                  <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-arenas-navy-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-arenas-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">{t.reviews.title}</h2>
            <div className="flex justify-center space-x-1 text-arenas-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.items.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex space-x-1 text-arenas-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="italic text-arenas-offwhite/80 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-arenas-gold/20 flex items-center justify-center text-arenas-gold font-bold text-xs">
                    {review.name[0]}
                  </div>
                  <span className="font-medium text-sm">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-arenas-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-16">{t.gallery.title}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" alt="Fashion" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=600" alt="Accessories" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1535633302704-b02f4fad9315?auto=format&fit=crop&q=80&w=600" alt="Jewelry" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" alt="Shoes" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600" alt="Beach dress" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cf4?auto=format&fit=crop&q=80&w=600" alt="Jewelry details" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1583267746897-2cf415888172?auto=format&fit=crop&q=80&w=600" alt="Fashion details" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="aspect-square overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600" alt="Sunglasses" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-arenas-offwhite text-arenas-navy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">{t.contact.title}</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-arenas-gold/10 p-3 rounded-full text-arenas-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Ubicación</h4>
                  <p className="text-arenas-navy/70">{t.contact.location}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-arenas-gold/10 p-3 rounded-full text-arenas-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">WhatsApp</h4>
                  <p className="text-arenas-navy/70">+34 922 176 196</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-arenas-gold/10 p-3 rounded-full text-arenas-gold">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest mb-1">Instagram</h4>
                  <a href="https://instagram.com/tienda_arenas" target="_blank" rel="noopener noreferrer" className="text-arenas-navy/70 hover:text-arenas-gold transition-colors">@tienda_arenas</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] bg-arenas-navy/5 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
            {/* Simulated Map */}
            <div className="w-full h-full flex items-center justify-center bg-arenas-sand/20 relative">
              <MapPin size={48} className="text-arenas-gold animate-bounce" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-full h-full border-4 border-arenas-navy/20 rounded-full scale-150"></div>
                  <div className="w-full h-full border-4 border-arenas-navy/20 rounded-full scale-100"></div>
                  <div className="w-full h-full border-4 border-arenas-navy/20 rounded-full scale-50"></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white p-3 rounded-lg shadow-lg text-xs font-bold uppercase tracking-widest">
                Playa Chica, El Médano
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-arenas-offwhite/10 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-xl font-serif font-bold tracking-widest mb-6">ARENAS</div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://instagram.com/tienda_arenas" target="_blank" rel="noopener noreferrer" className="hover:text-arenas-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/34922176196" target="_blank" rel="noopener noreferrer" className="hover:text-arenas-gold transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs text-arenas-offwhite/40 uppercase tracking-widest">
            {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/34922176196" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-arenas-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
