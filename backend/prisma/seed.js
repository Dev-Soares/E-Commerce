import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const catalogProducts = [
  {
    "title": "Smart Wi-Fi Coffee Maker with App Control",
    "description": "Programmable 12-cup drip coffee maker featuring integrated Wi-Fi connectivity. Allows scheduling, brewing, and strength adjustment via a dedicated smartphone app (iOS/Android). Includes a permanent gold-tone filter and a glass carafe with a stainless steel accent. Keep-warm function for up to 4 hours. Operates on 120V.",
    "category": "technology",
    "price": 99.99
  },
  {
    "title": "Mini Portable Solid-State Drive (500GB)",
    "description": "Ultra-compact external SSD with 500GB capacity. Features USB 3.2 Gen 2 connectivity, offering read speeds up to 550 MB/s. Durable, shock-resistant metal casing for maximum portability. Compatible with PC, Mac, and gaming consoles. Includes USB-C and USB-A cables.",
    "category": "technology",
    "price": 64.50
  },
  {
    "title": "Noise-Cancelling Over-Ear Headphones",
    "description": "Premium wireless headphones with advanced Active Noise Cancellation (ANC) technology. Offers up to 30 hours of playback on a single charge. Features soft, memory-foam earcups for comfort. Bluetooth 5.0 for stable connection. Includes a 3.5mm audio cable for wired use and a hard-shell carrying case.",
    "category": "technology",
    "price": 199.95
  },
  {
    "title": "4K Ultra HD Streaming Stick",
    "description": "Compact media streaming device that supports 4K Ultra HD, HDR10+, and Dolby Vision. Plugs directly into the TV's HDMI port. Includes a voice-activated remote control for searching and device control. Access to thousands of streaming channels and apps. Requires a high-speed Wi-Fi connection.",
    "category": "technology",
    "price": 49.99
  },
  {
    "title": "Wireless Charging Mouse Pad (Large)",
    "description": "Extended desk mouse pad (900mm x 400mm) with an integrated 10W Qi wireless charging spot on the top corner. Surface made of smooth, water-resistant microfiber. Non-slip rubber base for stability. Charging compatible with all Qi-enabled devices (smartphones and earbuds).",
    "category": "technology",
    "price": 35.00
  },
  {
    "title": "High-Density Foam Yoga Mat (6mm)",
    "description": "6mm thick premium yoga and exercise mat made of TPE material, which is non-toxic and eco-friendly. Features a dual-sided texture for maximum grip on both the floor and hands/feet. Dimensions: 183 cm x 61 cm. Lightweight and includes a carrying strap. Easy to wipe clean after use.",
    "category": "sports",
    "price": 28.99
  },
  {
    "title": "Digital Jump Rope with Calorie Counter",
    "description": "Cordless/corded dual-use jump rope with weighted handles and a built-in digital LED display. Tracks jumps, time, and estimated calories burned. Features adjustable rope length (3m PVC cable). Ideal for indoor or outdoor cardio and fitness training. Requires two AAA batteries (not included).",
    "category": "sports",
    "price": 19.99
  },
  {
    "title": "Resistance Band Set (5 Levels)",
    "description": "Set of 5 color-coded loop resistance bands made from durable natural latex. Includes 5 resistance levels from X-Light (5-10 lbs) to X-Heavy (25-30 lbs). Perfect for strength training, physical therapy, yoga, and Pilates. Comes with a carrying pouch and an exercise guide.",
    "category": "sports",
    "price": 12.50
  },
  {
    "title": "Insulated Stainless Steel Water Bottle (1L)",
    "description": "Large capacity (1000 ml / 34 oz) double-walled, vacuum-insulated water bottle. Keeps liquids cold for up to 24 hours and hot for up to 12 hours. Constructed from food-grade 18/8 stainless steel. Features a wide mouth for easy cleaning and adding ice cubes. Leak-proof screw cap.",
    "category": "sports",
    "price": 25.00
  },
  {
    "title": "Adjustable Ankle/Wrist Weights (5 lbs Pair)",
    "description": "Pair of adjustable weights, 2.5 lbs each (5 lbs total). Designed for ankles or wrists to add resistance to workouts. Made with soft, moisture-wicking neoprene and secured with large hook-and-loop closures for a custom, secure fit. Ideal for walking, jogging, and strength training.",
    "category": "sports",
    "price": 34.95
  },
  {
    "title": "Mid-Century Modern Accent Armchair",
    "description": "Stylish accent armchair with a solid wood frame (e.g., rubberwood) and tapered legs in a walnut finish. Upholstered in durable, stain-resistant polyester fabric. Features a supportive back and plush seat cushion for comfort. Ideal for living rooms or offices. Seat height: 18 inches.",
    "category": "furniture",
    "price": 329.99
  },
  {
    "title": "Minimalist Floating Wall Shelf (Set of 3)",
    "description": "Set of three sleek, invisible-mount floating shelves (different lengths: 16, 20, and 24 inches). Made of engineered wood with a matte finish. Includes all necessary hardware and a template for easy installation. Ideal for displaying books, art, or collectibles without visible brackets.",
    "category": "furniture",
    "price": 59.90
  },
  {
    "title": "Lift-Top Coffee Table with Storage",
    "description": "Rectangular coffee table featuring a smooth-lift mechanism that raises the tabletop to dining or workstation height. Constructed from durable particleboard with a melamine finish. The space under the lifted top reveals a large hidden storage compartment. Dimensions: 40 L x 20 W x 17 H inches (closed).",
    "category": "furniture",
    "price": 145.00
  },
  {
    "title": "Ergonomic Mesh Office Chair with Lumbar Support",
    "description": "Fully adjustable office chair designed for all-day comfort. Features a breathable mesh back and a high-density foam seat. Includes adjustable lumbar support, adjustable armrests, and a 360-degree swivel mechanism. Heavy-duty nylon base with smooth-rolling casters. Max weight capacity: 300 lbs.",
    "category": "furniture",
    "price": 175.99
  },
  {
    "title": "King Size Platform Bed Frame (No Headboard)",
    "description": "Sturdy, low-profile King size bed frame made from solid steel for superior mattress support. Features 14 inches of under-bed clearance for storage. No box spring required; suitable for foam, latex, or spring mattresses. Quick and tool-free assembly. Weight capacity: 700 lbs.",
    "category": "furniture",
    "price": 129.99
  },
  {
    "title": "Digital Air Fryer (5.8 Quart)",
    "description": "Large capacity (5.8 Qt) digital air fryer for oil-free cooking. Features a user-friendly touch screen with 11 one-touch preset programs. Uses rapid air circulation technology to cook food up to 50% faster than a conventional oven. Non-stick, dishwasher-safe basket. Temperature range: 170°F to 400°F.",
    "category": "home-appliances",
    "price": 89.99
  },
  {
    "title": "Handheld Cordless Vacuum Cleaner",
    "description": "Lightweight, powerful handheld vacuum with a 20-minute run time on a single charge (Li-ion battery). Features a cyclonic suction system and a washable HEPA filter. Includes crevice tool and brush nozzle for versatile cleaning. Ideal for car interiors, stairs, and quick clean-ups. Charging base included.",
    "category": "home-appliances",
    "price": 55.50
  },
  {
    "title": "Electric Kettle (1.7 Liter, Glass)",
    "description": "1.7-liter capacity electric water kettle made with heat-resistant borosilicate glass and stainless steel accents. Features an automatic shut-off and boil-dry protection for safety. LED indicator lights up when boiling. 1500W heating element for fast boiling. Cordless serving with 360-degree swivel base.",
    "category": "home-appliances",
    "price": 39.99
  },
  {
    "title": "Automatic Soap Dispenser (Countertop)",
    "description": "Touchless soap dispenser with a high-sensitivity infrared sensor. Adjustable volume settings (3 levels) for liquid soap or hand sanitizer. Capacity: 350 ml. Made of durable, fingerprint-resistant ABS plastic. Operates on 4 AA batteries (not included). Ideal for kitchen and bathroom.",
    "category": "home-appliances",
    "price": 22.95
  },
  {
    "title": "Smart Digital Bathroom Scale",
    "description": "Body composition scale that measures weight, BMI, body fat percentage, muscle mass, and more (13 metrics). Connects via Bluetooth to a smartphone app for tracking progress. Tempered glass surface and high-precision sensors. Capacity up to 400 lbs (180 kg). Supports multiple user profiles.",
    "category": "home-appliances",
    "price": 37.00
  },
  {
    "title": "40-Piece Home Repair Tool Kit",
    "description": "Comprehensive 40-piece tool kit for minor home repairs and DIY projects. Includes a claw hammer, measure tape (10 ft), adjustable wrench, slip joint pliers, utility knife, precision screwdrivers, and a selection of bits and fasteners. All tools are contained in a sturdy blow-molded case.",
    "category": "tools",
    "price": 49.99
  },
  {
    "title": "Self-Leveling Cross Line Laser Level",
    "description": "Green beam laser level that projects highly visible horizontal and vertical lines. Self-levels within ±4 degrees. Ideal for picture hanging, tiling, and cabinet installation. Features a locking pendulum for safe transport and manual mode for angular alignment. Includes a magnetic pivoting base.",
    "category": "tools",
    "price": 79.95
  },
  {
    "title": "Heavy-Duty Ratchet Tie-Down Straps (4 Pack)",
    "description": "Set of four 15-foot long, 1-inch wide ratchet straps with S-hooks. Made from high-strength polyester webbing for secure load fastening. Working Load Limit (WLL) of 500 lbs and Break Strength of 1,500 lbs. Used for securing cargo on trucks, trailers, or roof racks. Weather-resistant.",
    "category": "tools",
    "price": 29.50
  },
  {
    "title": "Magnetic Wristband for Screws and Nails",
    "description": "One-size-fits-all wristband embedded with strong magnets to hold metal fasteners (screws, nails, bits). Made of durable nylon material with breathable mesh interior. Adjustable hook-and-loop strap ensures a secure fit. Saves time by keeping small metal tools readily accessible on the wrist.",
    "category": "tools",
    "price": 15.99
  },
  {
    "title": "Horticultural Pruning Shears/Secateurs",
    "description": "Bypass pruner designed for cutting live plants, stems, and small branches (up to 3/4 inch). Features a non-stick coated steel blade for smooth, clean cuts. Ergonomic aluminum handles with a non-slip grip. Includes a safety lock mechanism. Ideal for gardening and landscaping.",
    "category": "tools",
    "price": 24.95
  }
];

async function main() {

  const productCount = await prisma.product.count();

    if (productCount > 0) {
      console.log("O banco de dados já está populado (seeded). Ignorando o seeding.");
      return; 
    }

  for (const product of catalogProducts) {
    await prisma.product.create({
        data: product
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });