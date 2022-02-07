import React from 'react';
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';
import FourthPage from './FourthPage/FourthPage';
import FiifthPage from './FifthPage/FiifthPage';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
const Home = () => {
  // set change URL khen scrolling
  let navigate = useNavigate();
  const [activeUrl, setActiveUrl] = useState<Number>(0);
  const handleUrl = () => {
    switch (activeUrl) {
      case 0:
        navigate("#firstPage");
        break;
      case 1:
        navigate("#secondPage");
        break;
      case 2:
        navigate("#thirdPage");
        break;
      case 3:
        navigate("#fourthPage");
        break;
      case 4:
        navigate("#fifthPage");
        break;
    }
  };
  useEffect(() => {
    handleUrl();
  }, [activeUrl]);

  //set up animation scroll to section
  useEffect(() => {
    var settingUp = true;
    function goToSection(i: number) {
      gsap.set("body", { overflow: "hidden" });
      console.log(i);

      gsap.to("body", {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 0.5,

        onComplete: () => {
          gsap.set("body", { overflow: "auto" });
          buttonClicked = false;
          setActiveUrl(i);
        },
      });
    }
    var buttonClicked = false;
    const instances = [];
    gsap.utils.toArray("section").forEach((panel: any, i: any) => {
      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
        })
      );

      instances.push(
        ScrollTrigger.create({
          trigger: panel,
          start: "bottom bottom",
          onEnterBack: () => {
            if (!buttonClicked && !settingUp) {
              goToSection(i);
            }
          },
        })
      );
    });
    // set up function for menu_nav
    gsap.utils.toArray(".buttonNav").forEach((btn: any, i: any) => {
      btn.onclick = () => {
        if (!buttonClicked) {
          buttonClicked = true;
          goToSection(i);
        }
      };
    });
    settingUp = false;
  }, []);

  //variable for array menu_nav
  let array: any[];
  array = Array(5).fill(0);
    return (
        <>
            <section>
                <FirstPage />
            </section>
            <section>
                <SecondPage />
            </section>
            <section>
                <ThirdPage />
            </section>
            <section>
                <FourthPage />
            </section>
            <section>
                <FiifthPage />
            </section>
            <nav className="menu_nav">
                {array.map((item, index) => (
                    <button key={index + item} className={`${activeUrl === index ? 'active buttonNav' : 'buttonNav'}`}></button>
                ))}
            </nav>
        </>
    );
};

export default Home;
