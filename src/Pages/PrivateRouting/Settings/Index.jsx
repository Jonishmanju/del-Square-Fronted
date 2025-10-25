import React from "react";
import { Card, Form, Input, Button, Switch, Select, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const Settings = () => {
  const onFinish = (values) => {
    console.log('Settings saved:', values);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Configure your dental practice settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Practice Information */}
        <Card title="Practice Information">
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              practiceName: 'Dentex Dental Clinic',
              address: '123 Dental Street, Chennai, Tamil Nadu 600001',
              phone: '+91 915 987 5674',
              email: 'info@dentex.com',
              website: 'www.dentex.com'
            }}
          >
            <Form.Item
              label="Practice Name"
              name="practiceName"
              rules={[{ required: true, message: 'Please enter practice name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please enter address!' }]}
            >
              <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: 'Please enter phone number!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter email!' },
                { type: 'email', message: 'Please enter valid email!' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Save Practice Information
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Business Hours */}
        <Card title="Business Hours">
          <Form layout="vertical">
            <Form.Item label="Monday - Friday">
              <Input defaultValue="9:00 AM - 7:00 PM" />
            </Form.Item>
            <Form.Item label="Saturday">
              <Input defaultValue="9:00 AM - 5:00 PM" />
            </Form.Item>
            <Form.Item label="Sunday">
              <Input defaultValue="Emergency Only" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<SaveOutlined />}>
                Save Business Hours
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Notification Settings */}
        <Card title="Notification Settings">
          <Form layout="vertical">
            <Form.Item label="Email Notifications">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="SMS Notifications">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="Appointment Reminders">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item label="Payment Notifications">
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<SaveOutlined />}>
                Save Notification Settings
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* System Settings */}
        <Card title="System Settings">
          <Form layout="vertical">
            <Form.Item label="Default Appointment Duration">
              <Select defaultValue="60">
                <Select.Option value="30">30 minutes</Select.Option>
                <Select.Option value="60">60 minutes</Select.Option>
                <Select.Option value="90">90 minutes</Select.Option>
                <Select.Option value="120">120 minutes</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Currency">
              <Select defaultValue="INR">
                <Select.Option value="INR">Indian Rupee (₹)</Select.Option>
                <Select.Option value="USD">US Dollar ($)</Select.Option>
                <Select.Option value="EUR">Euro (€)</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Time Zone">
              <Select defaultValue="IST">
                <Select.Option value="IST">Indian Standard Time</Select.Option>
                <Select.Option value="UTC">UTC</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<SaveOutlined />}>
                Save System Settings
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
