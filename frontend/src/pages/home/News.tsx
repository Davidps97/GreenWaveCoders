import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import Card from "@/components/card/Card.tsx";
import {useEffect, useState} from "react";
import {InfoArticleModel} from "@/shared/InfoArticleModel.ts";
import getArticlesFromApi from "@/services/getArticles.service.ts";
import './Home.css';

function News() {
    const [newsArticles, setNewsArticles] = useState<InfoArticleModel[]>([]);
    const firstSixArticles = newsArticles.slice(0, 6);

    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await getArticlesFromApi();
            setNewsArticles(articles);
        };

        fetchArticles().then();
    }, []);

    return (
        <section className='w-full mt-10'>
            <div className='flex flex-col justify-center mx-auto w-5/6'>
                <div className='flex justify-between items-center w-full'>
                    <h2 className='font-montserrat text-m-30 font-medium text-primary-4 w-2/6 justify-start'>News</h2>
                    <div className='swiper-pagination relative swiper-pagination-important'></div>
                </div>
                <Swiper
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        748: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full"
                >
                    {firstSixArticles.map((article) => (
                        <SwiperSlide key={article.title}>
                            <Card article={article}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default News;