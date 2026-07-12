"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

/**
 * Full-page animated gradient backdrop — deep navy → electric blue.
 * lightType "3d" (no external HDR fetch), grain off. Rendered fixed
 * behind the whole page; a dark veil above it keeps text ≥4.5:1.
 */
export default function ShaderBackdropScene() {
  return (
    <ShaderGradientCanvas
      style={{ width: "100%", height: "100%" }}
      pointerEvents="none"
      pixelDensity={1}
      fov={40}
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate="on"
        uSpeed={0.18}
        uStrength={2.2}
        uDensity={1.4}
        uFrequency={5.5}
        uAmplitude={0}
        // Deep-blue palette: navy structure, electric-blue energy, abyss shadows
        color1="#0a1b3d"
        color2="#1e5bff"
        color3="#040918"
        cAzimuthAngle={180}
        cPolarAngle={85}
        cDistance={3.2}
        cameraZoom={1}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        lightType="3d"
        brightness={1.1}
        reflection={0.12}
        grain="off"
      />
    </ShaderGradientCanvas>
  );
}
