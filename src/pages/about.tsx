import { PageHeader } from "@/components/general/PageHeader";
import { HouseSection } from "@/components/layout/HouseSection";

export default function About() {
  return (
    <main>
      <PageHeader title="About" lead="I'm Alexandra. I am a woman of many talents but right now I am most useful at BRYTER where I shape product for lawyers. At lunch, I sit with the engineers, and I marvel at the designers but I don't get their jokes. This is my blog, a random collection of thoughts and contradictions." />
      <p>I'm sure one day there will be some content here</p>
      <HouseSection />
    </main>
  );
}