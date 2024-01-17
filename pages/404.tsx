import Footer from "@/components/footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <div id="index" data-theme="">
      <div className="hero min-h-screen bg-base-300 tsparticles-full">
        <div className="hero-content mt-10 text-center bg-base-100 bg-opacity-30 backdrop-blur transition-shadow sm:rounded-xl">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold user-select-none">{`Oops !`}</h1>
            <h1 className="text-5xl pt-4 font-bold user-select-none">
              <span className="chuckle" role="img" aria-labelledby="chuckle">
                🙈
              </span>
            </h1>
            <p className="pt-4 text-base user-select-none">
              {`Vous avez atterri dans la zone mystérieuse des erreurs 404, où même les pages se cachent parfois. 🕵️‍♂️ Vérifiez votre URL, et si la page joue à cache-cache, contactez notre équipe technique. 🚀 On travaille dur pour éviter ces détours imprévus. Merci de votre patience et de votre sens de l'aventure ! 🌐✨`}
            </p>
            <p className="py-8 text-lg user-select-none">
              {`Retournez à la page principale en suivant ce lien.`}
            </p>
            <Link role="button" className="btn btn-primary mb-4" href="/">{`Retour`}</Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>)
}