import Head from "next/head";
import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import { Core } from "../components";
import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const actualDate = new Date(Date.now()).getHours();
  const [theme, setTheme] = useState(
    actualDate > 20 || actualDate < 7 ? "night" : "sun"
  );

  console.log(actualDate);

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
