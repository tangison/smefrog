export default function Loading() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* SMEfrog icon with pulse */}
        <div className="w-16 h-16 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center animate-pulse">
          <img src="/icon.png" alt="SMEfrog" className="w-9 h-9 rounded-lg" />
        </div>

        <p className="text-frog-muted text-sm font-heading">
          Jump Into Business.
        </p>
      </div>
    </div>
  )
}
