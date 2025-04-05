
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, Eye, RefreshCw, Lock, MonitorSmartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Anonymous Usage",
      description: "No personal information required. Use our service without providing any identifying details.",
      icon: <Shield className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Instant Creation",
      description: "Generate an email address in seconds. No registration, verification or setup needed.",
      icon: <Clock className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Privacy Protection",
      description: "Maintain privacy online by using temporary emails for sign-ups and verifications.",
      icon: <Eye className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Unlimited Addresses",
      description: "Create as many disposable email addresses as you need, whenever you need them.",
      icon: <RefreshCw className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Spam Prevention",
      description: "Avoid marketing emails and spam by using disposable addresses for one-time uses.",
      icon: <Lock className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Mobile Friendly",
      description: "Access your temporary inbox from any device with a responsive, user-friendly interface.",
      icon: <MonitorSmartphone className="h-10 w-10 text-brand-500" />
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Use TempMail Vista?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our disposable email service offers numerous benefits to protect your privacy and simplify your online experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
