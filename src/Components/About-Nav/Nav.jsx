import React from 'react'
import './nav.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript,SiReact,SiBootstrap,SiNodedotjs,SiMongodb} from 'react-icons/si'

const Nav = () => {
  return (
    <div>
        <div className="nav">
         <div className="frontend">
           <div className="nav-heading">
            Frontend Development
           </div>
           <div className="skills">
           <div className="skill">
            <div className="skill-icon"><AiFillHtml5/></div>
            <div className="skill-info">
            <div className="skill-name">HTML5</div>
            <div className="skill-type">Experienced</div>
            </div>
           </div>

           <div className="skill">
            <div className="skill-icon"><DiCss3/></div>
            <div className="skill-info">
            <div className="skill-name">CSS3</div>
            <div className="skill-type">Intermediate</div>
            </div>
           </div>

           <div className="skill">
            <div className="skill-icon"><SiJavascript size={25}/></div>
            <div className="skill-info">
            <div className="skill-name">Javascript</div>
            <div className="skill-type">Intermediate</div>
            </div>
           </div>

           <div className="skill">
            <div className="skill-icon"><SiReact/></div>
            <div className="skill-info">
            <div className="skill-name">React</div>
            <div className="skill-type">Experienced</div>
            </div>
           </div>

           <div className="skill">
            <div className="skill-icon"><SiBootstrap/></div>
            <div className="skill-info">
            <div className="skill-name">Bootstrap</div>
            <div className="skill-type">Intermediate</div>
            </div>
           </div>
           </div>
         </div>
         <div className="backend">
         <div className="nav-heading">
            Backend Development
           </div>
           <div className="skills">
           <div className="skill">
            <div className="skill-icon"><SiNodedotjs/></div>
            <div className="skill-info">
            <div className="skill-name">Node JS</div>
            <div className="skill-type">Intermediate</div>
            </div>
           </div>

           <div className="skill">
            <div className="skill-icon"><SiMongodb/></div>
            <div className="skill-info">
            <div className="skill-name">MongoDB</div>
            <div className="skill-type">Experienced</div>
            </div>
           </div>

           
           </div>
         </div>
        </div>
    </div>
  )
}

export default Nav