import React from "react";
import { Layout, Space, Button } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

function TopHeader({ pageTitle }) {
  const navigate = useNavigate();
  
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: 0, color: "#1f2937" }}>{pageTitle || "Dashboard"}</h2>
      <Space>
        <Button 
          type="primary" 
          icon={<HomeOutlined />}
          onClick={() => navigate("/")}
          style={{ marginRight: 16 }}
        >
          Back to Home
        </Button>
        <UserOutlined style={{ color: "#6b7280" }} />
        <span style={{ color: "#6b7280" }}>Admin</span>
      </Space>
    </Header>
  );
}

export default TopHeader;
