const Experience = () => {
    return (
        <div>
            <p className="uppercase font-hairline-bold text-xl mt-4 italic text-center lg:text-left">
                mes expériences professionnelles
            </p>
            <p className="text-justify mt-4">
                Je suis actuellement Scrum Master et membre de l'équipe de développement
                en tant que développeur Web -{" "}
                <a href="https://reactjs.org" target="_blank">
                    ReactJS
                </a>{" "}
                - au sein de
                Biborne
                depuis mars 2019. J'ai aussi été 2 fois développeur : une fois à l'Institut Curie
                (pendant 3 mois) pour y développer - en C couplé à OpenMPI - une application de détection de variations
                génétiques pouvant entraîner un cancer et la seconde fois, à la DSIT du Grand Reims (2 mois) afin d'y
                développer 2 applications Web de gestion des factures en PHP couplé au framework Zend 2.
            </p>
        </div>
    );
};
export default Experience;
