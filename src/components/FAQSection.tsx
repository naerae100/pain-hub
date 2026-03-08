import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does cryoanalgesia work?",
    answer: "Cryoanalgesia uses extreme cold (around -70°C) applied near a peripheral nerve to temporarily disrupt pain transmission while preserving nerve structure. This provides effective pain relief without permanent nerve damage.",
  },
  {
    question: "How long does pain relief last?",
    answer: "Typically 3–12 months, with some cases reporting relief up to 20 months. The duration depends on factors including the treated nerve, patient physiology, and the specific condition being treated.",
  },
  {
    question: "What pain types are best treated with cryoanalgesia?",
    answer: "Cryoanalgesia is particularly effective for chronic neuropathic pain, postoperative pain (especially after thoracic surgery), and podiatric pain conditions. It's also used for intercostal neuralgia and various peripheral nerve conditions.",
  },
  {
    question: "What are the risks of cryoanalgesia?",
    answer: "The risks are minimal compared to other interventional procedures. Most commonly reported side effects are temporary numbness at the treatment site and minor bruising, which typically resolve within days to weeks.",
  },
  {
    question: "How does cryoanalgesia compare to radiofrequency ablation (RFA)?",
    answer: "Unlike RFA, cryoanalgesia preserves the nerve's structural integrity (epineurium), which allows for regeneration and has a lower risk of neuroma formation. This makes it particularly suitable for treating superficial nerves.",
  },
  {
    question: "What imaging guidance is used?",
    answer: "Cryoanalgesia procedures can be performed under ultrasound or fluoroscopic guidance. Ultrasound is often preferred for peripheral nerves as it allows real-time visualization of the probe, nerve, and ice ball formation.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-container section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 mb-6">
            Frequently asked questions.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Clinical information about cryoanalgesia for medical professionals.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-7 overflow-hidden transition-all duration-500 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-6 hover:no-underline text-lg md:text-xl [&[data-state=open]>svg]:rotate-45 [&>svg]:transition-transform [&>svg]:duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-7 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
