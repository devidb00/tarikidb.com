const Experience = () => {
  return (
    <div className="w-5/6 flex justify-between items-center">
      <div className="flex flex-col">
        <div className="text-white sm:text-5xl text-xl font-display">
          <span>Tarik </span>
          <span>ID BELLOUCH</span>
        </div>

        <div className="text-white sm:text-xl font-light">
          <a
            className="w-auto"
            target="_blank"
            href="https://github.com/devidb00"
          >
            <span className="cursor-pointer">
              <i className="fab fa-github " />
              <span className="ml-2 ">GitHub</span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/tarik-id-bellouch-9478b210a"
            target="_blank"
          >
            <span className="cursor-pointer ml-3 border-l-2 pl-3">
              <i className="fab fa-linkedin " />
              <span className="ml-2 ">LinkedIn</span>
            </span>
          </a>
        </div>
      </div>
      <div className="sm:h-32 sm:w-32 h-20 w-20">
        <img
          className="rounded-full border-4 border-white"
          src="/ProfileImage.jpeg"
          alt="Ma photo"
        />
      </div>
    </div>
  );
};
export default Experience;
