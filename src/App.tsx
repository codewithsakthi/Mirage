import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Architecture } from './components/Architecture';
import { Features } from './components/Features';
import { ValidationPlan } from './components/ValidationPlan';
import { AboutProject } from './components/AboutProject';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <InteractiveDemo />
        <Architecture />
        <Features />
        <ValidationPlan />
        <AboutProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;
