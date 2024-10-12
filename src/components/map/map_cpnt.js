import React, { Component } from 'react';
import './map_cpnt.css';
import DuzMap from '../../imges/map.jpg';

class Map extends Component {
    render() {
        return (
            <div className="map-section">
                <div className="container">
                    {/* Header Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 text-content">
                            <h1 className="heading">
                                เเผนผัง<span className="highlight">สวนสัตว์ดุสิต</span>
                            </h1>
                            <p className="description">
                                แผนผังสวนสัตว์ดุสิตใหม่พร้อมให้คุณสำรวจ! เปิดประสบการณ์ท่องเที่ยวกับแผนผังที่ช่วยให้คุณเดินทางได้อย่างสะดวกสบาย พบกับพื้นที่จัดแสดงสัตว์ที่น่าสนใจ พร้อมจุดพักผ่อน ร้านอาหาร และกิจกรรมสำหรับครอบครัว!
                            </p>
                        </div>
                        {/* Map Image Section */}
                        <div className="col-lg-6 col-md-12 image-container">
                            {/* Image with clickable link */}
                            <a href={DuzMap} target="_blank" rel="noopener noreferrer">
                                <img src={DuzMap} alt="Dusit Zoo Map" className="map-image" />
                            </a>
                        </div>
                    </div>

                    {/* Attraction List Section */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <ul className="attraction-list">
                                <li>1. กองอำนวยการ/ประชาสัมพันธ์ (Head Office/Information)</li>
                                <li>2. ส่วนจัดแสดงนกยูง และ ไก่ฟ้า (Pheasant & Peacock Aviary)</li>
                                <li>3. การแสดงกายกรรมเคนย่า (Acrobatic Kenya Show)</li>
                                <li>4. ศูนย์อาหาร (Food Center)</li>
                                <li>5. ส่วนจัดแสดงนกน้ำ (Water Bird Exhibit)</li>
                                <li>6. ส่วนจัดแสดงช้าง (Elephant Exhibit)</li>
                                <li>7. ส่วนจัดแสดงโคอาล่า (Koala Exhibit)</li>
                                <li>8. ส่วนจัดแสดงนกเพนกวิน (Penguin Exhibit)</li>
                                <li>9. เวลคัมเซ็นเตอร์ (Welcome Center)</li>
                                <li>10. การแสดงแมวน้ำ (Seal Show)</li>
                                <li>11. พิพิธภัณฑ์สัตว์ (Zoo Museum)</li>
                                <li>12. ลานจอดรถ (Parking Lot)</li>
                                <li>13. สวนสัตว์เด็ก (Children Zoo)</li>
                                <li>14. สัตว์หากินกลางคืน (Nocturnal House)</li>
                                <li>15. โรงพยาบาลสัตว์ (Animal Hospital)</li>
                                <li>16. ส่วนจัดแสดงสัตว์แอฟริกา (African Exhibit)</li>
                                <li>17. ส่วนจัดแสดงลิง ค่าง (Primate Exhibit)</li>
                                <li>18. ส่วนจัดแสดงเสือโคร่ง และ สิงโต (Tiger & Lion Exhibit)</li>
                                <li>19. อาคารสัตว์เลื้อยคลาน (Reptile Terrarium)</li>
                                <li>20. ส่วนจัดแสดงหมี (Bear Exhibit)</li>
                                <li>21. ส่วนจัดแสดงฮิปโปโปเตมัส (Hippopotamus Exhibit)</li>
                                <li>22. หลุมหลบภัยสาธารณะ (WWII Air Raid Shelter)</li>
                                <li>23. ส่วนจัดแสดงสัตว์ป่าสงวน (Reserved Wild Animals Exhibit)</li>
                                <li>24. ห้องจัดแสดงภาพสวนสัตว์ดุสิต (Dusit Zoo Gallery)</li>
                                <li>25. ห้องปฐมพยาบาล (First Aid Room)</li>
                                <li>26. ต้นสัก (Teak Tree)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;
