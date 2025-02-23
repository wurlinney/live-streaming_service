import { useState } from "react";
import Header from "../Header/Header";
import Information from "./tabs/Information/Information";
import Security from "./tabs/Security/Security";
import Connections from "./tabs/Connections/Connections";
import "./EditProfile.css";
import {useNavigate} from "react-router-dom";

function EditProfile() {
  const [activeTab, setActiveTab] = useState("Информация");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case "Информация":
        return <Information />;
      case "Безопасность":
        return <Security />;
      case "Подключения":
        return <Connections />;
      default:
        return <Information />;
    }
  };

  return (
    <div className="editProfile">
      <Header />
      <div className="profileContainer">
        <div className="backContainer" onClick={() => navigate('/persprof')}>
          <img src="/backIcon.svg" className="backIcon" alt="back" />
          <p>Назад</p>
        </div>

        <div className="sectionContainer">
          {["Информация", "Безопасность", "Подключения"].map((tab) => (
            <h1
              key={tab}
              className={`sectionNames ${activeTab === tab ? "activeTab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </h1>
          ))}
        </div>

        <div className="tabContent">{renderContent()}</div>
      </div>
    </div>
  );
}

export default EditProfile;
