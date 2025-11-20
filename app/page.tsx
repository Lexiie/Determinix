import Hero from '@/components/landing/Hero';
import Problem from '@/components/landing/Problem';
import Solution from '@/components/landing/Solution';
import UseCases from '@/components/landing/UseCases';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <UseCases />
      <CTA />
    </main>
  );
}
