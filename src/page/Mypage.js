import './Mypage.css'

import { useState } from 'react'

function Mypage() {
    const [demoBG, setDemoBG] = useState('red')
    function handleClick(e) {
        console.log(e.target.style.backgroundColor);
        setDemoBG(e.target.style.backgroundColor)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="color-demo-area" style={{ backgroundColor: demoBG }}></div>
                </div>
                <div className="col-6">
                    <div className="color-selector-area d-flex flex-wrap">
                        <div className="col-3">
                            <div className="color-selector autobg" style={{ backgroundColor: 'salmon' }} onClick={handleClick}></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg" style={{ backgroundColor: 'lightblue' }} onClick={handleClick}></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg" onClick={handleClick}></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg" onClick={handleClick}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mypage;