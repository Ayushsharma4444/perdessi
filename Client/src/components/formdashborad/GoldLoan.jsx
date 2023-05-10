import React, { useEffect, useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import { useNavigate } from "react-router-dom";
import Business from "../formdata/Business";
import CreditCard from "../formdata/CreditCard";
import Gold from "../formdata/Gold";

const GoldLoan = () => {
    const navigate = useNavigate();
    const [authScreen, setAuthScreen] = useState(true);
    let tokenData = localStorage.getItem("token");
    let tokenExpiry;
    let token;
    if (tokenData) {
      // tokenExpiry = JSON.parse(tokenData).expiry;
      tokenExpiry = new Date(JSON.parse(tokenData).expiry);
      token = JSON.parse(tokenData).usertoken;
    }
    let currentDate = new Date();
  
    useEffect(() => {
      if (!tokenData) {
        navigate("/login");
      } else {
        if (currentDate > tokenExpiry) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        setTimeout(() => {
          setAuthScreen(false);
        }, 500);
      }
    }, []);
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    if (authScreen) {
      return (
        <div className="lds-roller-container">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }
    return (
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <Gold />
            </div>
          </main>
        </div>
      </div>
    );
}

export default GoldLoan