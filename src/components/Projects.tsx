import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Printeby',
    type: 'Website Thương mại điện tử',
    desc: 'Nền tảng thương mại điện tử chuyên biệt, cung cấp trải nghiệm mua sắm mượt mà và quản lý sản phẩm hiệu quả.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    demoUrl: 'https://printeby.com/'
  },
  {
    title: 'Ommicom',
    type: 'Website Doanh nghiệp',
    desc: 'Hệ thống website doanh nghiệp với giao diện hiện đại, quản trị nội dung linh hoạt và tối ưu trải nghiệm người dùng.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['Laravel', 'Vue.js', 'Tailwind'],
    demoUrl: 'https://ommicom.com/'
  },
  {
    title: 'Printcart',
    type: 'Nền tảng Web-to-Print',
    desc: 'Giải pháp toàn diện cho ngành in ấn trực tuyến, tích hợp công cụ thiết kế và quản lý đơn hàng chuyên sâu.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tags: ['Next.js 14', 'Laravel', 'React'],
    demoUrl: 'https://printcart.com/'
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
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={16} />
                    Xem Website
                  </a>
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
