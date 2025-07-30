'use client';

import { useEffect, useState } from "react";
import { useDataFeatured, useDataTrendingNow } from "../hook/useData";
import { secondsToTime } from "../utils/secondsToTime";

type VideoData = {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl?: string | null;
    Description: string;
};

export default function FeaturedVideo() {
    const trendingData = useDataTrendingNow();
    const featuredData = useDataFeatured();

    const [data, setData] = useState<VideoData | null>(null);

    useEffect(() => {
        const updateSelectedVideo = () => {
            const storedId = sessionStorage.getItem('selectedVideoId');

            if (storedId) {
                const video = trendingData.find(item => item.Id.toString() === storedId);
                if (video) {
                    setData(video);
                    return;
                }
            }

            setData(featuredData);
        };

        // Run on mount
        updateSelectedVideo();

        // Listen for event
        window.addEventListener('selectedVideoIdChange', updateSelectedVideo);

        return () => {
            window.removeEventListener('selectedVideoIdChange', updateSelectedVideo);
        };
    }, [trendingData, featuredData]);


    if (!data) return <div>Loading...</div>;
    const duration = secondsToTime(+data.Duration);

    return (
        <div className="relative w-full h-full">
            {data?.VideoUrl ? (
                <video
                    key={data.VideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute z-[-1] w-full h-full object-cover"
                >
                    <source src={data.VideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : undefined}

            <div
                className="w-full h-full bg-cover bg-center flex flex-col pl-4"
                style={{ backgroundImage: !data?.VideoUrl ? `url(${data.CoverImage})` : undefined }}
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
        </div>
    );
}
