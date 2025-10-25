import React from "react";
import { Card, Table, Button, Space, Tag, Input, Select } from "antd";
import { PlusOutlined, SearchOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

const Patients = () => {
  const patients = [
    {
      key: '1',
      id: 'P001',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      age: 35,
      lastVisit: '2024-01-15',
      status: 'Active',
      totalVisits: 5
    },
    {
      key: '2',
      id: 'P002',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 98765 43211',
      age: 28,
      lastVisit: '2024-01-14',
      status: 'Active',
      totalVisits: 3
    },
    {
      key: '3',
      id: 'P003',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+91 98765 43212',
      age: 42,
      lastVisit: '2024-01-13',
      status: 'Follow-up',
      totalVisits: 8
    }
  ];

  const columns = [
    {
      title: 'Patient ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Last Visit',
      dataIndex: 'lastVisit',
      key: 'lastVisit',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: 'Total Visits',
      dataIndex: 'totalVisits',
      key: 'totalVisits',
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Patients</h1>
        <p className="text-gray-600">Manage your patient records and information</p>
      </div>

      <Card>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <Input
              placeholder="Search patients..."
              prefix={<SearchOutlined />}
              style={{ width: 300 }}
            />
            <Select
              placeholder="Filter by status"
              style={{ width: 150 }}
              allowClear
            >
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Follow-up">Follow-up</Select.Option>
            </Select>
          </div>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New Patient
          </Button>
        </div>

        <Table 
          dataSource={patients} 
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

export default Patients;
