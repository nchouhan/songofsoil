export function Hero(){
      return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <div className="container">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
                Nature's rhythm, 
                <span className="block text-millet">grown with care.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-millet max-w-3xl mx-auto leading-relaxed mb-8">
                A forest-farm near Kanha National Park practicing regenerative, diverse, and natural farming.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-terracotta text-white font-semibold rounded-xl hover:bg-kanhaGreen transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Farm
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      )
    }