import React, {useState} from 'react';
import {RegistrationPage} from "./components/Pages/registrationPage/RegistrationPage";
import {AppMain} from "./components/layaut/AppMain";
import {Button} from "@mui/material";
import Header from "./components/header/Header";
import Sidebar from "./components/navbar/NavBar";

const App: React.FC = () => {
    const [registr, setRegistr] = useState(true);

    const handlerVewPage = () => {
        setRegistr(!registr);
    }
    return (
  <div>
      {registr ? <RegistrationPage />:

          <div className="app-wrapper">
              <Header/>
              <div className="sidebar-content-wrapper">
                  <Sidebar />
                  <div className='app-wrapper-content content-wrapper'>
          <AppMain />
                  </div>
              </div>
          </div>

      }
<Button onClick={handlerVewPage}>Посмотреть без регистрации</Button>
  </div>
    );
};

export default App;
