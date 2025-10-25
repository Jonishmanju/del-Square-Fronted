import React from "react";
import { Card, Row, Col, Statistic, Progress } from "antd";
import { 
  UserOutlined, 
  CalendarOutlined, 
  DollarOutlined, 
  TrophyOutlined 
} from "@ant-design/icons";

const Analytics = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics & Reports</h1>
        <p className="text-gray-600">Comprehensive business insights and analytics</p>
      </div>

      {/* Key Metrics */}
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
              title="Monthly Appointments"
              value={245}
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

      {/* Charts and Reports */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Monthly Revenue Trend">
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Patient Growth">
            <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Service Popularity">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>General Dentistry</span>
                  <span>45%</span>
                </div>
                <Progress percent={45} strokeColor="#52c41a" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Cosmetic Dentistry</span>
                  <span>30%</span>
                </div>
                <Progress percent={30} strokeColor="#1890ff" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Orthodontics</span>
                  <span>25%</span>
                </div>
                <Progress percent={25} strokeColor="#722ed1" />
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Appointment Status">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Confirmed</span>
                  <span>75%</span>
                </div>
                <Progress percent={75} strokeColor="#52c41a" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Pending</span>
                  <span>20%</span>
                </div>
                <Progress percent={20} strokeColor="#faad14" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Cancelled</span>
                  <span>5%</span>
                </div>
                <Progress percent={5} strokeColor="#ff4d4f" />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
