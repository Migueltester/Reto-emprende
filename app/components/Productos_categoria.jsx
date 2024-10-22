
const listaDeProductos = [
    {
    
      nombre: "Molita",
      id: 1,
      href: '#',
      descripcion: "Bolso artesanal tejida por la comunidad Guna, usando fibras naturales y colores vibrantes.",
      precio: 35.00,
      comunidad: "Guna",
      categoria: "Artesanias",
      imageSrc: 'https://i.etsystatic.com/23336771/r/il/87a69d/4148261214/il_570xN.4148261214_cv7z.jpg',
      disponibilidad: true
    },
    {
      nombre: "Sombrero Pintao",
      id: 2,
      href: '#',
      descripcion: "Sombrero tradicional de fibra de caña, usado en celebraciones y danzas.",
      precio: 50.00,
      comunidad: "Embera-Wounaan",
      categoria: "Vestimenta",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Chaquira",
      id: 3,
      href: '#',
      descripcion: "Pulsera elaborada con cuentas de colores, típica de la comunidad Ngäbe-Buglé.",
      precio: 20.00,
      comunidad: "Ngäbe-Buglé",
      categoria: "Joyería",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: false
    },
    {
      nombre: "Nuchu",
      id: 4,
      href: '#',
      descripcion: "Figura tallada en madera que representa un espíritu protector, común en la cultura Guna.",
      precio: 45.00,
      comunidad: "Guna",
      categoria: "Escultura",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Balsería",
      id: 5,
      href: '#',
      descripcion: "Juego tradicional indígena de lanzamiento de palos, promovido por la comunidad Ngäbe-Buglé.",
      precio: 100.00,
      comunidad: "Ngäbe-Buglé",
      categoria: "Juegos Tradicionales",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Cesta Embera",
      id: 6,
      href: '#',
      descripcion: "Cesta tejida con fibras naturales, utilizada por la comunidad Embera para el transporte de alimentos.",
      precio: 60.00,
      comunidad: "Embera",
      categoria: "Artesanías",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: false
    },
    {
      nombre: "Chaquiras de Cuello",
      id: 7,
      href: '#',
      descripcion: "Collares tradicionales hechos a mano con cuentas pequeñas y patrones complejos.",
      precio: 30.00,
      comunidad: "Guna",
      categoria: "Joyería",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Tatuaje Temporal Embera",
      id: 8,
      href: '#',
      descripcion: "Tatuaje tradicional hecho a base de jagua, un tinte natural de la región.",
      precio: 15.00,
      comunidad: "Embera",
      categoria: "Arte Corporal",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Pollera Ngäbe",
      id: 9,
      href: '#',
      descripcion: "Vestido tradicional con colores brillantes y bordados únicos usados por las mujeres Ngäbe.",
      precio: 80.00,
      comunidad: "Ngäbe-Buglé",
      categoria: "Vestimenta",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: true
    },
    {
      nombre: "Tambor Emberá",
      id: 10,
      href: '#',
      descripcion: "Tambor artesanal utilizado en ceremonias y danzas tradicionales.",
      precio: 120.00,
      comunidad: "Embera",
      categoria: "Instrumentos Musicales",
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
      disponibilidad: false
    }
  ];
  

  
  export default function Productos() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Productos</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {listaDeProductos.map((listaDeProductos) => (
              <a key={listaDeProductos.id} href={listaDeProductos.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={listaDeProductos.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{listaDeProductos.nombre}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{listaDeProductos.precio}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  