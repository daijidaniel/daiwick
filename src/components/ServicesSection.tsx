const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.73 6.14 2.73 11.07c0 3.8 2.95 6.93 7.27 9.68 4.32-2.75 7.27-5.88 7.27-9.68C21.27 6.14 16.97 2 12 2z" /><circle cx="12" cy="11" r="3" /></svg>
    ),
    title: 'AI Strategy That Actually Works',
    description: 'Forget the AI hype. We identify real opportunities where AI can deliver measurable ROI within 90 days. No experimentation. No "let’s see what happens." Just results.',
    outcome: '3–6x ROI within first quarter',
    outcomeClass: 'text-red-500',
    titleClass: '',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
    ),
    title: 'Software That Ships Fast',
    description: 'Custom software delivered in 3–6 weeks, not 6–12 months. We use proven frameworks and battle-tested approaches. No over-engineering. No feature creep.',
    outcome: 'Live software in 21–42 days',
    outcomeClass: 'text-red-500',
    titleClass: '',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    ),
    title: 'Integration Without Drama',
    description: 'Seamless integration with your existing systems. We handle the complexity so you don’t have to rebuild everything. Plus comprehensive training that actually sticks.',
    outcome: '100% adoption rate guaranteed',
    outcomeClass: 'text-red-500',
    titleClass: 'text-red-500',
  },
];

const ServicesSection = () => (
  <section className="bg-black text-white py-20 flex flex-col items-center">
    {/* Badge */}
    <div className="mb-6">
      <span className="bg-red-900/70 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">WHAT WE ACTUALLY DO</span>
    </div>
    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
      Services That <span className="text-red-500">Actually Move<br className='hidden md:block'/>The Needle</span>
    </h2>
    <div className="text-gray-300 text-center max-w-2xl mb-12">
      No fluff. No buzzwords. No "we’ll figure it out later." Just proven solutions that deliver real business impact.
    </div>
    {/* Cards */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {services.map((service, idx) => (
        <div
          key={service.title}
          className="bg-black border border-neutral-700 rounded-2xl p-7 flex flex-col shadow-sm transition-all duration-200 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 group"
        >
          <div className="mb-4 flex items-center justify-center">
            <div className="bg-red-900/40 rounded-xl p-3 flex items-center justify-center">
              {service.icon}
            </div>
          </div>
          <div className={`font-bold text-lg mb-2 ${service.titleClass}`}>{service.title}</div>
          <div className="text-gray-300 mb-6 text-sm">{service.description}</div>
          <div className="mt-auto pt-6 border-t border-neutral-800 text-xs">
            <div className="text-gray-400 mb-1">GUARANTEED OUTCOME</div>
            <div className={`font-semibold ${service.outcomeClass}`}>{service.outcome}</div>
          </div>
        </div>
      ))}
    </div>
    {/* CTA Button */}
    <a href="#" className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-3 rounded-full text-base shadow-lg transition flex items-center gap-2">
      Let&apos;s Cut Through The BS Together
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  </section>
);

export default ServicesSection;
