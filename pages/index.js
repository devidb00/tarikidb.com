import Head from "next/head";
import { useState } from "react";
import { Leftbar } from "../components";
import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const [theme, setTheme] = useState("sun");
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Leftbar />
      </ThemeContext.Provider>
    </div>
  );
}
