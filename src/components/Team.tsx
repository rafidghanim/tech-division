import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-colors -mr-6 group"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-colors -ml-6 group"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function Team() {
  const teamMembers = [
    {
      name: 'Alexander Chen',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzODM0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Sarah Johnson',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1573495804669-ec82ad00f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2h8ZW58MXx8fHwxNzY1NDM3NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'David Martinez',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTM4Mzg4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Emily Wong',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1573495804669-ec82ad00f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2h8ZW58MXx8fHwxNzY1NDM3NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Michael Roberts',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc2NTQ1ODI5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Jessica Thompson',
      role: 'Maganger Technology Developer',
      image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTM4NTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim profesional yang berpengalaman dan berdedikasi untuk menghadirkan solusi teknologi terbaik.
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative px-8">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#2563eb]/20">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-colors">
                          <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-colors">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}