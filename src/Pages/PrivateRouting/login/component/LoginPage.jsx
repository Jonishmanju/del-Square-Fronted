"use client";

import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    
    // Demo login - accept any email/password combination
    // In a real app, this would validate against your backend
    if (email && password) {
      // Store demo user data in localStorage
      const demoUser = {
        id: 1,
        name: "Admin User",
        email: email,
        role: "admin"
      };
      
      localStorage.setItem("token", "demo-token-123");
      localStorage.setItem("user", JSON.stringify(demoUser));
      
      message.success("Login successful!");
      navigate("/admin");
    } else {
      message.error("Please enter both email and password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex justify-center items-center">
      <Card className="w-96 shadow-lg rounded-xl bg-white">
        <div className="text-center mb-6">
          <Title level={3} className="mb-2">Dentex Admin Login</Title>
          <p className="text-gray-600">Enter your credentials to access the admin panel</p>
        </div>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ 
            email: "admin@dentex.com",
            password: "admin123"
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Login to Admin Panel
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700 font-semibold mb-2">Demo Credentials:</p>
          <p className="text-xs text-blue-600">Email: admin@dentex.com</p>
          <p className="text-xs text-blue-600">Password: admin123</p>
          <p className="text-xs text-gray-500 mt-2">Or use any email/password combination</p>
        </div>

        <div className="text-center mt-4">
          <Button type="link" onClick={() => navigate("/")}>
            ← Back to Website
          </Button>
        </div>
      </Card>
    </div>
  );
}
