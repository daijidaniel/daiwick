const ResultsStatementSection = () => (
  <section className="bg-black w-full flex flex-col items-center pt-8 pb-20">
    {/* Statement Card */}
    <div className="w-full max-w-5xl rounded-3xl border border-red-900/50 bg-gradient-to-br from-red-900/70 to-black/80 px-6 md:px-16 py-10 mb-16 shadow-lg">
      <div className="text-2xl md:text-3xl font-extrabold text-white text-center leading-tight mb-6">
        We&apos;re here to serve your best interests —<br />
        <span className="text-red-500">not to sell hours, but to deliver results.</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
        <div className="flex items-center gap-2 text-gray-200 text-base">
          {/* User Icon */}
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M16 20c0-2.21-3.58-4-8-4s-8 1.79-8 4" /></svg>
          Outcome-Driven
        </div>
        <span className="hidden md:inline text-gray-600">|</span>
        <div className="flex items-center gap-2 text-gray-200 text-base">
          {/* Speed Icon */}
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2v6h6" /><path d="M13 8a6 6 0 1 1-6 6H2" /></svg>
          Speed Focused
        </div>
        <span className="hidden md:inline text-gray-600">|</span>
        <div className="flex items-center gap-2 text-gray-200 text-base">
          {/* Target Icon */}
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /></svg>
          Results Guaranteed
        </div>
      </div>
    </div>
    {/* Trusted Companies */}
    <div className="w-full max-w-5xl flex flex-col items-center">
      <div className="text-xs tracking-widest text-gray-400 text-center mb-8 uppercase">
        Trusted by leading companies in manufacturing, retail, and technology
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {['TechCorp Industries', 'Manufacturing Pro', 'Retail Solutions', 'Innovation Labs', 'Global Systems'].map((company) => (
          <span key={company} className="bg-black border border-neutral-700 rounded-xl px-6 py-3 text-gray-200 font-medium text-sm shadow-sm">
            {company}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsStatementSection;
