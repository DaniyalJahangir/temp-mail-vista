
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Generate an Email",
      description: "Click the 'Generate Email' button to instantly create a disposable email address.",
      color: "from-pink-500 to-purple-500"
    },
    {
      number: "02",
      title: "Use the Email",
      description: "Copy the email address and use it for sign-ups, verifications, or any other services.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      number: "03",
      title: "Receive Messages",
      description: "All incoming messages will be displayed in your temporary inbox immediately.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      number: "04",
      title: "Discard When Done",
      description: "Once you're done, simply close the browser or generate a new email to discard the old one.",
      color: "from-blue-500 to-teal-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Using TempMail Vista is simple and straightforward. Follow these easy steps:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 overflow-hidden shadow-md">
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>
              <CardContent className="pt-6">
                <span className="inline-block font-bold text-5xl text-gray-200 mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
