import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import CustomWebsites from './components/CustomWebsites';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <CustomWebsites />
        <Projects />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
