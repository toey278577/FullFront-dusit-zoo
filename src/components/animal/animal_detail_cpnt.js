import React from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import Img1 from "../../imges/animals/68943.jpg"; // Update the import path as needed
import Img2 from "../../imges/animals/68956.jpg"; // Update the import path as needed
import Img3 from "../../imges/animals/68949.jpg"; // Update the import path as needed
import "./animal_detail_cpnt.css";
import Card from "react-bootstrap/Card";

const AnimalDetail = () => {
  const { animalName } = useParams();

  const data = [
    {
      id: 1,
      animalName: "นกยูง",
      animalImage: Img1,
      decription: {
        behavior:
          "เป็นสัตว์ที่มีความสง่างาม พวกมันมักจะโชว์ความสวยงามของหางยาวเพื่อดึงดูดเพศตรงข้าม โดยเฉพาะในฤดูผสมพันธุ์ มักจะหากินในช่วงเช้าหรือบ่าย และมักจะใช้เวลาที่เหลืออยู่ในการพักผ่อนใต้ร่มเงา",
        place:
          "พบได้ในป่าทึบหรือป่าเบญจพรรณ ป่าดิบแล้ง หรือใบริเวณป่าที่มีความชุ่มชื้น กระจายตัวอยู่ในหลายพื้นที่ของเอเชียตะวันออกเฉียงใต้",
        reproduce:
          "มักอยู่ในช่วงปลายฤดูร้อนถึงต้นฤดูฝน ตัวเมียจะสร้างรังบนพื้นดิน โดยทำรังง่าย ๆ ในพุ่มไม้ที่ปลอดภัยจากนักล่า จะวางไข่ประมาณ 3-6 ฟอง และฟักไข่เป็นเวลา 26-28 วัน",
        food: "เป็นสัตว์กินพืชและสัตว์อื่นเป็นอาหาร รวมถึงเมล็ดพืช ผลไม้ หนอน และแมลงต่าง ๆ",
        status:
          "ถูกจัดให้อยู่ในสถานภาพ ใกล้สูญพันธุ์ (Endangered) เนื่องจากการถูกล่าและการสูญเสียที่อยู่อาศัยตามธรรมชาติ",
      },
    },
    {
      id: 2,
      animalName: "งูหลามทอง",
      animalImage: Img2,
      decription: {
        behavior:
          "เป็นงูที่ไม่มีพิษ ซึ่งเป็นสัตว์ที่เคลื่อนไหวช้าและอาศัยอยู่บนพื้นดินเป็นหลัก แต่มันสามารถว่ายน้ำได้ดี",
        place:
          "อยู่ในพื้นที่หลากหลาย รวมถึงป่าดิบชื้น, ป่าทึบ, พื้นที่ชุ่มน้ำ หรือใกล้แหล่งน้ำพบได้ในหลายประเทศในเอเชียตะวันออกเฉียงใต้",
        reproduce:
          "เป็นสัตว์ที่ออกไข่ ตัวเมียจะวางไข่ประมาณ 20-100 ฟองต่อคราว ตัวเมียจะดูแลและคุ้มครองไข่จนกระทั่งฟัก ซึ่งใช้เวลาประมาณ 2-3 เดือน",
        food: "กินสัตว์เลี้ยงลูกด้วยนมขนาดเล็กถึงขนาดใหญ่ เช่น หนู, กระต่าย, สุนัขเล็ก, หมูป่า และแม้แต่นกหรือสัตว์เลื้อยคลานอื่น ๆ",
        status:
          "ในปัจจุบันถือว่า ใกล้สูญพันธุ์ (Vulnerable) ในบางพื้นที่ เนื่องจากการล่ามากเกินไปเพื่อนำหนังและเนื้อของมันมาใช้ประโยชน์",
      },
    },
    {
      id: 3,
      animalName: "สิงโต",
      animalImage: Img3,
      decription: {
        behavior:
          "มีพฤติกรรมคล้ายกับสิงโตทั่วไปที่อยู่เป็นฝูงสิงโตตัวผู้มักมีอาณาเขตของตัวเองและคอยป้องกันไม่ให้ตัวผู้ตัวอื่นเข้ามารุกราน",
        place:
          "เคยอาศัยอยู่ในภูเขาแอตลาสและพื้นที่ทะเลทรายซาฮาราในแอฟริกาเหนือ",
        reproduce:
          "มีการขยายพันธุ์คล้ายกับสิงโตสายพันธุ์อื่น ตัวเมียจะตั้งท้องเป็นเวลาประมาณ 110 วัน และมักคลอดลูกครั้งละ 2-4 ตัว",
        food: "สัตว์กินพืชขนาดใหญ่ เช่น กวางและม้าลาย พวกมันยังล่าควายและสัตว์ป่าขนาดใหญ่อื่น ๆ ในพื้นที่แถบภูเขาและทุ่งหญ้า",
        status:
          "ถูกจัดให้อยู่ในสถานภาพ สูญพันธุ์ในธรรมชาติ (Extinct in the Wild) เนื่องจากการล่าและการสูญเสียที่อยู่อาศัยในแอฟริกาเหนือ",
      },
    },
  ];

  const animal = data.find((animal) => animal.animalName === animalName);

  if (!animal) {
    return <p>Animal not found</p>;
  }

  return (
    <div className="dataAnimal">
      {/* <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={animal.animalImage}
          alt={animal.animalName}
        />
        <Card.Body>
          <Card.Text>
            <div className="text1">
              <h1>{animal.animalName}</h1>
              <h3>พฤติกรรม</h3>
              <p>{animal.decription.behavior}</p>
              <h3>ที่อยู่อาศัย</h3>
              <p>{animal.decription.place}</p>
              <h3>การสืบพันธ์</h3>
              <p>{animal.decription.reproduce}</p>
              <h3>อาหาร</h3>
              <p>{animal.decription.food}</p>
              <h3>สถานภาพ</h3>
              <p>{animal.decription.status}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card> */}
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1>
              <p>
                <span class="me-2" style={{ color: "#abce1a" }}>
                  <h1>#{animal.animalName}</h1>
                </span>
              </p>
            </h1>
            <h5>พฤติกรรม</h5>
            <p>{animal.decription.behavior}</p>
            <h5>ที่อยู่อาศัย</h5>
            <p>{animal.decription.place}</p>
            <h5>การสืบพันธ์</h5>
            <p>{animal.decription.reproduce}</p>
            <h5>อาหาร</h5>
            <p>{animal.decription.food}</p>
            <h5>สถานภาพ</h5>
            <p>{animal.decription.status}</p>
          </div>
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="img-border ">
              <img class="img-fluid positionimg" src={animal.animalImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
