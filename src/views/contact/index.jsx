import React from 'react'
import "./contactStyle.css";
import Header from "shared/header";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Button from "shared/button";

const ContactPage = () => {
  return (
    <section>
      <Header />
      <section className="contact_container">
        <section className="contact_inner_container">
          <div>
            <h2>Contact Us</h2>
            <p>Any question or remarks? Just write us a message!</p>
          </div>

          {/* =========Form section=========== */}
          <section className="form_parent_div">
            {/* ========== Left side ============== */}
            <div className="form_left_div">
              <div>
                <p className="contact_title">Contact Information</p>
                <p className="contact_sub">
                  Say something to start a live chat!
                </p>
              </div>
              <section className="center_div">
                <div className="fill_call_div">
                  <MdOutlineWifiCalling3 />
                  <p>+1 012 3826 781</p>
                </div>
                <div className="fill_call_div_2">
                  <MdEmail />
                  <p>demo@gmail.com</p>
                </div>
                <div className="fill_call_div_3">
                  <FaLocationDot />
                  <div className="street">
                    <p>132 Dartmouth Street Boston,</p>
                    <p>Massachusetts 02156 United States</p>
                  </div>
                </div>
                <div className="social_form_div">
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <FaInstagramSquare />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                </div>
              </section>
            </div>
            {/* ========== Right side========== */}
            <div className="form_right_div">
              <form className="forms">
                <div className="resida_form">
                  <section className="first_form_section">
                    <div className="resida_first_div ">
                      <label htmlFor="first-name">FirstName</label>
                      <input
                        id="first-name"
                        type="text"
                        placeholder="firstname"
                      />
                    </div>

                    <div className="resida_first_div ">
                      <label htmlFor="last-name">LastName</label>
                      <input
                        id="last-name"
                        type="text"
                        placeholder="lastname"
                      />
                    </div>
                  </section>

                  <section className="last_form_section">
                    <div className="resida_first_div ">
                      <label htmlFor="email">FirstName</label>
                      <input id="email" type="email" placeholder="email" />
                    </div>

                    <div className="resida_first_div ">
                      <label htmlFor="phone">FirstName</label>
                      <input id="phone" type="phone" placeholder="phone" />
                    </div>
                  </section>
                </div>
                {/* ==============Middle================ */}
                <section className="check_container">
                  <div>
                    <p>Select Subject?</p>
                  </div>
                  <div className="input_check_div">
                    <div className="checks">
                      <input type="checkbox" id="inquiry" />
                      <label className="label_text" htmlFor="inquiry">
                        General Inquiry
                      </label>
                    </div>
                    <div className="checks_1">
                      <input type="checkbox" id="payment" />
                      <label className="label_text" htmlFor="payment">
                        Payments and Fees
                      </label>
                    </div>
                    <div className="checks_2">
                      <input type="checkbox" id="technical" />
                      <label className="label_text" htmlFor="technical">
                        Technical
                      </label>
                    </div>
                    <div className="checks_3">
                      <input type="checkbox" id="registration" />
                      <label className="label_text" htmlFor="registration">
                        Registration
                      </label>
                    </div>
                    <div className="checks_4">
                      <input type="checkbox" id="others" />
                      <label className="label_text" htmlFor="others">
                        Others
                      </label>
                    </div>
                  </div>
                </section>

                {/* =============Last section================ */}
                <section className="area_div">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder=" Write your message" />
                </section>
                <div className="message_btn">
                  <Button
                    style={{
                      backgroundColor: "#dba94d",
                      color: "#1f4b43",
                      padding: "7px 12px",
                      width: "226px",
                    }}
                    btnName={"Send message"}
                    rightIcon={
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_3281_46)">
                          <path
                            d="M0.961428 6.3975H12.9721L8.37301 2.01825C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.20353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32077 14.6831 7.62321 14.4453 7.86065L9.20323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.12255 12.5905 8.13189 12.2098 8.37271 11.9805L12.991 7.60125H0.961428C0.629095 7.60125 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z"
                            fill="#1F4B43"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3281_46">
                            <rect
                              width="15"
                              height="12.84"
                              fill="white"
                              transform="translate(0.0859375 0.578125)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                  />
                </div>
              </form>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ContactPage;