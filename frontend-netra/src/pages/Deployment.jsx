import { useRef } from 'react';
import './Deployment.css';

const Deployment = () => {
    const formRef = useRef(null);
    const passportRef = useRef(null);

    const handleCheckPassport = async () => {
        const passportNumber = passportRef.current.value;
        console.log('Checking passport:', passportNumber);
        // TODO: fetch from FastAPI backend, then populate fields via formRef.current.elements
    };

    const handleSubmit = () => {
        const data = Object.fromEntries(new FormData(formRef.current));
        console.log('Submitting:', data);
        // TODO: POST data to FastAPI backend
    };

    return (
        <div className="Entry">
            <div className="check-layer">
                <div className="operating">Operating As:</div>
                <div className="check-post">
                    <span className="active">Airport Immigration</span>
                    <span>Checkpost Officer</span>
                    <span>Hotel Desk</span>
                    <span>Toll Operator</span>
                    <span>Border Guard</span>
                </div>
            </div>

            <form className="form-layer" ref={formRef}>
                <div className="passport-section">
                    <p className="section-label">PASSPORT CHECK & RETURNING VISITOR DETECTION</p>
                    <div className="passport-row">
                        <input
                            type="text"
                            name="passportNumber"
                            placeholder="Enter passport number (e.g. E12345678)"
                            ref={passportRef}
                        />
                        <button type="button" className="check-btn" onClick={handleCheckPassport}>
                            Check Passport
                        </button>
                    </div>
                </div>

                <div className="details-grid">
                    <div className="form-card">
                        <p className="card-title">VISITOR DETAILS</p>

                        <div className="field">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="As on passport"
                            />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Nationality</label>
                                <select name="nationality" defaultValue="">
                                    <option value="">Select...</option>
                                    <option>Chinese</option>
                                    <option>Bangladeshi</option>
                                    <option>Myanmar</option>
                                    <option>Pakistani</option>
                                    <option>Thai</option>
                                    <option>Myanmarese</option>
                                    <option>American</option>
                                    <option>British</option>
                                    <option>Japanese</option>
                                    <option>South Korean</option>
                                    <option>Nepali</option>
                                    <option>Sri Lankan</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Gender</label>
                                <select name="gender" defaultValue="Male">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Date of Birth</label>
                                <input type="date" name="dob" />
                            </div>
                            <div className="field">
                                <label>Visa Type</label>
                                <select name="visaType" defaultValue="Tourist">
                                    <option>Tourist</option>
                                    <option>Business</option>
                                    <option>Student</option>
                                    <option>Research</option>
                                    <option>Diplomatic</option>
                                    <option>Transit</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Visa Expiry</label>
                                <input type="date" name="visaExpiry" />
                            </div>
                            <div className="field">
                                <label>Purpose</label>
                                <select name="purpose" defaultValue="">
                                    <option value="">Select...</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <p className="card-title">ENTRY & ILP DETAILS</p>

                        <div className="field">
                            <label>Entry Point</label>
                            <select name="entryPoint" defaultValue="">
                                <option value="">Select entry point...</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>ILP Number (if applicable)</label>
                            <input
                                type="text"
                                name="ilpNumber"
                                placeholder="ILP-AP-2024-XXXX"
                            />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Destination State</label>
                                <select name="destState" defaultValue="">
                                    <option value="">Select state...</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Destination City</label>
                                <select name="destCity" defaultValue="">
                                    <option value="">Select city...</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Hotel Name</label>
                                <input
                                    type="text"
                                    name="hotelName"
                                    placeholder="Declared accommodation"
                                />
                            </div>
                            <div className="field">
                                <label>Employer / Org</label>
                                <input
                                    type="text"
                                    name="employer"
                                    placeholder="Employer or organization"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="footer">
                <div className="submit">
                    <h1>Submitting as: DGCA officer</h1>
                    <button type="button" className="icon-submit" onClick={handleSubmit}>
                        <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/submit-icon-svg-download-png-3154183.png?f=webp&w=256"
                            alt="Submit"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deployment;