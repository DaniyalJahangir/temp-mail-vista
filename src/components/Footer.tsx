
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 text-sm">
              © {currentYear} Minify Online. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-brand-600 text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-brand-600 text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-brand-600 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
