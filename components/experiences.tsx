import ExperienceType from "@/interfaces/experience"

const Experiences = ({allExperiences}: any) => {
  return (
    <div className="min-h-screen bg-base-100 pt-6">
      <div className="max-w text-center p-10">
        <h1 className="text-5xl font-bold">{`Expériences`}</h1>
        <div className="py-6">
          <ul className="timeline m-6 md:m-12 timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {allExperiences?.map((experience: ExperienceType, index: number) =>
              <li key={experience.slug + '-li'}>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className={(index % 2 == 0) ? "timeline-start text-start md:text-end mb-10" : "timeline-end text-start md:text-start mb-10"}>
                  <time className="font-mono italic">{experience.year}</time>
                  <div className="text-lg font-black">{experience.title}</div>
                  {experience.excerpt}
                </div>
                <hr />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experiences
