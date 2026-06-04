import React from 'react'
import './Borderguard.css'

const Borderguard = () => {
    return (
        <div className='first'>
            <div className="Card">
                <div className="Border">
                    <img
                        src="https://d3t79nicn48uzj.cloudfront.net/bsfhindi/custom/1746079536.png"
                        alt="BSF Logo"
                    />
                </div>
                <div className="table">
                    <form>
                        <div className="form-group">
                            <label>Passport ID</label>
                            <input type="text" placeholder="Enter Passport ID" />
                        </div>
                        <div className="form-group">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter Nationality" />
                        </div>
                        <div className="form-group">
                            <label>Delay-days</label>
                            <input type="number" placeholder='Delay days' />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Borderguard