const MySkills = () => {
  return (
    <div>
      <p className="uppercase font-hairline-bold text-xl italic text-center lg:text-left">
        Mes compétences
      </p>
      <div>
        <p className="mt-4 font-hairline text-justify">
          <span className="font-bold">Web : </span>
          <a href="https://www.typescriptlang.org/" target="_blank">
            TypeScript
          </a>
          ,{" "}
          <a href="https://reactjs.org/" target="_blank">
            ReactJS
          </a>
          ,{" "}
          <a href="https://graphql.org/" target="_blank">
            GraphQL
          </a>
          ,{" "}
          <a href="https://nodejs.org/en/" target="_blank">
            NodeJS
          </a>
          ,{" "}
          <a href="https://nextjs.org/" target="_blank">
            NextJS
          </a>{" "}
          et{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            TailwindCSS
          </a>
        </p>
        <p className="font-hairline">
          <span className="font-bold">Gestion de projets : </span>
          agile (Scrum |{" "}
          <a
            className="underline"
            href="https://www.scrum.org/certificates/459467"
            target="__blank"
          >
            PSM
          </a>{" "}
          |{" "}
          <a
            className="underline"
            href="https://www.scrum.org/certificates/461892"
            target="__blank"
          >
            PSPO
          </a>{" "}
          et Kanban) et classique
        </p>
        <p className="font-hairline">
          <span className="font-bold">Base de données : </span>
          <a href="https://www.postgresql.org/" target="_blank">
            PostgreSQL
          </a>
          ,{" "}
          <a href="https://www.mysql.com/fr/" target="_blank">
            MySQL
          </a>{" "}
          et{" "}
          <a
            href="https://www.oracle.com/fr/database/technologies/"
            target="_blank"
          >
            Oracle
          </a>
        </p>
        <p className="font-hairline">
          <span className="font-bold">Analyse de données : </span>
          <a href="https://www.python.org/" target="_blank">
            Python
          </a>
          ,{" "}
          <a href="https://spark.apache.org/" target="_blank">
            Spark
          </a>{" "}
          et{" "}
          <a href="https://spark.apache.org/sql/" target="_blank">
            Spark SQL
          </a>
        </p>
        <p className="font-hairline">
          <span className="font-bold">Conception : </span>
          UML, Merise et modèle Archimate (SI)
        </p>
        <p className="font-hairline">
          <span className="font-bold">Langue : </span>
          Français, Anglais et Arabe
        </p>
      </div>
    </div>
  );
};
export default MySkills;
