import { motion } from 'framer-motion';

const comparisonData = {
  traditional: {
    title: "Métodos tradicionales",
    icon: "ri-book-mark-line",
    items: [
      "Procesos manuales que consumen tiempo",
      "Consejos genéricos que no se ajustan a tu realidad",
      "Planificación estática y rígida",
      "Herramientas desconectadas entre sí"
    ],
    iconStyle: "text-red-400",
    itemIcon: "ri-close-circle-line"
  },
  banks: {
    title: "Bancos y apps financieras",
    icon: "ri-bank-line",
    items: [
      "Tracking limitado a sus propios productos",
      "Recomendaciones sesgadas hacia sus servicios",
      "Funcionalidad básica sin personalización profunda",
      "Interfaces complejas y poco intuitivas"
    ],
    iconStyle: "text-yellow-400",
    itemIcon: "ri-error-warning-line"
  },
  finora: {
    title: "Finora",
    icon: "ri-rocket-line",
    items: [
      "Automatización inteligente que ahorra tiempo",
      "Consejos 100% personalizados con IA avanzada",
      "Estrategias adaptativas que evolucionan contigo",
      "Ecosistema integrado para todas tus finanzas",
      "Disponible 24/7 para responder todas tus consultas"
    ],
    iconStyle: "text-[#10B981]",
    itemIcon: "ri-check-line",
    highlightBg: true
  }
};

export default function WhyFinora() {
  return (
    <section id="why-finora" className="py-16 md:py-24 container mx-auto px-4 reveal">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          ¿Por qué elegir <span className="gradient-text">Finora</span>?
        </h2>
        <p className="text-muted-foreground text-lg">
          Mientras que otros métodos te complican la vida, Finora simplifica tu camino hacia el éxito financiero.
        </p>
      </motion.div>
      
      <motion.div 
        className="card-gradient rounded-2xl p-8 border border-gray-700/50 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(comparisonData).map(([key, section], index) => (
            <div 
              key={key}
              className={`${
                section.highlightBg ? 
                'bg-gradient-to-br from-secondary to-background border border-[#F59E0B]/20' : 
                'bg-background/60'
              } rounded-xl p-5`}
            >
              <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center">
                <i className={`${section.icon} text-[#F59E0B] mr-2`}></i>
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className={`${section.itemIcon} ${section.iconStyle} mt-1 mr-2 ${key === 'finora' ? 'text-xl' : ''}`}></i>
                    <span className={key === 'finora' ? 'text-white' : 'text-muted-foreground'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
