import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </>
  );
}

export default Login;
