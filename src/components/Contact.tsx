import { motion } from 'motion/react';
import { MessageCircle, Facebook, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"
          ></motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng bắt đầu dự án?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Hãy liên hệ với tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho website của bạn. Tôi luôn sẵn sàng hỗ trợ!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://zalo.me/0123456789" // Thay số Zalo ở đây
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <MessageCircle size={24} />
                Chat qua Zalo
              </a>
              <a 
                href="https://facebook.com/your-profile" // Thay link FB ở đây
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-800/50 hover:bg-blue-800/80 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
              >
                <Facebook size={24} />
                Nhắn tin Facebook
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-blue-500/50 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>0123.456.789</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@yourdomain.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
