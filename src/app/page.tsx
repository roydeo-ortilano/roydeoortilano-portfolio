import Link from 'next/link'
import Image from 'next/image'
import profileImg from '../../images/homepage/rdprof.webp'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <div className="inline-flex w-40 h-40 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/50">
                <Image src={profileImg} alt="Roy Deo" width={160} height={160} className="w-full h-full object-cover rounded-full" placeholder="blur"/>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Roy Deo B. <span className="text-gradient">Ortilano</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate Web Developer driven to create user-friendly and visually appealing web applications that enhances experiences and drive business success.
            </p>
          </div>

          {/* Widget Grid with Non-uniform Shapes */}
          <div className="grid grid-cols-4 gap-4 auto-rows-[120px]">
            {/* About Widget - Tall Rectangle */}
            <Link
              href="/about"
              className="col-span-2 row-span-2 group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  About Me
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  Background, education & interests
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-cyan-400 font-mono text-2xl font-bold">4+</div>
                  <div className="text-slate-500 text-xs">Years<br/>Experience</div>
                </div>
              </div>
            </Link>

            {/* Skills Widget - Square */}
            <Link
              href="/skills"
              className="col-span-2 row-span-2 group relative bg-gradient-to-br from-emerald-900/40 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 blur-2xl"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white mb-4 shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Skills
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Technical expertise
                </p>
                <div className="space-y-2">
                  {['Frontend', 'Backend', 'Database'].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                          style={{ width: `${90 - idx * 10}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-500">{90 - idx * 10}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>

            {/* Projects Widget - Wide Rectangle */}
            <Link
              href="/projects"
              className="col-span-3 row-span-1 group relative bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Projects
                  </h3>
                  <p className="text-slate-400 text-sm">Portfolio showcase</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-purple-400 font-mono">3+</div>
                <div className="text-xs text-slate-500">Completed</div>
              </div>
            </Link>

            {/* Contact Widget - Small Square */}
            <Link
              href="/contact"
              className="col-span-1 row-span-1 group relative bg-gradient-to-br from-pink-900/40 to-slate-900/80 backdrop-blur-sm rounded-3xl p-4 border border-pink-700/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 overflow-hidden flex flex-col items-center justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-2 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white text-center group-hover:text-pink-400 transition-colors">
                Contact
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}