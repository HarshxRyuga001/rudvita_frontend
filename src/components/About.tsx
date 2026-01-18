
import aboutOfficeImg from "../assets/about_office.png";
import aboutTeamImg from "../assets/about_team.png";
import aboutVisionImg from "../assets/about_vision.png";

const About = () => {
  return (
    <section className="about-container">
      <h1 className="about-title">About us</h1>

      <div className="about-grid">
        {/* Left Section - Who We Are */}
        <div className="about-left">
          <h3>Who We Are</h3>
          <p>
            Rudvita Technologies is a dynamic technology-driven company offering comprehensive
            solutions in <strong>Web Development</strong> and <strong>Business Process Outsourcing (BPO)</strong>.
            We go beyond just building websites; we empower businesses with reliable operational support—from
            precision Data Entry and professional Telecalling to rigorous Quality Assurance and Team Management.
          </p>
          <p>
            Our team handles your critical digital and backend operations with accuracy and efficiency,
            allowing you to focus entirely on your core business growth. Whether you need a robust online
            presence or a scalable workforce, we are your dedicated partner.
          </p>
        </div>

        {/* Right Section - Image 1 */}
        <div className="about-right">
          <img src={aboutOfficeImg} alt="Modern Office" />
        </div>
      </div>

      <div className="about-grid reverse">
        {/* Left Section - Image 2 */}
        <div className="about-left">
          <img src={aboutVisionImg} alt="Our Vision" />
        </div>

        {/* Right Section - Mission & Vision */}
        <div className="about-right">
          <h3>Our Mission</h3>
          <p>
            Our mission is to be a one-stop solution for business growth—providing robust digital
            platforms alongside efficient, scalable operational teams. We aim to deliver excellence
            through accurate data management, proactive customer engagement, and high-quality service delivery.
          </p>
          <br />
          <h3>Our Vision</h3>
          <p>
            To become the most trusted partner for businesses worldwide, recognized for our ability to
            seamlessly integrate technology, skilled professionals, and efficient processes to drive
            sustainable success.
          </p>
        </div>
      </div>

      <div className="why-choose">
        <h3>Why Choose Rudvita Technologies?</h3>
        <ul>
          <li>Comprehensive Web & BPO Solutions under one roof</li>
          <li>Skilled Workforce (Data Entry, Telecallers, Team Leads)</li>
          <li>Rigorous Quality Assurance & Accuracy standards</li>
          <li>Scalable operational support for growing businesses</li>
          <li>Commitment to transparency and long-term partnership</li>
        </ul>
      </div>

      <div className="about-grid">
        {/* Left Section - Team Image */}
        <div className="about-left">
          <div className="company-address">
            <h3>Our Location</h3>
            <p>
              <strong>Rudvita Technologies</strong><br />
              1st floor Purshottam East end tower near VK traders,<br />
              mp nagar zone 2,<br />
              Bhopal, Madhya Pradesh - 462011
            </p>
          </div>
        </div>

        <div className="about-right">
          <img src={aboutTeamImg} alt="Our Team" />
        </div>
      </div>

    </section>
  );
};

export default About;
