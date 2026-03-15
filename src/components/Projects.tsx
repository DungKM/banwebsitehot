import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Shop',
    type: 'Website Bán hàng',
    desc: 'Hệ thống bán hàng trực tuyến với giỏ hàng, thanh toán VNPay, quản lý đơn hàng và dashboard admin.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind']
  },
  {
    title: 'Corporate Portfolio',
    type: 'Website Doanh nghiệp',
    desc: 'Trang web giới thiệu công ty kiến trúc, hiển thị các dự án đã làm, tin tức và form liên hệ.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js', 'Framer Motion', 'CMS']
  },
  {
    title: 'Quản lý Thư viện',
    type: 'Đồ án Sinh viên',
    desc: 'Hệ thống quản lý mượn trả sách, quản lý độc giả, thống kê báo cáo cho thư viện trường học.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['Vue.js', 'Express', 'MySQL']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dự án tiêu biểu</h2>
          <p className="text-lg text-slate-600">
            Một số dự án website tôi đã thực hiện cho khách hàng và sinh viên.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 rounded-full shadow-sm">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <ExternalLink size={16} />
                    Xem Demo
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors" title="Source Code">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Và nhiều dự án khác. Liên hệ để xem thêm <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
