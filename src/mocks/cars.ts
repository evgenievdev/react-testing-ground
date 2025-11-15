export interface Car {
  year: number;
  make: string;
  model: string;
  photo: string;
  description: string;
  horsepower: number;
  torque: number;
  weight: number;
  topSpeed: number;
  acceleration: number;
}

export const cars: Car[] = [
  {
    year: 2023,
    make: "Toyota",
    model: "Camry",
    photo:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop",
    description:
      "A reliable and fuel-efficient midsize sedan with a spacious interior and advanced safety features.",
    horsepower: 203,
    torque: 184,
    weight: 3520,
    topSpeed: 130,
    acceleration: 8.1,
  },
  {
    year: 2022,
    make: "Honda",
    model: "Civic",
    photo:
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&auto=format&fit=crop",
    description:
      "A sporty compact car known for its excellent handling, efficient engine, and modern technology.",
    horsepower: 174,
    torque: 162,
    weight: 3045,
    topSpeed: 125,
    acceleration: 8.5,
  },
  {
    year: 2023,
    make: "Tesla",
    model: "Model 3",
    photo:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop",
    description:
      "An all-electric sedan offering impressive range, autopilot capabilities, and instant acceleration.",
    horsepower: 358,
    torque: 420,
    weight: 3552,
    topSpeed: 125,
    acceleration: 5.2,
  },
  {
    year: 2022,
    make: "BMW",
    model: "M3",
    photo:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop",
    description:
      "A high-performance sports sedan with a twin-turbo engine and precise handling dynamics.",
    horsepower: 503,
    torque: 479,
    weight: 3848,
    topSpeed: 155,
    acceleration: 3.9,
  },
  {
    year: 2023,
    make: "Mercedes-Benz",
    model: "C-Class",
    photo:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop",
    description:
      "A luxury compact sedan featuring elegant design, premium materials, and cutting-edge technology.",
    horsepower: 255,
    torque: 295,
    weight: 3660,
    topSpeed: 130,
    acceleration: 6.1,
  },
  {
    year: 2024,
    make: "Audi",
    model: "A4",
    photo:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop",
    description:
      "A sophisticated sedan with Quattro all-wheel drive, refined interior, and advanced driver assistance.",
    horsepower: 261,
    torque: 273,
    weight: 3780,
    topSpeed: 130,
    acceleration: 5.8,
  },
  {
    year: 2023,
    make: "Porsche",
    model: "911",
    photo:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
    description:
      "A legendary sports car with timeless design, exceptional engineering, and thrilling performance.",
    horsepower: 379,
    torque: 331,
    weight: 3670,
    topSpeed: 165,
    acceleration: 3.5,
  },
  {
    year: 2024,
    make: "Nissan",
    model: "GTR",
    photo:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop",
    description:
      "A Japanese supercar featuring twin-turbo V6 power, advanced AWD system, and track-ready performance.",
    horsepower: 565,
    torque: 467,
    weight: 3930,
    topSpeed: 165,
    acceleration: 2.9,
  },
  {
    year: 2023,
    make: "Mazda",
    model: "MX-5 Miata",
    photo:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop",
    description:
      "A lightweight roadster that offers pure driving pleasure with rear-wheel drive and balanced handling.",
    horsepower: 181,
    torque: 140,
    weight: 2387,
    topSpeed: 137,
    acceleration: 7.3,
  },
  {
    year: 2024,
    make: "Lexus",
    model: "RX",
    photo:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop",
    description:
      "A luxury SUV combining comfort, reliability, and advanced hybrid technology with premium craftsmanship.",
    horsepower: 308,
    torque: 247,
    weight: 4960,
    topSpeed: 125,
    acceleration: 7.5,
  },
  {
    year: 2022,
    make: "Subaru",
    model: "WRX",
    photo:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop",
    description:
      "A turbocharged sports sedan with legendary rally heritage and symmetrical all-wheel drive.",
    horsepower: 271,
    torque: 260,
    weight: 3510,
    topSpeed: 130,
    acceleration: 5.2,
  },
  {
    year: 2022,
    make: "Jeep",
    model: "Wrangler",
    photo:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop",
    description:
      "An iconic off-road vehicle with removable doors and roof, built for adventure and rugged terrain.",
    horsepower: 285,
    torque: 260,
    weight: 4850,
    topSpeed: 112,
    acceleration: 7.8,
  },
  {
    year: 2023,
    make: "Dodge",
    model: "Challenger",
    photo:
      "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=800&auto=format&fit=crop",
    description:
      "A retro-styled muscle car with modern power, available with supercharged HEMI engine options.",
    horsepower: 485,
    torque: 475,
    weight: 4294,
    topSpeed: 160,
    acceleration: 3.6,
  },
  {
    year: 2024,
    make: "Acura",
    model: "Integra",
    photo:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
    description:
      "A premium sport compact returning to its roots with engaging driving dynamics and upscale features.",
    horsepower: 228,
    torque: 226,
    weight: 3400,
    topSpeed: 130,
    acceleration: 6.3,
  },
];
