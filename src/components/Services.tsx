import { Code, Lightbulb, Smartphone, Network } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Membangun aplikasi web modern yang responsif, cepat, dan scalable menggunakan teknologi terkini.'
    },
    {
      icon: Lightbulb,
      title: 'Research & Innovation',
      description: 'Melakukan riset mendalam dan eksperimen teknologi untuk menemukan solusi inovatif yang breakthrough.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Mengembangkan aplikasi mobile native dan cross-platform yang user-friendly dan performant.'
    },
    {
      icon: Network,
      title: 'System Architecture',
      description: 'Merancang arsitektur sistem yang robust, scalable, dan maintainable untuk jangka panjang.'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Layanan komprehensif untuk mendukung transformasi digital dan pengembangan teknologi organisasi Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2563eb]/20 transition-all hover:shadow-xl hover:shadow-[#2563eb]/5"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/0 to-[#2563eb]/0 group-hover:from-[#2563eb]/5 group-hover:to-transparent rounded-2xl transition-all"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#2563eb]/20">
                  <service.icon size={28} className="text-white" />
                </div>
                
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
