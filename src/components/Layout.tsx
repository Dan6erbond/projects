import * as React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return (
        <React.Fragment>
            <Header/>
            <main style={{minHeight: '100vh'}}>
                {props.children}
            </main>
            <br/>
            <Footer/>
        </React.Fragment>
    );
}