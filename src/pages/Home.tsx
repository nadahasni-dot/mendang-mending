import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen h-full flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="h-full flex-grow w-full py-10 container px-4 md:px-8 flex flex-col gap-10">
        <Hero />
        <Comparison />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
