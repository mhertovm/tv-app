import { useDataFeatured } from "../hook/useData";
import { secondsToTime } from "../utils/secondsToTime";

export default function FeaturedVideo() {
    const data = useDataFeatured();

    if (!data) {
        return <div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>;
    }
    const duration = secondsToTime(+data.Duration);

    return (
        <div
            className="w-full h-full bg-cover bg-center flex flex-col pl-4"
            style={{ backgroundImage: `url(${data.CoverImage})` }}
        >
            <div className="mt-[200px]">
                <p className="text-[36px] tracking-[7px] font-bold text-gray-500">MOVIE</p>
                <img className=" h-[120px]" src={data.TitleImage} alt={data.Title} />
            </div>
            <div className="mt-[20px] text-[36px]">
                <p className="inline-block mr-[50px]">{data.ReleaseYear}</p>
                <p className="inline-block mr-[50px]">{data.MpaRating}</p>
                <p className="inline-block">{duration}</p>
            </div>
            <div className="mt-[20px] text-[36px] w-[1300px]">
                {data.Description}
            </div>
            <div className="mt-[40px] ">
                <button
                    className="cursor-pointer text-black px-[30px] py-[10px] rounded-[40px] text-[36px] font-bold w-[240px] h-[72px]"
                    style={{ backgroundColor: 'var(--text-color-white)' }}
                >
                    <span className="relative -top-[2px]"><span className="text-[24px] relative -top-[3px]">▶ </span>Play</span>
                </button>
                <button
                    className="cursor-pointer bg-white px-[30px] py-[10px] rounded-[40px] text-[36px] font-bold w-[240px] h-[72px] ml-[18px] bg-gradient-to-r from-blue-700 to-blue-900"
                    style={{ color: 'var(--text-color-white)' }}
                >
                    <span className="relative -top-[2px]">More Info</span>
                </button>
            </div>


        </div>
    );
}
