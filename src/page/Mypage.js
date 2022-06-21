import './Mypage.css'

function Mypage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="color-demo-area"></div>
                </div>
                <div className="col-6">
                    <div className="color-selector-area d-flex flex-wrap">
                        <div className="col-3">
                            <div className="color-selector autobg"></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg"></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg"></div>
                        </div>
                        <div className="col-3">
                            <div className="color-selector autobg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mypage;