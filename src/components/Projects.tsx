import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'Platform analitik real-time dengan visualisasi data interaktif dan reporting otomatis.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY1NDE5NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Charts']
    },
    {
      title: 'Mobile Banking App',
      description: 'Aplikasi mobile banking dengan UX modern, keamanan tinggi, dan fitur lengkap.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Firebase', 'Security']
    },
    {
      title: 'Tech Workspace System',
      description: 'Sistem manajemen workspace terintegrasi untuk kolaborasi tim yang lebih efektif.',
      image: 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc2NTQ0NjIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Node.js', 'PostgreSQL', 'WebSocket']
    },
    {
      title: 'AI Research Platform',
      description: 'Platform riset AI dengan tools untuk training, testing, dan deployment model ML.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY1NDE5NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'TensorFlow', 'AWS']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce full-stack dengan payment gateway dan inventory management.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY1NDE2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      title: 'IoT Monitoring System',
      description: 'Sistem monitoring IoT untuk smart building dengan real-time data processing.',
      image: 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc2NTQ0NjIyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['MQTT', 'InfluxDB', 'Grafana']
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcase proyek-proyek teknologi yang telah kami kembangkan dengan standar kualitas tinggi.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#2563eb]/20"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight size={20} className="text-[#2563eb]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
