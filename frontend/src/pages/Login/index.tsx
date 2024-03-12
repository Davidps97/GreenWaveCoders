import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import {supabase} from "@/config/db.config.ts";
import {SelectedPage} from "@/shared/SelectedPage.ts";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function Login({selectedPage, setSelectedPage}: Props) {
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
