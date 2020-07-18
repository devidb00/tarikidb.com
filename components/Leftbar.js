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
      className={`flex flex-row ${
        theme === "sun" ? "bg-grey-200 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex flex-col h-screen w-1/4 shadow-2xl sticky top-0">
        <div className="h-full">
          <img
            className="rounded-full h-32 w-32 mx-auto my-8"
            src="/ProfileImage.jpeg"
            alt="Ma photo"
          />
          <p className="text-center px-4">Salut, c'est Tarik !</p>
        </div>
        <div className="h-12 flex flex-row justify-center items-baseline space-x-4">
          <div>
            <a href="https://urlz.fr/ds5e" target="_blank">
              <img className="w-4 h-4" src="/linkedin.png" />
            </a>
          </div>
          <div>
            <input
              type="image"
              src={theme === "sun" ? `/night.png` : "/sun.png"}
              className="w-4 h-4"
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
      </div>
      <div className="w-3/4 h-auto px-6 py-4">
        <MySkills />
        <Studies />
        <Experience />
        <Learning />
      </div>
    </div>
  );
};
export default Leftbar;
