const events = [
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
    ),
    text: 'Featured at TechSummit 2024',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    ),
    text: 'Keynote speaker at AI Innovation Conference',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    text: 'Panelist at Manufacturing Excellence Summit',
  },
];

const ThoughtLeadershipSection = () => (
  <section className="bg-black text-white py-20 flex justify-center">
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center md:items-stretch">
      {/* Left: Text content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-6">
          <span className="bg-red-900/70 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase">THOUGHT LEADERSHIP</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Industry Keynotes & Thought Leadership</h2>
        <div className="text-gray-300 mb-8 max-w-lg">
          Our team regularly speaks at major industry conferences and events, sharing insights on AI implementation and digital transformation.
        </div>
        <div className="flex flex-col gap-3 mb-8">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="bg-red-900/40 rounded-lg p-2 flex items-center justify-center">{event.icon}</span>
              <span className="text-white text-sm">{event.text}</span>
            </div>
          ))}
        </div>
        <a href="#" className="inline-block px-6 py-2 rounded-full bg-red-700 hover:bg-red-800 text-white font-semibold text-sm shadow transition">View All Speaking Engagements</a>
      </div>
      {/* Right: Video card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 w-full max-w-md flex flex-col">
          <div className="relative mb-4">
            <div className="aspect-video bg-gradient-to-br from-[#2d232a] via-[#1d1c2d] to-[#0d0e1a] rounded-xl flex items-center justify-center">
              <button className="w-14 h-14 bg-white/80 hover:bg-white/90 rounded-full flex items-center justify-center text-black text-2xl shadow-lg transition">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><polygon points="9.5,7.5 16.5,12 9.5,16.5" /></svg>
              </button>
            </div>
          </div>
          <div className="text-white font-semibold mb-1 text-base">"AI ROI: Measuring Success in Digital Transformation"</div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" /><path d="M16 2v4M8 2v4M3 10h18" /></svg> TechSummit 2024</div>
            <div className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg> 15 min watch</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ThoughtLeadershipSection;
