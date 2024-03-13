import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
import {supabase} from "@/config/db.config.ts";
import {useEffect, useState} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import Footer from "@/components/footer/Footer.tsx";

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const navigate = useNavigate();
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

  const signOutUser = () => {
    supabase.auth.signOut().then(({ error }) => {
      if (error) {
        console.log(error);
      }
      navigate("/login");
    });
  };

    // <>
    //     <h1>Index</h1>
    //     <button onClick={() => signOutUser()}>LogOut</button>
    //     <div className="Home-body">
    //
    //     </div>
    // </>

  return (
      <div className='home bg-primary-2 h-full w-full'>
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
      </div>
  );
}

export default Home;
