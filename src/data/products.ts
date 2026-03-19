import { Activity, Thermometer, Wind, Brain, CircuitBoard, Wifi, Lock, Smartphone, Mic } from "lucide-react";
import cryoDevice from "@/assets/cryo-device.jpg";
import heroMedical from "@/assets/hero-medical.jpg";
import heroSurgery from "@/assets/hero-surgery.jpg";
import procedureHands from "@/assets/procedure-hands.jpg";

import cryImg from "@/assets/cry.webp";
import regImg from "@/assets/reg.webp";
import epiImg from "@/assets/epi.webp";
import ozoneImg from "@/assets/Ozone.webp";

import cryoSPainlessImg from "@/assets/CRYO-S.webp";
import cryoprobesImg from "@/assets/CRYO.webp";
import regpImg from "@/assets/regp.webp";
import raczCatImg from "@/assets/Racz-Cat.webp";
import essentialImg from "@/assets/essential.webp";
import dayNeedleImg from "@/assets/Day-Needle.webp";

export interface Feature {
    title: string;
    description: string;
    icon?: any;
}

export type ProductSection =
    | { type: 'features-grid'; } // Uses the product.features
    | { type: 'text-image'; title: string; content: string; image: string; imageAlt?: string; align: 'left' | 'right' }
    | { type: 'content-list'; title?: string; items: { title: string; points: string[] }[]; image: string; imageAlt?: string; align: 'left' | 'right' }
    | { type: 'full-text'; title: string; content: string; align?: 'center' | 'left' }
    | { type: 'experience-badge'; title: string; content: string; image: string; imageAlt?: string };

export interface Product {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    description: string[];
    image: string;
    features: Feature[];
    benefits: string[];
    specifications?: Record<string, string>;
    categoryId: string;
    featured?: boolean;
    sections?: ProductSection[];
}

export interface Category {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
}

export const categories: Category[] = [
    {
        id: "cryo",
        slug: "cryoanalgesia",
        title: "Cryoanalgesia",
        description: "Advanced cryosurgery systems for pain management and minimally invasive treatments.",
        image: cryImg,
    },
    {
        id: "regen",
        slug: "regenerative-medicine",
        title: "Regenerative Medicine",
        description: "Cutting-edge therapies for stimulating the body's own repair mechanisms.",
        image: regImg,
    },
    {
        id: "epidurolysis",
        slug: "epidurolysis",
        title: "Epidurolysis",
        description: "Specialized catheters and systems for adhesiolysis and nerve decompression.",
        image: epiImg,
    },
    {
        id: "ozone",
        slug: "ozone-therapy",
        title: "Ozone Therapy",
        description: "Medical ozone generators for therapeutic applications.",
        image: ozoneImg,
    },
];

