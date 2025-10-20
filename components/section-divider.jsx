export function SectionDivider({ variant = "floral" }) {
    if (variant === "hearts") {
        return (<div className="relative py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 flex-1 max-w-[150px]"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float-delayed">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1 max-w-[150px]"/>
          </div>
        </div>
      </div>);
    }
    if (variant === "hearts-simple") {
        return (<div className="relative py-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 flex-1 max-w-[180px]"/>
            <div className="relative animate-float">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float-delayed">
              <svg className="w-4 h-4 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1 max-w-[180px]"/>
          </div>
        </div>
      </div>);
    }
    if (variant === "floral") {
        return (<div className="relative py-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-5">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 flex-1 max-w-[160px]"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72V7h-1c-1.1 0-2 .9-2 2v1.28c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1H13v1.28c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V13h2.28c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.74-.4-1.38-1-1.72V9c0-1.1-.9-2-2-2h-1V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-2V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float-delayed">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="6" r="2"/>
                <circle cx="12" cy="18" r="2"/>
                <circle cx="6" cy="12" r="2"/>
                <circle cx="18" cy="12" r="2"/>
              </svg>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72V7h-1c-1.1 0-2 .9-2 2v1.28c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2 .74 0 1.38-.4 1.72-1H13v1.28c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V13h2.28c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2 0-.74-.4-1.38-1-1.72V9c0-1.1-.9-2-2-2h-1V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V7h-2V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1 max-w-[160px]"/>
          </div>
        </div>
      </div>);
    }
    if (variant === "floral-delicate") {
        return (<div className="relative py-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 flex-1 max-w-[170px]"/>
            <div className="relative animate-float">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2.5"/>
                <circle cx="12" cy="7" r="1.5"/>
                <circle cx="12" cy="17" r="1.5"/>
                <circle cx="7" cy="12" r="1.5"/>
                <circle cx="17" cy="12" r="1.5"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float-delayed">
              <svg className="w-4 h-4 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="8" r="1.2"/>
                <circle cx="12" cy="16" r="1.2"/>
                <circle cx="8" cy="12" r="1.2"/>
                <circle cx="16" cy="12" r="1.2"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"/>
            <div className="relative animate-float">
              <svg className="w-5 h-5 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2.5"/>
                <circle cx="12" cy="7" r="1.5"/>
                <circle cx="12" cy="17" r="1.5"/>
                <circle cx="7" cy="12" r="1.5"/>
                <circle cx="17" cy="12" r="1.5"/>
              </svg>
            </div>
            <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1 max-w-[170px]"/>
          </div>
        </div>
      </div>);
    }
    if (variant === "floral-elegant") {
        return (<div className="relative py-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:bg-none dark:from-transparent dark:via-transparent dark:to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-5">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/30 flex-1 max-w-[150px]"/>
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/55" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="6" r="2"/>
                <circle cx="12" cy="18" r="2"/>
                <circle cx="6" cy="12" r="2"/>
                <circle cx="18" cy="12" r="2"/>
              </svg>
            </div>
            <div className="h-px bg-primary/30 w-8"/>
            <div className="relative animate-float-delayed">
              <svg className="w-5 h-5 text-primary/45" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2.5"/>
                <circle cx="12" cy="7" r="1.5"/>
                <circle cx="12" cy="17" r="1.5"/>
                <circle cx="7" cy="12" r="1.5"/>
                <circle cx="17" cy="12" r="1.5"/>
              </svg>
            </div>
            <div className="h-px bg-primary/30 w-8"/>
            <div className="relative animate-float">
              <svg className="w-6 h-6 text-primary/55" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="6" r="2"/>
                <circle cx="12" cy="18" r="2"/>
                <circle cx="6" cy="12" r="2"/>
                <circle cx="18" cy="12" r="2"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"/>
            <div className="h-px bg-gradient-to-r from-primary/30 to-transparent flex-1 max-w-[150px]"/>
          </div>
        </div>
      </div>);
    }
}
