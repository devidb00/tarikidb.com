const Learning = () => {
  return (
    <div className="mb-4">
      <p className="uppercase mt-4 font-hairline-bold text-xl italic text-center lg:text-left">
        en cours d'apprentissage
      </p>
      <div className="mt-4 text-justify">
        <p>
          Je suis en ce moment des cours pour apprendre ou pour me mettre à jour
          (liste non exhaustive) :
        </p>
        <ul>
          <li> - Python</li>
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
