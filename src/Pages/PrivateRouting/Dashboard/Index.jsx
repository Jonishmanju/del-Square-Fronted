import React from "react";
import { Card, Row, Col, Statistic, Table, Tag, Button, Space } from "antd";
import { 
  UserOutlined, 
  CalendarOutlined, 
  DollarOutlined, 
  TrophyOutlined,
  PlusOutlined,
  EyeOutlined,
  EditOutlined
} from "@ant-design/icons";

const Dashboard = () => {
  // Sample data for demonstration
  const recentPatients = [
    {
      key: '1',
      name: 'John Doe',
      phone: '+91 98765 43210',
      lastVisit: '2024-01-15',
      status: 'Active',
      nextAppointment: '2024-01-25'
    },
    {
      key: '2',
      name: 'Jane Smith',
      phone: '+91 98765 43211',
      lastVisit: '2024-01-14',
      status: 'Active',
      nextAppointment: '2024-01-28'
    },
    {
      key: '3',
      name: 'Mike Johnson',
      phone: '+91 98765 43212',
      lastVisit: '2024-01-13',
      status: 'Follow-up',
      nextAppointment: '2024-01-30'
    }
  ];

  const upcomingAppointments = [
    {
      key: '1',
      patient: 'John Doe',
      service: 'Teeth Cleaning',
      time: '10:00 AM',
      date: '2024-01-25',
      status: 'Confirmed'
    },
    {
      key: '2',
      patient: 'Jane Smith',
      service: 'Dental Checkup',
      time: '2:00 PM',
      date: '2024-01-25',
      status: 'Pending'
    },
    {
      key: '3',
      patient: 'Mike Johnson',
      service: 'Root Canal',
      time: '11:30 AM',
      date: '2024-01-26',
      status: 'Confirmed'
    }
  ];

  const patientColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
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
      title: 'Next Appointment',
      dataIndex: 'nextAppointment',
      key: 'nextAppointment',
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

  const appointmentColumns = [
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Confirmed' ? 'green' : 'orange'}>{status}</Tag>
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to Dentex Admin Panel</p>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Patients"
              value={1128}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Today's Appointments"
              value={15}
              prefix={<CalendarOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Monthly Revenue"
              value={125000}
              prefix={<DollarOutlined />}
              suffix="₹"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Patient Satisfaction"
              value={98}
              suffix="%"
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Card className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <Space wrap>
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Add New Patient
          </Button>
          <Button icon={<CalendarOutlined />} size="large">
            Schedule Appointment
          </Button>
          <Button icon={<UserOutlined />} size="large">
            View All Patients
          </Button>
          <Button icon={<DollarOutlined />} size="large">
            Generate Report
          </Button>
        </Space>
      </Card>

      {/* Recent Patients and Appointments */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card 
            title="Recent Patients" 
            extra={<Button type="link">View All</Button>}
            className="h-full"
          >
            <Table 
              dataSource={recentPatients} 
              columns={patientColumns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card 
            title="Upcoming Appointments" 
            extra={<Button type="link">View All</Button>}
            className="h-full"
          >
            <Table 
              dataSource={upcomingAppointments} 
              columns={appointmentColumns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Card className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-gray-700">New patient John Doe registered</span>
            <span className="text-gray-500 ml-auto text-sm">2 hours ago</span>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Appointment completed for Jane Smith</span>
            <span className="text-gray-500 ml-auto text-sm">4 hours ago</span>
          </div>
          <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
            <span className="text-gray-700">Payment received from Mike Johnson</span>
            <span className="text-gray-500 ml-auto text-sm">6 hours ago</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
