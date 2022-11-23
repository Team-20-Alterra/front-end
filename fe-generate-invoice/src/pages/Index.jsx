import Header from "../component/Header"
import { useState } from "react"

import Admin from "../component/Admin";
import Client from "../component/Client";

export default function Home(){
    const tipeUser = ["klien", "admin"];
    const [ myShow, setShow] = useState('')
    return (
        <>
            <Header name="Ginap"/>
            <div className="hero container d-flex flex-row justify-content-between">
                <div className="hero-left">
                    <h1 className="mb-4">Heading 1</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. (Heading 3)</h3>
                    <div className="hero-button d-flex flex-row mt-4">
                        <div className="border border-dark daftar"><p>Daftar</p></div>
                        {/* <div className="border border-dark dapatkan"><p>Dapatkan Aplikasi</p></div> */}
                    </div>
                </div>
                <div className="hero-right">
                    
                </div>
            </div>
            <div className="main">
                <div className="container-fluid coba">
                <h2 className="title-main text-center mb-4 container">Ginap</h2>
                <h4 className="desc-title-main text-center container" id="fitur">(Tentang Aplikasi)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</h4>
                {/* <div className="options-tab">
                    <div className="client-side text-center">
                        <p>Client</p>
                    </div>
                    <div className="admin-side text-center">
                        <p>Admin</p>
                    </div>
                </div> */}
                <div className="options-tab container">
                {tipeUser.map(tipeUser=>(
                    <button
                        type="button" 
                        key={tipeUser} 
                        className={"client-admin text-center"}
                        onClick={() => setShow(tipeUser)}
                    >
                    {tipeUser.toLocaleUpperCase()}
                    </button>
                ))}
                </div>
                </div>
                <div>
                    {myShow === "admin" && (<Admin/>)}
                    {myShow === "klien" && (<Client/>)}
                </div>
            </div>
        </>
    )
}