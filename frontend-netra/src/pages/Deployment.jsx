import React, { useState } from 'react';
import './Deployment.css';
import OperatingL from '../components/UI/OperatingL';
import Immigration from '../components/Transition/Immigration';

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
            

           <OperatingL/>

           <Immigration/>

            
        </div>
    );
};

export default Deployment;