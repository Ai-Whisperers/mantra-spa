import { Clock, Scissors } from "lucide-react";

const cats = [
  {
    "category": "Masajes",
    "items": [
      {
        "name": "Masaje Relajante",
        "price": "Gs. 120.000",
        "desc": "Masaje corporal completo con aceites esenciales",
        "duration": "60 min"
      },
      {
        "name": "Masaje Descontracturante",
        "price": "Gs. 150.000",
        "desc": "Para aliviar tensiones musculares profundas",
        "duration": "60 min"
      },
      {
        "name": "Masaje con Piedras Calientes",
        "price": "Gs. 180.000",
        "desc": "Terapia con piedras volc\u00e1nicas",
        "duration": "75 min"
      }
    ]
  },
  {
    "category": "Tratamientos Facial",
    "items": [
      {
        "name": "Limpieza Facial Profunda",
        "price": "Gs. 100.000",
        "desc": "Con extracci\u00f3n y mascarilla",
        "duration": "45 min"
      },
      {
        "name": "Hidrataci\u00f3n Facial",
        "price": "Gs. 130.000",
        "desc": "Tratamiento revitalizante",
        "duration": "60 min"
      },
      {
        "name": "Radiofrecuencia Facial",
        "price": "Gs. 200.000",
        "desc": "Reafirmante y anti-edad",
        "duration": "60 min"
      }
    ]
  },
  {
    "category": "Corporal",
    "items": [
      {
        "name": "Exfoliaci\u00f3n Corporal",
        "price": "Gs. 90.000",
        "desc": "Con sales marinas y aceites",
        "duration": "45 min"
      },
      {
        "name": "Envoltura Corporal",
        "price": "Gs. 150.000",
        "desc": "Desintoxicante y nutritiva",
        "duration": "60 min"
      },
      {
        "name": "Hidromasaje",
        "price": "Gs. 80.000",
        "desc": "Ba\u00f1o de hidromasaje relajante",
        "duration": "30 min"
      }
    ]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-primary mb-2">Nuestros Servicios</h2>
        <p className="text-center text-foreground-light mb-12 max-w-xl mx-auto">Transformamos tu estilo con profesionalismo y dedicación</p>
        <div className="space-y-10">
          {cats.map((cat: any, ci: number) => (
            <div key={ci}>
              <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-secondary" /> {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((svc: any, si: number) => (
                  <div key={si} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{svc.name}</h4>
                      <span className="text-secondary font-bold whitespace-nowrap ml-2">{svc.price}</span>
                    </div>
                    <p className="text-sm text-foreground-light">{svc.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground-light">
                      <Clock className="w-3 h-3" /> {svc.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/595986630185?text=Hola!%20Quiero%20agendar%20una%20sesi%C3%B3n%20en%20Mantra%20Spa" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-md">
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
