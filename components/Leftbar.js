import Experience from "./Experience";
import MySkills from "./MySkills";
import Studies from "./Studies";

const Core = () => {
  return (
    <div
      name="screen"
      className="h-screen w-screen flex sm:justify-center sm:items-center"
    >
      <main
        name="main_card"
        className="sm:min-w-card sm:h-card shadow-xl h-full mb-4 sm:mb-0"
      >
        <div
          name="main_card_header"
          className="sm:h-header sm:relative sm:w-full fixed top-0 left:0 right-0 w-screen h-header_mobile bg-gray-900 shadow-xl flex justify-center items-center"
        >
          <Experience />
        </div>
        <div className="my_content sm:mt-0 mt-mobile sm:h-content h-content_mobile w-full overflow-y-scroll bg-white">
          <MySkills />
          <Studies />
        </div>
      </main>
    </div>
  );
};
export default Core;
