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
          ? `bg-gray-100 text-black flex justify-between`
          : `bg-gray-900 text-white flex justify-between`
      }
    >
      <div className="w-1/4 h-screen shadow-2xl mr-10 sticky top-0">
        <div>
          <img
            className="rounded-full h-32 w-32 flex items-center justify-center mx-auto my-12"
            src="ProfileImage.jpeg"
          />
          <p className="text-justify text-xl italic font-hairline mx-8">
            Salut, <img />
            C'est Tarik. Sur ce site, tu peux voir mon C.V ainsi que tout ce qui
            me passsionne. Have fun !
          </p>
          <a
            className="fixed bottom-0 mx-32 pb-4"
            href="https://urlz.fr/ds5e"
            target="_blank"
          >
            <img src="/linkedin.png" />
          </a>
          <input
            className="fixed bottom-0 mx-48 pb-4"
            type="image"
            src={`${theme}.png`}
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
      <div className="w-3/4 mb-4">
        <MySkills className="ml-10" />
        <Studies />
        <Experience />
        <Learning />
      </div>
    </div>
  );
};
export default Leftbar;
