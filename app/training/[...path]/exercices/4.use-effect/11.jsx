"use client";

const CatFact = () => {
  // 🦁 Créer 3 états
  // 1. data = qui contiendra les données de l'API
  // 2. isError = qui contiendra un boolean pour savoir si une erreur est survenue
  // 3. isLoading = qui contiendra un boolean pour savoir si la requête est en cours

  // 🦁 Utilise useEffect
  // Utilise fetch pour récupérer les données de l'API https://catfact.ninja/fact
  // Utilise .then et si la réponse n'est pas ok, lance une erreur sinon return `res.json`
  // Rajoute un .then après le premier pour mettre à jour les états (setIsError(false) et setData(data))
  // Rajoute un .catch pour mettre à jour les états (setIsError(true) et setData(null))
  // Rajoute un .finally pour mettre à jour l'état isLoading (setIsLoading(false))

  return (
    <div className="card card-compact w-96 max-w-sm bg-base-200 shadow-xl">
      <figure>
        <img
          src="https://cataas.com/cat"
          alt="Shoes"
          className="max-h-32 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cat fact</h2>
        {/* 
          🦁 Ajoute un loader si ça charge : https://daisyui.com/components/loading/
          🦁 Ajoute un message d'erreur si isError est true
          🦁 Affiche la donnée si elle est présente
        */}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <CatFact />
    </div>
  );
}
