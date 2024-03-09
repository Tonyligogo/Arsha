import './About.css'
import { Icon } from '@iconify/react';

function About() {
  return (
    <section className='aboutContainer'>
        <div className='aboutHeading'>
            <h2>About Us</h2>
            <span> <small></small> </span>
        </div>
        <div className="aboutContent">
            <div className="left">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <ul>
                    <li> <Icon icon="charm:tick-double" color="#47b2e4" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    <li> <Icon icon="charm:tick-double" color="#47b2e4" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                    <li> <Icon icon="charm:tick-double" color="#47b2e4" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
            </div>
            <div className="right">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                <button className='btnOutline rectangular'>Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default About