import React from "react";
import { Card, Table, Button, Space, Tag, Input, Select, Calendar, Badge } from "antd";
import { PlusOutlined, SearchOutlined, EditOutlined, EyeOutlined, CalendarOutlined } from "@ant-design/icons";

const Appointments = () => {
  const appointments = [
    {
      key: '1',
      id: 'A001',
      patient: 'John Doe',
      service: 'Teeth Cleaning',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '60 min',
      status: 'Confirmed',
      doctor: 'Dr. Sarah Johnson'
    },
    {
      key: '2',
      id: 'A002',
      patient: 'Jane Smith',
      service: 'Dental Checkup',
      date: '2024-01-25',
      time: '2:00 PM',
      duration: '30 min',
      status: 'Pending',
      doctor: 'Dr. Michael Chen'
    },
    {
      key: '3',
      id: 'A003',
      patient: 'Mike Johnson',
      service: 'Root Canal',
      date: '2024-01-26',
      time: '11:30 AM',
      duration: '120 min',
      status: 'Confirmed',
      doctor: 'Dr. Sarah Johnson'
    }
  ];

  const columns = [
    {
      title: 'Appointment ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Confirmed' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
          {status}
        </Tag>
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Appointments</h1>
        <p className="text-gray-600">Manage appointments and scheduling</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex space-x-4">
                <Input
                  placeholder="Search appointments..."
                  prefix={<SearchOutlined />}
                  style={{ width: 300 }}
                />
                <Select
                  placeholder="Filter by status"
                  style={{ width: 150 }}
                  allowClear
                >
                  <Select.Option value="Confirmed">Confirmed</Select.Option>
                  <Select.Option value="Pending">Pending</Select.Option>
                  <Select.Option value="Cancelled">Cancelled</Select.Option>
                </Select>
              </div>
              <Button type="primary" icon={<PlusOutlined />}>
                Schedule Appointment
              </Button>
            </div>

            <Table 
              dataSource={appointments} 
              columns={columns}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
              }}
            />
          </Card>
        </div>

        <div>
          <Card title="Calendar View">
            <Calendar
              fullscreen={false}
              headerRender={({ value, type, onChange, onTypeChange }) => (
                <div className="flex justify-between items-center mb-4">
                  <Button onClick={() => onChange(value.clone().subtract(1, 'month'))}>
                    Previous
                  </Button>
                  <h3 className="text-lg font-semibold">
                    {value.format('MMMM YYYY')}
                  </h3>
                  <Button onClick={() => onChange(value.clone().add(1, 'month'))}>
                    Next
                  </Button>
                </div>
              )}
              dateCellRender={(date) => {
                const hasAppointment = appointments.some(
                  apt => apt.date === date.format('YYYY-MM-DD')
                );
                return hasAppointment ? (
                  <Badge status="processing" text="" />
                ) : null;
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
