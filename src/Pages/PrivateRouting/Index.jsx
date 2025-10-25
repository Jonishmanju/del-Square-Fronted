import React, { useEffect } from "react";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound/Index";
import ScrollToTop from "../../Component/ScrollToTop";
import AdminLayout from "./layouts/Index";

// Dashboard Components
const Dashboard = React.lazy(() => import("./Dashboard/Index"));
const Patients = React.lazy(() => import("./Patients/Index"));
const Appointments = React.lazy(() => import("./Appointments/Index"));
const Services = React.lazy(() => import("./Services/Index"));
const Analytics = React.lazy(() => import("./Analytics/Index"));
const Settings = React.lazy(() => import("./Settings/Index"));
const LoginPage = React.lazy(() => import("./login/component/LoginPage"));

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
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          } />
          <Route path="/patients" element={
            <AdminLayout>
              <Patients />
            </AdminLayout>
          } />
          <Route path="/appointments" element={
            <AdminLayout>
              <Appointments />
            </AdminLayout>
          } />
          <Route path="/services" element={
            <AdminLayout>
              <Services />
            </AdminLayout>
          } />
          <Route path="/analytics" element={
            <AdminLayout>
              <Analytics />
            </AdminLayout>
          } />
          <Route path="/settings" element={
            <AdminLayout>
              <Settings />
            </AdminLayout>
          } />
          <Route path="*" element={<PageNotFound />} /> {/* Catch-all 404 */}
        </Routes>
      </Suspense>
    </>
  );
};
export default Index;
