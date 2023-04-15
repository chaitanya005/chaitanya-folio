import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ title, data }) => {
  if (!data?.length) return null

  return (
    <section id='experience' className='section projects'>
      <h2 className='section__title'>{title}</h2>

      <div className='projects__grid'>
        {data.map((item) => (
          <ProjectContainer key={uniqid()} project={item} />
        ))}
      </div>
    </section>
  )
}

export default Projects
