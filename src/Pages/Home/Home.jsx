import './Home.css'
import HeroImg from '../../assets/img/hero-img.png'
import Client1 from '../../assets/img/clients/client-1.png'
import Client2 from '../../assets/img/clients/client-2.png'
import Client3 from '../../assets/img/clients/client-3.png'
import Client4 from '../../assets/img/clients/client-4.png'
import Client5 from '../../assets/img/clients/client-5.png'
import Client6 from '../../assets/img/clients/client-6.png'
import { useEffect, useState } from 'react'
import About from '../About/About'
import Services from '../Services/Services'
import Cta from '../Cta/Cta'
import Team from '../Team/Team'
import Pricing from '../Pricing/Pricing'
function Home() {

    const[active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 70 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])

  return (
    <main className='mainContainer'>
            <header className={active ? 'active' : 'header'}>
                <h1 className='businessName'>ARSHA</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li className='btnOutline'>Get Started</li>
                </ul>
            </header>
        <section className='homeContainer'>
            <div className='main'>
                <div className="left">
                    <h2>Better Solutions For <br /> Your Business</h2>
                    <p>We are a team of talented developers making websites <br /> for you</p>
                    <div className="ctaButtons">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="right">
                    <img src={HeroImg} alt="Hero image" />
                </div>
            </div>
        </section>
        <section className='trustedBy'>
            <img src={Client1} alt="clients" />
            <img src={Client2} alt="clients" />
            <img src={Client3} alt="clients" />
            <img src={Client4} alt="clients" />
            <img src={Client5} alt="clients" />
            <img src={Client6} alt="clients" />
        </section>
        <About/>
        <Services/>
        <Cta/>
        <Team/>
        <Pricing/>
    </main>
  )
}

export default Home