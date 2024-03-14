import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      {open ?
        <div className="navbar-main">
          <div className="navbar-top">
            <div className='navbar-hamburguer'>
              <div className='navbar-x cursor-pointer' onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 24 24 8M8 8l16 16" /></svg>
              </div>
            </div>
          </div>
          <div className="navbar-mid">
            <div className='navbar-li cursor-pointer' onClick={() => navigate("/map")}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 19v-8.5a.999.999 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z" /></svg>
              </div>
              <p>Home</p>
            </div>
            <div className='navbar-li cursor-pointer' onClick={() => navigate("/map")}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#111" d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" /></svg>
              </div>
              <p>Info</p>
            </div>
            <div className='navbar-li mb-52 cursor-pointer' onClick={() => navigate("/map")}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#111" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Z" /><path fill="#111" d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819ZM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6Z" /></svg>
              </div>
              <p> Map</p>
            </div>
          </div>
          <div className="navbar-bottom">
            <div className='navbar-signIn cursor-pointer' onClick={() => navigate("/map")}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#F5F5F5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              </div>
              <p>Sign in</p>
            </div>
          </div>
          <div className='navbar-svg-bottom absolute bottom-5 -z-11'>
            <svg xmlns="http://www.w3.org/2000/svg" width="430" height="204" fill="none"><path fill="#004567" d="M430 203.8V83.84l-92.6-.29a209.17 209.17 0 0 1-53.72-7.19L0 0v120.06" /></svg>
          </div>
        </div>
        :
        <div className="navbar-top">
          <div className='navbar-hamburguer'>
            <div className='navbar-x cursor-pointer' onClick={() => setOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 9h22M5 16h22M5 23h22" /></svg>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Navbar;