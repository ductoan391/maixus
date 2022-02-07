import { useEffect } from 'react';
import './fifthPage.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function FiifthPage() {

    return (
        <div className='fifth-container'>
            <h1>Page 5</h1>
        </div>
    );
}

export default FiifthPage;
