import Image from "next/image";

import Header from "./components/Header";
import GameTrending from "./components/GameTrending";
import MainSection from "./components/MainSection";
import HeadGame from "./components/HeadGame";
import LatestBlogs from "./components/LatestBlogs";
import BannerMessage from "./components/BannerMessage";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainSection />
        <HeadGame />
        <GameTrending />
        <LatestBlogs />
        <BannerMessage />
      </div>
    </div>
  );
}
