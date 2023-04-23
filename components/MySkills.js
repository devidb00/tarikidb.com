const card_content_who = [
  {
    row: 1,
    text: "// Personal information",
  },
  {
    row: 2,
    text: 'const name = "Tarik ID BELLOUCH";',
  },
  {
    row: 3,
    text: 'let location = "Paris Area, France";',
  },
  {
    row: 4,
    text: "",
  },
  {
    row: 5,
    text: "// Hobbies",
  },
  {
    row: 6,
    text: "let hobbies = [",
  },
  {
    row: 7,
    text: ' "Football",',
  },
  {
    row: 8,
    text: '"Computer Science",',
  },
  {
    row: 9,
    text: '"Cinema"',
  },
  {
    row: 10,
    text: "];",
  },
];

const MySkills = () => {
  return (
    <div className="mt-2 h-80 flex justify-center items-center">
      <div className="sm:w-5/6 w-11/12 h-full flex justify-between items-center">
        <div
          name="card_code"
          className="sm:w-4/5 w-full h-auto border-2 rounded-sm border-gray-900 sm:mt-5 my-2"
        >
          <div
            name="header"
            className="h-10 bg-gray-900 flex items-center justify-start"
          >
            <div
              onClick={() => alert("Sorry! You can't close..")}
              className="ml-3 h-3 w-3 bg-red-500 rounded-full cursor-pointer"
            />
            <div className="ml-2 h-3 w-3 bg-yellow-500 rounded-full cursor-pointer" />
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full cursor-pointer" />
          </div>
          <div
            name="content"
            className="h-70 w-auto flex flex-col justify-center items-start"
          >
            <div className="p-2 font-code text-gray-800">
              {card_content_who.map((i) => {
                return (
                  <div key={i.row}>
                    <span>{i.row}</span>{" "}
                    <span
                      className={`${
                        i.row === 1 || i.row === 5 ? "text-gray-500" : null
                      } ${i.row >= 7 && i.row <= 9 ? "ml-8" : "ml-4"}`}
                    >
                      {i.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-xl text-black sm:block hidden ">
          <span className="border-b-2 w-8 h-1 border-black">WHO</span>
          <span> I AM</span>
        </div>
      </div>
    </div>
  );
};
export default MySkills;
