import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Yet Another Basic GraphQL Social Media Server</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation for the API :).
      </p>
      <p className="mt-4 text-muted text-fd-muted-foreground text-xs">Made for HackClub RaspAPI YSWS</p>
    </main>
  );
}
