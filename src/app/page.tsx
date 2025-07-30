import FeaturedVideo from "./components/FeaturedVideo";
import Menu from "./components/Menu"
import TrendingSwiper from "./components/TrendingSwiper";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen">
      <nav className="w-[157px] min-h-[1080px]">
        <Menu />
      </nav>
      <main className="flex flex-col flex-1 min-h-[1080px]"
        style={{ color: 'var(--text-color-white)' }}
      >
        <FeaturedVideo />
        <div className="w-[calc(100vw-157px)]">
          <p className="text-[56px] absolute mt-[-80px]">Trending Now</p>
          <TrendingSwiper />
        </div>
      </main>
    </div>
  );
}
