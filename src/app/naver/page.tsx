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

  const openNaver = () => {
    fetch("/api/naver", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "noopener , noreferrer"));
  };

  const refresh = () => {
    fetch("/api/naver/refresh", {
      method: "post",
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <>
      <main>
        <button onClick={openNaver}>open naver</button>
        <p>hi main</p>
        <p>asdasd</p>
        <button onClick={refresh}>refresh</button>
      </main>
    </>
  );
}
