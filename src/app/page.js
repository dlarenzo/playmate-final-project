import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main>
      <Header />
      <MainSection />
    </main>
  );
}
