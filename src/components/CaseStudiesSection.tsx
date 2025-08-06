const caseStudies = [
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    industry: 'Manufacturing',
    challenge: 'Manual quality control processes causing 15% defect rate and production delays',
    solution: 'AI-powered computer vision system for real-time quality inspection',
    impact: '87%',
    impactDesc: 'reduction in defects',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    industry: 'Retail',
    challenge: 'Inefficient inventory management leading to stockouts and overstock situations',
    solution: 'Machine learning demand forecasting with automated reorder system',
    impact: '64%',
    impactDesc: 'improvement in inventory turnover',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    industry: 'Technology',
    challenge: 'Customer support team overwhelmed with repetitive queries and long response times',
    solution: 'Intelligent chatbot with natural language processing and escalation protocols',
    impact: '78%',
    impactDesc: 'reduction in response time',
  },
];

const CaseStudiesSection = () => (
  <section className="bg-black text-white py-20 flex flex-col items-center">
    {/* Badge */}
    <div className="mb-6">
      <span className="bg-red-900/70 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase flex items-center gap-2">
        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Success Stories
      </span>
    </div>
    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
      Proven Results Across Industries
    </h2>
    <div className="text-gray-300 text-center max-w-2xl mb-12">
      Real case studies showcasing how our AI and software solutions deliver measurable business impact.
    </div>
    {/* Cards */}
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {caseStudies.map((cs, idx) => (
        <div
          key={cs.industry}
          className="bg-black border border-neutral-700 rounded-2xl p-7 flex flex-col shadow-sm transition-all duration-200 hover:border-red-600 hover:shadow-xl hover:-translate-y-2 group"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-red-900/40 rounded-xl p-2 flex items-center justify-center">
              {cs.icon}
            </div>
            <span className="font-semibold text-sm text-red-400">{cs.industry}</span>
            <svg className="w-4 h-4 text-red-400 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="text-xs text-red-500 font-bold mb-1">CHALLENGE</div>
          <div className="text-white text-sm mb-3">{cs.challenge}</div>
          <div className="text-xs text-blue-400 font-bold mb-1">SOLUTION</div>
          <div className="text-white text-sm mb-3">{cs.solution}</div>
          <div className="text-xs text-red-500 font-bold mb-1">IMPACT</div>
          <div className="text-red-500 text-2xl font-extrabold mb-1">{cs.impact}</div>
          <div className="text-gray-300 text-xs mb-2">{cs.impactDesc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
