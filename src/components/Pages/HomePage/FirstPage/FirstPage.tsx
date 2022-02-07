import React, { useEffect, useRef, useState } from 'react';
import './firstPage.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function FirstPage() {
    return (
        <div className="first-page">
            <h1>page one</h1>
        </div>
    )
}

export default FirstPage;
