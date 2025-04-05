
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How long does a temporary email last?",
      answer: "Our temporary emails are active for 10 minutes by default. After this period, the email address and all messages will be automatically deleted from our servers."
    },
    {
      question: "Is this service completely free?",
      answer: "Yes, TempMail Vista is 100% free to use with no hidden fees or premium features. We offer all functionality without any payment requirements."
    },
    {
      question: "Can I receive attachments in my temporary inbox?",
      answer: "Yes, you can receive emails with attachments. However, please note that there is a size limit of 10MB for attachments, and certain file types may be blocked for security reasons."
    },
    {
      question: "Is using a temporary email legal?",
      answer: "Yes, using temporary email services is legal. However, some websites may prohibit the use of disposable email addresses in their terms of service. Please use our service responsibly and in accordance with the terms of the services you're signing up for."
    },
    {
      question: "Can I send emails from my temporary address?",
      answer: "No, our service currently only supports receiving emails. You cannot send emails from the temporary email addresses generated on our platform."
    },
    {
      question: "Are my emails private and secure?",
      answer: "We take privacy seriously. Emails are stored only for the duration of your session (10 minutes) and are not accessible to anyone else. However, as with any temporary email service, you should not use it for sensitive or confidential communications."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Have questions about TempMail Vista? Find answers to common queries below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
