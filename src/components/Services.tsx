import { motion } from 'motion/react';
import { Layout, Code, Server, GraduationCap, FileText, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-white" size={28} />,
    title: 'Thiết kế website theo yêu cầu',
    description: 'Lên ý tưởng và thiết kế giao diện UI/UX hiện đại, chuẩn responsive, phù hợp với thương hiệu của bạn.',
    bg: 'bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-200/50'
  },
  {
    icon: <Code className="text-white" size={28} />,
    title: 'Lập trình website hoàn chỉnh',
    description: 'Code frontend & backend với các công nghệ mới nhất. Đảm bảo hiệu năng cao và bảo mật tốt.',
    bg: 'bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-200/50'
  },
  {
    icon: <Server className="text-white" size={28} />,
    title: 'Deploy website cho khách',
    description: 'Đưa website lên môi trường internet (hosting, VPS, cloud) và cấu hình tên miền hoàn chỉnh.',
    bg: 'bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-200/50'
  },
  {
    icon: <GraduationCap className="text-white" size={28} />,
    title: 'Nhận làm đồ án website',
    description: 'Hỗ trợ sinh viên làm đồ án môn học, đồ án tốt nghiệp với source code sạch, dễ hiểu và đúng yêu cầu.',
    bg: 'bg-gradient-to-br from-cyan-500 to-teal-400 shadow-lg shadow-cyan-200/50'
  },
  {
    icon: <FileText className="text-white" size={28} />,
    title: 'Hỗ trợ viết báo cáo / tài liệu',
    description: 'Viết tài liệu mô tả hệ thống, hướng dẫn sử dụng, báo cáo đồ án chi tiết và chuyên nghiệp.',
    bg: 'bg-gradient-to-br from-sky-500 to-blue-500 shadow-lg shadow-sky-200/50'
  },
  {
    icon: <Wrench className="text-white" size={28} />,
    title: 'Bảo trì & Nâng cấp',
    description: 'Sửa lỗi, tối ưu tốc độ, thêm tính năng mới cho website đang hoạt động của bạn.',
    bg: 'bg-gradient-to-br from-indigo-400 to-violet-500 shadow-lg shadow-indigo-200/50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dịch vụ chuyên nghiệp</h2>
          <p className="text-lg text-slate-600">
            Cung cấp giải pháp toàn diện từ khâu lên ý tưởng, thiết kế, lập trình đến vận hành website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all group bg-white cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
