import { Snowflake, Circle, Droplets, Zap } from "lucide-react";
import cryoDevice from "@/assets/cryo-device.jpg";
import heroMedical from "@/assets/hero-medical.jpg";
import heroSurgery from "@/assets/hero-surgery.jpg";
import procedureHands from "@/assets/procedure-hands.jpg";

export interface Treatment {
    id: string;
    slug: string;
    title: string;
    description: string;
    icon: any;
    heroImage: string;
    summary: string;
    introText?: any;
    breakthroughCard?: any;
    clinicalOutcomes?: any;
    diagram?: any;
    videos?: any;
    articles?: any;
    socialPosts?: any;
}

export const treatments: Treatment[] = [
    {
        id: "cryoanalgesia",
        slug: "cryoanalgesia",
        title: "Cryoanalgesia",
        description: "Targeted nerve modulation for durable pain relief using controlled low temperatures.",
        summary: "A minimally invasive nerve modulation technique that temporarily interrupts sensory nerve conduction using controlled low temperatures, providing sustained pain relief.",
        icon: Snowflake,
        heroImage: cryoDevice,
    },
    {
        id: "epidural-balloon-decompression",
        slug: "epidural-balloon-decompression",
        title: "Epidural Balloon Decompression",
        description: "Minimally invasive treatment for lumbar spinal stenosis and radicular pain.",
        summary: "A nonsurgical interventional technique addressing persistent lumbar spinal stenosis, disc-related radicular pain, and epidural adhesions.",
        icon: Circle,
        heroImage: heroSurgery,
    },
    {
        id: "orthobiologic-therapies",
        slug: "orthobiologic-therapies",
        title: "Orthobiologic Therapies",
        description: "Harnessing the body's regenerative potential to support musculoskeletal repair.",
        summary: "Platelet-based and bone marrow–derived biologics supporting tissue healing through concentrated growth factors and regenerative cells.",
        icon: Droplets,
        heroImage: heroMedical,
    },
    {
        id: "pldd",
        slug: "pldd",
        title: "Percutaneous Laser Disc Decompression (PLDD)",
        description: "Precision energy delivery for contained disc pathology causing radicular symptoms.",
        summary: "A minimally invasive treatment using controlled laser energy to reduce intradiscal pressure and relieve neural compression from contained disc herniations.",
        icon: Zap,
        heroImage: procedureHands,
    },
];