export const products: Product[] = [
    {
        id: "cryo-s-painless",
        categoryId: "cryo",
        featured: true,
        slug: "cryo-s-painless",
        name: "CRYO-S Painless",
        subtitle: "Advanced Cryoanalgesia Now TGA Registered in Australia",
        image: cryoSPainlessImg,
        description: [
            "The CRYO-S Painless cryosurgery system is now TGA registered and available in Australia, offering practitioners a minimally invasive and effective solution for long-term pain relief.",
            "Using either CO2 or N2O, this microprocessor-controlled device delivers precise cryoanalgesia for a variety of acute and chronic pain conditions. Its primary advantage is its exceptional versatility, supported by the market's largest selection of specialized probes in various shapes and sizes, all designed for high visibility under ultrasound guidance.",
            "For enhanced safety and accuracy, the CRYO-S Painless features a built-in diagnostic nerve stimulator to differentiate between sensory and motor nerves before treatment. The system also uses RFID technology to automatically recognize the attached probe and optimize its settings, ensuring seamless and effective operation.",
        ],
        features: [
            {
                title: "Easy Mode Switching",
                description: "Probe mode selection, cleaning and freezing can be performed automatically via a foot switch or a convenient touchscreen, allowing the treatment site to be kept in sterile conditions.",
                icon: CircuitBoard
            },
            {
                title: "RFiD Technology",
                description: "RFID – electronic communication between the probe and the device allows for the recognition of optimal operating parameters and automatic configuration to the characteristics of the cryoprobe.",
                icon: Wifi
            },
            {
                title: "Automated Testing System",
                description: "Equipped with an automatic probe testing system and two freezing modes (continuous and sequential). The probe testing system includes automatic cleaning and short freezing test.",
                icon: Lock
            },
            {
                title: "Safe Freezing",
                description: "Built-in diagnostic nerve stimulation helps distinguish sensory from motor nerves, preventing accidental damage.",
                icon: Thermometer
            },
            {
                title: "Two Working Mediums",
                description: "The working medium for CRYO-S® Painless is carbon dioxide (CO2) or nitrous oxide (N2O), offering flexibility.",
                icon: Wind
            },
            {
                title: "Voice Communication",
                description: "Built-in voice communication makes the work easier, informing the user about key operating status updates.",
                icon: Mic
            },
            {
                title: "User-Friendly Interface",
                description: "Controlled by a microprocessor with automatic flow calibration, keeping temperature as low as possible.",
                icon: Smartphone
            }
        ],
        benefits: [
            "Provides significant and often immediate pain reduction.",
            "Pain relief can last from several months up to two years.",
            "Leads to a significant reduction or complete cessation of opioid intake.",
            "Reduces the risk of acute postoperative pain transitioning into chronic pain.",
            "Selectively targets nerve tissue while sparing adjacent structures.",
            "Minimizes risks associated with other procedures, such as thrombosis.",
        ],
        sections: [
            { type: 'features-grid' },
            {
                type: 'text-image',
                align: 'right',
                title: "User-friendly interface",
                content: "CRYO-S Painless is controlled by a microprocessor. Automatic flow calibration and keeping the temperature as low as possible does not involve surgeon. Just select the treatment time and press start.",
                image: cryoDevice
            },
            {
                type: 'content-list',
                align: 'left',
                title: "Advantages of cryoanalgesia",
                image: procedureHands,
                items: [
                    {
                        title: "Pain Management & Opioid Reduction",
                        points: [
                            "Provides significant and often immediate pain reduction.",
                            "Pain relief can last from several months up to two years, depending on the patient and indications.",
                            "Leads to a significant reduction or complete cessation of opioid intake, especially postoperatively and during recovery.",
                            "Reduces the risk of acute postoperative pain transitioning into chronic pain.",
                            "Cryoneurolysis offers immediate muscle relaxation during the procedure itself."
                        ]
                    },
                    {
                        title: "Safety & Selectivity",
                        points: [
                            "Selectively targets nerve tissue (specifically the part transmitting sensorimotor impulses) while sparing adjacent structures like blood vessels, muscle tissue, fascia, and fat.",
                            "Minimizes risks associated with other procedures, such as thrombosis.",
                            "Does not cause neuroma formation, thus avoiding secondary pain.",
                            "Preserves the nerve sheath, allowing for nerve regeneration.",
                            "Does not cause scar tissue development.",
                            "Considered excellent for treating neuromas caused by other procedures (e.g., neurotomy, thermolesion, amputation)."
                        ]
                    }
                ]
            },
            {
                type: 'content-list',
                align: 'right',
                image: heroSurgery,
                items: [
                    {
                        title: "Procedural & Rehabilitation Benefits",
                        points: [
                            "Can be performed under ultrasound guidance (some applications also use X-ray), offering excellent visibility of the probe and ice zone for precise targeting.",
                            "Allows for simultaneous treatment of multiple muscles or nerve targets (especially with cryoneurolysis compared to chemical neurolysis).",
                            "Immediate effects can enable patients to commence rehabilitation sooner.",
                            "Contributes to faster verticalization and improved pulmonary and motor rehabilitation.",
                            "Can lead to shorter hospital stays.",
                            "May reduce the need for patient catheterization and drainage.",
                            "For some patients, cryoanalgesia may offer an alternative to epidural anesthesia."
                        ]
                    },
                    {
                        title: "Versatility & Repeatability",
                        points: [
                            "Treatments can be repeated multiple times as needed if pain or symptoms return.",
                            "Cryoneurolysis effectiveness for spasticity can last around 6 to 8 months after a single session.",
                            "Cryoneurolysis is applicable to sensory, mixed, and motor nerves.",
                            "Can be used for conditions like dystonia and increased muscle tension with associated pain."
                        ]
                    }
                ]
            },
            {
                type: 'full-text',
                title: "Clinical application",
                content: "Cryoanalgesia and cryoneurolysis have a broad range of clinical applications, primarily focused on managing pain and neurological symptoms across various medical specialties. These techniques are utilized both intraoperatively during surgical procedures and as standalone, minimally invasive treatments.",
                align: 'center'
            },
            {
                type: 'content-list',
                align: 'left',
                image: procedureHands,
                title: "Pain Management & Neurological Conditions",
                items: [
                    {
                        title: "Chest Wall Pain:",
                        points: [
                            "Pain following thoracotomy or mastectomy.",
                            "Persistent pain after rib fractures.",
                            "Herpes zoster neuralgia (shingles pain) in the chest.",
                            "Neuromas in the chest wall."
                        ]
                    },
                    {
                        title: "Neuralgias:",
                        points: [
                            "Facial pain, including trigeminal neuralgia.",
                            "Occipital neuralgia.",
                            "Suprascapular neuralgia.",
                            "Ilioinguinal neuralgia.",
                            "Other types of neuralgia."
                        ]
                    },
                    {
                        title: "Musculoskeletal & Joint Pain:",
                        points: [
                            "Degeneration of the intervertebral joints (facet syndrome).",
                            "Denervation procedures for pain in the knee, shoulder, and hip."
                        ]
                    },
                    {
                        title: "Spasticity & Neurological Rehabilitation:",
                        points: [
                            "Cryoneurolysis is used to improve quality of life, reduce pain, and accelerate rehabilitation in patients with spasticity, particularly after stroke.",
                            "It is increasingly applied for other symptoms of neurological diseases caused by central nervous system damage that result in spasticity, affecting patient function.",
                            "Pain and spasticity of the upper and lower limbs."
                        ]
                    },
                    {
                        title: "Neuromas:",
                        points: [
                            "Painful neuromas resulting from amputation or surgery (post-surgical neuromas).",
                            "Morton's neuromas."
                        ]
                    },
                    {
                        title: "Other Pain Conditions:",
                        points: [
                            "Phantom limb pain.",
                            "Localized pain associated with cancer."
                        ]
                    }
                ]
            },
            {
                type: 'content-list',
                align: 'right',
                image: heroSurgery,
                items: [
                    {
                        title: "Intraoperative Applications (Cryoanalgesia)",
                        points: [
                            "Thoracic Surgery: Widely used for intercostal nerve cryoanalgesia during:",
                            " - Thoracic deformity repairs in adolescents and adults (e.g., Nuss procedure, Ravitch procedure for pectus excavatum, complex thoracic deformities).",
                            " - Thoracoscopic and thoracotomy procedures such as lobectomy, segmentectomy, and other resections.",
                            "Cardiac Surgery: Applied in procedures accessed via thoracoscopy or thoracotomy, including Minimally Invasive Direct Coronary Artery Bypass (MIDCAB) and mitral valve replacement.",
                            "Traumatology: Utilized for thoracic wall cryoanalgesia in cases of rib fractures, sternum fractures, and multiple organ injuries."
                        ]
                    },
                    {
                        title: "Procedural Aspects",
                        points: [
                            "Cryoneurolysis is typically a minimally invasive procedure performed under local anesthesia, often guided by ultrasound.",
                            "Ultrasound-guided percutaneous cryoanalgesia of the intercostal nerves is also a specific application."
                        ]
                    }
                ]
            },
            {
                type: 'experience-badge',
                title: "30 years experience",
                content: "CRYO-S® PAINLESS, the most modern cryosurgical device manufactured by METRUM CRYOFLEX, is a new generation device used by many experts in the field since 1992.",
                image: heroMedical
            }
        ]
    },
    {
        id: "cryoprobes",
        categoryId: "cryo",
        slug: "cryoprobes",
        name: "Cryoprobes",
        subtitle: "Specialized probes for precise cryoanalgesia",
        image: cryoprobesImg,
        description: [
            "A wide range of specialized probes designed for specific pain management applications.",
            "Features echogenic markers for perfect visibility under ultrasound."
        ],
        features: [],
        benefits: []
    },
    {
        id: "regen-prp",
        categoryId: "regen",
        slug: "regen-prp-system",
        name: "60mL superdose PRP system",
        subtitle: "Advanced Platelet-Rich Plasma Concentration High Yield Kit",
        image: regpImg,
        description: [
            "Our PRP Pro System offers the highest concentration of platelets for regenerative therapies.",
            "Designed for ease of use and maximum sterility."
        ],
        features: [],
        benefits: ["Accelerates healing", "Reduces inflammation"]
    },
    {
        id: "epidurolysis-catheter",
        categoryId: "epidurolysis",
        slug: "epidurolysis-catheter-flex",
        name: "Catheters",
        subtitle: "Steerable Epidurolysis Catheter for Precise Adhesiolysis",
        image: raczCatImg,
        description: [
            "The Flexi-Cath 3000 provides unparalleled steering capability for targeted epidurolysis.",
            "Soft tip design minimizes tissue trauma."
        ],
        features: [],
        benefits: ["Precise targeting", "Improved patient comfort"]
    },
    {
        id: "epidurolysis-needles-essential",
        categoryId: "epidurolysis",
        slug: "epidurolysis-needles-essential",
        name: "Epidural needles",
        subtitle: "Essential needles for epidural access",
        image: essentialImg,
        description: [
            "Precision-engineered needles to facilitate safe and effective epidural access.",
            "Features depth markings and an ergonomic hub for enhanced procedural control."
        ],
        features: [],
        benefits: ["Safe access", "High visibility"]
    },
    {
        id: "epidurolysis-needles-day",
        categoryId: "epidurolysis",
        slug: "epidurolysis-needles-day",
        name: "Nerve block needles",
        subtitle: "Dependable access for nerve blocks",
        image: dayNeedleImg,
        description: [
            "Designed for targeted nerve block delivery with maximum accuracy.",
            "Available in multiple gauges and lengths to suit various anatomies."
        ],
        features: [],
        benefits: ["Smooth insertion", "Echogenic tip design"]
    },
    {
        id: "ozone-gen-x",
        categoryId: "ozone",
        slug: "ozone-gen-x-plus",
        name: "Ozone Gen X Plus",
        subtitle: "Medical Grade Ozone Generator for Clinical Applications",
        image: cryoDevice,
        description: [
            "Reliable and precise ozone generation for various medical applications.",
            "Digital control interface with built-in safety protocols."
        ],
        features: [],
        benefits: ["Consistent output", "Easy operation"]
    }
];
