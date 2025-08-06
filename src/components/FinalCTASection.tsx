'use client';
import { useState } from "react";
import Avatar from "./Avatar";

const steps = [
  {
    step: 1,
    title: "Send inquiry or contact on WhatsApp",
    desc: "Submit the form or message us directly via WhatsApp for the fastest response.",
  },
  {
    step: 2,
    title: "Get a reply within 12 hours & schedule a discovery call",
    desc: "We'll respond promptly and set up a 30-min discovery call to understand your needs.",
  },
  {
    step: 3,
    title: "Share details & get a free PoC in 3 working days",
    desc: "Once we have your requirements, you'll be eligible for a free Proof of Concept, shipped within 3 working days.",
  },
];

const FinalCTASection = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="bg-black flex justify-center py-20">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl px-8 py-12 w-full max-w-2xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="bg-red-900/70 text-xs font-semibold px-4 py-1 rounded-full tracking-wide uppercase mb-6">STOP THE MADNESS</span>
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2">
          Tired of Software Projects<br />
          <span className="text-red-500">That Go Nowhere?</span>
        </h2>
        <div className="text-gray-300 text-center max-w-xl mb-6">
          Book a 30-minute call. We'll tell you exactly what's wrong with your current approach and how to fix it. No sales pitch. No "discovery phase." Just straight answers.
        </div>
        {/* Icons Row */}
        <div className="flex gap-8 justify-center mb-6 text-sm text-white/80">
          <div className="flex items-center gap-2"><svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg> 30 minutes max</div>
          <div className="flex items-center gap-2"><svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" /><path d="M8 12h8" /><path d="M12 8v8" /></svg> Zero sales pressure</div>
        </div>
        {/* Form */}
        <form className="w-full flex flex-col gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="name">Full Name</label>
            <input id="name" type="text" className="w-full rounded-lg bg-black border border-neutral-700 px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="email">Business Email</label>
            <input id="email" type="email" className="w-full rounded-lg bg-black border border-neutral-700 px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500" placeholder="your.email@company.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1" htmlFor="challenge">What's Your Biggest Challenge?</label>
            <select id="challenge" className="w-full rounded-lg bg-black border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:border-red-500">
              <option value="">Select your challenge</option>
              <option>Slow delivery from current vendors</option>
              <option>Unclear project outcomes</option>
              <option>Need AI/automation expertise</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input id="tos" type="checkbox" checked={accepted} onChange={e => setAccepted(e.target.checked)} className="accent-red-600" required />
            <label htmlFor="tos" className="text-xs text-white/80">I accept the <a href="/tos" className="underline text-red-400 hover:text-red-500" target="_blank">Terms of Service</a> and <a href="/privacy" className="underline text-red-400 hover:text-red-500" target="_blank">Privacy Policy</a></label>
          </div>
          <button type="submit" disabled={!accepted} className={`w-full mt-2 px-6 py-2 rounded-full font-semibold text-white transition ${accepted ? 'bg-red-700 hover:bg-red-800 shadow' : 'bg-red-900 text-white/60 cursor-not-allowed'}`}>Get Straight Answers (Free)</button>
        </form>
        <div className="text-xs text-gray-400 text-center mb-8">We'll diagnose your problem and give you actionable next steps. Even if you don't work with us.</div>
        {/* CEO Contact */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10 w-full">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar 
                src="/mask-group.png" 
                alt="Daiji Kimura, CEO"
                size={80}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium text-center p-2">Daiji Kimura</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-white">Daiji Kimura</div>
              <div className="text-xs text-gray-400 mb-1">CEO, DaiWick</div>
              <div className="flex items-center gap-2">
                <a href="https://wa.me/48693896717" target="_blank" rel="noopener" className="flex items-center gap-1 text-green-400 hover:text-green-500"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.647.87 5.093 2.357 7.097L4 29l7.19-2.32A11.927 11.927 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.962 0-3.796-.57-5.33-1.553l-.38-.24-4.27 1.38 1.37-4.16-.25-.39A9.973 9.973 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.13c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01s-.51.07-.78.36c-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.88 1.21 3.08.15.19 2.09 3.2 5.08 4.36.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"/></svg>+48 693 896 717</a>
                <a href="mailto:sales@daiwick.com" className="flex items-center gap-1 text-white/80 hover:text-red-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>sales@daiwick.com</a>
              </div>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="w-full max-w-xl bg-black border border-neutral-700 rounded-2xl px-6 py-6 text-center">
          <div className="text-lg font-bold text-white mb-4">What Happens Next?</div>
          <ol className="list-decimal list-inside text-left text-gray-300 space-y-2">
            {steps.map((s) => (
              <li key={s.step}><span className="font-semibold text-white">{s.title}:</span> {s.desc}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
