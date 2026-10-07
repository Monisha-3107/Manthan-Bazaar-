// ==========================================
// GLOBAL VARIABLES
// ==========================================

let currentMember = null;
let currentCategoryId = null;
let currentStallId = null;
let selectedRating = 0;

// ==========================================
// CATEGORY DATA
// ==========================================

const categories = [
  {
    id: "electric-food",
    number: 1,
    name: "ELECTRIC FOOD STALL",
    image: "ELECTRIC STALL1.jpeg",
    fallbackIcon: "⚡🍽️",
    description:
      "Food stalls using electric appliances such as ovens, grills, mixers, and coffee machines."
  },
  {
    id: "non-electric-food",
    number: 2,
    name: "NON-ELECTRIC FOOD STALL",
    image: "NON ELECTRIC STALL.jpeg",
    fallbackIcon: "🔥🍲",
    description:
      "Traditional food stalls and snacks prepared without electric cooking equipment."
  },
  {
    id: "clothes",
    number: 3,
    name: "CLOTHES",
    image: "CLOTHE STALL.jpeg",
    fallbackIcon: "👗",
    description:
      "Ethnic wear, western wear, casual wear, and custom fashion collections."
  },
  {
    id: "accessories",
    number: 4,
    name: "ACCESSORIES",
    image: "ACCESSORIES STALL.jpeg",
    fallbackIcon: "💍",
    description:
      "Jewellery, bags, watches, sunglasses, hair accessories, and more."
  },
  {
    id: "Mehandhi,Art&Beauty",
    number: 5,
    name: "MEHANDHI ART&BEAUTY",
    image: "ART AND BEAUTY STALL.jpeg",
    fallbackIcon: "🎨",
    description:
      "Mehandi designs, nail art, beauty services, face painting, and creative art."
  },
  {
    id: "games",
    number: 6,
    name: "GAMES",
    image: "GAMES STALL.jpeg",
    fallbackIcon: "🎯",
    description:
      "Fun games, skill challenges, entertainment, lucky draws, and prizes."
  },
  {
  id: "manthan-bazaar-feedback",
  name: " MANTHAN BAZAAR FEEDBACK",
  image: "FEEDBACK.png",
  fallbackIcon: "📝",
  description: "Share your overall feedback about Manthan Bazaar 2k26.",
  feedbackLink: "PASTE_YOUR_REAL_GOOGLE_FORM_LINK_HERE"
}
];

// ==========================================
// STALLS DATA
// ==========================================

