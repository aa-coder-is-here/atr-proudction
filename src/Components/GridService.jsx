const GridServiceSection = () => {
  const sections = [
    {
      subtitle: "Bespoke and Tailor-made",
      title: "Web Development",
      content:
        "Our web development services include websites, system integrations, and custom applications using Microsoft and IBM tech stacks.",
      list: [
        "Microsoft: ASP.NET, .NET Core, SQL Server",
        "IBM: Lotus Domino, WebSphere",
        "Also: Adobe CQ5, PHP, Mobile App (Android/iOS)",
      ],
      image: "/images/protolio.jpg",
      buttonText: "View our Presentation Deck",
    },
    {
      subtitle: "Multi-lingual and Industry-Agnostic",
      title: "Digital Marketing",
      content:
        "From Organic SEO to automation and paid campaigns, we help you build smart digital strategies tailored to your industry and audience.",
      list: [
        "Customer behavior analysis",
        "Technology stack review",
        "Ongoing metric-based refinement",
      ],
      image: "/images/protolio.jpg",
      buttonText: "View our Presentation Deck",
    },
    {
      subtitle: "Enterprise-grade Solutions",
      title: "Cloud Integrations",
      content:
        "We offer scalable, secure cloud integrations using Azure, AWS, and private infrastructures to power your digital transformation.",
      list: [
        "Azure & AWS setup",
        "Custom API development",
        "Secure and scalable deployments",
      ],
      image: "/images/protolio.jpg",
      buttonText: "Learn More",
    },
    {
      subtitle: "UI/UX Driven",
      title: "Design & Branding",
      content:
        "Our creative team focuses on UI/UX best practices to deliver engaging designs and brand identities that leave lasting impressions.",
      list: [
        "Wireframing & prototyping",
        "Responsive web design",
        "Visual identity & branding kits",
      ],
      image: "/images/protolio.jpg",
      buttonText: "See Portfolio",
    },
  ];

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 flex flex-col gap-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse bg-[#fafafa]" : ""
          } items-center gap-10 py-10`}
        >
          {/* Text Column */}
          <div className="w-full md:w-1/2 space-y-4">
            {section.subtitle && (
              <h4 className="text-sm text-gray-500">{section.subtitle}</h4>
            )}
            <h2 className="text-3xl font-bold border-l-[6px] border-[#345983] ps-4">
              {section.title}
            </h2>
            <p className="text-gray-700">{section.content}</p>
            {section.list && (
              <ul className="list-disc list-inside text-gray-600">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.buttonText && (
              <button className="mt-4 px-6 py-3 bg-[#345983] text-white rounded hover:bg-blue-700 transition">
                {section.buttonText}
              </button>
            )}
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-xl shadow-[20px_20px_0px_#345983]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridServiceSection;
