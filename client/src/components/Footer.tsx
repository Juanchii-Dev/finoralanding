export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-secondary border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <a href="#" className="flex items-center font-display font-bold text-3xl text-white mb-4">
              <span className="text-[#F59E0B]">Fin</span><span className="text-[#10B981]">ora</span>
            </a>
            <p className="text-muted-foreground mb-4">
              Tu asistente financiero inteligente disponible 24/7 para ayudarte a alcanzar tus metas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <i className="ri-facebook-circle-line text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <i className="ri-linkedin-box-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Prensa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Guías financieras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Calculadoras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Comunidad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Seguridad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">© 2023 Finora. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Español</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
