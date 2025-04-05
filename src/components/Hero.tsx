
import { Button } from '@/components/ui/button';
import { Mail, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-brand-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Temporary Email Service For 
              <span className="text-brand-600"> Maximum Privacy</span>
            </h1>
            <p className="text-xl text-gray-600 md:px-10">
              Generate disposable email addresses instantly. Protect your privacy, avoid spam, 
              and keep your main inbox clean without any registration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button size="lg" className="w-full bg-brand-600 hover:bg-brand-700 text-white">
              <Mail className="mr-2 h-5 w-5" />
              Generate Email Now
            </Button>
            <Button size="lg" variant="outline" className="w-full border-brand-300 text-brand-700">
              <Shield className="mr-2 h-5 w-5" /> 
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="flex items-center text-sm text-gray-500">
              <Shield className="h-5 w-5 mr-2 text-brand-600" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Mail className="h-5 w-5 mr-2 text-brand-600" />
              <span>No Registration</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-brand-600">
                <path d="M12 2v4"></path><path d="M12 18v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="m16.24 16.24 2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="m16.24 7.76 2.83-2.83"></path>
              </svg>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
