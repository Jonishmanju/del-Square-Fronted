import React, { useEffect } from "react";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Route, Routes, useLocation } from "react-router-dom";
const PageNotFound = React.lazy(() => import("../PageNotFound/Index"));
const LandingPage = React.lazy(() => import("./LandingPage/Index"));
const AboutUs = React.lazy(() => import("./AboutUs/Index"));
const Services = React.lazy(() => import("./Services/Index"));
const Projects = React.lazy(() => import("./Projects/Index"));
const Contact = React.lazy(() => import("./Contact/Index"));
import ScrollToTop from "../../Component/ScrollToTop";
import AppLayout from "../../layouts/Index";

const Index = () => {

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="text-center mt-10">
            <LoadingOutlined />
          </div>
        }
      >
        <AppLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} /> {/* Catch-all 404 */}
          </Routes>
        </AppLayout>
      </Suspense>
    </>
  );
};
export default Index;
