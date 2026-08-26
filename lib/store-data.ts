export const STORE_INFO = {
  name: {
    ar: "مؤسسة منار سعد الغامدي التجارية",
    en: "MANAR SAAD ALGHAMDI Establishment Commercial",
  },
  tagline: {
    ar: "أحدث صيحات الأزياء والملابس، الأحذية الرياضية والكاجوال، وحقائب السفر والإكسسوارات الفاخرة",
    en: "Premium Fashion & Clothing, Footwear, Luggage & Luxury Accessories",
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
    en: "Save more with direct payment! Get 5% automatic discount up to 500 SAR",
  },
  shortAddress: "JIMC6776",
  postalCode: "22343",
  buildingNo: "6776",
  additionalNo: "4877",
  commercialRegNo: "7054990010",
  issueDate: "13/08/2026",
  city: {
    ar: "جدة",
    en: "Jeddah",
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
  {
    id: "clothing",
    name: { ar: "ملابس وأزياء", en: "Fashion & Clothing" },
    icon: "Shirt",
    image: "https://cdn.salla.sa/xYoXz/2aYgyDgktWuZlxVHCNJEJy1n0TnXfI0Q4duMfhVI.jpg",
  },
  {
    id: "shoes",
    name: { ar: "أحذية رجالية ورياضية", en: "Footwear & Shoes" },
    icon: "Footprints",
    image: "https://assets.lightfunnels.com/account-99794/images_library/e973090d-2516-44f6-b7d6-ac4bfce2fce1.jpg",
  },
  {
    id: "bags",
    name: { ar: "حقائب سفر", en: "Travel Luggage" },
    icon: "Luggage",
    image: "https://assets.lightfunnels.com/account-99794/images_library/c1d3c653-8b73-449f-962a-506f88111373.jpg",
  },
  {
    id: "accessories",
    name: { ar: "إكسسوارات وحقائب يد", en: "Accessories & Handbags" },
    icon: "Gem",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-direction-0022509700036484_front.jpg",
  },
]

export const PRODUCTS: Product[] = [
  // ==========================================
  // === 1. قسم الملابس والأزياء (Clothing) ===
  // ==========================================
  {
    id: "red-knitted-dress",
    name: {
      ar: "فستان أحمر محبوك بأكمام قصيرة مع كسرات بليسيه أنيقة",
      en: "Women's Red Knitted Pleated A-Line Dress",
    },
    description: {
      ar: "فستان أحمر بقصة على شكل حرف A، يتميز بياقة مستديرة وأكمام قصيرة مع جزء سفلي مزين بكسرات بليسيه تمنح التصميم حركة أنيقة ولمسة لافتة تجمع بين البساطة والرقي.",
      en: "Elegant red A-line knitted dress with short sleeves and delicate pleated hem for a sophisticated, modern look.",
    },
    price: 349,
    oldPrice: 420,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/2aYgyDgktWuZlxVHCNJEJy1n0TnXfI0Q4duMfhVI.jpg",
    specs: [
      { ar: "الخامة: محبوك فسكوس 63% بولي أميد 37%", en: "Material: Viscose 63%, Polyamide 37%" },
      { ar: "الطول: متوسط / ميدي", en: "Length: Midi" },
      { ar: "الياقة: مستديرة كلاسيكية", en: "Collar: Round" },
    ],
    badge: { ar: "وصل حديثاً", en: "New Arrival" },
  },
  {
    id: "chiffon-pleated-dress",
    name: {
      ar: "فستان شيفون بليسيه بنقوش هندسية راقية",
      en: "Pleated Chiffon Dress with Geometric Patterns",
    },
    description: {
      ar: "فستان شيفون ناعم بليسيه بنقوش هندسية ساحرة وتصميم انسيابي مريح يناسب جميع المناسبات والإطلالات اليومية الفخمة.",
      en: "Flowing pleated chiffon dress with chic geometric patterns, perfect for elegant daywear and special events.",
    },
    price: 279,
    oldPrice: 350,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/dnuNmgrcSYmNrmJr787MB4BRp28UVuqeo8Qq4rUo.jpg",
    specs: [
      { ar: "خامة شيفون ناعمة وخفيفة", en: "Soft Lightweight Chiffon" },
      { ar: "تصميم بليسيه انسيابي", en: "Flowing Pleated Design" },
      { ar: "مقاوم للتجعد", en: "Wrinkle Resistant" },
    ],
    badge: { ar: "الأكثر طلباً", en: "Best Seller" },
  },
  {
    id: "brown-wide-pants",
    name: {
      ar: "بنطلون بني واسع مزين بكسرات كلاسيكية",
      en: "Brown Wide-Leg Pleated Tailored Trousers",
    },
    description: {
      ar: "بنطلون نسائي واسع بلون بني دافئ، مصمم بكسرات أمامية أنيقة وقصة فضفاضة مريحة تمنحك إطلالة عملية وجذابة.",
      en: "Relaxed fit wide-leg tailored trousers in warm brown with front pleats for a chic, contemporary silhouette.",
    },
    price: 179,
    oldPrice: 230,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/HHXv8XRqHpLq30h5BH2cZzKM9db0vAeYRnJxO2GE.jpg",
    specs: [
      { ar: "قصة واسعة مريحة (Wide Leg)", en: "Comfortable Wide-Leg Fit" },
      { ar: "كسرات أمامية أنيقة", en: "Front Tailored Pleats" },
      { ar: "خامة ممتازة تدوم طويلاً", en: "High Quality Fabric" },
    ],
  },
  {
    id: "brown-cape-jacket",
    name: {
      ar: "جاكيت بني بأكمام كاب مزين بسحاب ذهبي فاخر",
      en: "Brown Cape-Sleeve Jacket with Gold Zipper",
    },
    description: {
      ar: "جاكيت أنيق بأكمام كاب مميزة وسحاب معدني ذهبي لامع، يعطي إطلالة عصرية وجريئة في الأيام المعتدلة والباردة.",
      en: "Modern cape-sleeve jacket in rich brown with luxury gold zipper accents, perfect for layering with elegance.",
    },
    price: 179,
    oldPrice: 240,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/fPPbgPT8neN78P8PuehVYfLzQfpq54PqwBWSNUT3.jpg",
    specs: [
      { ar: "تصميم أكمام كاب عصرية", en: "Chic Cape Sleeves" },
      { ar: "سحاب معدني ذهبي عالي الجودة", en: "Premium Gold Hardware" },
      { ar: "بطانة داخلية مريحة", en: "Comfortable Inner Lining" },
    ],
    badge: { ar: "خصم 25%", en: "25% Off" },
  },
  {
    id: "midi-flared-skirt",
    name: {
      ar: "تنورة ميدي بخصر مطاطي وقصة كلوش واسعة",
      en: "Midi Flared Skirt with Elastic Waistband",
    },
    description: {
      ar: "تنورة ميدي أنيقة بقصة كلوش واسعة وخصر مطاطي مريح، مثالية للتنسيق مع البلوزات والقمصان لإطلالة يومية راقية.",
      en: "Chic midi flared skirt with elasticated waist for effortless style and maximum comfort all day.",
    },
    price: 189,
    oldPrice: 230,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/qoUgWChp6fSlkAYdESjIHxQocmMMAPqfexCBRzmu.jpg",
    specs: [
      { ar: "قصة كلوش انسيابية", en: "Flared Silhouette" },
      { ar: "خصر مطاطي مريح", en: "Comfort Elastic Waist" },
      { ar: "طول ميدي محتشم", en: "Modest Midi Length" },
    ],
  },
  {
    id: "floral-button-shirt",
    name: {
      ar: "قميص مورد بأزرار أمامية للإغلاق",
      en: "Floral Print Button-Down Casual Shirt",
    },
    description: {
      ar: "قميص أنيق بطبعة زهور هادئة وأزرار أمامية، مصمم من خامة ناعمة وخفيفة توفر الراحة والأناقة طوال اليوم.",
      en: "Gentle floral print button-down shirt made from lightweight breathable fabric for relaxed sophistication.",
    },
    price: 149,
    oldPrice: 195,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/W5V40OoFSHnXcwKJugBJWiIYiIEZ5wFmSAV6Gq6l.jpg",
    specs: [
      { ar: "طبعة زهور كلاسيكية ناعمة", en: "Subtle Floral Pattern" },
      { ar: "أزرار أمامية متينة", en: "Front Button Fastening" },
      { ar: "قماش ناعم قابل للتنفس", en: "Soft Breathable Fabric" },
    ],
  },
  {
    id: "black-knit-glitter-top",
    name: {
      ar: "بلوزة سوداء محبوكة بتفاصيل لامعة للمناسبات",
      en: "Black Knitted Glitter Accent Top",
    },
    description: {
      ar: "بلوزة سوداء محبوكة بخيوط برّاقة خفيفة تضفي لمسة تألق راقية على مظهرك في المناسبات المسائية واللقاءات.",
      en: "Refined black knit top woven with subtle shimmering threads, ideal for evening outings and versatile styling.",
    },
    price: 169,
    oldPrice: 210,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/4pW6rIUJnS5aRl8z87kTIayOsPCHsMrACv5zHTlb.jpg",
    specs: [
      { ar: "خيوط لامعة مدمجة برقي", en: "Shimmer Knit Finish" },
      { ar: "مرونة وتناسق ممتاز", en: "Flexible & Flattering Fit" },
      { ar: "أكمام مريحة", en: "Comfortable Sleeves" },
    ],
  },
  {
    id: "offwhite-relaxed-blouse",
    name: {
      ar: "بلوزة أوفوايت فضفاضة بحواف مطاطية",
      en: "Off-White Relaxed Blouse with Elastic Cuffs",
    },
    description: {
      ar: "بلوزة أوفوايت بقصة واسعة ومريحة وحواف مطاطية على الأكمام، قطعة أساسية لكل خزانة ملابس عصرية.",
      en: "Essential off-white relaxed blouse featuring elasticated cuffs for effortless daily elegance.",
    },
    price: 149,
    oldPrice: 180,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/4mx4DqNJsjUaDaUB86B2kMEyJ6Gj1Cz5R1ykEUBn.jpg",
    specs: [
      { ar: "لون أوفوايت ناصع وراقي", en: "Crisp Off-White Tone" },
      { ar: "حواف أكمام مطاطية", en: "Elasticated Cuffs" },
      { ar: "سهلة العناية والغسيل", en: "Easy Care & Wash" },
    ],
  },
  {
    id: "zebra-sequin-wrap-top",
    name: {
      ar: "بلوزة ترتر لف بنقشة زيبرا فاخرة",
      en: "Zebra Pattern Sequin Wrap Blouse",
    },
    description: {
      ar: "بلوزة سهرة فاخرة بتصميم لف مطرزة بالترتر اللامع بنقشة زيبرا جذابة، تمنحك إطلالة فريدة ومبهرة في كل مناسبة.",
      en: "Luxury evening wrap blouse adorned with shimmering zebra sequins, delivering a stunning statement look.",
    },
    price: 179,
    oldPrice: 240,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/KpLIr2kN70Sthr0H4A8w9cFPPOCUDl14CGvvyA3e.jpg",
    specs: [
      { ar: "تطريز ترتر كامل عالي الجودة", en: "Full High Quality Sequin Embroidery" },
      { ar: "تصميم لف مميز ومريح", en: "Flattering Wrap Cut" },
      { ar: "بطانة ناعمة لحماية البشرة", en: "Soft Protective Inner Lining" },
    ],
    badge: { ar: "جديد", en: "New" },
  },
  {
    id: "adidas-arte-tshirt",
    name: {
      ar: "تيشيرت ADIDAS X ARTE ANTWERP رجالي فاخر",
      en: "ADIDAS X ARTE ANTWERP Men's Graphic T-Shirt",
    },
    description: {
      ar: "تيشيرت عصري من التعاون الحصري بين ADIDAS و ARTE ANTWERP، مصنوع من أجود أنواع القطن الناعم بقصة كاجوال واسعة ومريحة.",
      en: "Exclusive designer collaboration t-shirt between Adidas and Arte Antwerp, made from ultra-soft premium cotton.",
    },
    price: 399,
    oldPrice: 450,
    category: "clothing",
    image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/35e4ef40438f465091a4cfa34cf43fab_9366/KD1631_000_plp_model.jpg",
    specs: [
      { ar: "قطن طبيعي فاخر 100%", en: "100% Premium Cotton" },
      { ar: "تعاون حصري محدود", en: "Limited Collaboration" },
      { ar: "قصة مريحة وعصرية (Loose Fit)", en: "Loose Streetwear Fit" },
    ],
    badge: { ar: "إصدار حصري", en: "Special Edition" },
  },
  {
    id: "adidas-zne-tshirt",
    name: {
      ar: "تيشيرت ADIDAS Z.N.E. الرياضي الكلاسيكي",
      en: "ADIDAS Z.N.E. Classic Sportswear T-Shirt",
    },
    description: {
      ar: "تيشيرت رياضي كلاسيكي من تشكيلة Z.N.E. الشهيرة، مصمم ليمنحك الراحة والانتعاش أثناء التمارين والنشاط اليومي.",
      en: "Classic sportswear t-shirt from the renowned Z.N.E. line, built for maximum athletic comfort and daily performance.",
    },
    price: 249,
    oldPrice: 290,
    category: "clothing",
    image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/463f5e2cf1224f6d8e50659b47f7f46f_9366/JW4740_000_plp_model.jpg",
    specs: [
      { ar: "نسيج مسامي ممتص للعرق", en: "Moisture Wicking Fabric" },
      { ar: "شعار Z.N.E. الأيقوني", en: "Iconic Z.N.E. Branding" },
      { ar: "مرونة ممتازة للحركة", en: "Optimal Mobility & Stretch" },
    ],
  },
  {
    id: "adidas-zne-shorts",
    name: {
      ar: "شورت رياضي رجالي مريح ADIDAS Z.N.E.",
      en: "ADIDAS Z.N.E. Men's Comfort Athletic Shorts",
    },
    description: {
      ar: "شورت رياضي مريح بجيوب جانبية آمنة وحزام خصر مرن مع رباط تضييق، مناسب للجري والتمارين والاسترخاء.",
      en: "Comfortable athletic shorts with secure zip pockets and adjustable drawstring waist for gym and casual wear.",
    },
    price: 279,
    oldPrice: 320,
    category: "clothing",
    image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/b770fbbd35c24367915960b7e3eb41a0_9366/JW4747_000_plp_model.jpg",
    specs: [
      { ar: "جيوب جانبية بسحاب", en: "Side Zip Pockets" },
      { ar: "حزام خصر مطاطي مع رباط", en: "Elastic Drawstring Waist" },
      { ar: "خامة مريحة ومرنة", en: "Flexible Comfort Fabric" },
    ],
  },
  {
    id: "adidas-zne-hoodie-jacket",
    name: {
      ar: "جاكيت رياضية بقبعة ADIDAS Z.N.E. الفاخرة",
      en: "ADIDAS Z.N.E. Premium Full-Zip Hooded Track Jacket",
    },
    description: {
      ar: "جاكيت رياضي فاخر بسحاب كامل وقبعة رأس مريحة، نسيج ناعم ومطاطي بأربعة اتجاهات يمنحك التركيز والدفء.",
      en: "Premium full-zip hooded track jacket crafted with 4-way stretch fabric for distraction-free warmth and comfort.",
    },
    price: 549,
    oldPrice: 650,
    category: "clothing",
    image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/252ac2ed3bce4e0b8fe9de6a5ab40e04_9366/KB7124_000_plp_model.jpg",
    specs: [
      { ar: "قماش مطاطي بأربعة اتجاهات", en: "4-Way Stretch Fabric" },
      { ar: "قبعة رأس عريضة ومريحة", en: "Spacious Comfort Hood" },
      { ar: "سحاب أمامي متين وعالي التحمل", en: "Durable Full Front Zip" },
    ],
    badge: { ar: "خصم 15%", en: "15% Off" },
  },
  {
    id: "adidas-highloft-puffer-jacket",
    name: {
      ar: "جاكيت شتوي منفوخ بعزل HIGHLOFT الحراري الفائق",
      en: "Men's Highloft Insulated Winter Puffer Jacket",
    },
    description: {
      ar: "جاكيت شتوي منفوخ بتقنية عزل HIGHLOFT لتوفير أقصى درجات الدفء وخفة الوزن، مقاوم للرياح والأمطار الخفيفة.",
      en: "Heavy-duty yet lightweight winter puffer jacket with highloft thermal insulation for extreme warmth in cold weather.",
    },
    price: 599,
    oldPrice: 750,
    category: "clothing",
    image: "https://assets.adidas.com/images/w_450,f_auto,q_auto/62306e5115e5405fabc85cf352dcff06_9366/KY3237_000_plp_model.jpg",
    specs: [
      { ar: "عزل حراري متطور HIGHLOFT", en: "Advanced Highloft Insulation" },
      { ar: "طبقة خارجية مقاومة للرياح", en: "Wind-Resistant Outer Shell" },
      { ar: "جيوب تدفئة مبطنة", en: "Fleece Lined Hand Pockets" },
    ],
    badge: { ar: "خصم 20%", en: "20% Off" },
  },
  {
    id: "kids-primary-school-uniform",
    name: {
      ar: "مريول إبتدائي شيال بسحاب للإغلاق وخامة ممتازة",
      en: "Girls Primary School Uniform Pinafore with Front Zipper",
    },
    description: {
      ar: "مريول ابتدائي شيّال بتصميم أنيق بلا أكمام، مزين بسحاب من الأمام وكسرات مريحة، متين وسهل الغسيل والكي.",
      en: "Durable girls primary school pinafore uniform with front zipper and neat pleats, crafted for daily school comfort.",
    },
    price: 119,
    oldPrice: 150,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/c7aYxampvORFIkoiQiajrV7a0wCqMvo2teAxmSGV.jpg",
    specs: [
      { ar: "خامة بوليستر 100% عالية الجودة", en: "100% Durable High Grade Polyester" },
      { ar: "سحاب أمامي لسهولة الارتداء", en: "Easy Front Zip Fastening" },
      { ar: "مقاوم للتجعد ومناسب للغسيل المتكرر", en: "Crease Resistant & Machine Washable" },
    ],
    badge: { ar: "الأكثر طلباً", en: "Top Seller" },
  },
  {
    id: "kids-pleated-uniform-belt",
    name: {
      ar: "مريول إبتدائي بكسرات بليسيه وحزام خلفي للضبط",
      en: "Girls Pleated Primary School Uniform with Back Tie",
    },
    description: {
      ar: "مريول مدرسي بكسرات واسعة أنيقة وحزام خلفي لضبط المقاس بدقة، قماش متين ومريح يلائم ساعات الدوام المدرسي.",
      en: "Classic pleated school pinafore featuring adjustable back tie for a tailored fit throughout the school day.",
    },
    price: 139,
    oldPrice: 170,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/QMZvY19v0yV06FjTthpEyCKr2dLK1KIDJl9hMZBV.jpg",
    specs: [
      { ar: "كسرات بليسيه دقيقة ومتقنة", en: "Fine Pleated Detailing" },
      { ar: "حزام خلفي للتحكم بالمقاس", en: "Adjustable Back Belt" },
      { ar: "خياطة مزدوجة معززة", en: "Reinforced Double Stitching" },
    ],
  },
  {
    id: "kids-sequin-strap-dress",
    name: {
      ar: "فستان أطفال بحمالات وتفاصيل ترتر لامعة للحفلات",
      en: "Girls Sparkling Sequin Party Dress with Straps",
    },
    description: {
      ar: "فستان بناتي جميل مزين بتطريز ترتر متلألئ مع بطانة قطنية ناعمة ومريحة للأطفال، مثالي للأعياد والمناسبات السعيدة.",
      en: "Delightful girls party dress sparkling with sequin accents and lined with soft cotton for party-ready comfort.",
    },
    price: 129,
    oldPrice: 165,
    category: "clothing",
    image: "https://cdn.salla.sa/xYoXz/FKl4AQqbFuDA6KOm5YCJe2SNM9EAygEWkQtSccDm.jpg",
    specs: [
      { ar: "ترتر لامع آمن للأطفال", en: "Child-Safe Sparkling Sequins" },
      { ar: "بطانة قطنية ناعمة ومريحة", en: "Soft Breathable Cotton Lining" },
      { ar: "تصميم أنيق ومبهج", en: "Festive Party Design" },
    ],
    badge: { ar: "جديد", en: "New" },
  },

  // ===============================================
  // === 2. قسم الإكسسوارات وحقائب اليد (Accessories) ===
  // ===============================================
  {
    id: "direction-luxury-black-handbag",
    name: {
      ar: "حقيبة يد نسائية فاخرة كلاسيكية - ديركشن أسود",
      en: "Direction Classic Luxury Black Top-Handle Handbag",
    },
    description: {
      ar: "حقيبة يد نسائية كلاسيكية فاخرة باللون الأسود الملكي، مصممة من جلد ناعم ممتاز مع تفاصيل معدنية أنيقة وحزام كتف قابل للتعديل والفصل.",
      en: "Luxury structured black handbag with polished hardware, dual top handles, and detachable adjustable shoulder strap.",
    },
    price: 249,
    oldPrice: 320,
    category: "accessories",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-direction-0022509700036484_front.jpg",
    specs: [
      { ar: "جلد فاخر عالي التحمل", en: "Premium Resilient Vegan Leather" },
      { ar: "حزام كتف قابل للفصل والتعديل", en: "Detachable Shoulder Strap" },
      { ar: "تقسيم داخلي منظم وجيوب سرية", en: "Organized Multi-Pocket Interior" },
    ],
    badge: { ar: "الأكثر مبيعاً", en: "Best Seller" },
  },
  {
    id: "deliberate-metallic-handbag",
    name: {
      ar: "حقيبة يد نسائية ميتاليك أنيقة للسهرات - ديليبيريت",
      en: "Deliberate Metallic Evening Shoulder Bag",
    },
    description: {
      ar: "حقيبة يد فاخرة بلمسة ميتاليك برّاقة تعكس الأناقة والجاذبية في السهرات والمناسبات الخاصة، خفيفة الوزن وسهلة الحمل.",
      en: "Stunning metallic evening bag offering gleaming luxury and refined texture for evening parties and special galas.",
    },
    price: 289,
    oldPrice: 380,
    category: "accessories",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-deliberate-0019511200004310_front.jpg",
    specs: [
      { ar: "تشطيب ميتاليك براق فخم", en: "Gleaming Metallic Finish" },
      { ar: "سلسلة كتف معدنية أنيقة", en: "Elegant Metal Chain Strap" },
      { ar: "قفل مغناطيسي آمن", en: "Secure Magnetic Closure" },
    ],
    badge: { ar: "خصم 24%", en: "24% Off" },
  },
  {
    id: "dorry-modern-shoulder-bag",
    name: {
      ar: "حقيبة كتف عصرية أنيقة - دوري أسود",
      en: "Dorry Contemporary Black Shoulder Bag",
    },
    description: {
      ar: "حقيبة كتف عصرية ومدمجة باللون الأسود الجذاب، تناسب جميع الإطلالات اليومية والعملية مع مساحة كافية لجميع مقتنياتك الأساسية.",
      en: "Contemporary compact shoulder bag in sleek black, engineered for daily essentials with effortless modern flair.",
    },
    price: 199,
    oldPrice: 260,
    category: "accessories",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-dorryp-0019500110006046_front.jpg",
    specs: [
      { ar: "تصميم مضغوط وخفيف الوزن", en: "Compact Lightweight Build" },
      { ar: "حزام كتف عريض ومريح", en: "Wide Comfortable Shoulder Strap" },
      { ar: "مقاومة للخدوش والماء", en: "Scratch & Splash Resistant" },
    ],
  },
  {
    id: "dalia-luxury-handbag",
    name: {
      ar: "حقيبة يد كلاسيكية راقية بمقبض علوي - داليا أسود",
      en: "Dalia Classic Top-Handle Luxury Handbag",
    },
    description: {
      ar: "حقيبة كلاسيكية بمقبض علوي متين وقفل ذهبي جذاب، تضيف لمسة من الفخامة الرسمية إلى إطلالتك في العمل والمناسبات.",
      en: "Sophisticated top-handle bag in deep black with gold hardware accents, ideal for executive wear and classy events.",
    },
    price: 229,
    oldPrice: 290,
    category: "accessories",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-dalia-0022500110032052_front.jpg",
    specs: [
      { ar: "مقبض علوي مريح ومتين", en: "Sturdy Reinforced Top Handle" },
      { ar: "إكسسوارات ذهبية فاخرة", en: "Gold-Plated Hardware" },
      { ar: "قاعدة معززة لحماية الحقيبة", en: "Protective Bottom Metal Feet" },
    ],
  },
  {
    id: "darla-white-luxury-bag",
    name: {
      ar: "حقيبة يد نسائية ملكية باللون الأبيض النقي - دارلا",
      en: "Darla Royal White Luxury Handbag",
    },
    description: {
      ar: "حقيبة يد بلون أبيض ملكي ساحر وتصميم أنيق يجمع بين النقاء والفخامة، مثالية لحفلات الاستقبال والمناسبات النهارية والمسائية.",
      en: "Royal white luxury handbag with exquisite craftmanship, delivering timeless elegance for weddings and daytime receptions.",
    },
    price: 269,
    oldPrice: 340,
    category: "accessories",
    image: "https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/product//cache/7979606d890c211479dc7a080f45fccc/d/u/du-dharla-0022509700038487_front_1.jpg",
    specs: [
      { ar: "لون أبيض نقي مقاوم للبقع", en: "Stain-Resistant Pure White Finish" },
      { ar: "حزام كتف أنيق إضافي", en: "Additional Sleek Shoulder Strap" },
      { ar: "تصميم فاخر وعصري", en: "Exclusive Modern Silhouette" },
    ],
    badge: { ar: "جديد", en: "New" },
  },
  {
    id: "luxury-accessories-set",
    name: {
      ar: "طقم إكسسوارات فاخر منتقى بعناية للإهداء والمناسبات",
      en: "Selected Luxury Accessories & Jewelry Gift Set",
    },
    description: {
      ar: "طقم إكسسوارات راقٍ ومميز مطلي بجودة عالية ليحافظ على لمعانه، يأتي في علبة فاخرة مناسبة للإهداء والمناسبات السعيدة.",
      en: "Elegantly curated luxury accessories set with premium plating, presented in an exquisite gift box.",
    },
    price: 189,
    oldPrice: 250,
    category: "accessories",
    image: "https://assets.lightfunnels.com/account-99794/images_library/8b2952c6-2f54-41bf-95f2-25f6c2a9dfbd.png",
    specs: [
      { ar: "طلاء عالي الجودة يدوم طويلاً", en: "Long-Lasting Premium Plating" },
      { ar: "مقاوم لتغير اللون", en: "Tarnish-Resistant" },
      { ar: "تغليف هدايا فاخر", en: "Deluxe Gift Box Packaging" },
    ],
    badge: { ar: "هدية مميزة", en: "Gift Edition" },
  },

  // ============================================
  // === 3. قسم الأحذية الرجالية والرياضية (Shoes) ===
  // ============================================
  {
    id: "summer-slides-eva",
    name: {
      ar: "زنوبة رجال صيفية مريحة مع بطانة EVA سميكة ومضادة للانزلاق",
      en: "Men's Summer Comfort Slides with Thick EVA Lining, Anti-Slip",
    },
    description: {
      ar: "صندل رجالي صيفي فائق الراحة مع بطانة EVA سميكة تمتص الصدمات ونعل متعرج مانع للانزلاق، خفيف الوزن ومقاوم للماء.",
      en: "Ultra-comfortable summer men's slides with thick shock-absorbing EVA lining and anti-slip treaded sole.",
    },
    price: 149,
    oldPrice: 240,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/61152490-7f71-44d1-b05d-e577d2594cb4.jpg",
    specs: [
      { ar: "بطانة EVA سميكة ومريحة", en: "Thick EVA Cushion Lining" },
      { ar: "نعل مقاوم للانزلاق", en: "Anti-Slip Tread Sole" },
      { ar: "مقاوم للماء وسريع الجفاف", en: "Waterproof & Fast Drying" },
    ],
    badge: { ar: "خصم 38%", en: "38% Off" },
  },
  {
    id: "men-sport-sneakers",
    name: {
      ar: "حذاء رياضي عصري للرجال بتصميم خفيف ومريح",
      en: "Men's Modern Dynamic Sports Sneakers",
    },
    description: {
      ar: "حذاء رياضي عصري ومريح للرجال مناسب لجميع الأنشطة الرياضية والمشي اليومي، بخامة شبكية قابلة للتنفس ونعل مرن.",
      en: "Trendy and comfortable men's sports sneakers crafted for all activities with breathable mesh and flexible sole.",
    },
    price: 359,
    oldPrice: 400,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/e973090d-2516-44f6-b7d6-ac4bfce2fce1.jpg",
    specs: [
      { ar: "تصميم عصري جذاب", en: "Modern Sleek Design" },
      { ar: "نعل مريح داعم للقدم", en: "Supportive Comfort Sole" },
      { ar: "خامة شبكية تنفسية", en: "Breathable Mesh Upper" },
    ],
  },
  {
    id: "thick-summer-sneakers-2026",
    name: {
      ar: "حذاء رياضي بنعل سميك للرجال موديل صيف 2026",
      en: "Men's Thick Sole Summer Sneakers 2026 Edition",
    },
    description: {
      ar: "حذاء رياضي كاجوال بنعل سميك مواكب لأحدث صيحات الموضة لصيف 2026، يوفر راحة فائقة وارتفاعاً أنيقاً ومظهراً شبابياً.",
      en: "Thick sole chunky sneakers with the new 2026 summer styling, providing elevated comfort and youthful modern look.",
    },
    price: 139,
    oldPrice: 190,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/117d6ed4-aa11-49d6-8fa6-396b426d6086.jpg",
    specs: [
      { ar: "نعل سميك ممتص للصدمات", en: "Chunky Shock-Absorbing Sole" },
      { ar: "أحدث تصميم لصيف 2026", en: "Summer 2026 Trend Design" },
      { ar: "خفيف الوزن رغم السماكة", en: "Lightweight Cushioning" },
    ],
    badge: { ar: "جديد 2026", en: "2026 New" },
  },
  {
    id: "carbon-marathon-running",
    name: {
      ar: "حذاء جري كاربون احترافي للماراثون والرياضة للجنسين",
      en: "Pro Carbon Plate Marathon Running Shoes - Unisex",
    },
    description: {
      ar: "حذاء جري احترافي مدعم بصفيحة كاربون متطورة تدفعك للأمام وتقلل الإجهاد أثناء الجري والماراثون والتمارين الشاقة.",
      en: "Professional running shoes with embedded carbon fiber plate for maximum energy return and speed endurance.",
    },
    price: 299,
    oldPrice: 350,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/dddc0f9a-f9b4-4e4d-ac69-1e638b2c2287.jpg",
    specs: [
      { ar: "لوحة كاربون لدفع طاقة الجري", en: "Carbon Fiber Propulsion Plate" },
      { ar: "وزن فائق الخفة", en: "Ultra-Lightweight Build" },
      { ar: "مناسب للرجال والنساء", en: "Unisex Fit" },
    ],
    badge: { ar: "الأكثر مبيعاً", en: "Best Seller" },
  },
  {
    id: "casual-breathable-sneakers",
    name: {
      ar: "أحذية رياضية رجالية كاجوال خفيفة وقابلة للتنفس",
      en: "Men's Casual Lightweight Breathable Sneakers",
    },
    description: {
      ar: "أحذية رياضية كاجوال خفيفة بتقنية النسيج الهوائي لتهوية مستمرة وراحة مثالية تدوم طوال ساعات العمل والمشي.",
      en: "Casual lightweight sneakers engineered with airflow fabric technology for all-day continuous foot comfort.",
    },
    price: 179,
    oldPrice: 250,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/f235fe05-0980-4242-bd2f-fe9e672c71ee.jpg",
    specs: [
      { ar: "قماش مسامي فائق التهوية", en: "High Airflow Mesh Upper" },
      { ar: "خفيف الوزن لتقليل التعب", en: "Fatigue-Reducing Lightweight" },
      { ar: "نعل مرن وسلس", en: "Supple Flexible Sole" },
    ],
    badge: { ar: "خصم 28%", en: "28% Off" },
  },
  {
    id: "mesh-slide-on-thick",
    name: {
      ar: "أحذية سلايد-أون صيفية شبكية تنفسية بنعل سميك",
      en: "Men's Breathable Mesh Slide-On Shoes with Thick Sole",
    },
    description: {
      ar: "أحذية سلايد-أون عملية بدون أربطة، سهلة الارتداء بنسيج شبكي متين ونعل سميك مانع للانزلاق للمشي والمشاوير السريعة.",
      en: "Slip-on casual sneakers with durable breathable mesh and chunky traction sole for effortless daily wear.",
    },
    price: 259,
    oldPrice: 300,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/b74f58a3-dec6-408e-800f-e65ce9f15438.jpg",
    specs: [
      { ar: "سهل الارتداء بدون أربطة (Slide-On)", en: "Easy Slip-On / Slide-On" },
      { ar: "شبكة تنفسية مقاومة للحرارة", en: "Heat-Dispersing Mesh" },
      { ar: "نعل سميك عالي الثبات", en: "High Traction Thick Sole" },
    ],
  },
  {
    id: "shock-absorb-4season",
    name: {
      ar: "أحذية رياضية كاجوال لجميع المواسم بتقنية امتصاص الصدمات",
      en: "4-Season Shock-Absorption All-Weather Casual Sneakers",
    },
    description: {
      ar: "أحذية رياضية كاجوال متعددة الاستخدامات لجميع الفصول، مزودة بنعل مبطن بتقنية متطورة لامتصاص الصدمات وحماية المفاصل.",
      en: "Versatile 4-season casual sneakers equipped with advanced cushioning that absorbs ground impacts and protects joints.",
    },
    price: 379,
    oldPrice: 480,
    category: "shoes",
    image: "https://assets.lightfunnels.com/account-99794/images_library/c2fef569-64ee-475a-bfe5-1ffdb15d0b25.jpg",
    specs: [
      { ar: "نعل مبطن ممتص للصدمات", en: "Shock Cushioning System" },
      { ar: "مناسب لجميع فصول السنة", en: "All-Season Weatherproof" },
      { ar: "دعم إضافي لقوس القدم", en: "Arch Support Insole" },
    ],
  },

  // =========================================
  // === 4. قسم حقائب السفر الفاخرة (Bags) ===
  // =========================================
  {
    id: "expandable-side-open-luggage",
    name: {
      ar: "شنط سفر قابلة للتوسعة تفتح من الجانب بعجلات دوارة",
      en: "Expandable Side-Open Spinner Luggage 20/24/28 Inch",
    },
    description: {
      ar: "حقائب سفر ذكية تفتح من الجانب لسهولة الوصول إلى المحتويات مع ميزة التوسعة لزيادة السعة التخزينية وعجلات 360 درجة هادئة.",
      en: "Smart side-opening expandable travel luggage featuring 360-degree silent spinner wheels and TSA combination lock.",
    },
    price: 599,
    oldPrice: 750,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/c1d3c653-8b73-449f-962a-506f88111373.jpg",
    specs: [
      { ar: "فتح جانبي سريع ومريح", en: "Quick-Access Side Opening" },
      { ar: "سحاب توسعة لزيادة السعة", en: "Expandable Zipper Volume" },
      { ar: "عجلات دوارة 360 درجة هادئة", en: "360° Silent Spinner Wheels" },
    ],
    badge: { ar: "خصم 20%", en: "20% Off" },
  },
  {
    id: "front-open-usb-luggage",
    name: {
      ar: "حقائب سفر بفتح أمامي مع منفذ شحن USB مدمج",
      en: "Front-Opening Smart Luggage with Built-In USB Charging Port",
    },
    description: {
      ar: "حقيبة سفر ذكية وعصرية مزودة بفتحة أمامية للابتوب والمستندات ومنفذ USB مدمج لشحن أجهزتك في المطار وأثناء التنقل.",
      en: "Cutting-edge front-opening travel case with dedicated laptop pocket and external USB port for on-the-go charging.",
    },
    price: 799,
    oldPrice: 950,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/ad1b533b-4552-437b-b2c8-2a557707b648.jpg",
    specs: [
      { ar: "جيب أمامي مخصص للابتوب", en: "Dedicated Front Laptop Compartment" },
      { ar: "منفذ شحن USB خارجي", en: "Integrated USB Port" },
      { ar: "هيكل صلب متين ومقاوم للصدمات", en: "Impact-Resistant Hard Shell" },
    ],
    badge: { ar: "الأكثر ذكاءً", en: "Smart Travel" },
  },
  {
    id: "spinner-wheel-luggage",
    name: {
      ar: "مجموعة حقائب سفر متكاملة بعجلات سبينر ومقابض تلسكوبية",
      en: "Spinner Wheel Multi-Size Luggage Set with Telescopic Handles",
    },
    description: {
      ar: "مجموعة حقائب سفر متعددة الأحجام بخامة صلبة خفيفة الوزن، مزودة بمقابض ألمنيوم متينة وقفل رقمي آمن لحماية مقتنياتك.",
      en: "Premium hard-case luggage set featuring aviation-grade aluminum handles and digital security lock for peace of mind.",
    },
    price: 699,
    oldPrice: 850,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/b974e772-53c0-48fc-bf87-cdf936ff51a3.jpg",
    specs: [
      { ar: "مقابض ألمنيوم تلسكوبية", en: "Aviation Aluminum Telescopic Handle" },
      { ar: "قفل أمان رقمي مدمج", en: "Built-In Combination Lock" },
      { ar: "سعة داخلية واسعة ومقسمة", en: "Multi-Compartment Storage" },
    ],
  },
  {
    id: "aiweiny-large-luggage",
    name: {
      ar: "حقيبة السفر AIWEINY الفاخرة بسعة كبيرة وتصميم صلب",
      en: "AIWEINY Luxury Hard-Shell Large Capacity Travel Luggage",
    },
    description: {
      ar: "حقيبة سفر AIWEINY الفاخرة ذات السعة الضخمة والتصميم الصلب الفائق المتانة، مصممة لتحمل أصعب ظروف السفر الطويل والرحلات الدولية.",
      en: "Top-tier AIWEINY hard-shell suitcase engineered with massive packing capacity and reinforced corner protectors for long voyages.",
    },
    price: 1350,
    oldPrice: 2200,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/33778d60-4165-40eb-8607-57a23665e8d5.jpg",
    specs: [
      { ar: "سعة عملاقة للرحلات الطويلة", en: "Max Capacity for Long Trips" },
      { ar: "زوايا ألمنيوم معززة ضد الصدمات", en: "Reinforced Aluminum Corner Guards" },
      { ar: "خامة ألمانية فاخرة خفيفة وقوية", en: "German-Grade Lightweight PC Shell" },
    ],
    badge: { ar: "عرض خاص", en: "Special Deal" },
  },
  {
    id: "wide-pull-5wheel-28",
    name: {
      ar: "حقيبة سفر بسحب عريض وخمس عجلات متوازنة 28 بوصة",
      en: "Wide Pull Handle 5-Wheel Balanced Travel Luggage 28 Inch",
    },
    description: {
      ar: "حقيبة سفر 28 بوصة بنظام السحب العريض المريح ومزودة بخمس عجلات لتوزيع الوزن بسلاسة فائقة وتسهيل المناورة في المطارات.",
      en: "28-inch innovative suitcase with wide pull handlebar and 5-wheel balanced chassis for effortless rolling glide.",
    },
    price: 499,
    oldPrice: 600,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/4b434419-6487-405f-9394-6656ffcd4d22.jpg",
    specs: [
      { ar: "مقبض سحب عريض مريح لليد", en: "Ergonomic Wide Pull Handlebar" },
      { ar: "نظام 5 عجلات فائقة التوازن", en: "5-Wheel Stability System" },
      { ar: "حجم 28 بوصة مثالي للعائلات", en: "28-Inch Family Size" },
    ],
  },
  {
    id: "abs-pc-30inch-luggage",
    name: {
      ar: "حقيبة سفر جديدة بحجم كبير 30 إنش من مادة ABS+PC",
      en: "New Large 30 Inch ABS+PC Lightweight Travel Trolley Case",
    },
    description: {
      ar: "حقيبة سفر عملاقة 30 إنش مصنوعة من مزيج ABS+PC المقاوم للكسر والخدوش، تجمع بين المتانة الفائقة والوزن الخفيف وسهولة السفر.",
      en: "Heavy-duty 30-inch suitcase made from break-proof ABS+PC blend, combining maximum space with ultra-light ease.",
    },
    price: 649,
    oldPrice: 800,
    category: "bags",
    image: "https://assets.lightfunnels.com/account-99794/images_library/be94603c-5e4b-47b3-bac0-5858c0bb2a2e.jpg",
    specs: [
      { ar: "مادة ABS+PC متينة ومقاومة للكسر", en: "Durable Break-Proof ABS+PC" },
      { ar: "حجم عملاق 30 إنش", en: "Giant 30-Inch Capacity" },
      { ar: "عجلات مزدوجة سلسة الحركة", en: "Smooth Double Caster Wheels" },
    ],
  },
]
