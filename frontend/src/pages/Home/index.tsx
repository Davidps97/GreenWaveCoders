import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
import {supabase} from "@/config/db.config.ts";
import {useState} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const navigate = useNavigate();

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
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
  );
}

export default Home;