const stalls = [
  // ELECTRIC FOOD
  {
    id: "Flavour Blast",
    stallNumber: 1,
    categoryId: "electric-food",
    name: "Flavour Blast", 
    image: "ELE flavourblast sailasree .jpg",
    fallbackIcon: "🌶️",
    owner: "SAILA SREE",
    description: "Hot, freshly made snacks and drinks prepared using ovens",
    items: ["Fried Dumplings", "Cabbage Pakoda", "Coin Parota"]
  },
  {
    id: "JK Foods",
    stallNumber: 2,
    categoryId: "electric-food",
    name: "JK Foods",  
    image: "ele JK FOODS varsha 2 BCA.jpg",
    fallbackIcon: "🍕",
    owner: "VARSHA",
    description: "Traditional street food and sweet treats made without electric cooking equipment",
    items: ["Masala Sundal", "Kuzhi Paniyaram With Kara Chutney", "Mini Samosa"]
  },
  {
    id: "The Crispy Spot",
    stallNumber: 3,
    categoryId: "electric-food",
    name: "The Crispy Spot",
    image: "ele THE CRISPY SPORT buvasya sri 2 B.COM.jpg",
    fallbackIcon: "☕",
    owner: "BUVASYA SRI",
    description: "Steamed and fried momos served with spicy chutney",
    items: ["The Corn Samosa", "The French Fries", "The Momos", "The Rose Milk"]
  },
  {
    id: "Tummy Tales",
    stallNumber: 4,
    categoryId: "electric-food",
    name: "Tummy Tales",
    image: "ele TUMMY TALES jessy 3 B.COM A.jpg",
    fallbackIcon: "🥟",
    owner: "JESSY",
    description: "Sweet waffles, pancakes and cake treats made fresh",
    items: ["Potato Smilies", "Sweet Corn", "Soya Chunks", "Corn Cheese Pani Poori"]
  },
  {
    id: "Yummy House",
    stallNumber: 5,
    categoryId: "electric-food",
    name: "Yummy House",
    image: "ele YUMMY HOUSE rithika 3 BCA.jpg",
    fallbackIcon: "🧇",
    owner: "RITHIKA",
    description: "Sweet Cakes and Donut prepared using machines.",
    items: ["Chocolate Donut", "Black Currant Donut", "Tub Cakes", "Jar Cake"]
  },
  {
    id: "Rolling Kitchen",
    stallNumber: 45,
    categoryId: "electric-food",
    name: "Rolling Kitchen",
    image: "ELE ROLLING KITCHEN BHAVYASREE.jpeg",
    fallbackIcon: "🥪",
    owner: "BHAVYASREE",
    description: "Grilled paneer, cheese and soya sandwiches with sweet bread pudding and crispy chips",
    items: ["Paneer Sandwich", "Cheese Sandwich", "Soya Chunks Sandwich", "Arabian Bread Pudding", "Wheat Chips", "Thayir Puri"]
  },
  {
    id: "Crispy Cravings Corner",
    stallNumber: 45,
    categoryId: "electric-food",
    name: "Crispy Cravings Corner",
    image: "ele CRISPY CRAVINGS CORNER mamtha 2 B.COM.jpg",
    fallbackIcon: "🍜",
    owner: "MAMTHA",
    description: "Crispy Gobi 65, spicy mirchi bajji and assorted vegetable bajjis",
    items: ["Gobi 65", "Mirchi Bajji", "Bread Bajji", "Onion Bajji", "Vazhaikkai Bajji", "Potato Bajji"]
  },

  // NON-ELECTRIC FOOD
  {
    id: "Boba Blast",
    stallNumber: 2,
    categoryId: "non-electric-food",
    name: "Boba Blast 2",
    image: "NON ELE bobablast .jpeg",
    fallbackIcon: "🥣",
    owner: "THASLIN BANU",
    description: "Chilled boba drinks and sweet flavoured sips",
    items: ["Verdant Fizz", "Choco Bobo", "Lychee Licious"]
  },
  {
    id: "Chat Zone",
    stallNumber: 27 ,
    categoryId: "non-electric-food",
    name: "Chat Zone",
    image: "NONELE CHATZONE NARMADHA.jpeg",
    fallbackIcon: "🍉",
    owner: "NARMADHA",
    description: "Tangy pani puri, chaat and sweet fried snacks",
    items: ["Pani Poori", "Curd Poori", "Masala Poori", "Gulab Jamun", "Veg Roll"]
  },
  {
    id: "MPR Shop",
    stallNumber: 34 ,
    categoryId: "non-electric-food",
    name: "MPR Shop",
    image: "NONELE MPR SHOP .jpeg",
    fallbackIcon: "🍛",
    owner: "GOPIKA SREE",
    description: "Mixed With Sweet and Hotpot",
    items: ["Veg Rice Briyani", "Sambar Rice", "Pine Apple Kesari"]
  },
  {
    id: "Sai Krish Bakes and desserts",
    stallNumber: 5 ,
    categoryId: "non-electric-food",
    name: "Sai Krish Bakes and desserts",
    image: "NONELE SAIKRISHBAKES AND DESSERTS KRISHNAVENI.jpeg",
    fallbackIcon: "🥪",
    owner: "KRISHNAVENI",
    description: "Homemade cakes, brownies and chocolate treats",
    items: ["Bun Varieties", "Tea Cake", "Rose Milk Cake", "Pisthasio Cake", "Tripple Chocolate Brownies With Dipping", "Home Made Chocolate"]
  },
  {
    id: "Fresh Flavours",
    stallNumber:  7,
    categoryId: "non-electric-food",
    name: "Fresh Flavours",
    image: "NON ELE FRESH FLAVOURS LOGAPRIYA.jpeg",
    fallbackIcon: "🍦",
    owner: "LOGAPRIYA",
    description: "Cool milkshakes, mojitos and refreshing fruit drinks",
    items: ["CHOCOLATE MILKSHAKE", "MOJITO", "Blueberry Mojito", "Lemon Mojito", "Staberry Mojito"]
  },
  {
    id: "Tasty Corner",
    stallNumber: 20 ,
    categoryId: "non-electric-food",
    name: "Tasty Corner",
    image: "NON ELE TASTY CORNER NIVETHA V.jpeg",
    fallbackIcon: "🥛",
    owner: "NIVETHA V",
    description: "Creamy custard, flavoured soda and sweet kozhukattai",
    items: ["Custard Fruit", "Flavoured Golli Soda", "Tutti Frutti Kozhukattai", "Spicy Mac Pasta", "IPL Snack"]
  },
  {
    id: "Hema Ice Cream ",
    stallNumber:  25,
    categoryId: "non-electric-food",
    name: "Hema Ice Cream",
    image: "NONELE HEME ICE CREAM SUBATHRA.jpeg",
    fallbackIcon: "🍯",
    owner: "SUBATHRA",
    description: "Soft ice cream cups in classic flavours",
    items: ["Strawberry Cup&Scoop", "Chocolate Cup&Scoop", "Vanilla Cup&Scoop"]
  },
  {
    id: "NK Shop",
    stallNumber: 18,
    categoryId: "non-electric-food",
    name: "NK Shop",
    image: "NONELE NKSHOP .jpeg",
    fallbackIcon: "🫘",
    owner: "NIVITHA",
    description: "Spicy channa, kothu parotta and warm payasam",
    items: ["Kothu Parotta", "Nool Parotta", "Veg Atho", "Paruppu Payasam"]
  },
  {
    id: "Nilla Stall",
    stallNumber: 50,
    categoryId: "non-electric-food",
    name: "Nilla Stall",
    image: "NON ELE NILLA SATLL SHAFRIN.jpeg",
    fallbackIcon: "🥘",
    owner: "SHAFRIN",
    description: "Hot parotta with salna, soft banana cake and crispy bambolini",
    items: ["Parota Salana", "Banana Cake", "Bambolini"]
  },
  {
    id: "Oru Vaati Vanga",
    stallNumber: 15,
    categoryId: "non-electric-food",
    name: "Oru Vaati Vanga",
    image: "NONELE ORU VAATI VANGA KASINA.jpeg",
    fallbackIcon: "🧅",
    owner: "KASINA",
    description: "Crispy pakodas and tea-time snacks.",
    items: ["Onion Pakoda", "Aloo Pakoda", "Mirchi Bajji", "Mixed Pakoda"]
  },
  {
    id: "Miracline Organics",
    stallNumber: 46,
    categoryId: "non-electric-food",
    name: "Miracline Organics",
    image: "NONELE Miracline.jpeg",
    fallbackIcon: "🫓",
    owner: "MIRACLINE QUILIN",
    description: "Traditional South Indian Nutritional Food varieties.",
    items: ["Malt Variety", "Millet Health Mix", "Traditional health mix", "Veg Soup Variety", "Millet Aval Variety","Pickel Variety", "Natural Honey", "Cow Ghee", "Organic Samba Based Noodles And Pasta", "Organic Bath Soap"]
  },
  {
    id: "Mojito Pia",
    stallNumber: 35,
    categoryId: "non-electric-food",
    name: "Mojito Pia",
    image: "NONELE MOJITOPIA.png",
    fallbackIcon: "🍹",
    owner: "SRILEKHA, RAGHAVI, NISHANTHINI, HEMANYA, DIKSHITA VYAS",
    description: "Chilled fruit mojitos and refreshing summer sips.",
    items: ["Green Apple Mojito", "Blue Berry Mojito", "Kach Mango Mojito", "Strawberry Mojito"]
  },
  {
    id: "Worth The Calories",
    stallNumber: 56,
    categoryId: "non-electric-food",
    name: "Worth The Calories",
    image: "NONELE CHATPATA.png",
    fallbackIcon: "🍽️",
    owner: "SUDHARSHA, DAKSHA, POOJASHREE",
    description: "Chilled fruit mojitos and refreshing summer sips.",
    items: ["Pani Puri", "Jigarthanda", "Cold Coffee", "Momos", "Mocktail"]
  },
  {
    id: "Delulu Diner",
    stallNumber: 57,
    categoryId: "non-electric-food",
    name: "Delulu Diner",
    image: "NONELE DELULU DINER.png",
    fallbackIcon: "🥤",
    owner: "SREELEKHA, LINGANASHREE ORUGANTI, DENILA MARY, JAHNAVI ",
    description: "Fun fusion snacks and zesty lemony sodas.",
    items: ["Lays Chaat", "Muruku Sandwich", "Lemon Soda", "Shots"]
  },
  {
    id: "Rolex Cafe",
    stallNumber: 36,
    categoryId: "non-electric-food",
    name: "Rolex Cafe",
    image: "NONELE ROLEX CAFE.png",
    fallbackIcon: "🥛",
    owner: "SARVESH, SYASHWANTHAN, NIRANJAN, YUVARAJ",
    description: "Savoury rolls, creamy shakes, and cooling traditional drinks.",
    items: ["Paneer Roll", "Gobi Roll", "Badam Milk", "Fruit Mix", "Butter Milk"]
  },

  // CLOTHES
  {
    id: "AKB Fashion",
    stallNumber: 51,
    categoryId: "clothes",
    name: "AKB Fashion",
    image: "CLOTHE  AKBFASHION SHIVASANKARI.jpeg",
    fallbackIcon: "👗",
    owner: "SIVASANKARI S",
    description: "Comfortable and fashionable kurtis.",
    items: ["Short Top", "One Piece Kurti", "Two Piece Kurti", "Three Piece Kurti", "Anarkali"]
  },
  {
    id: "The Fashion Spot",
    stallNumber: 58,
    categoryId: "clothes",
    name: "The Fashion Spot",
    image: "CLOTHE  THEFASHIONSPOT PREETHI.jpeg",
    fallbackIcon: "🥻",
    owner: "DHAVASRI",
    description: "Pretty floral tops and festive Anarkali collections",
    items: [
      "Black Floral Top", "Teal Floral Top", "Maroon Top With Palazzo",
      "Floral Top (Black & Teal)", "Pink Floral Top", "Sky Blue Anarkali Top",
      "Pink Anarkali Top", "Green Embroidered Anarkali Top", "Maroon Embroidered Anarkali Top"
    ]
  },
  {
    id: "OM Sairam Boutique",
    stallNumber: 3,
    categoryId: "clothes",
    name: "OM Sairam Boutique",
    image: "CLOTHE OMSAIRAMBOUTIQUE SHIVASANKARI.jpeg",
    fallbackIcon: "👚",
    owner: "SHIVA SANKARI P",
    description: "Casual wear, kurtis and premium kids picks",
    items: ["New Born Daily-Wear", "Boys & Girls Casual Wear", "Ladies Kurtis", "Kids New Arrivals", "Premium Quality Jewels"]
  },
  {
    id: "Casual Collection",
    stallNumber: 13,
    categoryId: "clothes",
    name: "Casual Collection",
    image: "CLOTHES CASUALCOLLECTION  VARSHA.jpeg",
    fallbackIcon: "✨",
    owner: "HEMAVATHI",
    description: "Trendy kurtis, tops and matching co-ord sets",
    items: ["4 Tops ₹999", "3 Tops ₹999", "Cordset ₹499", "Raw Silk Festival Wear ₹999"]
  },
  {
    id: "Divi Designs",
    stallNumber: 32,
    categoryId: "clothes",
    name: "Divi Designs",
    image: "CLOTHES DIVIDESIGNS.jpeg",
    fallbackIcon: "👗",
    owner: "VARSHA",
    description: "Comfortable kurtis for every occasion",
    items: ["Kurtis", "Tops", "Three Piece Sets", "Co ord Sets", "Quad Sets"]
  },
  {
    id: "Jeswin Collection",
    stallNumber: 26,
    categoryId: "clothes",
    name: "Jeswin Collection",
    image: "CLOTHES JESWINCOLLECTION DHARSHINI.jpeg",
    fallbackIcon: "👕",
    owner: "DHARSHINI",
    description: "Simple leggings, sarees and comfortable nighties",
    items: ["Leggings", "Saree", "Nighty"]
  },
  {
    id: "Shree Ram Silk & Saree",
    stallNumber: 49,
    categoryId: "clothes",
    name: "Shree Ram Silk & Saree",
    image: "CLOTHES SREERAMSILKANDSAREE.jpeg",
    fallbackIcon: "🧥",
    owner: "DIVYASHREE",
    description: "Silk sarees, cotton sarees and traditional weaves",
    items: ["Soft Silk", "Kubera Silk", "Borderless Saree", "Maheshwari Cotton", "Printed Khadi", "Cotton Saree"]
  },
  {
    id: "Lala Fashion",
    stallNumber: 48,
    categoryId: "clothes",
    name: "Lala Fashion",
    image: "CLOTHES LALAFASHION THILAGA.jpeg",
    fallbackIcon: "👘",
    owner: "THILAGAVATHI",
    description: "Stylish plain and yoke-design tops for every day",
    items: ["Side Cut Tops", "Umbrella Tops", "Quads Set"]
  },

  // ACCESSORIES
  {
    id: "3D Printing Keychain Miniature",
    stallNumber: 8,
    categoryId: "accessories",
    name: "3D Printing Keychain Miniature",
    image: "ACC 3D PRINTED CUSTOMISED MODEL&MINIATURES JAYAPRIYA.jpeg",
    fallbackIcon: "👂",
    owner: "JAYAPRIYA",
    description: "3D printed keychains and trendy Korean earrings",
    items: ["3D Printed Keychains", "Korean Earings", "Korean Clips"]
  },
  {
    id: "Custom Creations",
    stallNumber: 33,
    categoryId: "accessories",
    name: "Custom Creations",
    image: "ACC CUSTOM LIDHARSHANA.jpeg",
    fallbackIcon: "📿",
    owner: "LIDHARSHANA",
    description: "Custom name keychains and elegant daily-wear earrings",
    items: ["Customized Name Keychain", "Rice Keychain", "Elegant Earrings"]
  },
  {
    id: "Hairy Bliss",
    stallNumber: 21,
    categoryId: "accessories",
    name: "Hairy Bliss",
    image: "ACC HAIRYBLISS.jpeg",
    fallbackIcon: "💎",
    owner: "PREETHI",
    description: "Colourful hair claws, scrunchies and decorative clips",
    items: ["Random Colour Mini claws", "Satin Scrunchies", "Matte Claw Clips", "Floral Claw Clips", "Trendy Claw Clips", "Mini Flower Clips", "Butterfly Clips", "Elegant hair claws", "Faux-Fur Butterfly Clips"]
  },
  {
    id: "Gramathu Man Vasam ",
    stallNumber: 38,
    categoryId: "accessories",
    name: "Gramathu Man Vasam",
    image: "ACC GRAMATHU YASMEEN.jpeg",
    fallbackIcon: "💍",
    owner: "YASMEEN",
    description: "Decorative tea cups, handmade pot items in Traditional Way",
    items: ["Tea Cup", "Pot Items", "Kuruvi Whistle", "Piggy Bank"]
  },
  {
    id: "Little Art Studio",
    stallNumber: 1,
    categoryId: "accessories",
    name: "Little Art Studio",
    image: "ACC LITTLEARTSTUDIO DHANISHA.jpeg",
    fallbackIcon: "🎀",
    owner: "DHANISHA",
    description: "Handmade resin pens, clocks, keychains and fridge magnets",
    items: ["Resin Pen", "Resin Clock", "Resin Keychain", "Resin & Clay Fridge Magnet", "Clay Charms", "Resin Lotus Pond"]
  },
  {
    id: "Preety Picks",
    stallNumber: 24,
    categoryId: "accessories",
    name: "Preety Picks",
    image: "ACC PREETYPICKSACCESSORIES .jpeg",
    fallbackIcon: "👜",
    owner: "MADHUMITHA",
    description: "Floral keychains, cherry necklaces, bows and bracelets",
    items: ["Flower Keychains", "Cherry Necklace", "Bow Accessories", "Tulip Scrunchies", "Ribbon Accessories", "Bracelets"]
  },
  {
    id: "PS Accessories",
    stallNumber: 47,
    categoryId: "accessories",
    name: "PS Accessories",
    image: "ACC PS ACCESS MONIGA.jpeg",
    fallbackIcon: "⌚",
    owner: "MONIGA",
    description: "Trendy hair accessories, earrings and delicate chains",
    items: ["Trendy Hair Accessories", "Hair Clips", "Trendy Earrings", "Tulip Chains"]
  },
  {
    id: "SK Bags And Return Gifts",
    stallNumber: 37,
    categoryId: "accessories",
    name: "SK Bags And Return Gifts",
    image: "ACC SKBAGSANDRETURENGIFTS JAYA.jpeg",
    fallbackIcon: "🕶️",
    owner: "JAYA",
    description: "Stylish handbags, return gifts and utility pouches",
    items: ["Trendy Handbags", "Return Gifts", "Colourful Gift Bags", "Backpacks", "Bottle And Utility Pouches"]
  },
  {
    id: "Sri Mehandi & Fancy Accesssories",
    stallNumber: 19,
    categoryId: "accessories",
    name: "Sri Mehandi & Fancy Accesssories",
    image: "ACC SRI MEHANDHI ANDFANCYACC DEEPISHA.jpeg",
    fallbackIcon: "📱",
    owner: "DEEPISHA",
    description: "Hair clips, bands, keychains, earrings and organic Mehandi",
    items: ["Hair Clips & Pins", "Hair Bands", "Key Chains", "Korean Earrings", "Organic Mehandi Cones", "Organic Nail Cone"]
  },
  {
    id: "MMG Spot",
    stallNumber: 4,
    categoryId: "accessories",
    name: "MMG Spot",
    image: "ACC MMGSPOT Mohanasri.jpeg",
    fallbackIcon: "🎁",
    owner: "MOHANA SRI",
    description: "Antique jewellery, earrings and small gift toys.",
    items: ["Antique Jewelry", "Earrings", "Toy"]
  },
  {
    id: "Dheesha Bags",
    stallNumber: 6,
    categoryId: "accessories",
    name: "Dheesha Bags",
    image: "ACC DHEESHA Priyadharshini.jpeg",
    fallbackIcon: "👖",
    owner: "PRIYADHARSHINI",
    description: "Leather, casual and formal belts for every outfit",
    items: ["Leather Belt", "Casual Belt", "Formal Belt", "Designer Belt"]
  },
  {
    id: "Divya Stall",
    stallNumber: 14,
    categoryId: "accessories",
    name: "Divya Stall",
    image: "ACC divyaSTALL.jpeg",
    fallbackIcon: "✨",
    owner: "DHIVYA",
    description: "Little things that make every girl feel special Shine",
    items: ["Ready Blouse Design", "Custom Aari Blouse", "Bridal Blouse", "Lehanga/Saree Work", "Necklace Sets", "Earrings", "Bangles"]
  },

  // MEHANDI / ART / BEAUTY
  {
    id: "Potrait & Face Paradise ",
    stallNumber: 52,
    categoryId: "Mehandhi,Art&Beauty",
    name: "Potrait & Face Paradise",
    image: "ARTBEU FACE AND PORTRAIT.jpeg",
    fallbackIcon: "🌿",
    owner: "MAHALAKSHMI",
    description: "Creative face painting and live portrait sketches",
    items: ["Face Painting", "Live Portrait"]
  },
  {
    id: "Henna Heaven",
    stallNumber: 39,
    categoryId: "Mehandhi,Art&Beauty",
    name: "Henna Heaven",
    image: "ARTBEU HENNAHEAVEN.jpeg",
    fallbackIcon: "🖌️",
    owner: "SAFANA",
    description: "Elegant Mehandi designs from simple to bridal",
    items: ["Simple Mandala Designs", "Simple Mehndi Designs", "Full Hand Designs", "Bridal Mehndi design"]
  },
  {
    id: "Kavi's Charming",
    stallNumber: 12,
    categoryId: "Mehandhi,Art&Beauty",
    name: "Kavi's Charming",
    image: "ARTBEU KAVICHARMING.jpeg",
    fallbackIcon: "💅",
    owner: "KAVITHA",
    description: "Herbal skincare powders, serums, soaps and shampoos",
    items: ["Skin Brightening Soup", "Herbal Face Wash Powder", "VitB3 & Skin Glow Serum", "3%vitB3 and Blue Pea Gel", "Blue Pea Soap", "Shine Boost Shampoo"]
  },
  {
    id: "Noor Perfume & Attar",
    stallNumber: 40,
    categoryId: "Mehandhi,Art&Beauty",
    name: "Noor Perfume & Attar",
    image: "ARTBEU NOORPERFUMEATTARS.jpeg",
    fallbackIcon: "🌸",
    owner: "ABIBA",
    description: "Fragrant perfumes and traditional attar blends",
    items: ["Noor", "Oud Al-Layl", "Aura Of Arabia"]
  },
  {
    id: "art-corner",
    stallNumber: 41,
    categoryId: "Mehandhi,Art&Beauty",
    name: "Art Corner",
    image: "ARTBEU SMSNAILARTSHOP.jpeg",
    fallbackIcon: "🎨",
    owner: "MONASAKTHI",
    description: "Hand-drawn sketches, canvas art and custom name art",
    items: ["Pencil Sketch", "Canvas Art", "Name Art", "Greeting Card"]
  },

  // GAMES
  {
    id: "Fun activity",
    categoryId: "games",
    name: "Fun Activity",
    image: "GAME FUNACTIVITY.jpeg",
    fallbackIcon: "🎡",
    owner: "SANGEETHA",
    description: "Fun skill games like hopscotch, memory and aqua aim",
    items: ["Hopscotch Game", "Stone Transfer", "Lyrics Finding", "Memory game", "Aqua Aim"]
  },
  {
    id: "vrsl-games-1",
    stallNumber: 43,
    categoryId: "games",
    name: "VRSL Games",
    image: "GAME VRSLGAMES.png",
    fallbackIcon: "🎟️",
    owner: "VIKNESH, RITHISH KUMAR",
    description: "Fast-action arcade games that test your speed and accuracy.",
    items: ["Bunny Hammer", "Sand Hole"]
  },
  {
    id: "vrsl-games-2",
    stallNumber: 44,
    categoryId: "games",
    name: "VRSL Games",
    image: "GAME VRSLGAMES.png",
    fallbackIcon: "🎯",
    owner: "SAI PRASANA, LOHIT",
    description: "Skill-based targets that challenge your aim and timing.",
    items: ["Hit The Cup", "Arrow Shoot"]
  },
  {
    id: "VR Box",
    stallNumber: 45,
    categoryId: "games",
    name: "VR Box",
    image: "GAMES VR VIBES.png",
    fallbackIcon: "🏀",
    owner: "MUGUNTHARYA, VARUN, DURKESH, DILSAN RAGAV",
    description: "High-energy arcade games with rolling tracks, fruit slicing, and ghost-themed action.",
    items: ["Rolling Coiaster", "Fruit Ninja", "Ghost Riders"]
  },
  
];

