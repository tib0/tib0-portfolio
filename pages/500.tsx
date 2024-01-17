import Footer from "@/components/footer";
import Link from "next/link";

export default function Custom404() {
  return (
    <div id="index" data-theme="">
      <div className="hero min-h-screen bg-base-300 tsparticles-full">
        <div className="hero-content mt-10 text-center bg-base-100 bg-opacity-30 backdrop-blur transition-shadow sm:rounded-xl">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold user-select-none">{`Aïe !`}</h1>
            <h1 className="text-5xl pt-4 font-bold user-select-none">
              <span className="chuckle" role="img" aria-labelledby="chuckle">
                🚨
              </span>
            </h1>
            <p className="pt-4 text-base user-select-none">
              {`Quelque chose a déraillé sur notre site, et l'erreur 500 sème un peu de chaos. 🌀 Nos équipes et moi même s'affairent à résoudre ce mystère. 🕵️‍♀️ En attendant, vous pouvez vous détendre avec une tasse de café virtuelle ☕ et réessayer plus tard. Merci de votre compréhension et de votre zen attitude ! 🧘‍♂️🔧`}
            </p>
            <p className="py-8 text-lg user-select-none">
              {`Essayez de retournez à la page principale en suivant ce lien.`}
            </p>
            <Link role="button" className="btn btn-primary mb-4" href="/">{`Retour`}</Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>)
}