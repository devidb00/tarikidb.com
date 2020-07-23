import Head from "next/head";
import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import { Core } from "../components";
import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const [theme, setTheme] = useState(
    new Date(Date.now()).getHours() > 20 || new Date(Date.now()).getHours() < 7
      ? "night"
      : "sun"
  );

  console.log(new Date(Date.now).getHours());
  useEffect(() => {
    ReactGA.initialize("UA-172955852-1");
    ReactGA.pageview("/");
  }, []);
  return (
    <div>
      <Head>
        <title>Tarik ID BELLOUCH | Mon site</title>
        <link rel="icon" href={theme === "sun" ? "/sun.png" : "/night.png"} />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Core />
      </ThemeContext.Provider>
    </div>
  );
}
