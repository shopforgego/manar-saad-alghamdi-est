export const STORE_INFO = {
  name: {
    ar: "مؤسسة منار سعد الغامدي التجارية",
    en: "MANAR SAAD ALGHAMDI Establishment Commercial",
  },
  tagline: {
    ar: "أحدث الأحذية والحقائب والإكسسوارات الفاخرة",
    en: "Premium Shoes, Luggage & Accessories",
  },
  phone: "0509530554",
  whatsapp: "966509530554",
  emails: ["mwsstmnar2@gmail.com"],
  address: {
    ar: "حي مدائن الفهد، شارع محمد ابن صالح العثيمين، جدة، المملكة العربية السعودية",
    en: "Madain Al Fahd Dist., Muhammad Ibn Saleh Al Uthaymeen St., Jeddah, Kingdom of Saudi Arabia",
  },
  direct_payment_discount: {
    ar: "وفر أكثر مع الدفع المباشر واحصل على خصم تلقائي 5% يصل إلى 500 ريال",
    en: "Save more with direct payment! Get 5% automatic discount up to 500 SAR"
  },
  shortAddress: "JIMC6776",
  postalCode: "22343",
  buildingNo: "6776",
  additionalNo: "4877",
  commercialRegNo: "7054990010",
  issueDate: "13/08/2026",
  city: {
    ar: "جدة",
    en: "Jeddah"
  },
  customerAccountNo: "31336103617",
  addressProofNo: "1091618343",
} as const

export type Product = {
  id: string
  name: { ar: string; en: string }
  description: { ar: string; en: string }
  price: number
  oldPrice?: number
  category: string
  image: string
  specs?: { ar: string; en: string }[]
  badge?: { ar: string; en: string }
}

export type Category = {
  id: string
  name: { ar: string; en: string }
  icon: string
  image: string
}

export const CATEGORIES: Category[] = [
  { id: "shoes", name: { ar: "أحذية رجالية", en: "Men's Shoes" }, icon: "Footprints", image: "https://assets.lightfunnels.com/account-99794/images_library/e973090d-2516-44f6-b7d6-ac4bfce2fce1.jpg" },
  { id: "bags", name: { ar: "حقائب سفر", en: "Travel Bags" }, icon: "Luggage", image: "https://assets.lightfunnels.com/account-99794/images_library/c1d3c653-8b73-449f-962a-506f88111373.jpg" },
  { id: "accessories", name: { ar: "إكسسوارات", en: "Accessories" }, icon: "Gem", image: "https://assets.lightfunnels.com/account-99794/images_library/8b2952c6-2f54-41bf-95f2-25f6c2a9dfbd.png" },
]

