export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 text-sm text-gray-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Adrian Calleja. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Adrixx117" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/adrii-call/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}


