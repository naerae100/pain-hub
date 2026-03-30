export interface Faculty {
  name: string;
  credentials: string;
  image: string;
  bio: string[];
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
    status: "CLOSED",
    date: "27 September 2025 (9:00 AM - 4:00 PM)",
    location: "Brisbane, QLD",
    image: newWorkshopImage,
    cpdPoints: "Eligible for ANZCA and FPM CPD Program (Category 2)",
    description: [
      "During the workshop, expert instructors will deliver high-quality, hands-on training in groups of six or fewer attendees, focusing on ultrasound-guided nerve ablation procedures.",
      "This workshop is designed for all medical practitioners who utilize interventional techniques to manage acute and chronic pain.",
      "One-day hands-on cadaver and live patient demo workshop.",
      "Small groups: low participant-to-faculty/specimen ratio.",
      "Expert faculty: highly specialized in pain management.",
      "Quality hands-on training."
    ],
    learningObjectives: [
      "Identify target anatomy and analyse its imaging depiction.",
      "Correlate patient history and physical examination findings with imaging to achieve a likely diagnosis of the pathology causing the patient’s pain or dysfunction.",
      "Describe the main literature supporting the efficacy of the procedures.",
      "Identify the risks and benefits of each procedure, including the assessment, prevention, and management of potential complications.",
      "Apply technically correct performance of nerve ablation procedures using safe fluoroscopic or ultrasound guidance, with minimal tissue injury or patient discomfort."
    ],
    program: [
      {
        title: "Head & Neck",
        items: [
          "Greater Occipital Nerve",
          "Supraorbital, Infraorbital, and Mental nerves",
          "Stellate Ganglion"
        ]
      },
      {
        title: "Trunk & Pelvis",
        items: [
          "Intercostal and paravertebral nerves",
          "Cluneal nerves",
          "Ilioinguinal/Iliohypogastric & Genitofemoral Blocks"
        ]
      },
      {
        title: "Shoulder",
        items: ["Suprascapular nerve (including motor-sparing techniques)"]
      },
      {
        title: "Hip",
        items: ["Articular branches for hip joint denervation"]
      },
      {
        title: "Knee",
        items: [
          "Genicular nerves",
          "Anterior Femoral Cutaneous Nerve",
          "Infrapatellar branch of the Saphenous Nerve",
          "Lateral Femoral Cutaneous Nerve",
          "Post-Amputee Limb Pain"
        ]
      },
      {
        title: "Foot & Ankle",
        items: [
          "Baxter’s nerve",
          "Nerves implicated in Morton’s neuroma",
          "Plantar Fascia"
        ]
      },
      {
        title: "Spine",
        items: [
          "Sacroiliac (SI) Joint denervation"
        ]
      }
    ],
    faculty: [
      {
        name: "Dr Thomas Chalk",
        credentials: "FFPMANZCA FANZCA",
        image: "https://ipmaustralia.com.au/wp-content/uploads/2025/08/Dr-Thomas-Chalk_SD.jpg",
        bio: [
            "Dr Thomas Chalk is a dual trained Specialist Anaesthetist and Specialist Pain Medicine Physician. He completed medical school on the Gold Coast at Griffith University and specialist training in Anaesthesia and Pain Medicine in Southeast Queensland and Northern NSW. He completed his Pain Medicine fellowship at the Professor Tess Cramond Pain and Research Centre at the Royal Brisbane and Women’s Hospital and at the Interdisciplinary Persistent Pain Centre in the Gold Coast Health Service.",
            "He was awarded the Barbara Walker Prize in 2022 for excellence in the Faculty of Pain Medicine fellowship examination. Dr Chalk has completed post graduate interventional training in spinal cord stimulation, dorsal root ganglion stimulation, cryoneurolysis and radiofrequency ablation techniques. He has a strong focus on regional anaesthesia and ultrasound guided pain management techniques for the management of acute and persistent pain conditions. He has previously taught Regional Anaesthesia for The Australian Institute of Ultrasound.",
            "Dr Chalk is an active Member of the International Pain & Spine Intervention Society, Neuromodulation Society of Australia and New Zealand, International Association for the Study of Pain and an International member of the American Society of Regional Anaesthesia."
        ]
      },
      {
        name: "Dr Amit Lakkaraju",
        credentials: "FRANZCR Pg Pain Med",
        image: "https://ipmaustralia.com.au/wp-content/uploads/2025/08/DR-AMIT-Lakkaraju_SD.jpg",
        bio: [
            "Dr Amit Lakkaraju is a fellowship-trained musculoskeletal radiologist working in Geelong, Australia. He initially trained in orthopaedics before moving to radiology in 2004. He has completed two fellowships in musculoskeletal radiology, initially in Leeds in 2009 and subsequently in Liverpool in 2010.",
            "He has been a practicing radiologist with a musculoskeletal and venous subspecialty interest in Australia for 10 years. He completed a pain medicine degree from the University of Sydney in 2017–2018 and has undertaken a number of courses in interventional pain procedures. He has also completed post-graduate training in venous disease through the Australian College of Phlebology. His interests include venous disease, sports imaging, functional imaging in musculoskeletal conditions, and interventional pain management."
        ]
      },
      {
        name: "Dr Sami Ahmad",
        credentials: "MBBS MSc FRACGP EDPM FFPMANZCA FIPP",
        image: "https://ipmaustralia.com.au/wp-content/uploads/2025/08/Dr-Sami-Ahmad.png",
        bio: [
            "Dr Sami Ahmad is a Specialist Pain Medicine Physician with extensive training. He completed his Pain Medicine Fellowship in Queensland.",
            "Dr Ahmad holds Fellowships from the Australian and New Zealand College of Anaesthetists and the Royal Australian College of General Practitioners. In 2019, he earned the Ulf Lindblom Prize for achieving the highest mark in the European Diploma in Pain Medicine. His commitment to professional development recently led him to achieve the Fellow of Interventional Pain Practice (FIPP) designation.",
            "Specializing in lower back, neck, and joint pain, Dr Ahmad is skilled in both interventional and non-interventional pain management techniques. He utilizes Point of Care Ultrasound for precise diagnosis and treatment guidance, with a particular interest in musculoskeletal pain and biological therapies."
        ]
      }
    ],
    venue: {
      name: "QUT MERF Anatomical and Surgical Skills Facility (ASSL)",
      address: "Campus of the Prince Charles Hospital (TPCH) - Staib Rd, Chermside Qld 4032",
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.67445361411!2d153.0219771364989!3d-27.38746696376671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915804cbd79293%3A0xb0cd88a7acce3792!2sQueensland%20University%20of%20Technology%2C%20Institute%20of%20Health%20and%20Biomedical%20Innovation%2C%20Medical%20Engineering%20Research%20Facility!5e1!3m2!1shu!2sau!4v1755500450629!5m2!1shu!2sau",
      directions: [
        "From Brisbane Airport (BNE): 15-30 minutes by car.",
        "Rideshare (Uber, DiDi): Estimated cost $30 - $45 AUD.",
        "Taxis: Available 24/7, estimated cost $40 - $55 AUD.",
        "Visitor parking is available on the hospital campus (paid parking)."
      ]
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
      "Rural and Remote Medicine (FACRRM)"
    ]
  },
  {
    id: "cryo-2024",
    slug: "australian-cryoanalgesia-workshop-2024",
    title: "The Australian Cryoanalgesia Workshop (June 2025)",
    subtitle: "Mastering Ultrasound-Guided Pain Management Techniques",
    status: "CLOSED",
    date: "13-14 June 2025",
    location: "Sydney, NSW",
    image: oldWorkshopImage,
    description: [
      "During the workshop, expert instructors will deliver high-quality, hands-on training in groups of six or fewer attendees, focusing on ultrasound- and fluoro-guided nerve ablation procedures:",
      "This workshop is for pain physicians accredited in Australia",
      "One-day hands-on cadaver and live patient demo workshop with lectures (13 or 14 June 2025)",
      "Small groups: low participant-to-faculty/specimen ratio",
      "Expert international and local faculty: highly specialized in pain management",
      "Quality hands-on training",
      "Bonus presentation: From Clinic to Brand — Essential Marketing Strategies to Grow Your Practice",
      "CPD points"
    ],
    learningObjectives: [
      "Identify target anatomy and analyse its imaging depiction.",
      "Correlate patient history and physical examination findings with imaging to achieve a likely diagnosis.",
      "Describe the main literature supporting the efficacy of the procedures.",
      "Identify the risks and benefits of each procedure.",
      "Apply technically correct performance of nerve ablation procedures using safe fluoroscopic or ultrasound guidance."
    ],
    program: [
      {
        title: "Head & Neck",
        items: [
          "Greater Occipital Nerve",
          "Supraorbital, Infraorbital, and Mental nerves"
        ]
      },
      {
        title: "Trunk & Pelvis",
        items: [
          "Intercostal nerves",
          "Cluneal nerves",
          "Nerves for Sacroiliac (SI) Joint denervation"
        ]
      },
      {
        title: "Shoulder",
        items: [
          "Suprascapular nerve (including motor-sparing techniques)"
        ]
      },
      {
        title: "Hip",
        items: [
          "Articular branches for hip joint denervation"
        ]
      },
      {
        title: "Knee",
        items: [
          "Genicular nerves",
          "Anterior Femoral Cutaneous Nerve",
          "Infrapatellar branch of the Saphenous Nerve",
          "Lateral Femoral Cutaneous Nerve"
        ]
      },
      {
        title: "Foot & Ankle",
        items: [
          "Baxter’s nerve",
          "Nerves implicated in Morton’s neuroma"
        ]
      }
    ],
    faculty: [
      {
        name: "Dr. Leszek Urbańczak",
        credentials: "MD, DABPM, FIPP, FFPMANZCA",
        image: "https://ipmaustralia.com.au/wp-content/uploads/2025/05/Dr-Urbanczak.jpg",
        bio: [
            "Dr. Leszek Urbańczak is a distinguished anesthesiologist and interventional pain specialist based in Zielona Góra, Poland. With over two decades of clinical experience, he is the founder of Fundacja Żyj Bez Bólu (“Live Without Pain Foundation”), where he leads innovative pain management programs focusing on minimally invasive techniques.",
            "Dr. Urbańczak holds the prestigious Fellow of Interventional Pain Practice (FIPP) certification and has recently achieved the Certified Interventional Pain Sonologist (CIPS) credential, underscoring his commitment to excellence in the field. He is internationally recognized for his expertise in cryoanalgesia and cryoneurolysis, frequently sharing his insights at global conferences. Notably, he presented on “Five-minute tricks with ice – cryoneurolysis in the treatment of chronic pain – own experiences” at the 1st PanEurope Interventional Pain Management Series in Prague.",
            "In collaboration with Metrum Cryoflex, a leading European manufacturer of cryotherapy equipment, Dr. Urbańczak contributes to the development and refinement of cryoanalgesia technologies. His work has been instrumental in advancing pain management practices, particularly in integrating cryo-based interventions into standard care protocols."
        ]
      },
      {
        name: "Dr. Robert Wright",
        credentials: "Pain Medicine Specialist, FFPMANZCA, FIPP",
        image: "https://ipmaustralia.com.au/wp-content/uploads/2025/05/image1-e1746443222749.png",
        bio: [
            "Dr. Robert Wright is a distinguished pain medicine specialist with over three decades dedicated to multidisciplinary patient care, education, and innovation. He received his medical degree from Baylor College of Medicine in 1987 before completing his specialized training in anesthetics and pain medicine at the University of Utah in 1991.",
            "Dr. Wright was among the first physicians in the United States to receive certification in pain medicine under the American Board of Anesthesiology and is recognized as a Diplomate of the American Board of Pain Medicine. His expertise in interventional techniques earned him recognition as a Fellow of Interventional Pain Practice (FIPP) in 2014. More recently, his standing in the Australasian medical community was acknowledged when he became a Fellow of the Faculty of Pain Medicine of the Australian and New Zealand College of Anaesthetists (FFPMANZCA) in 2023.",
            "Throughout his career, Dr. Wright has maintained a straightforward philosophy: listen carefully, establish a proper diagnosis, and care for the whole patient. He understands that effective pain management requires individualized approaches utilizing the full spectrum of available therapies. This patient-centered approach has earned him recognition for compassionate care across his professional life.",
            "Beyond clinical practice, Dr. Wright has served as a Master Instructor for the International Pain & Spine Intervention Society (IPSIS) and held significant leadership positions, including former Co-Director of the pain management program at Cedars-Sinai Medical Center in Los Angeles.",
            "A notable aspect of Dr. Wright’s career is his contribution to medical innovation. He has led original research efforts, holds several medical patents, and pioneered the development of specialized devices as well as novel techniques for treating back pain, including the Dekompressor™ and Nimbus™ technologies. These contributions have established him as a respected international figure in the field of pain medicine."
        ]
      }
    ],
    venue: {
      name: "Macquarie University Anatomy and Surgical Skills Lab",
      address: "2 Technology Place, Sydney, NSW, 2109 Australia",
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.893851729072!2d151.1174668202945!3d-33.77322470734251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a612bb587fcb%3A0x4c6c0ec058ba601e!2sMacquarie%20University%20Hospital!5e1!3m2!1shu!2sau!4v1755500705984!5m2!1shu!2sau",
      directions: []
    },
    eligibility: [
      "Pain Medicine (FFPMANZCA)",
      "Anaesthesia (FANZCA)",
      "Diagnostic and Interventional Radiology (FRANZCR)"
    ]
  }
];
