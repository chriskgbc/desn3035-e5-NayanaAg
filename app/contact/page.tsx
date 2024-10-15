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
                    <img className="d-block w-100 mb-3" src="https://picsum.photos/id/301/1280/720" />
                    <h1>Contact Us</h1>
                    <p>
                        You can reach us at 647 XXX YYYY.
                    </p>
                </div>

            </div>
        </div>

    </>
}