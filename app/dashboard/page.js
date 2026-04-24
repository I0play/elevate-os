"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("/api/sessions")
      .then(res => res.json())
      .then(setSessions);
  }, []);

  return (
    <div style={{padding:40}}>
      <h1>Today's Sessions</h1>

      {sessions.map((s, i) => (
        <div key={i}>
          <h3>{s.type}</h3>
          <p>{s.content}</p>
          <audio controls src={s.audio_url}></audio>
        </div>
      ))}
    </div>
  );
}
