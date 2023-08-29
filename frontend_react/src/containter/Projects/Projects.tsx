import React from 'react'
import './Projects.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'

const projects = [
  {title: 'Web Development', description: 'I am good at webdev', imgUrl: images.about01},
  {title: 'Web Development', description: 'I am good at webdev', imgUrl: images.about02},
  {title: 'Web Development', description: 'I am good at webdev', imgUrl: images.about03},
  {title: 'Web Development', description: 'I am good at webdev', imgUrl: images.about04},
]

const Projects = () => {
  return (
    <div className='app__projects'>
      {projects.map((project, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__projects-item"
          key={project.title + index}
        >
          <img src={project.imgUrl} alt={project.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{project.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
