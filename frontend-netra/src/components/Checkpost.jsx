import React from 'react'
import './Checkpost.css'

const Checkpost = ({ onImmigrationClick, onBorderGuardClick }) => {
    return (
        <div className='cp-main'>

            <img className='cp-img' src="https://images.unsplash.com/photo-1780474980645-26c7bea72399?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className='cp-tabs'>
                <span onClick={onImmigrationClick}>Immigration</span>
                <span onClick={onBorderGuardClick}>Border Guard</span>
                <span className='active'>Checkpost</span>
            </div>

            <div className='cp-card'>
                <span className='cp-title'>Checkpost</span>
                <form>
                    <div className="cp-form-group">
                        <label>Passport ID</label>
                        <input type="text" placeholder="Enter Passport ID" />
                    </div>
                    <div className="cp-form-group">
                        <label>State</label>
                        <input type="text" placeholder="Enter State" />
                    </div>
                    <div className="cp-form-group">
                        <label>Delay-days</label>
                        <input type="number" placeholder='Delay days' />
                    </div>
                    <button className="cp-submit-btn">Deploy</button>
                </form>
            </div>

        </div>
    )
}

export default Checkpost