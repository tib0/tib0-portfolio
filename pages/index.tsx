import Header from '../components/header'
import Footer from '@/components/footer'
import Infos from '@/components/infos'
import Projets from '@/components/projets'
import Experiences from '@/components/experiences'
import Contact from '@/components/contact'
import { useThemeDetect } from '@/hooks/useThemeDetect'
import { getAllExperiences, getAllProjects } from '@/lib/api'
import ProjectType from '@/interfaces/project'
import ExperienceType from '@/interfaces/experience'
import { useEffect, useState } from 'react'

type Props = {
  allProjects: ProjectType[];
  allExperiences: ExperienceType[];
};

export default function Index({ allProjects, allExperiences }: Props) {
 
  const isDarkTheme = useThemeDetect();
  const [isDarkState, setDarkState] = useState(isDarkTheme);

  useEffect(() => {
    if (document) document.querySelector('#index')?.setAttribute('data-theme', (isDarkState) ? "dracula" : "lemonade")
  }, [isDarkState]);

  return (
    <div id="index" data-theme="">
      <Header isDarkState={isDarkState} setDarkState={setDarkState} />
      <div id="infos">
        <Infos isDarkState={isDarkState} />
      </div>
      <div id="experiences">
        <Experiences allExperiences={allExperiences} />
      </div>
      <div id="projets">
        <Projets allProjects={allProjects} />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'slug',
    'coverImage',
    'title',
    'excerpt',
    'skills',
    'date',
  ])

  const allExperiences = getAllExperiences([
    'slug',
    'title',
    'year',
    'excerpt',
    'skills',
    'date',
  ])

  return {
    props: { allProjects, allExperiences},
  }
}