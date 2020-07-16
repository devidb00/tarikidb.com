import MySkills from "./MySkills";
import Studies from "./Studies";
import Experience from "./Experience";
import Learning from "./Learning";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Leftbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "night"
          ? `bg-gray-900 text-white lg:flex justify-between`
          : `bg-gray-100 text-black lg:flex justify-between`
      }
    >
      <div className="lg:w-1/4 pt-2 lg:h-screen shadow-2xl lg:sticky lg:top-0">
        <img
          className="rounded-full h-16 w-16 lg:h-32 lg:w-32 mx-auto lg:my-12"
          src="ProfileImage.jpeg"
        />
        <p className="text-justify font-light lg:font-hairline lg:text-lg mx-4 pt-4">
          Salut, c'est Tarik. Sur ce site, tu peux voir mon C.V ainsi que tout
          ce qui me passsionne.
        </p>
        <div className="flex space-x-4 py-2 pl-40 lg:bottom-0 lg:absolute lg:pb-4">
          <a href="https://urlz.fr/ds5e" target="_blank">
            <img className="flex-row h-4" src="/linkedin.png" />
          </a>
          <input
            type="image"
            className="flex-row h-4"
            src={theme === "sun" ? `/night.png` : "/sun.png"}
            onClick={() => {
              if (theme === "sun") {
                setTheme("night");
              } else {
                setTheme("sun");
              }
            }}
          />
        </div>
      </div>
      <div className="mx-4 lg:w-3/4 pb-4 pt-8">
        <MySkills />
        <Studies />
        <Experience />
        <Learning />
      </div>
    </div>
  );
};
export default Leftbar;
