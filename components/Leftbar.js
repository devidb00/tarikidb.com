import Experience from "./Experience";
import MySkills from "./MySkills";
import Studies from "./Studies";

const Core = () => {
  return (
    <div
      name="screen"
      className="h-screen w-screen flex justify-center items-center"
    >
      <main name="main_card" className="min-w-card h-card shadow-xl">
        <div
          name="main_card_header"
          className="h-header bg-black shadow-xl flex justify-center items-center"
        >
          <Experience />
        </div>
        <div className="my_content h-content w-full overflow-y-scroll bg-white">
          <MySkills />
          <Studies />
        </div>
      </main>
    </div>
  );
};
export default Core;
