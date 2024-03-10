// import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
// import {supabase} from "@/config/db.config.ts";
import {useState} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import './Home.css';
import 'swiper/swiper-bundle.css';
import News from "@/components/News";

function Home() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    // const navigate = useNavigate();

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
              <News />
          </main>
      </div>
    );
}

export default Home;
