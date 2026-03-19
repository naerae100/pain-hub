export interface ResearchItemType {
    id: number;
    title: string;
    author: string;
    journal: string;
    link?: string;
}

export const researchData: Record<string, ResearchItemType[]> = {
    cryo: [
        { id: 1, title: "Ultrasound-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture: A Randomized, Active controlled, Participant and Observer-masked Study", author: "John J. Finneran et al.", journal: "Anesthesiology, 2025" },
        { id: 2, title: "Bedside percutaneous cryoneurolysis technique for management of acute rib fracture pain in adult trauma patients", author: "C. Villalta et al.", journal: "Trauma Surgery & Acute Care Open, 2024" },
        { id: 3, title: "Percutaneous Cryoneurolysis for Pain Control After Rib Fractures in Older Adults", author: "S. Wang et al.", journal: "JAMA Surgery, 2024" },
        { id: 4, title: "Rib fracture management: A review of surgical stabilization, regional analgesia, and intercostal nerve cryoablation", author: "S. Stopenski et al.", journal: "Surgery in Practice and Science, 2022" }
    ],
    thoracic: [
        { id: 1, title: "US-guided percutaneous intercostal cryoanalgesia for multiple weeks of analgesia following mastectomy a case series", author: "Rodney A. Gabriel et al.", journal: "Korean Journal of Anesthesiology, 2020" },
        { id: 2, title: "US-guided percutaneous cryoanalgesia of intercostal nerves", author: "Matías Nicolás et al.", journal: "The Ultrasound Journal, 2022" },
        { id: 3, title: "Ultrasound-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture A Randomized, Active-controlled, Participant and Observer-masked Study", author: "Author Name Unavailable", journal: "Journal Name, 2023" },
        { id: 4, title: "Short communication: ultrasound-guided percutaneous cryoanalgesia of intercostal nerves for uniportal video-assisted thoracic surgery", author: "Matías Nicolás et al.", journal: "The Ultrasound Journal, 2022" }
    ],
    spasticity: [
        { id: 1, title: "Cryoneurolysis as a Novel Treatment for Spasticity, Associated Pain and Presumed Contracture", author: "Paul Winston, and Daniel Vincent", journal: "Advances in Rehabilitation Science and Practice, 2024" },
        { id: 2, title: "Percutaneous Cryoneurolysis as a Dynamic Treatment for Spasticity: A Case Series", author: "Clay C. Guynn", journal: "Archives of Rehabilitation Research and Clinical Translation, 2025" },
        { id: 3, title: "Cryoneurotomy as a Percutaneous Mini-invasive Therapy for the Treatment of the Spastic Limb: Case Presentation, Review of the Literature, and Proposed Approach for Use", author: "Paul Winston et al.", journal: "Archives of Rehabilitation Research and Clinical Translation, 2019" }
    ],
    additional: [
        { id: 1, title: "Cryoneurolysis for non-cancer knee pain: A scoping review", author: "Dion Diep et al.", journal: "Interventional Pain Medicine, 2023" },
        { id: 2, title: "Efficacy of Pre-operative Cryoneurolysis for Reducing Pain and Opioid Use in Patients Undergoing Knee Arthroplasty: A Systematic Review", author: "Pika Krištof Mirt", journal: "Open Access Macedonian Journal of Medical Sciences, 2025" },
        { id: 3, title: "Percutaneous freezing of sensory nerves prior to total knee arthroplasty", author: "Dasa et al.", journal: "The Knee, 2016" }
    ]
};
