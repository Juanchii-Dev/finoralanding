import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Sample responses for demo
const responses = {
  "ahorro": "Para ahorrar más, te recomiendo seguir la regla 50/30/20: destina 50% a necesidades, 30% a deseos y 20% a ahorro. Basado en tu perfil, podrías incrementar tu ahorro en $320 mensuales reduciendo gastos en entretenimiento y comida fuera de casa.",
  "gasto": "Según el análisis de tus últimos 3 meses, estás gastando un 15% más que el promedio en tu categoría de ingresos. Las principales áreas donde podrías optimizar son: suscripciones ($85/mes) y delivery de comida ($240/mes).",
  "objetivo": "Para alcanzar tu objetivo de ahorro de $10,000, necesitarías ahorrar aproximadamente $415 mensuales durante 24 meses. Puedo ayudarte a crear un plan detallado que se ajuste a tu flujo de caja actual."
};

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
};

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "¡Hola! Soy tu asistente financiero Finora. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre ahorros, gastos o metas financieras.", 
      isUser: false 
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessageId = messages.length + 1;
    setMessages([...messages, { id: userMessageId, text: input, isUser: true }]);
    
    // Add typing indicator
    const typingId = userMessageId + 1;
    setMessages(prev => [...prev, { id: typingId, text: "", isUser: false, isTyping: true }]);
    
    // Get response based on keywords
    let response = "Lo siento, no entendí tu pregunta. ¿Podrías reformularla o preguntarme sobre ahorro, gastos o tus objetivos financieros?";
    
    if (input.toLowerCase().includes("ahorro") || input.toLowerCase().includes("ahorrar")) {
      response = responses.ahorro;
    } else if (input.toLowerCase().includes("gasto") || input.toLowerCase().includes("gastando")) {
      response = responses.gasto;
    } else if (input.toLowerCase().includes("objetivo") || input.toLowerCase().includes("meta") || input.toLowerCase().includes("necesito")) {
      response = responses.objetivo;
    }
    
    // Clear input
    setInput("");
    
    // Add bot response after delay
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === typingId 
            ? { ...msg, text: response, isTyping: false } 
            : msg
        )
      );
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 container mx-auto px-4 reveal">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
          Probá nuestro <span className="gradient-text">asistente inteligente</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Hacé cualquier pregunta financiera y recibí respuestas personalizadas al instante.
        </p>
      </motion.div>
      
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="card-gradient rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.1)]">
          <div className="bg-secondary p-4 flex justify-between items-center border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
                <i className="ri-robot-line text-[#F59E0B]"></i>
              </div>
              <div>
                <p className="text-white font-medium">Asistente Finora</p>
                <p className="text-muted-foreground text-xs">Activo ahora</p>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-white p-1">
              <i className="ri-information-line"></i>
            </button>
          </div>
          
          <div className="bg-background p-4 h-96 overflow-y-auto flex flex-col gap-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex items-start ${message.isUser ? 'self-end max-w-xs md:max-w-md' : 'max-w-xs md:max-w-md'}`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center mr-3 mt-1">
                    <i className="ri-robot-line text-[#F59E0B] text-sm"></i>
                  </div>
                )}
                
                <div className={`${
                  message.isUser 
                    ? 'bg-[#F59E0B]/20 rounded-2xl rounded-tr-none p-3 text-white' 
                    : 'bg-secondary rounded-2xl rounded-tl-none p-3 text-muted-foreground'
                }`}>
                  {message.isTyping ? (
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <p>{message.text}</p>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="bg-secondary p-4 border-t border-gray-700/50">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Hacé una pregunta financiera..." 
                className="flex-1 bg-background text-white rounded-full px-4 py-3 border border-gray-700/50 focus:outline-none focus:border-[#F59E0B]/50"
              />
              <button 
                onClick={handleSendMessage}
                className="bg-[#F59E0B] text-primary rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 hover:bg-[#F59E0B]/90 transition-colors"
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-muted-foreground text-xs">
                Ejemplo: "¿Cómo puedo ahorrar más?", "¿Estoy gastando mucho?", "¿Cuánto necesito para mi objetivo?"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
