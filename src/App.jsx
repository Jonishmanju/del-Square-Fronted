import "./styles/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import React from "react";
import PageTransition from "./components/animations/PageTransition";
import CustomCursor from "./components/cursor/CustomCursor";
import LoadingAnimation from "./components/LoadingAnimation";

const Public = React.lazy(() => import("./Pages/Public/Index"));
const PrivateRouting = React.lazy(() => import("./Pages/PrivateRouting/Index"));

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  // Show loader on every route change
  useEffect(() => {
    setShowLoader(true);
  }, [location.pathname]);

  return (
    <>
      {/* Loading Animation - Shows on every page change */}
      {showLoader && <LoadingAnimation onComplete={handleLoaderComplete} />}
      
      {/* Premium Custom Cursor */}
      <CustomCursor />
      
      {/* Main Application */}
      <Suspense fallback={null}>
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
