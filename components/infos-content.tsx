import Typewriter from "typewriter-effect";
import Link from 'next/link'

const InfosContent = () => {
  return (
    <div className="hero-content mt-10 text-center bg-base-100 bg-opacity-30 backdrop-blur transition-shadow sm:rounded-xl">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold user-select-none">{`Je m'appelle Thibault`}
            <span className="wave" role="img" aria-labelledby="wave">
              👋
            </span>
          </h1>
          <p className="pt-8 text-base user-select-none">
            {`Je suis un `}
            <span className="font-bold text-lg leading-5">développeur</span>
            {` qui propose ses services en tant que `}
            <span className="font-bold text-lg leading-5">consultant</span> 
            {` pour vos travaux de `}
            <span className="font-bold text-lg leading-5">développement web</span> 
            {`. `}
          </p>
          <p className="pt-2 text-base user-select-none">
            {`Fort de mes 10 années d'`}
            <span className="font-bold text-lg leading-5">expériences</span>
            {`, je saurais vous `}
            <span className="font-bold text-lg leading-5">accompagner</span>
            {` dans vos projets informatiques.`}
          </p>
          <p className="pt-2 text-base user-select-none">
            {`Du recueil des besoins à l'implémentation de nouveautés, je répondrais à `}
            <span className="font-bold text-lg leading-5">vos attentes</span>
            {` en mettant `}
            <span className="font-bold text-lg leading-5">mon savoir faire</span>
            {` à votre disposition.`}
          </p>
          <p className="pt-2 text-base user-select-none">
            {`Vous pouvez me contacter depuis la section `}
            <span className="font-bold text-lg leading-5">
              <Link role="button" href="/#contact">contact</Link>
            </span>
            {`, je vous réponds dans les plus brefs délais.`}
          </p>
          <div className="w-full py-4">
            <h2>
              <Typewriter
                options={{
                  wrapperClassName: "text-lg user-select-none",
                  strings: ["Fullstack", "DevOps", "React", ".Net", "Java", "SQL", "AWS", "PaaS", "Linux", "Google Search Console", "Ansible", "Tesseract", "Docker", "Red Hat", "Shell", "Oracle", "GraphQL", "Excel", "Google Ad Word"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
          <Link role="button" className="btn btn-primary mb-4" href="/#contact">{`N'hésitez pas, contactez-moi !`}</Link>
        </div>
      </div>
  )
}

export default InfosContent
