import React, { useState,useEffect } from "react";

import { About } from './about'
import { Contact } from './contact'
import { Gallery } from './gallery'
import { Header } from './header'
import { Services } from './services'
import { Solutions } from './solutions'
import JsonData from '../../data/data.json'

export const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <>
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Solutions />
            <Gallery data={landingPageData.Gallery} />
            <Contact data={landingPageData.Contact} />
        </>
    )
}

