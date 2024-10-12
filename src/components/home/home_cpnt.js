import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home_cpnt.css";
import Imge1 from "../../imges/ช้างเอเชีย.jpg"; // รูปภาพแรก
import Imge2 from "../../imges/น้อง.jpg"; // รูปภาพที่สอง
import Imge3 from "../../imges/เสือv1.jpg"; // รูปภาพที่สาม
import Imge5 from "../../imges/animals/dusit-zoo.jpg";
import Imge6 from "../../imges/สวน.jpg";

const Home = () => {
  return (
    <div>
      {/* Carousel เริ่มต้น */}
      <Carousel>
        {[Imge1, Imge2, Imge3].map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* Carousel สิ้นสุด */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-4">
                ทำไมคุณควรมาเที่ยวที่
                <span style={{ color: "#abce1a" }}> สวนสัตว์ดุสิต</span>
              </h1>
              <p className="mb-4">
                สัมผัสธรรมชาติกลางกรุง: สวนสัตว์ดุสิต หรือ "เขาดิน"
                แหล่งรวมสัตว์นานาชนิดที่ครบครันที่สุดในใจกลางกรุงเทพฯ
                ท่ามกลางบรรยากาศร่มรื่นและพื้นที่สีเขียวที่ช่วยเติมพลังให้คุณได้ผ่อนคลาย!
              </p>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={Imge5} alt="Dusit Zoo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-4">
                <span style={{ color: "#abce1a" }}>สวนสัตว์ดุสิต</span>
              </h1>
              <p className="mb-4">
                สวนสัตว์ดุสิต เดิมเป็นส่วนหนึ่งของพระราชอุทยานสวนดุสิต โดย
                พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว รัชกาลที่ ๕
                ทรงโปรดเกล้าฯ ให้สร้างขึ้นเป็นสถานที่พักผ่อนส่วนพระองค์
                และทรงนำกวางดาวฝูงหนึ่ง จากชวามาเลี้ยงร่วมกับสัตว์อื่น ๆ
                หลายชนิด ต่อมาในรัชสมัย พระบาทสมเด็จพระเจ้าอยู่หัวอานันทมหิดล
                รัชกาลที่ ๔ คณะรัฐบาลนำโดย จอมพล ป.พิบูลสงคราม นายกรัฐมนตรี
                ได้กราบบังคมทูล ขอพระราชทานสวนดุสิตให้เทศบาลนครกรุงเทพฯ
                ดำเนินการจัดสร้างเป็นสวนสัตว์ และเป็นที่พักผ่อนของประชาชน
                และให้ใช้ชื่อว่า “สวนสัตว์ดุสิต" ซึ่งชาวบ้านทั่วไปเรียกว่า
                “เขาตีนานา” เมื่อวันที่ ๑๙ มีนาคม ๒๕๕๑
              </p>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src={Imge6} alt="Dusit Zoo Nature" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AnimalList /> */}
    </div>
  );
};

export default Home;
