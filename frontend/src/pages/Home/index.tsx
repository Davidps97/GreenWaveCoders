import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
import {supabase} from "@/config/db.config.ts";
import {useEffect, useState} from "react";
import './Home.css';
import 'swiper/swiper-bundle.css';
import News from "@/components/News";

type Props = {
    isTopOfPage: boolean;
}

function Home({ isTopOfPage }: Props) {
  const navigate = useNavigate();

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
      <div className='home h-auto w-full flex flex-col'>
          <header>
              <Navbar isTopOfPage={isTopOfPage}/>
          </header>
          <main className='mt-20 h-full w-full'>
              <News />
          </main>
      </div>
    );
}

export default Home;
