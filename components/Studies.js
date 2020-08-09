const Studies = () => {
    return (
        <div>
            <p className="uppercase font-hairline-bold text-xl mt-4 italic text-center lg:text-left">
                mon cursus universitaire
            </p>
            <div className="mt-4 flex items-center">
                <img className="w-16" src="/saclay.png" alt="Université Paris-Saclay"/>
                <span className="pl-4">
          2020 : Master 2 MIAGE - Informatique Décisionnelle{" "}
                    <span className="italic">(Orsay - 91400)</span>
        </span>
            </div>
            <div className="mt-4 flex items-center">
                <img
                    className="w-16"
                    src="/descartes.png"
                    alt="Université Paris Descartes"
                />
                <span className="pl-4">
          2017 : Licence Informatique parcours MIAGE{" "}
                    <span className="italic">(Paris - 75006)</span>
        </span>
            </div>
            <div className="mt-4 flex items-center">
                <img
                    className="w-16"
                    src="/reims.png"
                    alt="Université Reims Champagne-Ardenne"
                />
                <span className="pl-4">
          2016 : DUT Informatique{" "}
                    <span className="italic">(Reims - 51100)</span>
        </span>
            </div>
        </div>
    );
};
export default Studies;
