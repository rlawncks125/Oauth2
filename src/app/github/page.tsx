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

  const openGithub = () => {
    fetch("/api/github", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => window.open(res.url, "_black", "noopener , noreferrer"));
  };

  return (
    <>
      <main>
        <button onClick={openGithub}>open github</button>
        <p>hi main</p>
        <p>asdasd</p>
      </main>
    </>
  );
}
