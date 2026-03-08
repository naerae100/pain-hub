import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 pb-20">
            <div className="section-container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-blue-950 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Common questions about Cryoanalgesia and our interventional procedures.
                    </p>
                </div>

                <div className="bg-secondary/30 rounded-[2.5rem] p-8 md:p-12 mb-16 border border-border">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                How does cryoanalgesia work?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                Cryoanalgesia involves inserting a thin probe near a peripheral nerve and applying extremely cold temperatures (typically around -70°C). This temporarily disrupts the nerve's ability to transmit pain signals, while preserving the structural integrity of the nerve, allowing it to regenerate over time.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                How long does the pain relief last?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                Pain relief typically lasts anywhere from 6 to 12 months, depending on the individual's rate of nerve regeneration. The procedure can be safely repeated if the pain returns.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                What types of pain are best treated with cryoanalgesia?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                It is most effective for localized nerve pain (neuropathic pain), including post-surgical pain (e.g., knee or hernia repair), occipital neuralgia, and certain types of joint pain where sensory nerves can be targeted.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                What are the risks or side effects?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                Risks are minimal but may include temporary bruising, swelling, or localized skin numbness. Unlike heat-based ablation, there is virtually no risk of neuritis (nerve inflammation) or neuroma formation.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                How is cryoanalgesia different from radiofrequency ablation (RFA)?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                RFA uses heat to destroy nerve tissue, which can sometimes cause scarring or painful neuromas. Cryoanalgesia uses cold to temporarily "stun" the nerve, leaving the connective tissue intact for complete, healthy regeneration.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                Can the procedure be done under ultrasound guidance?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                Yes, we primarily use high-resolution ultrasound guidance to visualize the nerve in real-time, ensuring precise probe placement and maximizing safety and efficacy.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7" className="border-b-0">
                            <AccordionTrigger className="bg-white px-6 rounded-2xl text-lg font-bold text-blue-900 hover:text-primary hover:no-underline shadow-sm hover:shadow-md transition-all">
                                Why Choose the CRYO-S Painless?
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pt-4 text-muted-foreground leading-relaxed text-base">
                                The CRYO-S Painless is a state-of-the-art device allowing for precise temperature control and probe selection, making it versatile for treating nerves of various sizes and locations with minimal patient discomfort.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Do you still have questions?</h3>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 font-bold shadow-lg hover:shadow-xl transition-all">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
