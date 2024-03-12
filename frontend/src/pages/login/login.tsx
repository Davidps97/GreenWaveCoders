import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";

import { useNavigate } from "react-router-dom";

const projectUrl = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_OUT") {

      navigate("/login");
    } else if (event === "SIGNED_IN") {
      
      navigate("/home");
    }
  });

  return (
    <>
      <Auth
        supabaseClient={supabase}
        providers={["google"]}
        appearance={{
          style: {
            input: {
              border: 0 ,
            }
        }}}
        
      />
    </>
  );
}

export default Login;
