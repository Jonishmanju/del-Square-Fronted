import "./styles/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import React from "react";
import PageTransition from "./components/animations/PageTransition";
import CustomCursor from "./components/cursor/CustomCursor";
import CustomLoader from "./components/CustomLoader";

const Public = React.lazy(() => import("./Pages/Public/Index"));
const PrivateRouting = React.lazy(() => import("./Pages/PrivateRouting/Index"));

export default function App() {
  const [showLoader, setShowLoader] = useState(false); // Disabled loading animation
  const location = useLocation();

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  // Temporarily disabled loader on route change
  // useEffect(() => {
  //   setShowLoader(true);
  // }, [location.pathname]);

  return (
    <>
      {/* Loading Animation - Temporarily disabled */}
      {showLoader && <CustomLoader />}
      
      {/* Premium Custom Cursor */}
      <CustomCursor />
      
      {/* Main Application */}
      <Suspense fallback={<CustomLoader />}>
        <PageTransition>
          <Routes>
            <Route path="/*" element={<Public />} />
            <Route path="/auth/*" element={<PrivateRouting />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </>
  );
}
