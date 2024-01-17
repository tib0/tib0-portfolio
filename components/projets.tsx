import ProjectType from '@/interfaces/project'
import Image from 'next/image'

const Projets = ({allProjects}: any) => {
  return (
    <div className="min-h-screen bg-base-200 pt-6">
      <div className="max-w text-center p-10">
        <h1 className="text-5xl font-bold ">{`Mes derniers projets :`}</h1>
        <div className="py-6">
          <div className="grid grid-flow-row-dense grid-cols-1 justify-center justify-self-center md:grid-cols-2 xl:grid-cols-3 grid-rows-1 md:m-4 2">
          
            {allProjects?.map((post: ProjectType) => 
              <div key={post.slug} className="card max-w-md shadow-xl glass m-4 justify-center justify-self-center">
                <figure>
                  <Image 
                    src={post.coverImage} 
                    alt={post.title + "-img-cover"} 
                    width="464"
                    height="464" 
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="text-left">{post.excerpt}</p>
                  <div className="card-actions justify-center">
                   {post?.skills?.map((skill: any) => 
                      <div key={skill} className="badge badge-outline">{skill}</div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projets
