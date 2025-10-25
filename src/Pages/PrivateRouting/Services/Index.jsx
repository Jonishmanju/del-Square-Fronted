import React from "react";
import { Card, Table, Button, Space, Tag, Input } from "antd";
import { PlusOutlined, SearchOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const Services = () => {
  const services = [
    {
      key: '1',
      name: 'General Dentistry',
      description: 'Complete oral health care including cleanings, fillings, and preventive care.',
      price: '₹2,000 - ₹5,000',
      duration: '30-60 min',
      status: 'Active'
    },
    {
      key: '2',
      name: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our advanced cosmetic treatments.',
      price: '₹5,000 - ₹25,000',
      duration: '60-120 min',
      status: 'Active'
    },
    {
      key: '3',
      name: 'Orthodontics',
      description: 'Straighten your teeth with modern orthodontic solutions.',
      price: '₹15,000 - ₹50,000',
      duration: '120-180 min',
      status: 'Active'
    }
  ];

  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price Range',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color="green">{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button type="link" icon={<EyeOutlined />}>View</Button>
          <Button type="link" icon={<EditOutlined />}>Edit</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Services</h1>
        <p className="text-gray-600">Manage dental services and treatments</p>
      </div>

      <Card>
        <div className="mb-4 flex justify-between items-center">
          <Input
            placeholder="Search services..."
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Service
          </Button>
        </div>

        <Table 
          dataSource={services} 
          columns={columns}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </Card>
    </div>
  );
};

export default Services;
