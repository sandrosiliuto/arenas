export type Language = 'es' | 'en' | 'de';

export const translations = {
  es: {
    nav: {
      collection: 'Colección',
      reviews: 'Opiniones',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    hero: {
      title: 'Arenas – Elegancia frente al mar',
      subtitle: 'Pamelas, bolsos y bisutería de alta gama en El Médano',
      cta: 'Descubrir colección',
    },
    products: {
      title: 'Nuestra Colección',
      subtitle: 'Piezas exclusivas seleccionadas para el verano mediterráneo',
      whatsapp: 'Consultar por WhatsApp',
      items: [
        {
          id: 1,
          name: 'Pamela "Brisa"',
          description: 'Ala ancha, paja natural con cinta azul marino. Elegancia atemporal.',
          price: '85€',
          category: 'Pamelas',
          image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 2,
          name: 'Vestido "Alba"',
          description: 'Vestido de lino ligero, perfecto para pasear por Playa Chica.',
          price: '145€',
          category: 'Ropa',
          image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 3,
          name: 'Bolso "Calma"',
          description: 'Capazo de esparto con asas de piel premium. Hecho a mano.',
          price: '120€',
          category: 'Bolsos',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 4,
          name: 'Pamela "Duna"',
          description: 'Rafia italiana con detalles en dorado suave. Perfecta para el atardecer.',
          price: '95€',
          category: 'Pamelas',
          image: 'https://images.unsplash.com/photo-1517520287167-4bda64282d51?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 5,
          name: 'Túnica "Marea"',
          description: 'Seda natural con estampados orgánicos inspirados en el océano.',
          price: '180€',
          category: 'Ropa',
          image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 6,
          name: 'Pendientes "Coral"',
          description: 'Diseño orgánico inspirado en los fondos marinos de Tenerife.',
          price: '45€',
          category: 'Bisutería',
          image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800',
        },
      ],
    },
    reviews: {
      title: 'Opiniones de nuestros clientes',
      items: [
        {
          name: 'Laura M.',
          text: 'La pamela que compré es preciosa y de muy buena calidad. El local frente al mar es un sueño.',
          rating: 5,
        },
        {
          name: 'Carlos G.',
          text: 'Bisutería muy original y elegante. La dueña un encanto.',
          rating: 5,
        },
        {
          name: 'Sophie L.',
          text: 'Volveré por un bolso de playa. Ambiente muy relajado y bonito.',
          rating: 5,
        },
      ],
    },
    gallery: {
      title: 'Momentos Arenas',
    },
    contact: {
      title: 'Contacto y Ubicación',
      location: 'Playa Chica, frente al mar – El Médano, Tenerife',
      follow: 'Síguenos en Instagram',
      form: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar consulta',
      },
    },
    footer: {
      rights: '© 2026 Arenas. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      collection: 'Collection',
      reviews: 'Reviews',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Arenas – Elegance by the Sea',
      subtitle: 'High-end hats, bags, and jewelry in El Médano',
      cta: 'Discover Collection',
    },
    products: {
      title: 'Our Collection',
      subtitle: 'Exclusive pieces selected for the Mediterranean summer',
      whatsapp: 'Inquire via WhatsApp',
      items: [
        {
          id: 1,
          name: 'Pamela "Brisa"',
          description: 'Wide brim, natural straw with navy blue ribbon. Timeless elegance.',
          price: '85€',
          category: 'Hats',
          image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 2,
          name: 'Dress "Alba"',
          description: 'Lightweight linen dress, perfect for strolling along Playa Chica.',
          price: '145€',
          category: 'Clothing',
          image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 3,
          name: 'Bag "Calma"',
          description: 'Esparto basket with premium leather handles. Handmade.',
          price: '120€',
          category: 'Bags',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 4,
          name: 'Pamela "Duna"',
          description: 'Italian raffia with soft gold details. Perfect for sunset.',
          price: '95€',
          category: 'Hats',
          image: 'https://images.unsplash.com/photo-1517520287167-4bda64282d51?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 5,
          name: 'Tunic "Marea"',
          description: 'Natural silk with organic prints inspired by the ocean.',
          price: '180€',
          category: 'Clothing',
          image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 6,
          name: 'Earrings "Coral"',
          description: 'Organic design inspired by the marine depths of Tenerife.',
          price: '45€',
          category: 'Jewelry',
          image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800',
        },
      ],
    },
    reviews: {
      title: 'Customer Reviews',
      items: [
        {
          name: 'Laura M.',
          text: 'The hat I bought is beautiful and of very high quality. The location by the sea is a dream.',
          rating: 5,
        },
        {
          name: 'Carlos G.',
          text: 'Very original and elegant jewelry. The owner is a delight.',
          rating: 5,
        },
        {
          name: 'Sophie L.',
          text: 'I will be back for a beach bag. Very relaxed and beautiful atmosphere.',
          rating: 5,
        },
      ],
    },
    gallery: {
      title: 'Arenas Moments',
    },
    contact: {
      title: 'Contact & Location',
      location: 'Playa Chica, beachfront – El Médano, Tenerife',
      follow: 'Follow us on Instagram',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Inquiry',
      },
    },
    footer: {
      rights: '© 2026 Arenas. All rights reserved.',
    },
  },
  de: {
    nav: {
      collection: 'Kollektion',
      reviews: 'Bewertungen',
      gallery: 'Galerie',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Arenas – Eleganz am Meer',
      subtitle: 'Hochwertige Hüte, Taschen und Schmuck in El Médano',
      cta: 'Kollektion entdecken',
    },
    products: {
      title: 'Unsere Kollektion',
      subtitle: 'Exklusive Stücke für den mediterranen Sommer ausgewählt',
      whatsapp: 'Per WhatsApp anfragen',
      items: [
        {
          id: 1,
          name: 'Pamela "Brisa"',
          description: 'Breite Krempe, Naturstroh mit marineblauem Band. Zeitlose Eleganz.',
          price: '85€',
          category: 'Hüte',
          image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 2,
          name: 'Kleid "Alba"',
          description: 'Leichtes Leinenkleid, perfekt für einen Spaziergang an der Playa Chica.',
          price: '145€',
          category: 'Kleidung',
          image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 3,
          name: 'Tasche "Calma"',
          description: 'Esparto-Korb mit hochwertigen Ledergriffen. Handgefertigt.',
          price: '120€',
          category: 'Taschen',
          image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 4,
          name: 'Pamela "Duna"',
          description: 'Italienisches Bast mit sanften Golddetails. Perfekt für den Sonnenuntergang.',
          price: '95€',
          category: 'Hüte',
          image: 'https://images.unsplash.com/photo-1517520287167-4bda64282d51?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 5,
          name: 'Tunika "Marea"',
          description: 'Naturseide mit organischen Drucken, inspiriert vom Ozean.',
          price: '180€',
          category: 'Kleidung',
          image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
        },
        {
          id: 6,
          name: 'Ohrringe "Coral"',
          description: 'Organisches Design, inspiriert von den Meerestiefen Teneriffas.',
          price: '45€',
          category: 'Schmuck',
          image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800',
        },
      ],
    },
    reviews: {
      title: 'Kundenbewertungen',
      items: [
        {
          name: 'Laura M.',
          text: 'Der Hut, den ich gekauft habe, ist wunderschön und von sehr hoher Qualität. Die Lage am Meer ist ein Traum.',
          rating: 5,
        },
        {
          name: 'Carlos G.',
          text: 'Sehr origineller und eleganter Schmuck. Die Besitzerin ist ein Schatz.',
          rating: 5,
        },
        {
          name: 'Sophie L.',
          text: 'Ich werde für eine Strandtasche wiederkommen. Sehr entspannte und schöne Atmosphäre.',
          rating: 5,
        },
      ],
    },
    gallery: {
      title: 'Arenas Momente',
    },
    contact: {
      title: 'Kontakt & Standort',
      location: 'Playa Chica, direkt am Meer – El Médano, Teneriffa',
      follow: 'Folgen Sie uns auf Instagram',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Anfrage senden',
      },
    },
    footer: {
      rights: '© 2026 Arenas. Alle Rechte vorbehalten.',
    },
  },
};
