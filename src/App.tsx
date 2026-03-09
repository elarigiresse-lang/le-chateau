/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  Award,
  Globe,
  Star,
  Facebook,
  FileText,
  BarChart3,
  Download
} from 'lucide-react';
import { cn } from './lib/utils';

const banner1 = new URL('./assets/banner1.jpg', import.meta.url).href;
const banner2 = new URL('./assets/banner2.jpg', import.meta.url).href;
const banner3 = new URL('./assets/banner3.jpg', import.meta.url).href;
const banner4 = new URL('./assets/banner4.jpg', import.meta.url).href;
const banner5 = new URL('./assets/banner5.jpg', import.meta.url).href;
const banner6 = new URL('./assets/banner6.jpg', import.meta.url).href;
const banner7 = new URL('./assets/banner7.jpg', import.meta.url).href;
const banner8 = new URL('./assets/banner8.jpg', import.meta.url).href;
const banner9 = new URL('./assets/banner9.jpg', import.meta.url).href;
const banner10 = new URL('./assets/banner10.jpg', import.meta.url).href;

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/#about' },
    { name: 'Programmes', href: '/#programs' },
    { name: 'Actualités', href: '/#news' },
    { name: 'Témoignages', href: '/#testimonials' },
    { name: 'Résultats', href: '/results' },
    { name: 'Renseignements', href: '/info' },
    { name: 'Contact', href: '/#contact' },
  ];

  const isHomePage = location.pathname === '/';

  const handleNavClick = (href: string) => {
    if (href === '/' && location.pathname === '/') {
      // already on home page: force scroll to top (hero banner)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled || !isHomePage ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold">
            C
          </div>
          <span className={cn(
            "font-serif text-xl font-bold tracking-tight",
            isScrolled || !isHomePage ? "text-brand-primary" : "text-white"
          )}>
            Le Château
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-secondary",
                  isScrolled || !isHomePage ? "text-slate-700" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-secondary",
                  isScrolled || !isHomePage ? "text-slate-700" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="/#contact" className="bg-brand-secondary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
            S'inscrire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled || !isHomePage ? "text-brand-primary" : "text-white"} /> : <Menu className={isScrolled || !isHomePage ? "text-brand-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(link.href);
                  }}
                  className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-white py-3 rounded-xl font-bold mt-2 text-center"
            >
              S'inscrire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => { 
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed Background Image (Student Photo) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={banner5}
          alt="Students" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Overlay to ensure text readability but keeping the image as the main focus */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 bg-brand-secondary/20 text-brand-secondary rounded-full text-sm font-bold mb-6 border border-brand-secondary/30">
            Éducation d'Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Bâtir l'Avenir au <br />
            <span className="text-brand-secondary italic">Cœur du Savoir</span>
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md font-medium">
            Le Complexe Scolaire Le Château offre un environnement d'apprentissage stimulant, alliant tradition académique et innovation pédagogique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#programs" className="bg-brand-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-lg text-center">
              Découvrir nos programmes
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center">
              Inscription
            </a>
            <a href="/#gallery" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all text-center">
              Visite virtuelle
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Overlay */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs"
        >
          <div className="flex items-center gap-5">
            <div className="p-4 bg-brand-primary/10 rounded-2xl">
              <Users className="text-brand-primary w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-primary">1200+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Élèves Épanouis</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  // --- Galerie Photos (Facile à actualiser) ---
  const galleryItems = [
    {
      url: banner1,
      title: "Nos Salles de Classe",
      desc: "Des espaces modernes et lumineux pour un apprentissage optimal."
    },
    {
      url: banner2,
      title: "La Bibliothèque",
      desc: "Un sanctuaire du savoir avec des milliers d'ouvrages et ressources numériques."
    },
    {
      url: banner3,
      title: "Vie Scolaire",
      desc: "Des moments de partage et d'épanouissement entre nos élèves."
    },
    {
      url: banner4,
      title: "Le Rencontres",
      desc: "Un environnement sécurisé et verdoyant au cœur de la ville."
    },
    {
      url: banner5,
      title: "Laboratoires",
      desc: "Des équipements de pointe pour l'expérimentation scientifique."
    },
    {
      url: banner6,
      title: "Activités Sportives",
      desc: "Le sport comme pilier du développement physique et mental."
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Galerie Photos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Découvrez la vie au Château</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Plongez dans le quotidien de notre établissement à travers ces quelques clichés capturant l'essence de notre mission éducative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg aspect-4/3"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Maternelle",
      age: "3 - 5 ans",
      desc: "Un éveil ludique et bienveillant pour poser les bases de la socialisation et de l'apprentissage.",
      icon: <Star className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      image: banner1
    },
    {
      title: "Primaire",
      age: "6 - 11 ans",
      desc: "Un socle de connaissances solide axé sur la maîtrise des fondamentaux et l'ouverture au monde.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600",
      image: banner2
    },
    {
      title: "Secondaire",
      age: "12 - 18 ans",
      desc: "Une préparation rigoureuse aux examens nationaux et internationaux pour un avenir brillant.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600",
      image: banner4
    }
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Nos Cycles</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Un parcours complet pour réussir</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 -mt-16 relative z-10 border-4 border-white", p.color)}>
                  {p.icon}
                </div>
                <h4 className="text-2xl font-bold text-brand-primary mb-2">{p.title}</h4>
                <p className="text-brand-secondary font-bold text-sm mb-4">{p.age}</p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
                <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-brand-secondary transition-colors">
                  Détails du programme <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    { name: "Enseignement de qualité", img: banner5 },
    { name: "Un cadre adequat", img: banner7 },
    { name: "Complexe Sportif", img: banner6 },
    { name: "Espace Détente", img: banner1 }
  ];

  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Infrastructures</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Un cadre d'exception pour s'épanouir</h3>
          </div>
          <a href="#contact" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold">Nous contacter</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {facilities.map((f, i) => (
            <div key={i} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
              <img 
                src={f.img} 
                alt={f.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">{f.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DirectorMessage = () => (
  <section id="director" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Message du Directeur</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">Bienvenue au Complexe Scolaire Le Château</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          Notre priorité est de cultiver des esprits curieux, responsables et bienveillants. Chaque jour, nous accompagnons les élèves dans la réussite scolaire et l'épanouissement personnel.
        </p>
        <div className="flex items-center gap-4">
          <img src={banner9} alt="Directeur" className="w-20 h-20 rounded-full object-cover border-4 border-brand-secondary" referrerPolicy="no-referrer" />
          <div>
            <p className="font-bold text-lg text-brand-primary">Pr. Jean Dupont</p>
            <p className="text-slate-500 text-sm">Directeur Général</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <img src={banner10} alt="Établissement" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-white text-lg font-bold">Rejoignez une communauté où chaque élève trouve sa place.</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutDetails = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">À propos de l'école</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Notre histoire & nos engagements</h3>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Depuis sa création, Le Château se consacre à offrir un enseignement exigeant dans un cadre bienveillant.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="text-xl font-bold text-brand-primary mb-4">Histoire de l'école</h4>
          <p className="text-slate-600 leading-relaxed">
            Fondé en 2004, notre établissement a grandi avec l'ambition de devenir un lieu d'excellence académique et d'épanouissement personnel. Chaque promotion de diplômés est une fierté renouvelée.
          </p>
        </div>
        <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="text-xl font-bold text-brand-primary mb-4">Mission & valeurs</h4>
          <p className="text-slate-600 leading-relaxed">
            Nous cultivons une culture de la curiosité, du respect et de l'effort. Notre mission est de former des citoyens responsables, autonomes et ouverts sur le monde.
          </p>
        </div>
        <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="text-xl font-bold text-brand-primary mb-4">Objectifs éducatifs</h4>
          <p className="text-slate-600 leading-relaxed">
            Offrir un apprentissage complet, alliant compétences académiques, savoir-être et engagement citoyen, afin que chaque élève atteigne son plein potentiel.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const News = () => {
  const events = [
    {
      title: "Journée culturelle",
      date: "15 avril 2025",
      desc: "Ateliers, spectacles et expositions pour découvrir la richesse des cultures de nos élèves.",
      icon: <Globe className="w-8 h-8" />,
      image: banner7
    },
    {
      title: "Compétitions sportives",
      date: "22 mai 2025",
      desc: "Tournois interclasses, relais et initiations aux sports collectifs.",
      icon: <Award className="w-8 h-8" />,
      image: banner6
    },
    {
      title: "Annonces importantes",
      date: "30 juin 2025",
      desc: "Publication des résultats et préparation de la rentrée prochaine.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: banner8
    }
  ];

  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Actualités & événements</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Ce qui se passe au Château</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Restez informés des prochains rendez-vous et des moments forts de la vie scolaire.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-brand-primary">
                    {event.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{event.date}</span>
                </div>
                <h4 className="text-2xl font-bold text-brand-primary mb-3">{event.title}</h4>
                <p className="text-slate-600 leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mme Aïcha Koné",
      role: "Maman d'élève",
      quote: "Le personnel est à l'écoute, et mon fils a vraiment progressé. L'ambiance familiale est précieuse.",
      stars: 5
    },
    {
      name: "M. Samuel Traoré",
      role: "Ancien élève",
      quote: "Grâce aux enseignants, j'ai décroché mon bac avec mention. Le Château m'a donné confiance.",
      stars: 5
    },
    {
      name: "Mme Fatoumata Diallo",
      role: "Parent d'élève",
      quote: "Le suivi personnalisé et les ateliers extrascolaires sont un vrai plus pour la réussite.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Ce que disent nos familles</h3>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Des retours sincères sur l'expérience Le Château, par des parents et anciens élèves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl shadow-lg border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-lg font-bold text-brand-primary">{item.name}</p>
                  <p className="text-slate-500 text-sm">{item.role}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.stars }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">"{item.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2250123456789"; // Numero du responsable
    const text = `Bonjour, je suis ${formData.prenom} ${formData.nom}. %0A%0A${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-brand-secondary uppercase tracking-widest mb-4">Contactez-nous</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Prêt à rejoindre l'aventure ?</h3>
            <p className="text-white/70 text-lg mb-12">
              Notre équipe est à votre disposition pour toute question concernant les inscriptions, ou pour organiser une visite de l'établissement.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <MapPin className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Adresse</p>
                  <p className="text-white/60">123 Rue du Savoir, Quartier Résidentiel, Ville</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Phone className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Téléphone</p>
                  <p className="text-white/60">+225 01 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Mail className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Email</p>
                  <p className="text-white/60">contact@lechateau-ecole.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <a href="https://www.facebook.com/pages/Complexe%20scolaire%20Le%20Ch%C3%A2teau/533824930884247/#"><Facebook className="w-6 h-6 text-brand-secondary" /> </a>
                </div>
                <div>
                  <p className="font-bold text-xl mb-1">Facebook</p>
                  <p className="text-white/60">Complexe Scolaire Le Château</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-white/20 mt-8">
                <iframe
                  title="Localisation de l'école"
                  src="https://www.google.com/maps?q=123+Rue+du+Savoir,+Ville&output=embed"
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                ></iframe>
              </div>
            </div>
          </div>

          <div id="contact-form" className="bg-white rounded-3xl p-10 text-slate-900 shadow-2xl">
            <h4 className="text-2xl font-bold mb-8">Envoyez-nous un message via WhatsApp</h4>
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">Nom</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({...formData, nom: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase">Prénom</label>
                  <input 
                    type="text" 
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary" 
                    placeholder="Votre prénom" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary" 
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Envoyer sur WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-white font-serif text-2xl font-bold">
                C
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Le Château</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Une institution dédiée à l'excellence éducative et au développement personnel de chaque enfant depuis 2004.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/search/top?q=complexe%20scolaire%20le%20chateau" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-brand-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Liens Rapides</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/" className="hover:text-brand-secondary transition-colors">Accueil</a></li>
              <li><a href="/#gallery" className="hover:text-brand-secondary transition-colors">Galerie</a></li>
              <li><a href="/#programs" className="hover:text-brand-secondary transition-colors">Programmes</a></li>
              <li><a href="/#facilities" className="hover:text-brand-secondary transition-colors">Infrastructures</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Informations</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/#contact" className="hover:text-brand-secondary transition-colors">Inscriptions</a></li>
              <li><a href="/#programs" className="hover:text-brand-secondary transition-colors">Calendrier Scolaire</a></li>
              <li><a href="/#gallery" className="hover:text-brand-secondary transition-colors">Galerie</a></li>
              <li><a href="/#contact" className="hover:text-brand-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Newsletter</h5>
            <p className="text-slate-400 mb-4">Restez informé de nos actualités.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-brand-secondary" placeholder="Email" />
              <button className="bg-brand-secondary p-2 rounded-lg"><ChevronRight /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Complexe Scolaire Le Château. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ResultsPage = () => {
  const results = [
    { exam: "CEP", rate: "100%", year: "2025", color: "bg-blue-500" },
    { exam: "BEPC", rate: "98.5%", year: "2025", color: "bg-orange-500" },
    { exam: "BAC A", rate: "97.8%", year: "2025", color: "bg-emerald-500" },
    { exam: "BAC B", rate: "96.5%", year: "2025", color: "bg-teal-500" },
    { exam: "BAC C", rate: "95.2%", year: "2025", color: "bg-cyan-500" },
    { exam: "BAC D", rate: "94.8%", year: "2025", color: "bg-green-600" }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-primary mb-4">Nos Résultats Nationaux</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            L'excellence est notre tradition. Découvrez les performances exceptionnelles de nos élèves aux examens nationaux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center"
            >
              <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold", res.color)}>
                {res.exam}
              </div>
              <h2 className="text-6xl font-black text-brand-primary mb-2">{res.rate}</h2>
              <p className="text-brand-secondary font-bold uppercase tracking-widest">Taux de Réussite</p>
              <p className="text-slate-400 mt-4">Session {res.year}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-brand-primary rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 italic">Pourquoi choisit-on Le Château ?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span>Encadrement pédagogique de proximité</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span>Soutien scolaire personnalisé pour chaque élève</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span>Environnement propice à la concentration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <BarChart3 className="w-16 h-16 text-brand-secondary mb-6" />
              <p className="text-xl leading-relaxed">
                "Depuis 5 ans, nous maintenons un taux de réussite moyen supérieur à 95% sur l'ensemble des examens nationaux."
              </p>
              <p className="mt-4 font-bold text-brand-secondary">— Direction des Études</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformationPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Informations & Inscriptions</h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Vous souhaitez inscrire votre enfant au Complexe Scolaire Le Château ? Retrouvez ici toutes les informations pratiques, les tarifs et les modalités d'inscription.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                <FileText className="text-brand-secondary" /> Dossier d'inscription
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 mt-1">1</div>
                  <span>Extrait d'acte de naissance original</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 mt-1">2</div>
                  <span>4 photos d'identité récentes du même tirage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 mt-1">3</div>
                  <span>Bulletins de notes de l'année précédente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 mt-1">4</div>
                  <span>Certificat de scolarité</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg">
              <Download className="w-6 h-6" /> Télécharger la fiche de renseignements
            </button>

            <div className="grid gap-8 md:grid-cols-2 mt-12">
              <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Conditions d'inscription</h3>
                <ul className="space-y-3 text-slate-700">
                  <li>Âge requis correspondant au cycle choisi</li>
                  <li>Dossier complet déposé avant la date limite</li>
                  <li>Entretien avec la direction ou le coordinateur pédagogique</li>
                  <li>Respect du règlement intérieur de l'établissement</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">Frais d'inscription</h3>
                <ul className="space-y-3 text-slate-700">
                  <li>Frais de dossier : 20 000 FCFA</li>
                  <li>Droit d'inscription annuel : 150 000 FCFA</li>
                  <li>Frais de scolarité mensuels : à partir de 70 000 FCFA</li>
                  <li>Tarifs dégressifs pour fratrie et bourses d'études possibles</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 mt-12">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Renseignements pratiques</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-bold text-slate-800">Horaires des cours</p>
                  <p className="text-slate-700">Lundi - Vendredi : 8h00 - 16h00</p>
                  <p className="text-slate-700">Samedi : 8h00 - 12h00 (activités scolaires et ateliers)</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Règlement intérieur</p>
                  <p className="text-slate-700">Respect, ponctualité et tenue correcte sont attendus. Le règlement est consultable au secrétariat.</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Uniforme scolaire</p>
                  <p className="text-slate-700">La tenue officielle est exigée à partir du CP (polo + pantalon/jupe, chaussures fermées).</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Calendrier scolaire</p>
                  <p className="text-slate-700">Rentrée : début septembre • Vacances : Noël, Pâques, été • Journées pédagogiques : 2 par trimestre.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                alt="Prospectus de l'école" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl italic">Prospectus Officiel 2024-2025</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4 text-center italic">
              * Ce prospectus contient le détail des tarifs et du règlement intérieur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <DirectorMessage />
      <AboutDetails />
      <About />
      <Programs />
      <Facilities />
      <News />
      <Testimonials />
      <Contact />
    </>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Remonter en haut"
      className="fixed right-6 bottom-6 z-50 bg-brand-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <ChevronRight className="w-5 h-5 rotate-90" />
    </button>
  );
};

// --- Main App ---


// scroll helper that watches the location and jumps to the proper element
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // small delay to let the new page render
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        // On small screens, if navigating to #contact, scroll directly to the form
        if (id === 'contact' && typeof window !== 'undefined' && window.innerWidth < 768) {
          const formEl = document.getElementById('contact-form');
          if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }

        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-secondary selection:text-white">
        <Navbar />
        <ScrollHandler />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/info" element={<InformationPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
