import React from 'react'
import heroimg from '../../assets/hero.jpg'
import SectionFeatures from '../Features/SectionFeatures'
import menImg from '../../assets/men.jpg'
import womenImg from '../../assets/women.jpg'
import acccImg from '../../assets/accesroes.jpg'
import childImg from '../../assets/child.jpg'
import InfoFeatures from '../Features/infoFeatures'
import circle from '../../assets/bx-circle-three-quarter.svg'
import leaf from '../../assets/bx-leaf.svg'
import pack from '../../assets/bx-package.svg'
import {Link, NavLink} from 'react-router-dom';


function Hero() {
    return (
        <div>
            <div className="h-[500px] md:h-[500px] w-full bg-[#65503b]">
                <img className="opacity-[0.5] h-full w-full object-cover" src={heroimg} alt="Hero Image" />
            </div>


            <div className="grid grid-flow-col grid-rows-2">
                <NavLink to='/menClothes'>
                    <SectionFeatures name="Men" img={menImg}/>
                </NavLink>
            
                <SectionFeatures name="child" img={childImg}/>
                <SectionFeatures name="Women" img={womenImg}/>
                <SectionFeatures name="Accessories" img={acccImg}/>
            </div>


            <div className='lg:grid grid-flow-col grid-row-1'>
                <InfoFeatures img={pack} heading="Doorstep Delivery" subHeading="Free shipping within Singapore with no minimum purchase"/>
                <InfoFeatures img={circle} heading="30 Days Exchange" subHeading="Exchange at any of our retail stores within 30 days from date of order placement"/>
                <InfoFeatures img={leaf} heading="Consciously Crafted" subHeading="Designed with you and the planet in mind"/>
            </div>
        </div>
    )
}

export default Hero
