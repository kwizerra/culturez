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
    name: "SM;)E Raglan Tee",
    price: "UGX 45,000",
    badge: "NEW",
    image: "images/shirt.jpg",
    category: "Tops",
    description: "White body, black sleeves — the two-tone raglan cut hits different. The SM;)E smiley graphic takes up the whole chest: bold, easy, and just the right amount of loud. Oversized and boxy, it works with almost anything below.",
    details: ["Heavyweight cotton", "Two-tone raglan cut", "Oversized boxy fit", "SM;)E centre-chest graphic", "Unisex sizing"]
  },
  {
    id: 2,
    name: "Washed Balloon Pants",
    price: "UGX 85,000",
    badge: "",
    image: "images/baggypants.jpg",
    category: "Bottoms",
    description: "Army green and built extra wide. These washed balloon-leg pants have an elastic drawstring waist and visible seam paneling that gives them their shape. The silhouette drapes different every time — relaxed without trying.",
    details: ["Washed cotton shell", "Elastic + drawstring waist", "Wide balloon-leg silhouette", "Panelled seam construction", "Unisex sizing"]
  },
  {
    id: 3,
    name: "ABC Hoodie",
    price: "UGX 95,000",
    badge: "HOT",
    image: "images/hoodie.jpg",
    category: "Tops",
    description: "Heather grey, heavyweight, and loud where it counts. The collegiate ABC arch print hits clean against the thick fleece. Boxy dropped-shoulder fit, deep kangaroo pocket — built to outlast a season.",
    details: ["Heavyweight fleece", "Collegiate arch graphic", "Boxy dropped-shoulder fit", "Kangaroo front pocket", "Light heather grey"]
  },
  {
    id: 4,
    name: "Fleece Sweat Shorts",
    price: "UGX 55,000",
    badge: "",
    image: "images/shorts.jpg",
    category: "Bottoms",
    description: "Soft grey fleece shorts with an elastic waist and a relaxed fit. No fuss, all comfort — works from a morning run to a low-key day out. Kampala weather approved.",
    details: ["Soft fleece fabric", "Elastic waistband", "Relaxed wide-leg fit", "Side pockets", "Unisex sizing"]
  },
  {
    id: 5,
    name: "Pleated Plaid Trousers",
    price: "UGX 35,000",
    badge: "NEW",
    image: "images/baggyplaidpants.jpg",
    category: "Bottoms",
    description: "Charcoal plaid with real structure behind it. Front pleats, belt loops, a high rise, and a wide leg that breaks clean at the ankle. Vintage tailoring energy — the kind of trouser that makes the whole fit look intentional.",
    details: ["Woven plaid fabric", "Pleated front", "High-rise with belt loops", "Wide straight leg", "Zip hem detail"]
  },
  {
    id: 6,
    name: "FGOB Graphic Shirt",
    price: "UGX 120,000",
    badge: "",
    image: "images/boxytee.jpg",
    category: "Tops",
    description: "Mint satin button-up with a bold graphic printed centre-chest. Short sleeve, boxy cut, clean camp collar. The kind of piece that carries the whole fit on its own — no backup needed.",
    details: ["Smooth satin-feel fabric", "Boxy short-sleeve cut", "Button-front with collar", "Bold centre-chest graphic print", "Unisex sizing"]
  },
  
  {
    id: 8,
    name: "Black Wide-Leg Trousers",
    price: "UGX 80,000",
    badge: "NEW",
    image: "images/baggy pants.jpg",
    category: "Bottoms",
    description: "All black, dead clean. These wide-leg trousers have a smooth drape, a gathered waist, and a logo-tape elastic band that lets you know they mean business. The silhouette is simple — but it lands.",
    details: ["Smooth satin-feel fabric", "Logo-tape elastic waistband", "Gathered wide-leg silhouette", "Clean all-black colourway", "Unisex sizing"]
  },
  {
    id: 9,
    name: "Washed Baggy Jeans",
    price: "UGX 90,000",
    badge: "",
    image: "images/baggyjeans.jpg",
    category: "Bottoms",
    description: "Medium blue wash with heavy fading and deep whisker detailing through the thighs. Wide, relaxed leg, elastic waist with a single button — denim done the baggy way. The kind of jeans that look better the more you wear them.",
    details: ["Denim", "Elastic waist + single button closure", "Wide baggy leg", "Heavy fade and whisker wash", "Side + back pockets", "Unisex sizing"]
  },
  {
    id: 10,
    name: "DEFECT Knit Sweater",
    price: "UGX 110,000",
    badge: "NEW",
    image: "images/knitsweater.jpg",
    category: "Tops",
    description: "Black knit with an oversized face graphic knitted straight into the fabric — not printed, not patched. Olive green DEFECT text arches above it. Heavy and structured, with ribbed cuffs and hem. The kind of piece people ask about.",
    details: ["Knit construction", "Intarsia face graphic", "Ribbed cuffs and hem", "Relaxed boxy fit", "Black / olive green colourway", "Unisex sizing"]
  }
];
