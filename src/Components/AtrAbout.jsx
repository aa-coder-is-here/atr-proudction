import Image from "next/image";

export default function AtrAbout() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 lg:px-20 py-16 bg-white">
      {/* Image Section */}
      <div className="relative max-w-md w-full">
        <Image
          src="/images/about.jpg"
          alt="Team working on strategy"
          width={600}
          height={700}
          className="rounded-xl w-full h-auto"
        />
        <div className="absolute -bottom-4 -right-4 bg-[#052855] text-white px-6 py-4 rounded-lg flex flex-col items-start shadow-lg">
          <span className="text-4xl font-bold leading-none">20</span>
          <span className="text-sm font-medium">Years of International Excellence</span>
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-2xl">
        <p className="text-sm text-gray-500 font-medium mb-2">About Naxtech</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 border-l-[8px] ps-2 border-blue-950">
          The result comes first. Not technology, budget or accepted practice.
        </h2>
        <p className="text-lg text-gray-800 font-medium mb-4">
          We focus on being honest, practical, and straight to the point.
        </p>
        <p className="text-gray-700 mb-4">
          Founded in 2005 in Reading (UK) Naxtech is a Digital Agency focusing on helping businesses grow, increase profitability, while attracting new customers via the effective use of technology and digital marketing.
        </p>
        <p className="text-gray-700 mb-4">
          We focus on being honest, practical, and straight to the point. The result comes first; not technology, budget or accepted practice.
        </p>
        <p className="text-gray-700 mb-6">
          We work across different market sectors, such as: pharmaceuticals, tourism/travel/ hospitality, financial services, insurance, recruitment, property, entertainment, retail, ecommerce and local government. Our services and experience in these sectors extends to both small and large organisations.
        </p>
        <button className="bg-white border border-gray-300 hover:border-gray-500 text-gray-900 font-medium px-6 py-3 rounded-md shadow-sm transition duration-300">
          See our work
        </button>
      </div>
    </section>
  );
}
