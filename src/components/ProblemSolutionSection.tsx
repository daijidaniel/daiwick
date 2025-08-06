const ProblemSolutionSection = () => (
  <section className="bg-black text-white py-20 flex flex-col items-center">
    {/* Badge */}
    <div className="mb-6">
      <span className="bg-red-700/80 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase flex items-center gap-2">
        <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        New Paradigm
      </span>
    </div>
    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
      The Traditional Model is<br />
      <span className="text-red-600">Fundamentally Broken</span>
    </h2>
    {/* Content */}
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Problem */}
      <div>
        <div className="font-bold text-xl mb-2">The Problem:</div>
        <p className="text-gray-300 mb-6">Too often, projects focus on maximizing billable time rather than delivering tangible results. Clients want fast, efficient, and cost-effective outcomes — yet conventional processes create friction, delays, and wasted resources.</p>
        <ul className="space-y-3">
          <li className="flex items-center bg-red-900/40 rounded-lg px-4 py-2 text-sm">
            <span className="mr-3 text-red-500 text-lg">●</span>Filling internal hours instead of delivering results
          </li>
          <li className="flex items-center bg-red-900/40 rounded-lg px-4 py-2 text-sm">
            <span className="mr-3 text-red-500 text-lg">●</span>Maximizing billable time over client success
          </li>
          <li className="flex items-center bg-red-900/40 rounded-lg px-4 py-2 text-sm">
            <span className="mr-3 text-red-500 text-lg">●</span>Endless sprints with no clear outcomes
          </li>
          <li className="flex items-center bg-red-900/40 rounded-lg px-4 py-2 text-sm">
            <span className="mr-3 text-red-500 text-lg">●</span>Hidden costs and timeline surprises
          </li>
          <li className="flex items-center bg-red-900/40 rounded-lg px-4 py-2 text-sm">
            <span className="mr-3 text-red-500 text-lg">●</span>Activity over impact
          </li>
        </ul>
      </div>
      {/* Solution */}
      <div>
        <div className="font-bold text-xl mb-2 text-red-500">Our Solution:</div>
        <p className="text-gray-300 mb-6">We chose a different path. Our model is lean, transparent, and outcome–driven. We work with a trusted network of experts to deliver solutions that actually move your business forward.</p>
        <div className="space-y-4">
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-5 py-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Clear Scope</div>
              <div className="text-gray-400 text-sm">You know exactly what you're getting</div>
            </div>
          </div>
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-5 py-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8V12"/><circle cx="12" cy="16" r="1.5"/><rect x="6" y="4" width="12" height="16" rx="6"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Fixed Cost</div>
              <div className="text-gray-400 text-sm">No surprises, no overruns</div>
            </div>
          </div>
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-5 py-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 12h-10"/><path d="M12 17l-5-5l5-5"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Fixed Timeline</div>
              <div className="text-gray-400 text-sm">Delivery in weeks, not months</div>
            </div>
          </div>
          <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-5 py-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <div className="font-semibold text-white">Measurable Results</div>
              <div className="text-gray-400 text-sm">Real impact, not just activity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
