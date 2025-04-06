import { motion } from 'framer-motion';

const features = [
  {
    icon: "ri-line-chart-line",
    color: "bg-[#F59E0B]/20",
    textColor: "text-[#F59E0B]",
    title: "Diagnóstico financiero automático",
    description: "Análisis detallado de tus ingresos, gastos y hábitos financieros para crear un plan personalizado."
  },
  {
    icon: "ri-funds-box-line",
    color: "bg-[#10B981]/20",
    textColor: "text-[#10B981]",
    title: "Simulador de metas de ahorro",
    description: "Visualizá el camino hacia tus metas financieras con simulaciones precisas y ajustes inteligentes."
  },
  {
    icon: "ri-robot-line",
    color: "bg-blue-400/20",
    textColor: "text-blue-400",
    title: "Consejos personalizados por IA",
    description: "Recomendaciones adaptadas a tu perfil financiero, objetivos y patrones de gastos únicos."
  },
  {
    icon: "ri-bank-card-line",
    color: "bg-purple-400/20",
    textColor: "text-purple-400",
    title: "Plan de pago de deudas inteligente",
    description: "Estrategias optimizadas para eliminar deudas de forma rápida y eficiente, ahorrando en intereses."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 container mx-auto px-4 reveal">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          Funcionalidades que <span className="gradient-text">transforman tus finanzas</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Finora te brinda herramientas inteligentes para tomar el control de tu dinero y alcanzar 
          tus objetivos financieros.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="card-gradient rounded-2xl p-6 border border-gray-700/50 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
              <i className={`${feature.icon} text-3xl ${feature.textColor}`}></i>
            </div>
            <h3 className="font-display font-semibold text-xl text-white mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
