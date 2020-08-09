import Head from "next/head";
import ReactGA from "react-ga";
import {useState, useEffect} from "react";
import {Core} from "../components";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

export default function Home() {
    const [theme, setTheme] = useState("sun");
    const [language, setLanguage] = useState("fr");

    useEffect(() => {
        ReactGA.initialize("UA-172955852-1");
        ReactGA.pageview("/");
    }, []);

    return (
        <html lang='fr'>
        <Head>
            <title>Tarik ID BELLOUCH | Mon site</title>
            <link rel="icon" href={theme === "night" ? "night.png" : "sun.png"}/>
            <meta
                name="theme-color"
                content={`${theme === "sun" ? "#edf2f7" : "#1a202c"}`}
            />
            <meta name="description" content="Salut, c'est Tarik. :) "/>
        </Head>
        <LanguageContext.Provider value={{language, setLanguage}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Core/>
            </ThemeContext.Provider>
        </LanguageContext.Provider>
        </html>
    );
}
