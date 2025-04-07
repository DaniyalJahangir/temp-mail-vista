import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Copy, Download, Upload, Code, Zap } from 'lucide-react';
import MinifyOptions from '@/components/MinifyOptions';
import Footer from '@/components/Footer';

const Minifier = () => {
  const [code, setCode] = useState('');
  const [minifiedCode, setMinifiedCode] = useState('');
  const [selectedTab, setSelectedTab] = useState<'javascript' | 'css'>('javascript');
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sample code for JavaScript
  const sampleJSCode = `function calculateSum(a, b) {
  // This function adds two numbers
  console.log("Adding two numbers:", a, b);
  return a + b;
}

// Call the function with some values
const result = calculateSum(5, 10);
console.log("The result is:", result);

// Define a simple object
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
  hobbies: ["coding", "reading", "hiking"]
};`;

  // Sample code for CSS
  const sampleCSSCode = `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 20px;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn {
  display: inline-block;
  background-color: #4a6cf7;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3451b2;
}`;

  const minifyJavaScript = (code: string) => {
    // This is a simple minification logic
    // A production app would use a library like Terser
    try {
      // Remove comments
      let result = code.replace(/\/\/.*$/gm, '');
      result = result.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove whitespace
      result = result.replace(/\s+/g, ' ');
      
      // Remove whitespace around operators
      result = result.replace(/\s*([=+\-*/%&|^!<>?:;,(){}[\]])\s*/g, '$1');
      
      // Remove unnecessary semicolons
      result = result.replace(/;;+/g, ';');
      
      // Remove whitespace at the beginning and end
      result = result.trim();
      
      return result;
    } catch (error) {
      console.error('Error minifying JavaScript:', error);
      toast({
        title: "Minification Error",
        description: "There was an error processing your JavaScript.",
        variant: "destructive"
      });
      return code; // Return original if error
    }
  };

  const minifyCSS = (code: string) => {
    // This is a simple CSS minification logic
    try {
      // Remove comments
      let result = code.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove whitespace
      result = result.replace(/\s+/g, ' ');
      
      // Remove whitespace around operators and braces
      result = result.replace(/\s*([{}:;,])\s*/g, '$1');
      
      // Replace multiple semicolons
      result = result.replace(/;+/g, ';');
      
      // Remove unnecessary whitespace
      result = result.replace(/^\s+|\s+$/g, '');
      
      // Trim whitespace
      result = result.trim();
      
      return result;
    } catch (error) {
      console.error('Error minifying CSS:', error);
      toast({
        title: "Minification Error",
        description: "There was an error processing your CSS.",
        variant: "destructive"
      });
      return code; // Return original if error
    }
  };

  const handleMinify = () => {
    if (!code.trim()) {
      toast({
        title: "No Code",
        description: "Please enter some code to minify.",
      });
      return;
    }

    setProcessing(true);
    setTimeout(() => {
      try {
        if (selectedTab === 'javascript') {
          setMinifiedCode(minifyJavaScript(code));
        } else {
          setMinifiedCode(minifyCSS(code));
        }
        
        toast({
          title: "Success!",
          description: `${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} minified successfully.`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to minify code. Please check your input.",
          variant: "destructive"
        });
      } finally {
        setProcessing(false);
      }
    }, 800); // Simulate processing time
  };

  const handleLoadSample = () => {
    if (selectedTab === 'javascript') {
      setCode(sampleJSCode);
    } else {
      setCode(sampleCSSCode);
    }
    
    toast({
      title: "Sample Loaded",
      description: `Sample ${selectedTab} code has been loaded.`,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(minifiedCode);
    toast({
      title: "Copied!",
      description: "Minified code copied to clipboard.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([minifiedCode], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `minified.${selectedTab === 'javascript' ? 'js' : 'css'}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded",
      description: `Minified ${selectedTab} file has been downloaded.`,
    });
  };

  const handleTabChange = (value: 'javascript' | 'css') => {
    setSelectedTab(value);
    setCode('');
    setMinifiedCode('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 border-b bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-brand-600" />
            <h1 className="text-2xl font-bold text-gray-900">Minify Online</h1>
          </div>
          
          <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {selectedTab === 'javascript' ? 'JavaScript' : 'CSS'} Minifier
                  </h2>
                  <Button variant="outline" size="sm" onClick={handleLoadSample}>
                    <Code className="mr-2 h-4 w-4" />
                    Load Sample
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="input-code" className="block text-sm font-medium text-gray-700 mb-2">
                      Input Code
                    </Label>
                    <textarea
                      id="input-code"
                      ref={textareaRef}
                      className="font-mono w-full h-[400px] p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder={`Enter your ${selectedTab} code here...`}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="output-code" className="block text-sm font-medium text-gray-700 mb-2">
                      Minified Output
                    </Label>
                    <textarea
                      id="output-code"
                      className="font-mono w-full h-[400px] p-4 border border-gray-300 rounded-md resize-none bg-gray-50 focus:outline-none"
                      value={minifiedCode}
                      readOnly
                      placeholder="Minified code will appear here..."
                    />
                    
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleCopy} 
                        disabled={!minifiedCode}
                      >
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleDownload} 
                        disabled={!minifiedCode}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="w-full bg-brand-600 hover:bg-brand-700" 
                    onClick={handleMinify}
                    disabled={processing || !code.trim()}
                  >
                    {processing ? 'Processing...' : 'Minify Code'}
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <MinifyOptions type={selectedTab} />
              
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About {selectedTab === 'javascript' ? 'JavaScript' : 'CSS'} Minification</h3>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    {selectedTab === 'javascript' 
                      ? 'JavaScript minification reduces code size by removing unnecessary characters, whitespace, and comments without affecting functionality.'
                      : 'CSS minification reduces file size by removing unnecessary whitespace, comments, and optimizing the code structure.'}
                  </p>
                  <p className="mt-2">
                    Benefits include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Faster website loading</li>
                    <li>Reduced bandwidth usage</li>
                    <li>Improved performance</li>
                    <li>Better user experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Minifier;
