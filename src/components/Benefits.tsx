import { motion } from 'motion/react';
import { MonitorSmartphone, Code2, HeartHandshake, PackageCheck, Clock, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: <MonitorSmartphone size={24} />,
    title: 'Giao diện đẹp, chuẩn responsive',
    desc: 'Hiển thị hoàn hảo trên mọi thiết bị từ điện thoại đến màn hình lớn.'
  },
  {
    icon: <Code2 size={24} />,
    title: 'Code sạch, dễ nâng cấp',
    desc: 'Cấu trúc code rõ ràng, tuân thủ best practices, dễ dàng bảo trì sau này.'
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Hỗ trợ tận tình',
    desc: 'Luôn lắng nghe và giải đáp mọi thắc mắc của khách hàng trong suốt quá trình làm việc.'
  },
  {
    icon: <PackageCheck size={24} />,
    title: 'Bàn giao đầy đủ',
    desc: 'Giao toàn bộ source code, database và tài sản liên quan khi hoàn thành.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Đúng tiến độ (Deadline)',
    desc: 'Cam kết hoàn thành dự án nhanh chóng, đúng thời hạn đã thỏa thuận.'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Hỗ trợ deploy & HDSD',
    desc: 'Đưa website lên mạng và hướng dẫn bạn cách quản trị chi tiết.'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden relative">
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-900"
            >
              Tại sao bạn nên chọn <span className="text-blue-400">dịch vụ của tôi?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg mb-8"
            >
              Tôi không chỉ viết code, tôi mang đến giải pháp tối ưu nhất cho nhu cầu của bạn với sự tận tâm và chuyên nghiệp.
            </motion.p>
            <motion.a 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25"
            >
              Trao đổi ngay
            </motion.a>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all cursor-default"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
