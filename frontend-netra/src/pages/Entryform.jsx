import React from 'react';
import './Entryform.css';

const Entryform = () => {
    return (
        <div className="Entry">

            <div className="header">
                <div className="content">
                    <div className="right-content">Entry Form</div>
                    <div className="left-content">MHA Officer</div>
                </div>
            </div>

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
                        <input type="text" placeholder="Enter passport number (e.g. E12345678)" />
                        <button className="check-btn">Check Passport</button>
                    </div>
                </div>

                <div className="details-grid">

                    <div className="form-card">
                        <p className="card-title">VISITOR DETAILS</p>

                        <div className="field">
                            <label>Full Name</label>
                            <input type="text" placeholder="As on passport" />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Nationality</label>
                                <select>    <option value="">Select...</option>
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
                                    <option>Sri Lankan</option></select>
                            </div>
                            <div className="field">
                                <label>Gender</label>
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Date of Birth</label>
                                <input type="date" />
                            </div>
                            <div className="field">
                                <label>Visa Type</label>
                                <select>
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
                                <input type="date" />
                            </div>
                            <div className="field">
                                <label>Purpose</label>
                                <select><option>Select...</option></select>
                            </div>
                        </div>
                    </div>

                    <div className="form-card">
                        <p className="card-title">ENTRY & ILP DETAILS</p>

                        <div className="field">
                            <label>Entry Point</label>
                            <select><option>Select entry point...</option></select>
                        </div>

                        <div className="field">
                            <label>ILP Number (if applicable)</label>
                            <input type="text" placeholder="ILP-AP-2024-XXXX" />
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Destination State</label>
                                <select><option>Select state...</option></select>
                            </div>
                            <div className="field">
                                <label>Destination City</label>
                                <select><option>Select city...</option></select>
                            </div>
                        </div>

                        <div className="field-row">
                            <div className="field">
                                <label>Hotel Name</label>
                                <input type="text" placeholder="Declared accommodation" />
                            </div>
                            <div className="field">
                                <label>Employer / Org</label>
                                <input type="text" placeholder="Employer or organization" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="submit">
                    <h1>Submitting as: DGCA officer
</h1>
                    <button className="icon-submit">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/submit-icon-svg-download-png-3154183.png?f=webp&w=256" alt="" /></button>
                </div>
            </div>

        </div>
    );
};

export default Entryform;