import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Largest library of line graph components design Hyper charts',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21649065-Largest-library-of-line-graph-components-design-Hyper-charts'
  },

  {
    id:2,
    image: IMG2,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21590546-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id:3,
    image: IMG3,
    title: 'NEW PRODUCT ✦ Hyper charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21592191-NEW-PRODUCT-Hyper-charts-UI-Kit'
  },

  {
    id:4,
    image: IMG4,
    title: 'Orion UI kit data visualization and charts templates for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },

  {
    id:5,
    image: IMG5,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21455491-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },

  {
    id:6,
    image: IMG6,
    title: 'data visualization in light and dark themes',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21401790-data-visualization-in-light-and-dark-themes'
  },
]

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return(
            <article key={id} className='portafolio_item'>
              <div className="portafolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
        )
          })
        }

      </div>

    </section>
  )
}

export default Portafolio