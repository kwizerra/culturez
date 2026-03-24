// ============================================================
// CULTUREZ — products.js
// Single source of truth for all product data.
// Both shop.html and product.html load this file with:
//   <script src="products.js"></script>
// So you only update products in ONE place.
// ============================================================

const products = [
  {
    id: 1,
    name: "Vintage Oversized Tee",
    price: "UGX 45,000",
    badge: "NEW",
    image: "images/shirt.jpg",
    category: "Tops",
    description: "A relaxed, washed-out tee that carries that broken-in vintage energy. Clean cut, no loud logos — just the kind of piece that elevates any fit quietly.",
    details: ["100% heavyweight cotton", "Garment washed", "Oversized unisex fit", "Available in neutral colourways"]
  },
  {
    id: 2,
    name: "Relaxed Cargo Pants",
    price: "UGX 85,000",
    badge: "",
    image: "images/baggypants.jpg",
    category: "Bottoms",
    description: "Wide-leg cargos with deep utility pockets and a relaxed waist. Built for movement, neutral enough to go with anything.",
    details: ["Cotton twill shell", "6-pocket design", "Elastic + drawstring waist", "Unisex sizing"]
  },
  {
    id: 3,
    name: "Washed Pullover Hoodie",
    price: "UGX 95,000",
    badge: "HOT",
    image: "images/hoodie.jpg",
    category: "Tops",
    description: "Heavy fleece with a garment-washed finish. Dropped shoulders, kangaroo pocket, zero unnecessary branding. The hoodie you reach for every time.",
    details: ["400gsm fleece", "Garment washed", "Dropped shoulder", "Kangaroo front pocket"]
  },
  {
    id: 4,
    name: "Utility Shorts",
    price: "UGX 55,000",
    badge: "",
    image: "images/shorts.jpg",
    category: "Bottoms",
    description: "Lightweight cargos cut short. Elastic waist, cargo pockets, Kampala-weather ready. Clean enough to wear anywhere.",
    details: ["Lightweight cotton blend", "Elastic + drawstring waist", "Cargo side pockets", "Unisex sizing"]
  },
  {
    id: 5,
    name: "Culturez Cap",
    price: "UGX 35,000",
    badge: "NEW",
    image: "images/cap.jpg",
    category: "Accessories",
    description: "Six-panel structured cap with embroidered Culturez mark. Adjustable strap, fits all. The finishing touch on any fit.",
    details: ["Structured 6-panel", "Embroidered branding", "Adjustable strap", "One size fits all"]
  },
  {
    id: 6,
    name: "Coach Jacket",
    price: "UGX 120,000",
    badge: "",
    image: "images/jacket.jpg",
    category: "Outerwear",
    description: "Lightweight nylon coach jacket. Zip-through front, clean silhouette, minimal branding. Layers over a hoodie or a tee — both work.",
    details: ["Lightweight nylon shell", "Full zip front", "Two side pockets", "Relaxed fit"]
  }
];
