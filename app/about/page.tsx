import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <Header />
                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://picsum.photos/id/501/1280/720" />
                    <h1>About Us</h1>
                    <p>
                        We are the best coffee roaster!
                    </p>
                </div>

            </div>
        </div>

    </>
}