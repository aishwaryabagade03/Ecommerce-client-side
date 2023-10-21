import coll1 from "../assets/Home/collection1.jpg"
import coll2 from "../assets/Home/collection2.jpg"
import coll3 from "../assets/Home/collection3.jpg"
import coll4 from "../assets/Home/collection4.jpg"
import coll5 from "../assets/Home/collection5.jpg"
import coll6 from "../assets/Home/collection6.jpg"

const callouts = [
  {
    name: 'Rings',
    imageSrc: coll1,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Hoops',
    imageSrc: coll2,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Necklaces',
    imageSrc: coll3,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Necklaces',
    imageSrc: coll5,
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Bracelets',
    imageSrc: coll6,
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Earrings',
    imageSrc: coll4,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
 
]

export default function Collection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl text-gray-900 mb-12">NEW COLLECTIONS</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 h-96">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className=" w-full object-cover object-center"
                    height={300}
                  />
                </div>
                <h3 className="my-6  text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
