import FeaturedVideo from "./components/FeaturedVideo";
import Menu from "./components/Menu"
import TrendingSwiper from "./components/TrendingSwiper";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <nav className="w-[157px]">
        <Menu />
      </nav>
      <main className="flex flex-col flex-1"
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
