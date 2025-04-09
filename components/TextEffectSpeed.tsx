import { TextEffect } from "./motion-primitives/text-effect";

export function TextEffectSpeed() {
  return (
    <TextEffect
      preset="fade-in-blur"
      speedReveal={1.1}
      speedSegment={0.3}
      className="text-4xl font-bold  text-gray-800"
    >
      Animate your ideas with motion-primitives.
    </TextEffect>
  );
}
