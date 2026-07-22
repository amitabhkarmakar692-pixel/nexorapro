import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
      <h2 className="text-3xl font-extrabold text-slate-800 mb-4">404 - Not Found</h2>
      <p className="text-slate-500 mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="bg-teal-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-teal-500 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
