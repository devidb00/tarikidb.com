const card_content_what = [
  {
    row: 1,
    text: "// Work information",
  },
  {
    row: 2,
    text: 'const profession = ["Software Engineer", "Scrum Master"];',
  },
  {
    row: 3,
    text: "",
  },
  {
    row: 4,
    text: "// Most important skills",
  },
  {
    row: 5,
    text: 'const projectManagement = ["Scrum", "Kanban"]',
  },
  {
    row: 6,
    text: "const favoriteStack = [",
  },
  {
    row: 7,
    text: '"NextJS",',
  },
  {
    row: 8,
    text: '"NodeJS",',
  },
  {
    row: 9,
    text: '"PostgreSQL",',
  },
  {
    row: 10,
    text: '"TypeORM",',
  },
  {
    row: 11,
    text: '"Sass",',
  },
  {
    row: 12,
    text: "];",
  },
];

const Studies = () => {
  return (
    <div className="my-10 h-86 flex justify-center items-center">
      <div className="w-5/6 h-full flex justify-between items-center">
        <div className="text-xl text-black">
          <span className="border-b-2 w-8 h-1 border-black">WHAT</span>
          <span> I DO</span>
        </div>
        <div
          name="card_code"
          className="w-4/5 h-full border-2 rounded-sm border-black"
        >
          <div
            name="header"
            className="h-10 bg-black flex items-center justify-start"
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
            className="h-70 mt-4 w-auto flex flex-col justify-center items-start"
          >
            <div className="p-4 font-code text-gray-800">
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
