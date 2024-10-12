import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contract = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Address */}
          <ContactCard
            icon="bi-envelope-open-fill"
            title="Address"
            detail="71 ถนนพระรามที่ 5 แขวงดุสิต เขตดุสิต กรุงเทพมหานคร"
            delay="0.1s"
          />
          {/* Call Now */}
          <ContactCard
            icon="bi-pin-map-fill"
            title="Call Now"
            detail="+0-2281-2000"
            delay="0.3s"
          />
          {/* Mail Now */}
          <ContactCard
            icon="bi-envelope-open-fill"
            title="Mail Now"
            detail="dusit@zoothailand.org"
            delay="0s"
          />
        </div>

        {/* Google Maps Embed */}
        <div className="row g-5">
          <div className="col-lg-3 d-none d-lg-block"></div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100" style={{ minHeight: "500px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5466.3905307683735!2d100.51264054350807!3d13.771182034260375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2995b1780470b%3A0x8a3e0ec6ab5421fe!2z4Liq4Lin4LiZ4Liq4Lix4LiV4Lin4LmM4LiU4Li44Liq4Li04LiV!5e1!3m2!1sth!2sth!4v1725521901287!5m2!1sth!2sth"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

// ContactCard Component
const ContactCard = ({ icon, title, detail, delay }) => (
  <div className="col-lg-4 wow fadeInUp" data-wow-delay={delay}>
    <div className="h-100 bg-light d-flex align-items-center p-5">
      <div className="btn-lg-square bg-white flex-shrink-0">
        <i className={`bi ${icon}`} style={{ color: "#abce1a" }}></i>
      </div>
      <div className="ms-4">
        <p className="mb-2">
          <span className="me-2" style={{ color: "#abce1a" }}>
            #
          </span>
          {title}
        </p>
        <h5 className="mb-0">{detail}</h5>
      </div>
    </div>
  </div>
);

export default Contract;
