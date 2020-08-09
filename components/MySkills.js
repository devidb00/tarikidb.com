const MySkills = () => {
    return (
        <div>
            <p className="uppercase font-hairline-bold text-xl italic text-center lg:text-left">
                Mes compétences
            </p>
            <div>
                <p className="mt-4 font-hairline text-justify">
                    <span className="font-bold">Web : </span>
                    TypeScript, ReactJS, GraphQL, NodeJS, NextJS et TailwindCSS
                </p>
                <p className="font-hairline">
                    <span className="font-bold">Gestion de projets : </span>
                    agile (Scrum |{" "}
                    <a
                        className="underline"
                        href="https://www.scrum.org/certificates/459467"
                        target="_blank"
                        rel="noopener"
                    >
                        PSM
                    </a>{" "}
                    |{" "}
                    <a
                        className="underline"
                        href="https://www.scrum.org/certificates/461892"
                        target="_blank"
                        rel="noopener"
                    >
                        PSPO
                    </a>{" "}
                    et Kanban) et classique
                </p>
                <p className="font-hairline">
                    <span className="font-bold">Base de données : </span>
                    PostgreSQL
                    ,
                    MySQL
                    et
                    Oracle
                </p>
                <p className="font-hairline">
                    <span className="font-bold">Analyse de données : </span>
                    Python
                    ,
                    Spark
                    et
                    Spark SQL
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
