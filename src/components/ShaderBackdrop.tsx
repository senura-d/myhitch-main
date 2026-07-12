"use client";

import dynamic from "next/dynamic";

const ShaderBackdropScene = dynamic(() => import("./ShaderBackdropScene"), {
  ssr: false,
});

/**
 * Fixed, full-viewport gradient backdrop for the entire page.
 * z-index -20 keeps it behind all content; a soft white veil (-19) sits on top
 * to keep body text legible while glass panels blur the gradient beautifully.
 */
export default function ShaderBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{ backgroundColor: "#050d20" }}
      >
        <ShaderBackdropScene />
      </div>
      <div className="shader-veil" aria-hidden />
    </>
  );
}
