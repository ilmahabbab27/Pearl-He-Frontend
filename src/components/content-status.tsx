export default function ContentStatus({ error, retry }: { error?: boolean; retry?: () => void }) {
  return <section className="px-6 py-24 text-center" role="status">
    <p>{error ? 'Content is temporarily unavailable.' : 'Loading content…'}</p>
    {error && <button onClick={retry} className="mt-4 border border-input px-5 py-2">Try again</button>}
  </section>;
}
