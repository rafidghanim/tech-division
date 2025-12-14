import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563eb]/10 rounded-full mb-6">
              <Sparkles size={16} className="text-[#2563eb]" />
              <span className="text-[#2563eb]">Tech Division</span>
            </div>

            <h1 className="text-gray-900 mb-6">
              Empowering Future Technology
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Divisi pengembangan teknologi yang fokus pada inovasi, riset, dan solusi digital modern untuk masa depan yang lebih baik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-all shadow-lg shadow-[#2563eb]/20 hover:shadow-xl hover:shadow-[#2563eb]/30 flex items-center justify-center gap-2 group">
                Explore Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              {/* Abstract Tech Shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Outer ring */}
                  <div className="absolute inset-0 border-2 border-[#2563eb]/20 rounded-full animate-spin-slow"></div>
                  
                  {/* Middle ring */}
                  <div className="absolute inset-8 border-2 border-[#2563eb]/30 rounded-full animate-spin-reverse"></div>
                  
                  {/* Inner circle with gradient */}
                  <div className="absolute inset-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-full flex items-center justify-center shadow-2xl shadow-[#2563eb]/30">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/10 to-transparent"></div>
                  </div>

                  {/* Floating dots */}
                  <div className="absolute top-8 right-8 w-4 h-4 bg-[#2563eb] rounded-full animate-bounce"></div>
                  <div className="absolute bottom-12 left-12 w-3 h-3 bg-[#2563eb]/60 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#2563eb]/40 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
