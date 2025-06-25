import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-blue-600">Artistly</span>
        </Link>
        <nav className="space-x-4 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/artists" className="hover:text-blue-600">Browse Artists</Link>
          <Link href="/onboarding" className="hover:text-blue-600">Onboard Artist</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
