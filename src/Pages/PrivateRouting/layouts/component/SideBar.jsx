import React from "react";
import { Menu, Layout } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Map current path → active key
  const getSelectedKey = () => {
    if (location.pathname === "/admin" || location.pathname === "/admin/") return "dashboard";
    if (location.pathname.includes("/admin/patients")) return "patients";
    if (location.pathname.includes("/admin/appointments")) return "appointments";
    if (location.pathname.includes("/admin/services")) return "services";
    if (location.pathname.includes("/admin/analytics")) return "analytics";
    if (location.pathname.includes("/admin/settings")) return "settings";
    return "dashboard";
  };

  const selectedKey = getSelectedKey();

  return (
    <Sider collapsible>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ height: "100%" }}
      >
        <Menu.Item
          key="dashboard"
          icon={<DashboardOutlined />}
          onClick={() => navigate("/admin")}
          style={
            selectedKey === "dashboard"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          key="patients"
          icon={<UserOutlined />}
          onClick={() => navigate("/admin/patients")}
          style={
            selectedKey === "patients"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Patients
        </Menu.Item>

        <Menu.Item
          key="appointments"
          icon={<CalendarOutlined />}
          onClick={() => navigate("/admin/appointments")}
          style={
            selectedKey === "appointments"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Appointments
        </Menu.Item>

        <Menu.Item
          key="services"
          icon={<AppstoreOutlined />}
          onClick={() => navigate("/admin/services")}
          style={
            selectedKey === "services"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Services
        </Menu.Item>

        <Menu.Item
          key="analytics"
          icon={<BarChartOutlined />}
          onClick={() => navigate("/admin/analytics")}
          style={
            selectedKey === "analytics"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Analytics
        </Menu.Item>

        <Menu.Item
          key="settings"
          icon={<SettingOutlined />}
          onClick={() => navigate("/admin/settings")}
          style={
            selectedKey === "settings"
              ? {
                  backgroundColor: "#1677ff",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Settings
        </Menu.Item>

        <Menu.Item
          key="logout"
          icon={<LogoutOutlined />}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          style={
            selectedKey === "logout"
              ? {
                  backgroundColor: "red",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 6,
                }
              : {}
          }
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideBar;
