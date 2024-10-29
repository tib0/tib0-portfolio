import Header from '@/components/header'
import Footer from '@/components/footer'
import Infos from '@/components/infos'
import Projets from '@/components/projets'
import Experiences from '@/components/experiences'
import Contact from '@/components/contact'
import { useThemeDetect } from '@/hooks/useThemeDetect'
import { getAllExperiences, getAllProjects } from '@/lib/api'
import ProjectType from '@/interfaces/project'
import ExperienceType from '@/interfaces/experience'
import { useEffect } from 'react'
import Head from 'next/head'
import usePersistentStorageValue from '@/hooks/usePersistentStorageValue'

type Props = {
  allProjects: ProjectType[];
  allExperiences: ExperienceType[];
};

export default function Index({ allProjects, allExperiences }: Props) {

  const isDarkThemeByDefault = useThemeDetect();
  const [localTheme, setLocalTheme] = usePersistentStorageValue('theme', (isDarkThemeByDefault) ? "dracula" : "lemonade");

  useEffect(() => {
    if (document) document.querySelector('#index')?.setAttribute('data-theme', localTheme)
  }, [localTheme]);

  return (
    <div id="index" data-theme="">
      <Head>
        <title>{`Folio Tib0`}</title>
      </Head>
      <Header localTheme={localTheme} setLocalTheme={setLocalTheme} />
      <div id="infos">
        <Infos localTheme={localTheme} />
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
    'coverImages',
    'link',
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
    props: { allProjects, allExperiences },
  }
}