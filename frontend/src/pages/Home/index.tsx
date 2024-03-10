// import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
// import {supabase} from "@/config/db.config.ts";
import {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import Card from "@/components/Card";
import getArticlesFromApi from "@/services/getArticles.service.ts";
import {InfoArticleModel} from "@/shared/InfoArticleModel.ts";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from "swiper/modules";
import {ArrowUpRightIcon} from "@heroicons/react/24/outline";
import './Home.css';
import 'swiper/swiper-bundle.css';

function Home() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    // const navigate = useNavigate();
    const [newsArticles, setNewsArticles] = useState<InfoArticleModel[]>([]);

    const firstSixArticles = newsArticles.slice(0, 6);

    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await getArticlesFromApi();
            setNewsArticles(articles);
        };

        fetchArticles().then();
    }, []);

    // const signOutUser = () => {
    // supabase.auth.signOut().then(({ error }) => {
    //   if (error) {
    //     console.log(error);
    //   }
    //   navigate("/login");
    // });
    // };

    // <>
    //     <h1>Index</h1>
    //     <button onClick={() => signOutUser()}>LogOut</button>
    //     <div className="Home-body">
    //
    //     </div>
    // </>

    return (
      <div className='home h-full w-full flex flex-col'>
          <header>
              <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </header>
          <main className='mt-20 h-full w-full'>
              <section className='flex flex-col justify-center items-center'>
                  <h2 className='font-montserrat text-m-30 font-normal text-primary-4 w-5/6 justify-start mx-auto md:pl-[33.165px]'>News</h2>
                  <Swiper
                      pagination={{
                          clickable: true,
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
                      className="w-5/6"
                  >
                      {firstSixArticles.map((article) => (
                          <SwiperSlide key={article.title}>
                              <Card article={article}/>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </section>
          </main>
      </div>
    );
}

export default Home;
