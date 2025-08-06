const features = [
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 16l10-8 10 8" /><path d="M2 16v2a2 2 0 002 2h16a2 2 0 002-2v-2" /></svg>
    ),
    title: 'Speed That Shocks',
    description: 'While others are still in “discovery phase,” we’re shipping working solutions. 3–6 weeks from contract to live deployment. Because time is money, and we respect both.',
    outcome: '10x faster than traditional agencies',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
    ),
    title: 'No Bullshit Guarantee',
    description: 'Fixed scope. Fixed price. Fixed timeline. No scope creep. No surprise invoices. No “oops, this will take longer.” You get exactly what we promised, when we promised it.',
    outcome: '100% delivery guarantee',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-8" /><path d="M12 12l4 4" /><path d="M12 12l-4 4" /></svg>
    ),
    title: 'Results, Not Meetings',
    description: 'We don’t do status meetings to justify our existence. We don’t create busy work. We build solutions that solve real problems and deliver measurable business impact.',
    outcome: 'Zero pointless meetings',
  },
];

const WhyDifferentSection = () => (
  <section className="bg-black text-white py-20 flex flex-col items-center">
    {/* Badge */}
    <div className="mb-6">
      <span className="bg-red-900/70 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">WHY WE'RE DIFFERENT</span>
    </div>
    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
      We Don't Just Talk.<br />
      <span className="text-red-500">We Deliver.</span>
    </h2>
    <div className="text-gray-300 text-center max-w-2xl mb-12">
      While others are scheduling meetings about meetings, we’re building solutions that actually work.
    </div>
    {/* Features */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col items-center text-center">
          <div className="bg-red-900/40 rounded-xl p-4 mb-4 flex items-center justify-center">
            {feature.icon}
          </div>
          <div className="font-bold text-lg mb-2">{feature.title}</div>
          <div className="text-gray-300 mb-6 text-sm">{feature.description}</div>
          <div className="font-semibold text-red-500 text-sm border-t border-neutral-800 pt-4 w-full">{feature.outcome}</div>
        </div>
      ))}
    </div>
    {/* Bottom Card */}
    <div className="w-full max-w-3xl bg-black border border-neutral-700 rounded-2xl px-8 py-8 text-center shadow-lg">
      <div className="text-xl md:text-2xl font-extrabold text-white mb-2">
        Stop Paying for Process.<br />
        <span className="text-red-500">Start Paying for Results.</span>
      </div>
      <div className="text-gray-300 text-sm max-w-xl mx-auto">
        Every dollar you spend with us goes toward building something that moves your business forward. Not PowerPoints. Not status updates. Not “research phases.”
      </div>
    </div>
  </section>
);

export default WhyDifferentSection;
