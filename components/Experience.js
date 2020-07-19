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
        - au sein de{" "}
        <a
          className="underline italic"
          href="https://biborne.com"
          target="_blank"
        >
          Biborne
        </a>{" "}
        depuis mars 2019. J'ai aussi été 2 fois développeur : une fois à l'
        <a
          className="underline italic"
          href="https://curie.fr/"
          target="_blank"
        >
          Institut Curie
        </a>{" "}
        (pendant 3 mois) pour y développer - en C couplé à OpenMPI - une
        application de détection de variations génétiques pouvant entraîner un
        cancer et la seconde fois, à la{" "}
        <a
          className="underline italic"
          href="https://www.grandreims.fr/"
          target="_blank"
        >
          DSIT du Grand Reims
        </a>{" "}
        (2 mois) afin d'y développer 2 applications Web de gestion des factures
        en PHP couplé au framework Zend 2.
      </p>
    </div>
  );
};
export default Experience;
