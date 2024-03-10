// import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
//import {supabase} from "@/config/db.config.ts";
import {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import './Home.css';
import 'swiper/swiper-bundle.css';
import News from "@/components/News";
//import {useNavigate} from "react-router-dom";

function Home() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    //const navigate = useNavigate();
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            }

            if (window.scrollY !== 0) {
                setIsTopOfPage(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
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
      <div className='h-auto w-full flex flex-col bg-primary-2'>
          <header>
              <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
          </header>
          <main className='mt-20 h-full w-full'>
              <News />
          </main>
      </div>
    );
}

export default Home;
