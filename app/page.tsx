export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual diff tool for{' '}
          <span className="text-[#58a6ff]">database schema changes</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect multiple database environments, analyze schema differences with SQL introspection, and generate migration scripts automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $25/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="text-[#8b949e] text-xs ml-2">schema_diff.sql</span>
          </div>
          <pre className="text-sm overflow-x-auto">
            <code>
              <span className="text-[#f85149]">- ALTER TABLE users DROP COLUMN legacy_id;</span>{"\n"}
              <span className="text-[#3fb950]">+ ALTER TABLE users ADD COLUMN stripe_id VARCHAR(64);</span>{"\n"}
              <span className="text-[#3fb950]">+ CREATE INDEX idx_users_stripe ON users(stripe_id);</span>{"\n"}
              <span className="text-[#8b949e]">  -- Table: orders (no changes)</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited schema comparisons',
              'PostgreSQL, MySQL & SQLite support',
              'Automated migration script generation',
              'Historical comparison tracking',
              'Secure connection proxy',
              'Export diffs as SQL or JSON',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which databases are supported?',
              a: 'PostgreSQL, MySQL, and SQLite are fully supported. More adapters are on the roadmap.',
            },
            {
              q: 'Is my database connection secure?',
              a: 'Yes. All connections are routed through an encrypted proxy and credentials are never stored on disk.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. Cancel your subscription at any time with no questions asked and no hidden fees.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} DB Schema Differ. All rights reserved.
      </footer>
    </main>
  )
}
