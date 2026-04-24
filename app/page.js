export const dynamic = "force-dynamic";

export default function Home() {
  const subscribe = async () => {
    const res = await fetch("/api/subscribe");
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={{ textAlign: "center", padding: 100 }}>
      <h1>Elevate OS</h1>
      <p>Daily focus, calm, and performance sessions.</p>
      <button onClick={subscribe}>Start Subscription</button>
    </div>
  );
}