export const PRODUCTS: Product[] = [
  // === أحذية رجالية (من code.html) ===
  {
    id: "summer-slides-eva",
    name: { ar: "زنوبه رجال صيفية مريحة، مع بطانة EVA سميكة، مضادة للانزلاق، أحذية خارجية عصرية", en: "Men's Summer Comfort Slides with Thick EVA Lining, Anti-Slip, Trendy Outdoor Shoes" },
    description: { ar: "صندل رجالي صيفي مريح مع بطانة EVA سميكة ونعل مضاد للانزلاق", en: "Comfortable summer men's slides with thick EVA lining and anti-slip sole" },
    price: 149,
    oldPrice: 240,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/61152490-7f71-44d1-b05d-e577d2594cb4.jpg",
    specs: [
      { ar: "بطانة EVA سميكة", en: "Thick EVA Lining" },
      { ar: "مضاد للانزلاق", en: "Anti-Slip" },
      { ar: "مناسب للصيف", en: "Summer Ready" },
    ],
    badge: { ar: "خصم 38%", en: "38% Off" },
  },
  {
    id: "men-sport-sneakers",
    name: { ar: "حذاء رياضي للرجال", en: "Men's Sport Sneakers" },
    description: { ar: "حذاء رياضي عصري ومريح للرجال مناسب لجميع الأنشطة", en: "Trendy and comfortable men's sport sneakers for all activities" },
    price: 359,
    oldPrice: 400,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/e973090d-2516-44f6-b7d6-ac4bfce2fce1.jpg",
    specs: [
      { ar: "تصميم عصري", en: "Trendy Design" },
      { ar: "نعل مريح", en: "Comfortable Sole" },
    ],
  },
  {
    id: "thick-summer-sneakers-2026",
    name: { ar: "حذاء رياضي سميك للرجال صيف 2026", en: "Men's Thick Sole Summer Sneakers 2026" },
    description: { ar: "حذاء رياضي بنعل سميك تصميم صيف 2026 الجديد", en: "Thick sole sneakers with 2026 new summer design" },
    price: 139,
    oldPrice: 190,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/117d6ed4-aa11-49d6-8fa6-396b426d6086.jpg",
    specs: [
      { ar: "نعل سميك", en: "Thick Sole" },
      { ar: "تصميم 2026", en: "2026 Design" },
    ],
    badge: { ar: "جديد", en: "New" },
  },
  {
    id: "carbon-marathon-running",
    name: { ar: "حذاء جري كاربون خاص ماراثون رجال رياضي مريح خفيف نسائي", en: "Carbon Marathon Running Shoes - Lightweight & Comfortable for Men & Women" },
    description: { ar: "حذاء جري احترافي بتقنية الكاربون مناسب للماراثون والرياضة", en: "Professional carbon running shoes for marathon and sports" },
    price: 299,
    oldPrice: 350,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/dddc0f9a-f9b4-4e4d-ac69-1e638b2c2287.jpg",
    specs: [
      { ar: "تقنية كاربون", en: "Carbon Technology" },
      { ar: "خفيف الوزن", en: "Lightweight" },
      { ar: "للجنسين", en: "Unisex" },
    ],
    badge: { ar: "الأكثر مبيعاً", en: "Best Seller" },
  },
  {
    id: "casual-breathable-sneakers",
    name: { ar: "أحذية رياضية رجال كاجوال خفيفة وقابلة للتنفس", en: "Men's Casual Lightweight Breathable Sneakers" },
    description: { ar: "أحذية رياضية كاجوال خفيفة بتقنية التنفس للراحة طوال اليوم", en: "Casual lightweight sneakers with breathable technology for all-day comfort" },
    price: 179,
    oldPrice: 250,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/f235fe05-0980-4242-bd2f-fe9e672c71ee.jpg",
    specs: [
      { ar: "قابل للتنفس", en: "Breathable" },
      { ar: "خفيف الوزن", en: "Lightweight" },
    ],
    badge: { ar: "خصم 28%", en: "28% Off" },
  },
  {
    id: "cutout-summer-2026",
    name: { ar: "أحذية كارتي لو مقاس مقصوص للرجال موديل 2026 صيف جديد", en: "Men's Cutout Style Shoes - Summer 2026 New Model" },
    description: { ar: "حذاء بتصميم مقصوص عصري موديل صيف 2026", en: "Trendy cutout design shoes - Summer 2026 model" },
    price: 299,
    oldPrice: 350,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/9126fbd0-3f56-4b05-8cf2-7195de014515.jpg",
    specs: [
      { ar: "تصميم مقصوص عصري", en: "Trendy Cutout Design" },
      { ar: "موديل صيف 2026", en: "Summer 2026 Model" },
    ],
  },
  {
    id: "mesh-slide-on-thick",
    name: { ar: "أحذية سلايد-أون للرجال، جزم صيفية شبكية، تنفسية، بدون انزلاق، ذات نعل سميك", en: "Men's Mesh Slide-On Shoes, Breathable Summer, Anti-Slip, Thick Sole" },
    description: { ar: "أحذية سلايد-أون شبكية تنفسية مع نعل سميك ومضاد للانزلاق للمغامرات والمشي اليومي", en: "Breathable mesh slide-on shoes with thick anti-slip sole for adventures and daily walks" },
    price: 259,
    oldPrice: 300,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/b74f58a3-dec6-408e-800f-e65ce9f15438.jpg",
    specs: [
      { ar: "شبكة تنفسية", en: "Breathable Mesh" },
      { ar: "نعل سميك", en: "Thick Sole" },
      { ar: "مضاد للانزلاق", en: "Anti-Slip" },
    ],
  },
  {
    id: "running-comfort-unisex",
    name: { ar: "أحذية رياضية للرجال للركض مريحة خفيفة للنساء", en: "Men's Running Sneakers - Comfortable & Lightweight for Women Too" },
    description: { ar: "أحذية رياضية للركض مريحة وخفيفة مناسبة للرجال والنساء", en: "Comfortable lightweight running sneakers for men and women" },
    price: 399,
    oldPrice: 500,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/30dcbc13-7cd4-498a-a4cf-cda894236e50.jpg",
    specs: [
      { ar: "خفيف الوزن", en: "Lightweight" },
      { ar: "مريح للركض", en: "Running Comfort" },
      { ar: "للجنسين", en: "Unisex" },
    ],
    badge: { ar: "خصم 20%", en: "20% Off" },
  },
  {
    id: "casual-light-breathable",
    name: { ar: "أحذية رياضية كاجوال للرجال خفيفة الوزن وجيدة التنفس", en: "Men's Casual Lightweight Breathable Sneakers" },
    description: { ar: "حذاء كاجوال رياضي خفيف الوزن مع تقنية تنفس متقدمة", en: "Casual sport shoe with advanced breathable technology" },
    price: 199,
    oldPrice: 280,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/8abf074b-e8be-416e-91b2-329b0925fd59.jpg",
    specs: [
      { ar: "خفيف الوزن", en: "Lightweight" },
      { ar: "جيد التنفس", en: "Breathable" },
    ],
  },
  {
    id: "shock-absorb-4season",
    name: { ar: "أحذية رياضية كاجوال بأربع مواسم بتقنية امتصاص الصدمات", en: "4-Season Casual Sneakers with Shock Absorption" },
    description: { ar: "أحذية رياضية كاجوال مناسبة لجميع المواسم مع تقنية امتصاص الصدمات", en: "4-season casual sneakers with shock absorption technology" },
    price: 379,
    oldPrice: 480,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/c2fef569-64ee-475a-bfe5-1ffdb15d0b25.jpg",
    specs: [
      { ar: "امتصاص الصدمات", en: "Shock Absorption" },
      { ar: "أربع مواسم", en: "4-Season" },
    ],
  },
  {
    id: "running-light-comfort",
    name: { ar: "أحذية رياضية رجال جري خفيفة ومريحة", en: "Men's Lightweight Comfortable Running Shoes" },
    description: { ar: "أحذية جري خفيفة ومريحة بتصميم عصري", en: "Lightweight comfortable running shoes with modern design" },
    price: 229,
    oldPrice: 300,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/4b8f437e-40b6-4761-862d-1a7ca02ba820.jpg",
    specs: [
      { ar: "خفيفة الوزن", en: "Lightweight" },
      { ar: "مريحة للجري", en: "Running Comfort" },
    ],
    badge: { ar: "خصم 24%", en: "24% Off" },
  },
  // === حقائب سفر (من code2.html) ===
  {
    id: "expandable-side-open-luggage",
    name: { ar: "شنط متوسعة تفتح من الجانب بعجلات 20 24 28 إنش", en: "Expandable Side-Open Luggage with Wheels 20 24 28 Inch" },
    description: { ar: "حقائب سفر متوسعة تفتح من الجانب بعجلات بأحجام متعددة", en: "Expandable side-open travel luggage with wheels in multiple sizes" },
    price: 599,
    oldPrice: 750,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/c1d3c653-8b73-449f-962a-506f88111373.jpg",
    specs: [
      { ar: "تفتح من الجانب", en: "Side Opening" },
      { ar: "متوسعة", en: "Expandable" },
      { ar: "أحجام 20/24/28 إنش", en: "Sizes 20/24/28 Inch" },
    ],
    badge: { ar: "خصم 20%", en: "20% Off" },
  },
  {
    id: "front-open-usb-luggage",
    name: { ar: "حقائب سفر بفتح أمامي مع قطعة شحن USB", en: "Front-Open Travel Luggage with USB Charging Port" },
    description: { ar: "حقائب سفر بتصميم فتح أمامي مع منفذ شحن USB مدمج", en: "Travel luggage with front-open design and built-in USB charging port" },
    price: 799,
    oldPrice: 950,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/ad1b533b-4552-437b-b2c8-2a557707b648.jpg",
    specs: [
      { ar: "فتح أمامي", en: "Front Opening" },
      { ar: "منفذ شحن USB", en: "USB Charging Port" },
      { ar: "عجلات سبينر", en: "Spinner Wheels" },
    ],
  },
  {
    id: "spinner-wheel-luggage",
    name: { ar: "حقائب سفر بمقاسات 20 و24 و30 إنش مزودة بمقابض وعجلات", en: "Spinner Wheel Luggage Set 20, 24 & 30 Inch with Handles" },
    description: { ar: "مجموعة حقائب سفر بمقاسات متعددة مع مقابض تلسكوبية وعجلات سبينر", en: "Multi-size luggage set with telescopic handles and spinner wheels" },
    price: 699,
    oldPrice: 850,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/b974e772-53c0-48fc-bf87-cdf936ff51a3.jpg",
    specs: [
      { ar: "مقاسات 20/24/30 إنش", en: "Sizes 20/24/30 Inch" },
      { ar: "مقابض تلسكوبية", en: "Telescopic Handles" },
      { ar: "عجلات سبينر", en: "Spinner Wheels" },
    ],
  },
  {
    id: "aiweiny-large-luggage",
    name: { ar: "حقيبة السفر AIWEINY بسعة كبيرة وتصميم صلب", en: "AIWEINY Large Capacity Hard Shell Travel Luggage" },
    description: { ar: "حقيبة سفر AIWEINY بسعة كبيرة وتصميم صلب عالي الجودة", en: "AIWEINY high-quality hard shell large capacity travel luggage" },
    price: 1350,
    oldPrice: 4200,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/33778d60-4165-40eb-8607-57a23665e8d5.jpg",
    specs: [
      { ar: "سعة كبيرة", en: "Large Capacity" },
      { ar: "تصميم صلب", en: "Hard Shell Design" },
      { ar: "جودة عالية", en: "Premium Quality" },
    ],
    badge: { ar: "خصم 68%", en: "68% Off" },
  },
  {
    id: "classic-letter-luggage",
    name: { ar: "حقيبة السفر الكلاسيكية الجديدة للجميع بتصميم الحروف سعة كبيرة للسفر العملي", en: "Classic Letter Design Large Capacity Travel Luggage" },
    description: { ar: "حقيبة سفر كلاسيكية بتصميم الحروف المميز مع سعة كبيرة", en: "Classic letter design luggage with large capacity for practical travel" },
    price: 799,
    oldPrice: 850,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/af6d6db9-1c78-47d3-8646-2f29f81ca74b.jpg",
    specs: [
      { ar: "تصميم كلاسيكي", en: "Classic Design" },
      { ar: "سعة كبيرة", en: "Large Capacity" },
    ],
  },
  {
    id: "wide-pull-5wheel-28",
    name: { ar: "حقيبة سفر بسحب عريض وخمس عجلات 28 بوصة", en: "Wide Pull 5-Wheel Travel Luggage 28 Inch" },
    description: { ar: "حقيبة سفر بسحب عريض مع خمس عجلات بحجم 28 بوصة", en: "28-inch travel luggage with wide pull handle and 5 wheels" },
    price: 499,
    oldPrice: 600,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/4b434419-6487-405f-9394-6656ffcd4d22.jpg",
    specs: [
      { ar: "سحب عريض", en: "Wide Pull Handle" },
      { ar: "5 عجلات", en: "5 Wheels" },
      { ar: "28 بوصة", en: "28 Inch" },
    ],
  },
  {
    id: "abs-pc-30inch-luggage",
    name: { ar: "حقيبة سفر جديدة بحجم كبير 30 إنش", en: "New Large 30 Inch ABS+PC Lightweight Trolley Case" },
    description: { ar: "حقيبة سفر جديدة خفيفة الوزن بمادة ABS+PC بحجم 30 إنش", en: "New lightweight ABS+PC trolley case in large 30 inch size" },
    price: 649,
    oldPrice: 800,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/be94603c-5e4b-47b3-bac0-5858c0bb2a2e.jpg",
    specs: [
      { ar: "مادة ABS+PC", en: "ABS+PC Material" },
      { ar: "خفيفة الوزن", en: "Lightweight" },
      { ar: "30 إنش", en: "30 Inch" },
    ],
  },
]
