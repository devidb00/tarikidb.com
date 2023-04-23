const card_content_what = [
  {
    row: 1,
    text: "# Work information",
  },
  {
    row: 2,
    text: 'profession = ["Software Engineer", "Data Engineer"]',
  },
  {
    row: 3,
    text: "",
  },
  {
    row: 4,
    text: "# Most important skills",
  },
  {
    row: 5,
    text: 'project_management = ["Scrum", "Kanban"]',
  },
  {
    row: 6,
    text: "favorite_stack = [",
  },
  {
    row: 7,
    text: '"Python",',
  },
  {
    row: 8,
    text: '"JavaScript",',
  },
  {
    row: 9,
    text: '"PostgreSQL",',
  },
  {
    row: 10,
    text: '"Azure",',
  },
  {
    row: 11,
    text: '"AWS"',
  },
  {
    row: 12,
    text: "]",
  },
];

const Studies = () => {
  return (
    <div className="my-8 h-86 flex justify-center items-center">
      <div className="sm:w-5/6 w-11/12 h-full flex justify-between items-center">
        <div className="text-xl text-black sm:block hidden">
          <span className="border-b-2 w-8 h-1 border-gray-900">WHAT</span>
          <span> I DO</span>
        </div>
        <div
          name="card_code"
          className="sm:w-4/5 w-full h-auto border-2 rounded-sm border-gray-900 my-4"
        >
          <div
            name="header"
            className="h-10 bg-gray-900 flex items-center justify-start"
          >
            <div
              onClick={() => alert("Sorry! You can't close..")}
              className="ml-3 h-3 w-3 bg-red-500 rounded-full cursor-pointer"
            />
            <div
              onClick={() => alert("Sorry again! You are too curious..")}
              className="ml-2 h-3 w-3 bg-yellow-500 rounded-full cursor-pointer"
            />
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full cursor-pointer" />
          </div>
          <div
            name="content"
            className="sm:h-74 h-80 mt-4 w-auto flex flex-col justify-center items-start my-4"
          >
            <div className="p-2 font-code text-gray-800">
              {card_content_what.map((i) => {
                return (
                  <div key={i.row}>
                    <span>{i.row}</span>{" "}
                    <span
                      className={`${
                        i.row === 1 || i.row === 4 ? "text-gray-500" : ""
                      } ${i.row >= 7 && i.row <= 11 ? "ml-8" : "ml-4"}`}
                    >
                      {i.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Studies;
