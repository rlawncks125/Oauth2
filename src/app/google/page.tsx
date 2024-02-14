"use client";

import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    // fetch("/api/naver", {
    //   method: "GET",
    // })
    //   .then((res) => res.text())
    //   .then(console.log);
    // github_authorize();
  }, []);

  const openGoogle = () => {
    fetch("/api/google", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "noopener , noreferrer"));
  };

  return (
    <>
      <main>
        <button onClick={openGoogle}>open google</button>
        <p>hi main</p>
        <p>asdasd</p>
      </main>
    </>
  );
}