// ==========================================
// FIREBASE FIRESTORE INTEGRATION
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyC9KU3UFwHkOUj3od9w9r_kxHi848PVeWk",
  authDomain: "manthan-bazaar-cd39c.firebaseapp.com",
  projectId: "manthan-bazaar-cd39c",
  storageBucket: "manthan-bazaar-cd39c.firebasestorage.app",
  messagingSenderId: "189468461552",
  appId: "1:189468461552:web:d8a2c9870807a5c087b535"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


async function saveRegistration(registration) {
  try {
    await db.collection("registrations").add({
      ...registration,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.error("Failed to save registration:", error);
    showToast("Failed to save registration.");
  }
}


async function saveReview(review) {
  try {
    await db.collection("reviews").add({
      ...review,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.error("Failed to save review:", error);
    showToast("Failed to save review.");
  }
}


async function getReviews() {
  try {
    const snapshot = await db.collection("reviews").get();
    const reviews = [];

    snapshot.forEach(function (doc) {
      reviews.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}


async function getRegistrations() {
  try {
    const snapshot = await db.collection("registrations").get();
    const registrations = [];

    snapshot.forEach(function (doc) {
      registrations.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return registrations;
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return [];
  }
}


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function escapeHtml(text) {
  const safeText = String(text || "");
  return safeText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}


function closeAllModals() {
  document.querySelectorAll(".modal").forEach(function (modal) {
    modal.classList.remove("show");
  });
}


// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function (page) {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);
  if (!selectedPage) return;

  selectedPage.classList.add("active");
  window.scrollTo(0, 0);

  if (pageId === "stallsPage") {
    renderCategoryCards();
  }

  if (pageId === "adminPage") {
    renderAdminDashboard();
  }
}


function goHome() {
  closeAllModals();
  currentMember = null;
  showPage("homePage");
}


function startNewMember() {
  currentMember = null;
  closeAllModals();
  showPage("rolePage");
}


// ==========================================
// ROLE SELECTION
// ==========================================

function chooseRole(role) {
  currentMember = { role: role };

  const visitorForm = document.getElementById("visitorForm");
  const adminForm = document.getElementById("adminForm");
  const studentFields = document.getElementById("studentFields");
  const departmentSection = document.getElementById("departmentSection");
  const studyYearArea = document.getElementById("studyYearArea");

  const formHeading = document.getElementById("formHeading");
  const formDescription = document.getElementById("formDescription");

  visitorForm.reset();
  adminForm.reset();

  document.getElementById("otherCourseArea").classList.add("hidden");
  document.getElementById("otherDepartmentArea").classList.add("hidden");

  studyYearArea.classList.remove("hidden");
  departmentSection.classList.remove("hidden");

  if (role === "Admin") {
    visitorForm.classList.add("hidden");
    adminForm.classList.remove("hidden");
    formHeading.textContent = "Admin Login";
    formDescription.textContent = "Enter admin username and password to access dashboard.";
  } else {
    visitorForm.classList.remove("hidden");
    adminForm.classList.add("hidden");

    if (role === "Student") {
      studentFields.classList.remove("hidden");
      formHeading.textContent = "Student Registration";
      formDescription.textContent = "Enter student details to continue.";
    } else {
      studentFields.classList.add("hidden");
      formHeading.textContent = "Staff Registration";
      formDescription.textContent = "Enter staff details to continue.";
    }
  }

  showPage("registrationPage");
}


// ==========================================
// FORM DROPDOWN LISTENERS
// ==========================================

document.getElementById("course").addEventListener("change", function () {
  const selectedCourse = this.value;
  const otherCourseArea = document.getElementById("otherCourseArea");
  const studyYearArea = document.getElementById("studyYearArea");
  const departmentSection = document.getElementById("departmentSection");
  const studyYear = document.getElementById("studyYear");
  const department = document.getElementById("department");
  const otherDepartmentArea = document.getElementById("otherDepartmentArea");

  otherCourseArea.classList.toggle("hidden", selectedCourse !== "Other");

  if (selectedCourse === "VIDHYA SAGAR GLOBAL SCHOOL") {
    studyYearArea.classList.add("hidden");
    departmentSection.classList.add("hidden");
    studyYear.value = "";
    department.value = "";
    otherDepartmentArea.classList.add("hidden");
  } else {
    studyYearArea.classList.remove("hidden");
    departmentSection.classList.remove("hidden");
  }
});


document.getElementById("department").addEventListener("change", function () {
  document
    .getElementById("otherDepartmentArea")
    .classList.toggle("hidden", this.value !== "Other");
});


// ==========================================
// VISITOR FORM SUBMIT
// ==========================================

document.getElementById("visitorForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const role = currentMember ? currentMember.role : "";
  const name = document.getElementById("visitorName").value.trim();
  const departmentValue = document.getElementById("department").value;
  const otherDepartment = document.getElementById("otherDepartment").value.trim();

  if (!name) {
    showToast("Please enter your name.");
    return;
  }

  let course = "-";
  let year = "-";
  let department = "-";

  if (role === "Student") {
    const courseValue = document.getElementById("course").value;
    const otherCourse = document.getElementById("otherCourse").value.trim();
    const yearValue = document.getElementById("studyYear").value;

    if (!courseValue) {
      showToast("Please select your course.");
      return;
    }

    if (courseValue === "Other" && !otherCourse) {
      showToast("Please enter your course name.");
      return;
    }

    if (courseValue !== "VIDHYA SAGAR GLOBAL SCHOOL" && !yearValue) {
      showToast("Please select your year of study.");
      return;
    }

    if (courseValue !== "VIDHYA SAGAR GLOBAL SCHOOL" && !departmentValue) {
      showToast("Please select your department.");
      return;
    }

    if (
      courseValue !== "VIDHYA SAGAR GLOBAL SCHOOL" &&
      departmentValue === "Other" &&
      !otherDepartment
    ) {
      showToast("Please enter your department name.");
      return;
    }

    course = courseValue === "Other" ? otherCourse : courseValue;
    year = courseValue === "VIDHYA SAGAR GLOBAL SCHOOL" ? "Not Applicable" : yearValue;
    department =
      courseValue === "VIDHYA SAGAR GLOBAL SCHOOL"
        ? "Not Applicable"
        : departmentValue === "Other"
        ? otherDepartment
        : departmentValue;
  }

  if (role === "Staff") {
    if (!departmentValue) {
      showToast("Please select your department.");
      return;
    }

    if (departmentValue === "Other" && !otherDepartment) {
      showToast("Please enter your department name.");
      return;
    }

    department = departmentValue === "Other" ? otherDepartment : departmentValue;
  }

  currentMember = {
    name: name,
    role: role,
    course: course,
    year: year,
    department: department
  };

  await saveRegistration({
    name: name,
    role: role,
    course: course,
    year: year,
    department: department,
    registeredTime: new Date().toLocaleString()
  });

  document.getElementById("welcomeMessage").textContent =
    `Welcome, ${name} (${role})! Choose a category to view stalls.`;

  showToast("Registration saved successfully!");
  showPage("stallsPage");
});


// ==========================================
// ADMIN LOGIN FORM
// ==========================================

document.getElementById("adminForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const adminName = document.getElementById("adminName").value.trim();
  const adminPassword = document.getElementById("adminPassword").value.trim();

  if (adminName === "admin" && adminPassword === "admin123") {
    currentMember = { name: "Admin", role: "Admin" };
    showPage("adminPage");
  } else {
    showToast("Invalid Admin name or password.");
  }
});


// ==========================================
// CATEGORY CARDS
// ==========================================

function renderCategoryCards() {
  const grid = document.getElementById("stallGrid");
  grid.innerHTML = "";


  categories.forEach(function (category) {
    const isFeedbackCategory = category.id === "manthan-bazaar-feedback";


    const stallCount = stalls.filter(function (stall) {
      return stall.categoryId === category.id;
    }).length;


    const card = document.createElement("article");
    card.className = "stall-card";


    card.innerHTML = `
      <div class="stall-image">
        <img
          src="${escapeHtml(category.image)}"
          alt="${escapeHtml(category.name)}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="stall-image-fallback">
          ${escapeHtml(category.fallbackIcon)}
        </div>
      </div>


      <div class="stall-body">
        <p class="stall-number">CATEGORY ${category.number}</p>
        <h3>${escapeHtml(category.name)}</h3>
        <p>${escapeHtml(category.description)}</p>


        ${
          isFeedbackCategory
            ? `<p class="category-count">Share your feedback</p>`
            : `<p class="category-count">${stallCount} stalls available</p>`
        }


        <button
          type="button"
          class="view-category-button"
          onclick="viewCategory('${category.id}')"
        >
          ${isFeedbackCategory ? "Give Feedback" : "View Category"}
        </button>
      </div>
    `;


    grid.appendChild(card);
  });
}


function viewCategory(categoryId) {
  if (categoryId === "manthan-bazaar-feedback") {
    const feedbackCategory = categories.find(function (category) {
      return category.id === "manthan-bazaar-feedback";
    });

    window.open(feedbackCategory.feedbackLink, "_blank");
    return;
  }

  const category = categories.find(function (item) {
    return item.id === categoryId;
  });

  if (!category) {
    showToast("Category not found.");
    return;
  }

  currentCategoryId = categoryId;
  document.getElementById("categoryPageTitle").textContent = category.name;
  document.getElementById("categoryPageDescription").textContent = category.description;

  const categoryStalls = stalls.filter(function (stall) {
    return stall.categoryId === categoryId;
  });

  const grid = document.getElementById("categoryStallsGrid");
  grid.innerHTML = "";

  categoryStalls.forEach(function (stall) {
    const card = document.createElement("article");
    card.className = "individual-stall-card";

    card.innerHTML = `
      <div class="stall-image">
        <img
          src="${escapeHtml(stall.image)}"
          alt="${escapeHtml(stall.name)}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="stall-image-fallback">
          ${escapeHtml(stall.fallbackIcon)}
        </div>
      </div>

      <div class="individual-stall-body">
        <p class="stall-number">STALL ${escapeHtml(stall.stallNumber)}</p>
        <h3>${escapeHtml(stall.name)}</h3>
        <p>${escapeHtml(stall.description)}</p>
        <p class="owner-text"><strong>Owner:</strong> ${escapeHtml(stall.owner)}</p>
        <button
          type="button"
          class="view-stall-button"
          onclick="viewStall('${stall.id}')"
        >
          View Stall
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  showPage("categoryStallsPage");
}


// ==========================================
// STALL DETAIL PAGE
// ==========================================

function viewStall(stallId) {
  const stall = stalls.find(function (item) {
    return item.id === stallId;
  });

  if (!stall) {
    showToast("Stall not found.");
    return;
  }

  // Open Google Form directly for Feedback Stall
  if (stall.feedbackLink) {
    window.open(stall.feedbackLink, "_blank");
    return;
  }


  currentStallId = stallId;
  currentCategoryId = stall.categoryId;

  const itemTags = stall.items
    .map(function (item) {
      return `<span class="item-tag">${escapeHtml(item)}</span>`;
    })
    .join("");

  document.getElementById("stallDetails").innerHTML = `
    <div class="stall-details-card">
      <div class="stall-details-image">
        <img
          src="${escapeHtml(stall.image)}"
          alt="${escapeHtml(stall.name)}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="stall-details-image-fallback">
          ${escapeHtml(stall.fallbackIcon)}
        </div>
      </div>

      <div class="stall-details-content">
        <button
          type="button"
          class="back-category-button"
          onclick="backToCategoryStalls()"
        >
          ← Back to Category Stalls
        </button>

        <p class="stall-number">STALL ${escapeHtml(stall.stallNumber)}</p>
        <h1>${escapeHtml(stall.name)}</h1>
        <p class="stall-description">${escapeHtml(stall.description)}</p>

        <h2>Items Available</h2>
        <div class="item-list">${itemTags}</div>

        <div class="owner-box">
          <strong>Stall Owner:</strong> ${escapeHtml(stall.owner)}
        </div>

        <button
          type="button"
          class="blue-button"
          onclick="openReviewModal()"
        >
          Write a Review
        </button>
      </div>
    </div>
  `;

  showPage("stallDetailPage");
}


function backToCategoryStalls() {
  viewCategory(currentCategoryId);
}


// ==========================================
// REVIEW MODAL & FORM
// ==========================================

function openReviewModal() {
  if (!currentMember || !currentMember.name) {
    showToast("Please register first.");
    return;
  }

  if (currentMember.role === "Admin") {
    showToast("Admin cannot submit reviews.");
    return;
  }

  const stallSelect = document.getElementById("reviewStall");
  document.getElementById("reviewerName").value = currentMember.name;
  stallSelect.innerHTML = `<option value="">Select a stall to review</option>`;

  categories.forEach(function (category) {
    const group = document.createElement("optgroup");
    group.label = category.name;

    stalls
      .filter(function (stall) {
        return stall.categoryId === category.id;
      })
      .forEach(function (stall) {
        const option = document.createElement("option");
        option.value = stall.id;
        option.textContent = stall.name;

        if (stall.id === currentStallId) {
          option.selected = true;
        }

        group.appendChild(option);
      });

    stallSelect.appendChild(group);
  });

  selectedRating = 0;
  updateStars();

  document.getElementById("reviewText").value = "";
  document.getElementById("reviewModal").classList.add("show");
}


function closeReviewModal() {
  document.getElementById("reviewModal").classList.remove("show");
  selectedRating = 0;
  updateStars();
}


function updateStars() {
  document.querySelectorAll("#starButtons button").forEach(function (button) {
    const rating = Number(button.dataset.rating);
    button.classList.toggle("active-star", rating <= selectedRating);
  });
}


document.getElementById("starButtons").addEventListener("click", function (event) {
  const starButton = event.target.closest("button[data-rating]");
  if (!starButton) return;

  selectedRating = Number(starButton.dataset.rating);
  updateStars();
});


document.getElementById("reviewForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStallId = document.getElementById("reviewStall").value;
  const reviewText = document.getElementById("reviewText").value.trim();

  if (!selectedStallId) {
    showToast("Please choose a stall.");
    return;
  }

  if (selectedRating === 0) {
    showToast("Please select a star rating.");
    return;
  }

  if (!reviewText) {
    showToast("Please write a review.");
    return;
  }

  await saveReview({
    memberName: currentMember.name,
    role: currentMember.role,
    stallId: selectedStallId,
    rating: selectedRating,
    reviewText: reviewText,
    dateTime: new Date().toLocaleString()
  });

  currentStallId = selectedStallId;
  closeReviewModal();
  document.getElementById("reviewSuccessModal").classList.add("show");
});


function submitAnotherReview() {
  document.getElementById("reviewSuccessModal").classList.remove("show");
  openReviewModal();
}


function goToHomeAfterReview() {
  document.getElementById("reviewSuccessModal").classList.remove("show");
  goHome();
}


// ==========================================
// ADMIN DASHBOARD
// ==========================================

function exportToCsvFile(filename, csvContent) {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


async function downloadRegistrationsCSV() {
  try {
    const data = await getRegistrations();

    if (!data || data.length === 0) {
      showToast("No registrations found to download.");
      return;
    }

    let csv = "No,Name,Role,Course,Year,Department,Registration Time\n";

    data.forEach(function (row, index) {
      csv += `"${index + 1}","${row.name || "-"}","${row.role || "-"}","${row.course || "-"}","${row.year || "-"}","${row.department || "-"}","${row.registeredTime || "-"}"\n`;
    });

    exportToCsvFile(`Manthan_Bazaar_Registrations_${Date.now()}.csv`, csv);
    showToast("Registrations report downloaded!");
  } catch (error) {
    console.error("Export error:", error);
    showToast("Failed to download registrations report.");
  }
}


async function downloadReviewsCSV() {
  try {
    const reviews = await getReviews();

    if (!reviews || reviews.length === 0) {
      showToast("No reviews found to download.");
      return;
    }

    let csv = "No,Member Name,Role,Stall Name,Rating,Review,Date & Time\n";

    reviews.forEach(function (review, index) {
      const stall = stalls.find(function (item) {
        return item.id === review.stallId;
      });

      const stallName = stall ? stall.name : "Unknown Stall";
      const cleanReview = (review.reviewText || "").replace(/"/g, '""');

      csv += `"${index + 1}","${review.memberName}","${review.role}","${stallName}","${review.rating}","${cleanReview}","${review.dateTime}"\n`;
    });

    exportToCsvFile(`Manthan_Bazaar_Reviews_${Date.now()}.csv`, csv);
    showToast("Reviews report downloaded!");
  } catch (error) {
    console.error("Export error:", error);
    showToast("Failed to download reviews report.");
  }
}


function renderAdminDashboard() {
  renderReviewsTable();
}


async function renderReviewsTable() {
  const reviews = await getReviews();
  const tableBody = document.getElementById("adminReviewTable");

  const totalReviews = document.getElementById("totalReviews");
  const totalMembers = document.getElementById("totalMembers");
  const totalStallsReviewed = document.getElementById("totalStallsReviewed");

  const uniqueMembers = new Set(reviews.map((r) => r.memberName));
  const uniqueStalls = new Set(reviews.map((r) => r.stallId));

  totalReviews.textContent = reviews.length;
  totalMembers.textContent = uniqueMembers.size;
  totalStallsReviewed.textContent = uniqueStalls.size;

  if (reviews.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="empty-row">
          No reviews have been submitted yet.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = "";

  reviews.forEach(function (review, index) {
    const stall = stalls.find((item) => item.id === review.stallId);
    const stallName = stall ? stall.name : "Unknown Stall";

    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHtml(review.memberName)}</td>
        <td>${escapeHtml(review.role)}</td>
        <td>${escapeHtml(stallName)}</td>
        <td>${"★".repeat(Number(review.rating))}</td>
        <td>${escapeHtml(review.reviewText)}</td>
        <td>${escapeHtml(review.dateTime)}</td>
      </tr>
    `;
  });
}


// ==========================================
// INITIALIZATION
// ==========================================

window.addEventListener("DOMContentLoaded", function () {
  showPage("homePage");
});
// ==========================================
// CLEAR ALL REVIEWS
// ==========================================


async function clearAllReviews() {
  const confirmDelete = confirm(
    "Are you sure you want to clear all reviews? This cannot be undone."
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const snapshot = await db.collection("reviews").get();

    if (snapshot.empty) {
      showToast("No reviews found.");
      return;
    }

    const deletePromises = [];

    snapshot.forEach(function (doc) {
      deletePromises.push(doc.ref.delete());
    });

    await Promise.all(deletePromises);

    showToast("All reviews cleared successfully.");

    renderReviewsTable();
  } catch (error) {
    console.error("Error clearing reviews:", error);
    showToast("Could not clear reviews. Please try again.");
  }
}