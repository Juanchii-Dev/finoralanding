import { motion } from 'framer-motion';

export default function DownloadApp() {
  return (
    <section id="download" className="py-16 md:py-24 container mx-auto px-4 reveal">
      <motion.div 
        className="card-gradient rounded-3xl border border-gray-700/50 shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 lg:p-16 flex-1">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Descargá la app y <span className="gradient-text">llevá Finora</span> a donde vayas
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Accedé a todas las funcionalidades desde tu móvil, consulta en tiempo real y mantené el control de tus finanzas desde cualquier lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="button-hover flex items-center justify-center bg-secondary hover:bg-secondary/80 border border-gray-700/50 rounded-xl p-3 gap-2 transition-all"
              >
                <i className="ri-apple-fill text-3xl text-white"></i>
                <div className="text-left">
                  <p className="text-muted-foreground text-xs">Descargar en</p>
                  <p className="text-white font-semibold">App Store</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="button-hover flex items-center justify-center bg-secondary hover:bg-secondary/80 border border-gray-700/50 rounded-xl p-3 gap-2 transition-all"
              >
                <i className="ri-google-play-fill text-3xl text-white"></i>
                <div className="text-left">
                  <p className="text-muted-foreground text-xs">Descargar en</p>
                  <p className="text-white font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex-1 p-6 md:p-0">
            <div className="relative">
              <svg 
                className="mx-auto h-[500px] w-auto"
                viewBox="0 0 320 640" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Phone frame */}
                <rect x="10" y="10" width="300" height="620" rx="30" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                <rect x="20" y="20" width="280" height="600" rx="20" fill="#0F172A" />
                
                {/* Screen content */}
                <rect x="30" y="40" width="260" height="560" rx="12" fill="#0F172A" />
                
                {/* App header */}
                <rect x="30" y="40" width="260" height="60" rx="12" fill="#1E293B" />
                <text x="50" y="77" fontFamily="Arial" fontSize="18" fill="#FFFFFF" fontWeight="bold">
                  <tspan fill="#F59E0B">Fin</tspan><tspan fill="#10B981">ora</tspan>
                </text>
                <circle cx="260" cy="70" r="15" fill="#0F172A" />
                <circle cx="260" cy="70" r="10" fill="#1E293B" />
                
                {/* Balance card */}
                <rect x="40" y="120" width="240" height="140" rx="12" fill="#1E293B" />
                <text x="60" y="150" fontFamily="Arial" fontSize="16" fill="#FFFFFF" fontWeight="bold">Balance Total</text>
                <text x="60" y="180" fontFamily="Arial" fontSize="24" fill="#FFFFFF" fontWeight="bold">$12,458.32</text>
                
                {/* Progress bar */}
                <rect x="60" y="200" width="200" height="8" rx="4" fill="#0F172A" />
                <rect x="60" y="200" width="150" height="8" rx="4" fill="url(#gradientFill)" />
                
                {/* Menu items */}
                <rect x="40" y="280" width="110" height="100" rx="12" fill="#1E293B" opacity="0.7" />
                <circle cx="70" cy="320" r="20" fill="#0F172A" />
                <circle cx="70" cy="320" r="12" fill="#F59E0B" opacity="0.3" />
                <text x="110" y="325" fontFamily="Arial" fontSize="14" fill="#FFFFFF">Ahorros</text>
                
                <rect x="170" y="280" width="110" height="100" rx="12" fill="#1E293B" opacity="0.7" />
                <circle cx="200" cy="320" r="20" fill="#0F172A" />
                <circle cx="200" cy="320" r="12" fill="#10B981" opacity="0.3" />
                <text x="240" y="325" fontFamily="Arial" fontSize="14" fill="#FFFFFF">Metas</text>
                
                <rect x="40" y="400" width="110" height="100" rx="12" fill="#1E293B" opacity="0.7" />
                <circle cx="70" cy="440" r="20" fill="#0F172A" />
                <circle cx="70" cy="440" r="12" fill="#3B82F6" opacity="0.3" />
                <text x="110" y="445" fontFamily="Arial" fontSize="14" fill="#FFFFFF">Gastos</text>
                
                <rect x="170" y="400" width="110" height="100" rx="12" fill="#1E293B" opacity="0.7" />
                <circle cx="200" cy="440" r="20" fill="#0F172A" />
                <circle cx="200" cy="440" r="12" fill="#9333EA" opacity="0.3" />
                <text x="240" y="445" fontFamily="Arial" fontSize="14" fill="#FFFFFF">IA</text>
                
                {/* Bottom nav */}
                <rect x="30" y="540" width="260" height="60" rx="12" fill="#1E293B" />
                <circle cx="80" cy="570" r="6" fill="#F59E0B" />
                <circle cx="160" cy="570" r="6" fill="#FFFFFF" />
                <circle cx="240" cy="570" r="6" fill="#FFFFFF" />
                
                {/* Phone elements */}
                <rect x="120" y="604" width="80" height="5" rx="2.5" fill="#334155" />
                
                {/* Gradient for progress bar */}
                <defs>
                  <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#F59E0B]/30 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
