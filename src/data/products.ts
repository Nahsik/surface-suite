export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  material: string;
  shape: string;
  finish: string;
  color: string;
  applicationType: string[];
  dimensions: string;
  chipSize: string;
  thickness: string;
  weight: string;
  recommendedUse: string;
  installationMethod: string;
  maintenance: string;
  durability: string;
  waterResistance: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hex Concrete Natural",
    slug: "hex-concrete-natural",
    shortDescription: "Hexagonal panels with authentic concrete texture in natural grey tones.",
    description: "Our signature hexagonal panels bring the raw beauty of concrete to your walls. Each panel features authentic texture variations that create a living, breathing surface. Perfect as highlight panels alongside ceramic and stone.",
    category: "Hexagon Panels",
    material: "Concrete Composite",
    shape: "Hexagon",
    finish: "Natural Matte",
    color: "Grey",
    applicationType: ["Living Rooms", "Feature Walls", "Offices"],
    dimensions: "300 × 260 mm",
    chipSize: "N/A",
    thickness: "12 mm",
    weight: "1.8 kg/panel",
    recommendedUse: "Interior walls, feature areas",
    installationMethod: "Adhesive mount, interlocking edges",
    maintenance: "Wipe with damp cloth, no harsh chemicals",
    durability: "High — rated for 25+ years",
    waterResistance: "Splash-proof, not for wet areas",
    image: "product-hexagon",
  },
  {
    id: "2",
    name: "Smooth Cement Finish",
    slug: "smooth-cement-finish",
    shortDescription: "Seamless concrete finish panels with subtle grain and warm grey tones.",
    description: "A refined take on raw cement, these panels deliver a smooth, consistent surface with gentle tonal variations. Ideal for creating serene, modern interiors with an architectural edge.",
    category: "Concrete Finish Panels",
    material: "Fiber-Reinforced Concrete",
    shape: "Rectangle",
    finish: "Smooth Matte",
    color: "Warm Grey",
    applicationType: ["Offices", "Hospitality", "Retail Spaces"],
    dimensions: "600 × 300 mm",
    chipSize: "N/A",
    thickness: "10 mm",
    weight: "2.4 kg/panel",
    recommendedUse: "Large wall surfaces, commercial interiors",
    installationMethod: "Adhesive mount, mechanical fixing",
    maintenance: "Dust regularly, spot clean with mild detergent",
    durability: "Very High — industrial grade",
    waterResistance: "Moderate — sealed surface",
    image: "product-concrete",
  },
  {
    id: "3",
    name: "Diamond Relief Panel",
    slug: "diamond-relief-panel",
    shortDescription: "Geometric diamond pattern creating dramatic light and shadow interplay.",
    description: "Bold 3D diamond geometry transforms flat walls into dynamic surfaces. The deep relief pattern captures light throughout the day, creating ever-changing shadows that bring walls to life.",
    category: "Textured Panels",
    material: "Glass Fiber Reinforced Concrete",
    shape: "Square",
    finish: "Textured",
    color: "Light Grey",
    applicationType: ["Feature Walls", "Living Rooms", "Retail Spaces"],
    dimensions: "500 × 500 mm",
    chipSize: "125 × 125 mm",
    thickness: "30 mm (max depth)",
    weight: "3.2 kg/panel",
    recommendedUse: "Feature walls, accent areas",
    installationMethod: "Adhesive mount with mechanical support",
    maintenance: "Dust with soft brush, avoid moisture in grooves",
    durability: "High — impact resistant",
    waterResistance: "Low — interior use only",
    image: "product-textured",
  },
  {
    id: "4",
    name: "Architectural Accent Block",
    slug: "architectural-accent-block",
    shortDescription: "Bold geometric relief in deep charcoal for dramatic accent walls.",
    description: "Make a statement with our architectural accent blocks. Deep charcoal tones and bold geometric relief create a commanding presence that anchors any interior space with sophistication.",
    category: "3D Accent Panels",
    material: "Ultra-High Performance Concrete",
    shape: "Rectangle",
    finish: "Semi-Polished",
    color: "Charcoal",
    applicationType: ["Hospitality", "Offices", "Feature Walls"],
    dimensions: "600 × 400 mm",
    chipSize: "N/A",
    thickness: "25 mm",
    weight: "4.1 kg/panel",
    recommendedUse: "Statement walls, lobbies, boardrooms",
    installationMethod: "Mechanical fixing recommended",
    maintenance: "Wipe with microfiber cloth",
    durability: "Very High — premium grade",
    waterResistance: "Moderate — sealed finish",
    image: "product-3d-accent",
  },
];

export const categories = ["Hexagon Panels", "Concrete Finish Panels", "Textured Panels", "3D Accent Panels"];
export const materials = ["Concrete Composite", "Fiber-Reinforced Concrete", "Glass Fiber Reinforced Concrete", "Ultra-High Performance Concrete"];
export const shapes = ["Hexagon", "Rectangle", "Square"];
export const finishes = ["Natural Matte", "Smooth Matte", "Textured", "Semi-Polished"];
export const colors = ["Grey", "Warm Grey", "Light Grey", "Charcoal"];
