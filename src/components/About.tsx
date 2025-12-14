import { Target, Eye, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'Menjadi divisi teknologi terdepan yang mendorong inovasi dan transformasi digital di industri.'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Mengembangkan solusi teknologi berkualitas tinggi yang memberikan nilai nyata bagi pengguna dan organisasi.'
    },
    {
      icon: Award,
      title: 'Core Values',
      description: 'Inovasi, integritas, kolaborasi, dan keunggulan dalam setiap aspek pengembangan teknologi.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami adalah tim Maganger Technology Developer yang berdedikasi untuk menciptakan solusi teknologi inovatif. 
            Dengan fokus pada riset dan pengembangan, kami membangun produk digital yang mengubah cara kerja organisasi modern.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6">
                <value.icon size={24} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
