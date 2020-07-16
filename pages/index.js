import Head from "next/head";
import { useState } from "react";
import { Leftbar } from "../components";
import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const [theme, setTheme] = useState("sun");
  return (
    <div>
      <Head>
        <title>Tarik ID BELLOUCH - Mon site</title>
        <link rel="icon" href={theme === "sun" ? "/sun.png" : "/night.png"} />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Leftbar />
      </ThemeContext.Provider>
    </div>
  );
}
