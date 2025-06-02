import Image from "next/image";

const portfolioItems = [
  {
    title: "Servier Laboratories - SEO",
    description: "View our Case Studies",
    image: "/images/13.jpg",
    link: "#",
  },
  {
    title: "Adidas Hello World",
    description: "Sports Campaign Showcase",
    image: "/images/7.jpg",
    link: "#",
  },
  {
    title: "La Veranda Resort",
    description: "Luxury Travel Web Design",
    image: "/images/2.jpg",
    link: "#",
  },
  {
    title: "Target Jobs",
    description: "Graduate Opportunities Portal",
    image: "/images/10.jpg",
    link: "#",
  },
  {
    title: "eMarketing Canada",
    description: "Pharma Marketing Campaign",
    image: "/images/6.jpg",
    link: "#",
  },
  {
    title: "Market Chemica",
    description: "Chemical Industry Consulting",
    image: "/images/15.jpg",
    link: "#",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          See some of our <span className="text-blue-600 underline decoration-2">work</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-6">
        {portfolioItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center px-4">
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white text-sm font-light">{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
