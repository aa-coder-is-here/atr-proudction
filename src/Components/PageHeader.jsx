const PageHeader = ({ title, description, breadcrumb = [], image }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f355e] to-[#2e5682] text-white py-16 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="max-w-2xl text-lg text-white/90 mb-6">{description}</p>

        <div className="text-white/70 text-sm flex flex-wrap gap-1 items-center">
          {breadcrumb.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              <span className={index === breadcrumb.length - 1 ? "text-white font-medium" : ""}>
                {item}
              </span>
              {index !== breadcrumb.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Optional Decorative Image */}
      {image && (
        <div className="absolute right-0 bottom-0 w-40 md:w-64 opacity-20 z-0">
          <img src={image} alt="Decorative Shape" width={300} height={300} />
        </div>
      )}
    </section>
  );
};

export default PageHeader;
