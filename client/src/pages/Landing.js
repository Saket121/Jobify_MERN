import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>searching</span> app
                    </h1>
                    <p>I'm baby locavore skateboard kinfolk hella lyft gochujang williamsburg blue bottle cray slow-carb unicorn. Locavore kogi photo booth, direct trade edison bulb hexagon offal twee bitters salvia shoreditch beard whatever selvage fam. </p>
                    <Link to='/register' button className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing
