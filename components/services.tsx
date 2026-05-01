import { Clock, Flower2 } from "lucide-react"

const cats = [{"name": "Masajes", "items": [{"name": "Masaje Relajante", "price": "Gs. 150.000", "desc": "Masaje suave para liberar tensiones", "duration": "60 min"}, {"name": "Masaje Descontracturante", "price": "Gs. 180.000", "desc": "Masaje profundo para nudos musculares", "duration": "60 min"}, {"name": "Masaje con Piedras Calientes", "price": "Gs. 250.000", "desc": "Piedras volcánicas para relajación profunda", "duration": "75 min"}]}, {"name": "Tratamientos Faciales", "items": [{"name": "Limpieza Facial", "price": "Gs. 100.000", "desc": "Limpieza profunda con productos naturales", "duration": "45 min"}, {"name": "Hidratación Facial", "price": "Gs. 130.000", "desc": "Tratamiento hidratante revitalizante", "duration": "45 min"}, {"name": "Anti-Edad", "price": "Gs. 200.000", "desc": "Tratamiento reafirmante y nutritivo", "duration": "60 min"}]}, {"name": "Corporales", "items": [{"name": "Exfoliación Corporal", "price": "Gs. 180.000", "desc": "Exfoliación de cuerpo completo", "duration": "50 min"}, {"name": "Envoltura Corporal", "price": "Gs. 220.000", "desc": "Envoltura nutritiva e hidratante", "duration": "60 min"}, {"name": "Paquete Bienestar", "price": "Gs. 350.000", "desc": "Masaje + facial + exfoliación", "duration": "2 horas"}]}]

export function Services() {
  return (
    <section className="py-20 bg-background" id="servicios">
      <div className="container-page">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-2">Nuestros Servicios</h2>
        <p className="text-center text-foreground-light mb-12 max-w-xl mx-auto">Renová tu cuerpo y mente</p>
        <div className="space-y-10">
          {cats.map((cat: any, ci: number) => (
            <div key={ci}>
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Flower2 className="w-5 h-5 text-secondary" /> {cat.name}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc: any, si: number) => (
                  <div key={si} className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:border-secondary/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{svc.name}</h4>
                      <span className="text-secondary font-bold whitespace-nowrap ml-2">{svc.price}</span>
                    </div>
                    <p className="text-sm text-foreground-light">{svc.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground-muted">
                      <Clock className="w-3 h-3" /> {svc.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
