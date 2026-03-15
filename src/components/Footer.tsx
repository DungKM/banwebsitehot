import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-lg text-white">DevWeb<span className="text-blue-500">.</span></span>
          </div>
          
          <p className="text-sm text-center md:text-left">
            &copy; {currentYear} DevWeb. Thiết kế và Lập trình Website chuyên nghiệp.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Dịch vụ</a>
            <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
            <a href="#contact" className="hover:text-white transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
