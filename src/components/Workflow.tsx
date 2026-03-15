import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Code2, MonitorPlay, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: '1. Tiếp nhận yêu cầu',
    desc: 'Trao đổi chi tiết về ý tưởng, tính năng, giao diện và thời gian hoàn thành mong muốn.'
  },
  {
    icon: <Lightbulb size={24} />,
    title: '2. Tư vấn giải pháp',
    desc: 'Đề xuất công nghệ phù hợp, chốt tính năng, báo giá và lên kế hoạch thực hiện.'
  },
  {
    icon: <Code2 size={24} />,
    title: '3. Thiết kế & Lập trình',
    desc: 'Tiến hành code giao diện và chức năng. Cập nhật tiến độ thường xuyên cho khách hàng.'
  },
  {
    icon: <MonitorPlay size={24} />,
    title: '4. Demo & Chỉnh sửa',
    desc: 'Gửi bản demo để khách hàng trải nghiệm và thực hiện các chỉnh sửa theo yêu cầu.'
  },
  {
    icon: <Rocket size={24} />,
    title: '5. Deploy & Bàn giao',
    desc: 'Đưa website lên server thực tế, cấu hình domain, bàn giao source code và tài liệu.'
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: '6. Hỗ trợ sau bàn giao',
    desc: 'Bảo hành lỗi code, hướng dẫn sử dụng và hỗ trợ giải đáp thắc mắc khi vận hành.'
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Quy trình làm việc</h2>
          <p className="text-lg text-slate-600">
            Minh bạch, rõ ràng và chuyên nghiệp trong từng giai đoạn thực hiện dự án.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200 mx-auto md:mx-0">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-center md:text-left">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
