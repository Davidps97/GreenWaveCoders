import Navbar from "@/components/navbar/Navbar.tsx";
import {supabase} from "@/config/db.config.ts";
import {useState} from "react";
import 'swiper/swiper-bundle.css';
import News from "@/pages/home/News.tsx";
import Infos from "@/components/infos/Infos.tsx";
import {useNavigate} from "react-router-dom";
import TopPage from "./TopPage.tsx";
import MapComponent from "@/pages/map/MapComponent.tsx";
import './Home.css';

function Home() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/sign-in');
    }

    const handleSignUp = () => {
        navigate('/sign-up');
    }

    const signOutUser = () => {
        supabase.auth.signOut().then(({ error }) => {
          if (error) {
            console.log(error);
          }
          navigate("/login");
        });
    };

    return (
        <div className='h-auto w-[100vw] flex flex-col pb-10'>
            <header>
                {/*<Navbar />*/}
            </header>
            <main className={`mt-28 h-full w-full gap-y-16`}>
                <TopPage handleSignUp={handleSignUp} handleSignIn={handleSignIn}/>
                <Infos/>
                <News/>
                <section className='w-full mt-10'>
                    <h2 className='font-montserrat text-m-30 font-medium text-primary-4 w-5/6 mx-auto justify-start mb-4'>Events</h2>
                    <MapComponent/>
                </section>
            </main>
        </div>
    );
}

export default Home;
