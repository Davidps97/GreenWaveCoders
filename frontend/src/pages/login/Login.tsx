import { Auth } from "@supabase/auth-ui-react";

import { useNavigate } from "react-router-dom";
import {supabase} from "@/config/db.config.ts";

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
