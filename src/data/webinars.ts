export interface Webinar {
  id: string;
  slug: string;
  topic: string;
  speaker: string;
  speakerCredentials: string;
  date: string;         // "08.04.2026"
  isoDate: string;      // "2026-04-08" for sorting
  timing: string;       // "7:00 pm (CEST)"
  targetGroups: string[];
  status: "UPCOMING" | "PAST" | "OPEN" | "CLOSED" | "WAITLIST"; // Match workshop statuses if needed, use UPCOMING or OPEN
  description: string;
  image: string;
}

import kneeImage from "@/assets/Knee cryoanalgesia under ultrasound guidance.png";
import laserImage from "@/assets/resource-laser-pldd.png";
import orthoImage from "@/assets/Orthobiologic Therapies_procedure.png";
import chestImage from "@/assets/resource-intercostal-cryo.png";
import phlebologyImage from "@/assets/medical-training.jpg";
import ultrasoundImage from "@/assets/resource-genicular-block.png";
import spasticityImage from "@/assets/resource-webinar-panel.png";

export const webinars: Webinar[] = [
  {
    id: "webinar-1",
    slug: "precision-knee-denervation-cryoablation-2026",
    topic: "Precision Knee Denervation with Cryoablation",
    speaker: "Agnes Stogicza",
    speakerCredentials: "MD, FIPP, CIPS, ASRA-PMUC",
    date: "08.04.2026",
    isoDate: "2026-04-08",
    timing: "7:00 pm (CEST)",
    targetGroups: [
      "Pain management physicians",
      "Orthopedic specialists",
      "Radiologists",
      "Rehabilitation professionals",
      "Primary care physicians",
      "Nurse practitioners & physician assistants",
    ],
    status: "UPCOMING",
    description:
      "This webinar provides a deep dive into precision knee denervation using cryoablation, with a focus on anatomical targets, ultrasound-guided technique, patient selection, and achieving durable long-term outcomes. Led by internationally recognised expert Agnes Stogicza.",
    image: kneeImage,
  },
  {
    id: "webinar-2",
    slug: "laser-treatment-pilonidal-disease-2026",
    topic: "Laser Treatment of Pilonidal Disease",
    speaker: "Nikhil Pawa",
    speakerCredentials: "MD, LLM, MSc, MD (Res), FRCS",
    date: "23.04.2026",
    isoDate: "2026-04-23",
    timing: "8:00 pm (CEST)",
    targetGroups: [
      "Colorectal surgeons",
      "General surgeons",
      "Proctologists",
      "Dermatologists",
      "Laser treatment specialists",
      "Nurse practitioners & physician assistants",
    ],
    status: "UPCOMING",
    description:
      "Explore the latest evidence and technique in laser treatment for pilonidal disease. This session covers patient selection criteria, procedural technique, expected outcomes, and how laser therapy compares with conventional surgical approaches. Presented by Mr Nikhil Pawa.",
    image: laserImage,
  },
  {
    id: "webinar-3",
    slug: "cryo-versus-rf-orthopaedic-surgeries-2026",
    topic: "Comparison: Cryo versus RF in Orthopedic Surgeries",
    speaker: "Mohamed Elfekky",
    speakerCredentials: "MSc, MD, MRCS",
    date: "05.05.2026",
    isoDate: "2026-05-05",
    timing: "6:00 pm (CEST)",
    targetGroups: [
      "Orthopedic surgeons",
      "Pain management physicians",
      "Sports medicine specialists",
      "Interventional radiologists",
    ],
    status: "UPCOMING",
    description:
      "A clinical head-to-head comparison of cryoneurolysis and radiofrequency ablation in the context of orthopaedic surgery. This webinar examines the evidence for both modalities, discusses the biological differences, and provides practical guidance on patient selection.",
    image: orthoImage,
  },
  {
    id: "webinar-4",
    slug: "intercostal-cryoanalgesia-chest-wall-surgery-2026",
    topic: "Intercoastal Cryoanalgesia in Chest Wall Surgery",
    speaker: "Matias Nicolas",
    speakerCredentials: "MD",
    date: "28.05.2026",
    isoDate: "2026-05-28",
    timing: "3:00 pm (CEST)",
    targetGroups: [
      "Thoracic surgeons",
      "Cardiothoracic surgeons",
      "Trauma surgeons",
      "Pain management physicians",
    ],
    status: "UPCOMING",
    description:
      "Intercostal cryoanalgesia is gaining momentum as an intraoperative tool to reduce postoperative pain in chest wall procedures. This webinar covers the technique, evidence base, and practical applications in pectus repair, rib fracture stabilisation, and thoracotomy.",
    image: chestImage,
  },
  {
    id: "webinar-5",
    slug: "laser-foam-glue-surgery-phlebology-2026",
    topic: "Laser, Foam, Glue or Surgery? Modern Phlebology",
    speaker: "Piotr Marciniuk",
    speakerCredentials: "MD",
    date: "08.06.2026",
    isoDate: "2026-06-08",
    timing: "7:00 pm (CEST)",
    targetGroups: [
      "Vascular surgeons",
      "Phlebologists",
      "Interventional radiologists",
      "Dermatologists",
      "General surgeons",
    ],
    status: "UPCOMING",
    description:
      "With multiple minimally invasive options now available for varicose vein treatment, choosing the right modality requires a nuanced understanding. This webinar guides clinicians through an evidence-based decision framework for laser ablation, foam sclerotherapy, glue, and surgery.",
    image: phlebologyImage,
  },
  {
    id: "webinar-6",
    slug: "ultrasound-guided-cryoablation-chronic-pain-2026",
    topic: "Ultrasound-Guided Cryoablation for Chronic Pain",
    speaker: "Michal But",
    speakerCredentials: "PhD, EDPM, DESA, MD",
    date: "17.06.2026",
    isoDate: "2026-06-17",
    timing: "7:00 pm (CEST)",
    targetGroups: [
      "Pain management physicians",
      "Anesthesiologists",
      "Interventional radiologists",
      "Orthopedic specialists",
    ],
    status: "UPCOMING",
    description:
      "A comprehensive overview of ultrasound-guided cryoablation techniques for the treatment of chronic musculoskeletal and neuropathic pain. Topics include probe selection, target identification, safety protocols, and a review of current evidence.",
    image: ultrasoundImage,
  },
  {
    id: "webinar-7",
    slug: "cryoneurolysis-spasticity-2026",
    topic: "Cryoneurolysis to Improve Function in Spasticity",
    speaker: "Jose Pereira",
    speakerCredentials: "MBChB CCFP(PC) MSc FCPC PhD",
    date: "01.07.2026",
    isoDate: "2026-07-01",
    timing: "6:00 pm (CEST)",
    targetGroups: [
      "Physiatrists",
      "Neurologists",
      "Rehabilitation specialists",
      "Pain management physicians",
    ],
    status: "UPCOMING",
    description:
      "Spasticity remains a significant source of pain and functional limitation. This webinar explores how cryoneurolysis can selectively target motor and mixed nerves to reduce spasticity, improve function, and enhance quality of life in both upper and lower limb applications.",
    image: spasticityImage,
  },
];
