import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./about_cpnt.css";

class About extends Component {
  render() {
    return (
      <div className="container my-5">
        {/* Opening Hours Section */}
        <section className="mb-5">
          <h2 className="text-center opening-hours-title">Opening Hours</h2>
          <div className="text-center opening-hours-details">
            <strong>08.00am - 06.00pm. Daily</strong>
            <br />
            <strong>เปิดทุกวัน เวลา 08.00 - 18.00 น.</strong>
          </div>
        </section>

        {/* Admission Tickets Section */}
        <section className="mb-5">
          <h2 className="text-center">Admission Tickets</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ประเภท/Detail</th>
                <th>ค่าเข้าชม (บาท)/Price (Baht)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ผู้ใหญ่/Adult</td>
                <td>70</td>
              </tr>
              <tr>
                <td>นักเรียน/Student</td>
                <td>30</td>
              </tr>
              <tr>
                <td>เด็ก (อายุไม่เกิน 12 ปี)/Child</td>
                <td>10</td>
              </tr>
              <tr>
                <td>ผู้สูงอายุ (60 ปีขึ้นไป)/Senior</td>
                <td>30</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-center">ต่างชาติ/Foreign</td>
              </tr>
              <tr>
                <td>Adult</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Child</td>
                <td>50</td>
              </tr>
            </tbody>
          </Table>
        </section>

        {/* Parking Fees Section */}
        <section>
          <h2 className="text-center">Parking Fees</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ประเภท/Detail</th>
                <th>ค่าเข้าชม (บาท)/Price (Baht)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>รถจักรยานยนต์/Motorcycle</td>
                <td>10</td>
              </tr>
              <tr>
                <td>รถยนต์ 4 ล้อ/Car</td>
                <td>50</td>
              </tr>
              <tr>
                <td>รถโค้ช/Bus</td>
                <td>60</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}

export default About;
