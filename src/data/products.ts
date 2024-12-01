import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Garden',
    description: 'Hand-stitched botanical study featuring night-blooming flowers on black linen. Each petal is carefully crafted using metallic and silk threads.',
    price: 450,
    images: ['/images/product1.jpg'],
    category: 'botanical',
    dimensions: {
      width: 12,
      height: 16,
      unit: 'inches'
    },
    inStock: true,
    createdAt: '2023-05-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Urban Geometry',
    description: 'Abstract architectural forms interpreted through thread. A study of city landscapes using minimalist lines and geometric patterns.',
    price: 380,
    images: ['/images/product2.jpg'],
    category: 'abstract',
    dimensions: {
      width: 10,
      height: 10,
      unit: 'inches'
    },
    inStock: true,
    createdAt: '2023-06-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Twilight Hour',
    description: 'Sunset-inspired piece featuring gradient thread work and metallic accents. Captures the warmth and light of dusk.',
    price: 520,
    images: ['/images/product3.jpg'],
    category: 'landscape',
    dimensions: {
      width: 14,
      height: 18,
      unit: 'inches'
    },
    inStock: true,
    createdAt: '2023-06-15T00:00:00Z'
  },
  {
    id: '4',
    name: 'Concrete Dreams',
    description: 'Modern cityscape rendered in monochromatic threads. Detailed architectural elements meet abstract interpretations.',
    price: 480,
    images: ['/images/product4.jpg'],
    category: 'abstract',
    dimensions: {
      width: 12,
      height: 12,
      unit: 'inches'
    },
    inStock: false,
    createdAt: '2023-07-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Lunar Phases',
    description: 'Series of moon phases embroidered with silver thread on black fabric. A celestial study in light and shadow.',
    price: 650,
    images: ['/images/product5.jpg'],
    category: 'celestial',
    dimensions: {
      width: 16,
      height: 20,
      unit: 'inches'
    },
    inStock: true,
    createdAt: '2023-07-15T00:00:00Z'
  },
  {
    id: '6',
    name: 'Brutalist Beauty',
    description: 'Architectural study inspired by brutalist buildings. Bold geometric forms and textural elements.',
    price: 420,
    images: ['/images/product6.jpg'],
    category: 'abstract',
    dimensions: {
      width: 10,
      height: 14,
      unit: 'inches'
    },
    inStock: true,
    createdAt: '2023-08-01T00:00:00Z'
  }
];

export const categories = [
  { id: 'all', name: 'ALL', slug: 'all' },
  { id: 'botanical', name: 'BOTANICAL', slug: 'botanical' },
  { id: 'abstract', name: 'ABSTRACT', slug: 'abstract' },
  { id: 'landscape', name: 'LANDSCAPE', slug: 'landscape' },
  { id: 'celestial', name: 'CELESTIAL', slug: 'celestial' }
];
