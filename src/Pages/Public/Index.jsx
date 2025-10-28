import React from "react";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const PageNotFound = React.lazy(() => import("../PageNotFound/Index"));
const Home = React.lazy(() => import("./Home/Index"));
const AboutUs = React.lazy(() => import("./AboutUs/Index"));
const Services = React.lazy(() => import("./Services/Index"));
const Projects = React.lazy(() => import("./Projects/Index"));
const Contact = React.lazy(() => import("./Contact/Index"));
import ScrollToTop from "../../components/ScrollToTop";
import ScrollProgress from "../../components/ScrollProgress";
import AppLayout from "../../layouts/Index";
import CustomLoader from "../../components/CustomLoader";

const Index = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
  };

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <AppLayout>
        <Suspense fallback={<CustomLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </AppLayout>
    </>
  );
};
export default Index;
