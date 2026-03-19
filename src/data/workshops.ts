
export interface Faculty {
  name: string;
  credentials: string;
  image: string;
}

export interface ProgramItem {
  title: string;
  items: string[];
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: "OPEN" | "CLOSED" | "WAITLIST";
  date: string;
  location: string;
  image: string;
  price: string;
  cpdPoints?: string;
  description: string[];
  learningObjectives: string[];
  program: ProgramItem[];
  faculty: Faculty[];
  venue: {
    name: string;
    address: string;
    googleMapsUrl?: string;
    directions: string[];
  };
  eligibility: string[];
}

import newWorkshopImage from "@/assets/newworkshop.webp";
import oldWorkshopImage from "@/assets/oldworkshop.webp";

export const workshops: Workshop[] = [
  {
    id: "cryo-2025",
    slug: "australian-cryoanalgesia-workshop-2025",
    title: "The Australian Cryoanalgesia Workshop",
    subtitle: "Mastering Ultrasound-Guided Pain Management Techniques",
    status: "OPEN",
    date: "Saturday, 27 September 2025",
    location: "Brisbane, QLD",
    image: newWorkshopImage,
    price: "$2,200 (inc GST)",
    cpdPoints: "Eligible for ANZCA and FPM CPD Program (Category 2)",
    description: [
      "During the workshop, expert instructors will deliver high-quality, hands-on training in groups of six or fewer attendees, focusing on ultrasound-guided nerve ablation procedures.",
      "This workshop is designed for all medical practitioners who utilize interventional techniques to manage acute and chronic pain.",
      "One-day hands-on cadaver and live patient demo workshop.",
      "Small groups: low participant-to-faculty/specimen ratio.",
      "Expert faculty: highly specialized in pain management.",
      "Quality hands-on training.",
    ],
    learningObjectives: [
      "Identify target anatomy and analyse its imaging depiction.",
      "Correlate patient history and physical examination findings with imaging to achieve a likely diagnosis.",
      "Describe the main literature supporting the efficacy of the procedures.",
      "Identify the risks and benefits of each procedure.",
      "Apply technically correct performance of nerve ablation procedures using safe fluoroscopic or ultrasound guidance.",
    ],
    program: [
      {
        title: "Head & Neck",
        items: [
          "Greater Occipital Nerve",
          "Supraorbital, Infraorbital, and Mental nerves",
          "Stellate Ganglion",
        ],
      },
      {
        title: "Trunk & Pelvis",
        items: [
          "Intercostal and paravertebral nerves",
          "Cluneal nerves",
          "Ilioinguinal/Iliohypogastric & Genitofemoral Blocks",
        ],
      },
      {
        title: "Shoulder",
        items: ["Suprascapular nerve (including motor-sparing techniques)"],
      },
      {
        title: "Hip",
        items: ["Articular branches for hip joint denervation"],
      },
      {
        title: "Knee",
        items: [
          "Genicular nerves",
          "Anterior Femoral Cutaneous Nerve",
          "Infrapatellar branch of the Saphenous Nerve",
          "Lateral Femoral Cutaneous Nerve",
        ],
      },
      {
        title: "Foot & Ankle",
        items: [
          "Baxter’s nerve",
          "Nerves implicated in Morton’s neuroma",
          "Plantar Fascia",
        ],
      },
    ],
    faculty: [
      {
        name: "Dr Thomas Chalk",
        credentials: "FFPMANZCA FANZCA",
        image: "/placeholder.svg", // Placeholder for now
      },
      {
        name: "Dr Amit Lakkaraju",
        credentials: "FRANZCR Pg Pain Med",
        image: "/placeholder.svg",
      },
      {
        name: "Dr Sami Ahmad",
        credentials: "MBBS MSc FRACGP EDPM FFPMANZCA FIPP",
        image: "/placeholder.svg",
      },
    ],
    venue: {
      name: "QUT MERF Anatomical and Surgical Skills Facility (ASSL)",
      address: "The Prince Charles Hospital Campus, Staib Rd, Chermside QLD 4032",
      directions: [
        "From Brisbane Airport (BNE): 15-30 minutes by car.",
        "Rideshare (Uber, DiDi): Estimated cost $30 - $45 AUD.",
        "Taxis: Available 24/7, estimated cost $40 - $55 AUD.",
        "Visitor parking is available on the hospital campus (paid parking).",
      ],
    },
    eligibility: [
      "Pain Medicine (FFPMANZCA)",
      "Anaesthesia (FANZCA)",
      "Diagnostic and Interventional Radiology (FRANZCR)",
      "Neurosurgery (FRACS)",
      "Orthopaedic Surgery (FRACS)",
      "Sport and Exercise Physicians (FACSP/FACSEP)",
      "Rehabilitation Medicine (FAFRM)",
      "General Practice (FRACGP)",
      "Rural and Remote Medicine (FACRRM)",
    ],
  },
  {
    id: "cryo-2024",
    slug: "australian-cryoanalgesia-workshop-2024",
    title: "The Australian Cryoanalgesia Workshop 2024",
    subtitle: "Mastering Ultrasound-Guided Pain Management Techniques",
    status: "CLOSED",
    date: "13-14 June 2024",
    location: "Macquarie University, NSW",
    image: oldWorkshopImage,
    price: "-",
    description: ["Past event."],
    learningObjectives: [],
    program: [],
    faculty: [],
    venue: {
      name: "Macquarie University",
      address: "Sydney NSW",
      directions: [],
    },
    eligibility: [],
  },
];
