import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function CustomWebsites() {
  const features = [
    "Tư vấn ý tưởng và luồng nghiệp vụ",
    "Thiết kế giao diện (UI/UX) độc quyền",
    "Lập trình tính năng theo yêu cầu đặc thù",
    "Tối ưu SEO và tốc độ tải trang",
    "Tích hợp thanh toán, API bên thứ ba",
    "Deploy lên Hosting/VPS/Cloud server"
  ];

  return (
    <section className="py-24 bg-blue-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coding custom website" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                    100%
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Cam kết</p>
                    <p className="font-bold text-slate-900">Theo đúng yêu cầu</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Website may đo riêng <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">cho từng nhu cầu</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dù bạn là một cửa hàng nhỏ cần trang bán hàng, một doanh nghiệp cần website giới thiệu công ty, hay một sinh viên đang cần hoàn thiện đồ án tốt nghiệp. Tôi đều có thể hỗ trợ bạn xây dựng một website hoàn chỉnh từ A đến Z.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">Website Doanh nghiệp</span>
              <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">Website Bán hàng</span>
              <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">Landing Page</span>
              <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">Đồ án Sinh viên</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
