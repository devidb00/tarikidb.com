const Learning = () => {
  return (
    <div>
      <p className="uppercase mt-4 font-hairline-bold text-xl">
        en cours d'apprentissage
      </p>
      <div className="mt-4">
        <p>
          Comme l'apprentissage se s'arrêtte jamais, je suis en ce moment des
          cours pour apprendre ou pour me mettre à jour (liste non exhaustive):
        </p>
        <ul>
          <li> - GraphQL à travers Udemy</li>
          <li>
            {" "}
            - TailwindCSS à travers{" "}
            <a href="https://scrimba.com/" target="_blank">
              Scrimba
            </a>
          </li>
          <li> - Anglais (plusieurs supports)</li>
        </ul>
      </div>
    </div>
  );
};
export default Learning;
