import MySkills from "./MySkills";
import Studies from "./Studies";
import Experience from "./Experience";
import Learning from "./Learning";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Core = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  let header = "";
  let body = "";
  if (theme === "night") {
    header = "bg-gray-900 text-white";
    body = "bg-gray-900 border-gray-900";
  } else if (theme == "sun") {
    header = "bg-grey-200 text-black";
    body = "bg-white border-white";
  }
  console.log("Theme", theme);
  console.log("Couleur du header : ", header);
  console.log("Couleur du body : ", body);
  return (
    <div className={`flex lg:flex-row flex-col bg-gray-900 text-white`}>
      <div
        className={`flex flex-col bg-gray-900 border-gray-900 h-24 lg:h-screen w-screen lg:w-1/4 shadow-2xl sticky top-0`}
      >
        <div className="h-full">
          <img
            className="rounded-full h-16 w-16 lg:h-32 lg:w-32 mx-auto lg:my-8 my-1"
            src="/ProfileImage.jpeg"
            alt="Ma photo"
          />
          <div className="hidden lg:inline text-sm text-center italic font-thin">
            <p className="mx-4">Salut, c'est Tarik !</p>
            <p className="mx-4">
              {" "}
              Je suis Scrum Master. Je m'interesse aussi beaucoup à la BI et au
              développement Web !
            </p>
          </div>
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
              src={theme === "sun" ? `night.png` : "sun.png"}
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
      <div className="w-screen lg:w-3/4 h-auto px-4 lg:px-6 lg:py-4 py-2">
        <MySkills />
        <Studies />
        <Experience />
        <Learning />
      </div>
    </div>
  );
};
export default Core;
