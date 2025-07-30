'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDataTrendingNow } from '../hook/useData';

import Link from 'next/link';

type SliderData = {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string | null;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl: string | null;
    Description: string;
};

export default function TrendingSwiper() {
    const data = useDataTrendingNow();
    return (
        <div className="w-full">
            <Swiper
                slidesPerView="auto"
                spaceBetween={0}
                className="mySwiper"
            >
                {data.map((item: SliderData, index: number) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[200px]"
                    >
                        <div
                            onMouseEnter={() => {
                                if (typeof window !== 'undefined') {
                                    sessionStorage.setItem('selectedVideoId', item.Id.toString());
                                    window.dispatchEvent(new Event('selectedVideoIdChange'));
                                }
                            }}
                        >
                            <div className='h-[278px] w-full bg-cover bg-center cursor-pointer pl-[2px] pr-[2px]'
                                style={{ backgroundImage: `url(${item.CoverImage})` }}

                            >
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};