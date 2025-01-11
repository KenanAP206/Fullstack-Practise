import React from 'react'
import './SecondFeature.css'
import { FaRegUser } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";

function index() {
  return (
    <div>
      <section id='secondfeature'>
      <div className="sec-head">
        <h2>Our Unique Features that can impress you</h2>
        <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="secfeat-cards">
          <div className="sf-card">
            <div className="sf-c-up">
            <FaRegUser />
            <h5>Expert Technicians</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className="sf-card">
            <div className="sf-c-up">
            <TbCertificate />
            <h5>Professional Service</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className="sf-card">
            <div className="sf-c-up">
            <PiPhoneDisconnectBold />
            <h5>Great Support</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className="sf-card">
            <div className="sf-c-up">
            <IoRocketOutline />
            <h5>Technical Skills</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className="sf-card">
            <div className="sf-c-up">
            <IoDiamondOutline />
            <h5>Highly Recomended</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
          <div className="sf-card">
            <div className="sf-c-up">
            <IoChatbubbleOutline />
            <h5>Positive Reviews</h5>
            </div>
            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
