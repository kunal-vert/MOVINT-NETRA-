import React, { useState } from 'react';
import './Deployment.css';

const Deployment = () => {
    const [formData, setFormData] = useState({
        passportNumber: '',
        fullName: '',
        nationality: '',
        gender: 'Male',
        dob: '',
        visaType: 'Tourist',
        visaExpiry: '',
        purpose: '',
        entryPoint: '',
        ilpNumber: '',
        destState: '',
        destCity: '',
        hotelName: '',
        employer: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckPassport = async () => {
        console.log('Checking passport:', formData.passportNumber);
        // TODO: fetch from FastAPI backend, then setFormData with returned visitor data
    };

    const handleSubmit = () => {
        console.log('Submitting:', formData);
        // TODO: POST formData to FastAPI backend
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

            <div className="form-layer">
                <div className="passport-section">
                    <p className="section-label">PASSPORT CHECK & RETURNING VISITOR DETECTION</p>
                    <div className="passport-row">
                        <input
                            type="text"
                            name="passportNumber"
                            placeholder="Enter passport number (e.g. E12345678)"
                            value={formData.passportNumber}
                            onChange={handleChange}
                        />
                        <button className="check-btn" onClick={handleCheckPassport}>
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
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Nationality</label>
                                <select name="nationality" value={formData.nationality} onChange={handleChange}>
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
                                <select name="gender" value={formData.gender} onChange={handleChange}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="field">
                                <label>Visa Type</label>
                                <select name="visaType" value={formData.visaType} onChange={handleChange}>
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
                                <input
                                    type="date"
                                    name="visaExpiry"
                                    value={formData.visaExpiry}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="field">
                                <label>Purpose</label>
                                <select name="purpose" value={formData.purpose} onChange={handleChange}>
                                    <option value="">Select...</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <p className="card-title">ENTRY & ILP DETAILS</p>

                        <div className="field">
                            <label>Entry Point</label>
                            <select name="entryPoint" value={formData.entryPoint} onChange={handleChange}>
                                <option value="">Select entry point...</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>ILP Number (if applicable)</label>
                            <input
                                type="text"
                                name="ilpNumber"
                                placeholder="ILP-AP-2024-XXXX"
                                value={formData.ilpNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Destination State</label>
                                <select name="destState" value={formData.destState} onChange={handleChange}>
                                    <option value="">Select state...</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Destination City</label>
                                <select name="destCity" value={formData.destCity} onChange={handleChange}>
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
                                    value={formData.hotelName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="field">
                                <label>Employer / Org</label>
                                <input
                                    type="text"
                                    name="employer"
                                    placeholder="Employer or organization"
                                    value={formData.employer}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="submit">
                    <h1>Submitting as: DGCA officer</h1>
                    <button className="icon-submit" onClick={handleSubmit}>
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/submit-icon-svg-download-png-3154183.png?f=webp&w=256" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deployment;