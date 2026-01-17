
import { motion } from "framer-motion";
import bpoImg from "../assets/bpo_services.png";
import dataEntryImg from "../assets/data_entry_operator.png";
import telecallerImg from "../assets/telecaller_services.png";
import qualityCheckerImg from "../assets/quality_checker.png";
import teamLeadImg from "../assets/team_lead_support.png";

const Services = () => {
    return (
        <section className="services-page" id="services">
            <h2>Our Services</h2>
            <p className="services-desc">
                At Rudvita Technologies, we offer complete website solutions – from
                development to long-term maintenance – ensuring your digital presence
                stays strong and secure.
            </p>

            {/* CARD 1 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src={bpoImg} alt="BPO Services" />
                    <div>
                        <h3>BPO Services</h3>
                        <p>
                            We provide reliable and efficient BPO solutions to help businesses reduce operational costs and focus on core growth.</p>
                        <ul>
                            <li>Inbound & outbound process handling</li>
                            <li>Customer support & back-office operations</li>
                            <li>Scalable workforce solutions</li>
                            <li>Cost-effective process management</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src={dataEntryImg} alt="Data Entry Operator" />
                    <div>
                        <h3>Data Entry Operator</h3>
                        <p>
                            Our trained data entry professionals ensure accurate, fast, and secure handling of your business data.
                        </p>
                        <ul>
                            <li>Data entry & data processing</li>
                            <li>Document digitization</li>
                            <li>Spreadsheet & database management</li>
                            <li>High accuracy & confidentiality</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src={telecallerImg} alt="Telecaller Services" />
                    <div>
                        <h3>Telecaller Services</h3>
                        <p>
                            We offer professional telecalling services to improve customer engagement and drive business results.
                        </p>
                        <ul>
                            <li>Sales & lead generation calls</li>
                            <li>Customer follow-ups</li>
                            <li>Appointment scheduling</li>
                            <li>Professional call handling</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content">
                    <img src={qualityCheckerImg} alt="Quality Checker" />
                    <div>
                        <h3>Quality Checker</h3>
                        <p>
                            Our quality checkers ensure high standards, accuracy, and compliance across your operations.
                        </p>
                        <ul>
                            <li>Process & output verification</li>
                            <li>Error detection & reporting</li>
                            <li>Quality audits & checks</li>
                            <li>Performance improvement support</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* CARD 5 */}
            <motion.div
                className="service-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                <div className="service-content" >
                    <img src={teamLeadImg} alt="Team Lead Support" />
                    <div className="mini-card2">

                        <h3>Team Lead Support</h3>
                        <p>
                            We provide experienced team leads to manage teams, ensure productivity, and maintain quality standards.
                        </p>
                        <ul>
                            <li>Team supervision & coordination</li>
                            <li>Performance monitoring</li>
                            <li>Task allocation & reporting</li>
                            <li>Process optimization</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;


