
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const generateRandomEmail = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let username = '';
  const length = 8 + Math.floor(Math.random() * 8); // Random length between 8-15

  for (let i = 0; i < length; i++) {
    username += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const domains = ['tempmail.vista', 'tempmailbox.com', 'disposable.mail', 'viewmail.temp'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  
  return `${username}@${domain}`;
};

const EmailGenerator = () => {
  const [email, setEmail] = useState(generateRandomEmail());
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The temporary email has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const regenerateEmail = () => {
    setEmail(generateRandomEmail());
    setCopied(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-0 overflow-hidden">
          <CardHeader className="gradient-bg text-white text-center py-6">
            <CardTitle className="text-2xl font-bold">Your Temporary Email</CardTitle>
            <CardDescription className="text-white/80">
              Use this disposable email address to protect your privacy
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="relative">
              <Input 
                value={email} 
                readOnly 
                className="pr-24 font-mono text-lg h-14 border-2 border-gray-200 focus:border-brand-400"
              />
              <div className="absolute right-1 top-1">
                <Button
                  className={`h-12 ${copied ? 'bg-green-600 hover:bg-green-700' : 'bg-brand-600 hover:bg-brand-700'}`}
                  onClick={copyToClipboard}
                >
                  {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button 
                variant="outline" 
                className="border-2 border-brand-300 text-brand-700 hover:bg-brand-50 h-12"
                onClick={regenerateEmail}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate New Email
              </Button>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                <p>This email will be active for 10 minutes. All messages will appear below.</p>
              </div>
              
              <div className="rounded-lg bg-gray-100 p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="text-gray-400 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <p className="text-lg font-medium">No messages yet</p>
                  <p className="text-sm">Emails received will appear here</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailGenerator;
