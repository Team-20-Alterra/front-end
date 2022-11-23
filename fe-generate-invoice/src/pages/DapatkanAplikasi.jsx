import Header from "../component/Header"

import android from "../assets/image/android3.png"

export default function GetApp(){
    return(
        <>
            <Header name="Ginap"/>
            <div className="container">
                <div className="get-app d-flex flex-row">
                    <div className="img-post">

                    </div>
                    <div >
                        <div>
                            <h1 className="title-getApp">
                                Dapatkan aplikasinya sekarang
                            </h1>
                            <div className="button-getApp text-center d-flex flex-row">
                                <div className="logo-android">
                                    <img src={android} alt="android" />
                                </div>
                                <p>Dapatkan Sekarang di <span className="pstore">Playstore</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}