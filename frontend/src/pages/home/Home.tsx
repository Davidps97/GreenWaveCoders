import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

function Home() {
  const navigate = useNavigate();

  const signOutUser = () => {
    supabase.auth.signOut().then(({ error }) => {
      if (error) {
        console.log(error);
      }
      navigate("/login");
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => signOutUser()}>LogOut</button>
    </>
  );
}

export default Home;
