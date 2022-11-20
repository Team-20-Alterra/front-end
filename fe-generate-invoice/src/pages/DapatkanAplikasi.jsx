import Header from "../component/Header"

export default function GetApp(){
    return(
        <>
            <Header name="GIS"/>
            <div className="container">
                <div className="get-app d-flex flex-row">
                    <div className="img-post">

                    </div>
                    <div>
                        <h1 className="title-getApp">
                            Dapatkan aplikasinya sekarang
                        </h1>
                        <div className="button-getApp text-center">
                            <p>Dapatkan Sekarang di <span className="pstore">Playstore</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}