import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 container mx-auto px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F59E0B]/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="flex flex-col md:flex-row md:items-center">
        <motion.div 
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Tu asesor financiero <span className="gradient-text">inteligente 24/7</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            Controla tus finanzas, salí de deudas y alcanzá tus metas con ayuda de IA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#demo" 
              className="button-hover w-full sm:w-auto bg-gradient-to-r from-[#F59E0B] to-[#F59E0B]/90 text-primary font-semibold py-3 px-8 rounded-full text-center"
            >
              Probar Asistente
            </a>
            
            <a 
              href="#download" 
              className="button-hover w-full sm:w-auto bg-secondary border border-[#F59E0B]/30 text-white font-semibold py-3 px-8 rounded-full text-center"
            >
              Descargar App
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-gradient rounded-3xl p-6 border border-gray-700/50 shadow-xl max-w-lg mx-auto">
            <div className="bg-secondary rounded-2xl p-4 overflow-hidden relative">
              <div className="absolute -top-14 -right-14 w-28 h-28 bg-[#F59E0B]/20 rounded-full filter blur-xl"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-white">Balance Financiero</h3>
                <button className="text-muted-foreground hover:text-white">
                  <i className="ri-more-2-fill"></i>
                </button>
              </div>
              
              <div className="bg-background/50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">Saldo total</span>
                  <span className="text-white font-semibold">$12,458.32</span>
                </div>
                
                <div className="h-2 bg-background rounded-full mb-3">
                  <div className="h-2 bg-gradient-to-r from-[#F59E0B] to-[#10B981] rounded-full w-3/4"></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground block">Ingresos</span>
                    <span className="text-[#10B981] font-medium">+$3,250</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Gastos</span>
                    <span className="text-red-400 font-medium">-$1,842</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Ahorros</span>
                    <span className="text-[#F59E0B] font-medium">$1,408</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="bg-secondary/30 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                      <i className="ri-arrow-up-line text-[#F59E0B]"></i>
                    </div>
                    <div>
                      <p className="text-white font-medium">Plan de ahorro</p>
                      <p className="text-muted-foreground text-sm">En progreso</p>
                    </div>
                  </div>
                  <span className="text-[#F59E0B] font-semibold">68%</span>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                      <i className="ri-bar-chart-fill text-[#10B981]"></i>
                    </div>
                    <div>
                      <p className="text-white font-medium">Presupuesto mensual</p>
                      <p className="text-muted-foreground text-sm">Activo</p>
                    </div>
                  </div>
                  <span className="text-[#10B981] font-semibold">$2,500</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
