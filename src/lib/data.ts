import type { StaticImageData } from "next/image";
import engagementImg from "../../public/images/engagement.png";
import mandapImg from "../../public/images/mandap.png";
import haldiImg from "../../public/images/haldi.png";
import garbaImg from "../../public/images/garba.png";
import baaratImg from "../../public/images/baarat.png";
import hastmelapImg from "../../public/images/hastmelap.png";

export const couple = {
  groom: {
    firstName: "Prit",
    fullName: "Prit Rakeshbhai Rojivadiya",
    father: "Shri Rakeshbhai Tulsidas Rojivadiya",
    mother: "Smt. Manishaben Rakeshbhai Rojivadiya",
  },
  bride: {
    firstName: "Krisha",
    fullName: "Krisha Maheshbhai Santoki",
    father: "Shri Maheshbhai Vallabhdas Santoki",
    mother: "Smt. Vilasben Maheshbhai Santoki",
  },
};

export const venue = {
  name: "Shri J. M. Kantesariya Vadi",
  address: "Moto Kadva Patel Samaj, Near Cottage Hospital, Upleta, Gujarat",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shri+J+M+Kantesariya+Vadi+Moto+Kadva+Patel+Samaj+Near+Cottage+Hospital+Upleta+Gujarat",
};

// Main wedding moment used for the hero + countdown (Hastmelap)
export const weddingDateTimeISO = "2026-12-06T10:30:00";
export const weddingDateDisplay = "December 6, 2026";

export type WeddingEvent = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  image: StaticImageData;
  description: string;
};

export const events: WeddingEvent[] = [
  {
    id: "engagement",
    title: "Sagai Vidhi",
    subtitle: "Ring Ceremony",
    date: "December 5, 2026",
    time: "8:00 AM",
    image: engagementImg,
    description:
      "Celebrate the beginning of forever as the couple exchanges rings, marking the start of their beautiful journey together with love, joy, and blessings.",
  },
  {
    id: "mandap",
    title: "Mandap Ropan",
    subtitle: "Mandap Muhurat",
    date: "December 5, 2026",
    time: "2:00 PM",
    image: mandapImg,
    description:
      "Witness the sacred Mandap Ropan, where prayers and rituals bless the wedding venue and mark the auspicious beginning of the wedding celebrations.",
  },
  {
    id: "haldi",
    title: "Haldi",
    subtitle: "Turmeric Ceremony",
    date: "December 5, 2026",
    time: "3:30 PM",
    image: haldiImg,
    description:
      "Join us for a vibrant Haldi ceremony filled with laughter, traditions, and turmeric blessings as we prepare the bride and groom for their big day.",
  },
  {
    id: "garba",
    title: "Garba Night",
    subtitle: "Sangeet & Dance",
    date: "December 5, 2026",
    time: "7:30 PM",
    image: garbaImg,
    description:
      "Get ready for a night full of music, garba, and dazzling performances as friends and family light up the dance floor.",
  },
  {
    id: "baarat",
    title: "Jaan Aagman",
    subtitle: "Baarat",
    date: "December 6, 2026",
    time: "7:30 AM",
    image: baaratImg,
    description:
      "The groom's procession arrives with music, dance, and celebration, marking the joyful arrival of the baarat.",
  },
  {
    id: "hastmelap",
    title: "Hastmelap",
    subtitle: "Main Wedding",
    date: "December 6, 2026",
    time: "10:30 AM",
    image: hastmelapImg,
    description:
      "Join us as two hearts unite in the sacred bond of marriage, surrounded by love, traditions, and the blessings of family and friends.",
  },
];
