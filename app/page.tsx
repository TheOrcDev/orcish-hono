export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/horde`);
  const { message } = await res.json();

  if (!message) return <p>Loading...</p>;

  return <p>{message}</p>;
}
