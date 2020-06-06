import React, { useRef,useEffect} from 'react';
import './Developers.scss';
import {FaGithubSquare,FaPhone,FaFacebookSquare,FaLinkedin,FaSnapchatSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {TimelineLite,Power2} from 'gsap';

const devs = [
    {
        name:"saurav aggarwal",
        image:"https://media-exp1.licdn.com/dms/image/C5103AQFvwm0sQ8fIhg/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=85jmP41sf-w5dTsu72CymN38nv9ZqLT4RO38iCF7JUU",
        contact : {
            linkedin:"https://www.linkedin.com/in/saurav-aggarwal-6a6065153/",
            github : "https://github.com/saurav0705/",
            email : "sauravaggarwal98@gmail.com"
        }

    },
    {
        name:"piyush marya",
        image:"https://media-exp1.licdn.com/dms/image/C4E03AQEI8gbT2yZBug/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=cuWyvoNwrpUr-uxScZqWSGBP5BiEFjNsFufjgIBZd70",
        contact : {
            linkedin:"https://www.linkedin.com/in/piyush-marya-382b4a169/",
            github : "https://github.com/piyushmarya/",
            email : "piyushmarya0072@gmail.com"
        }
    },
    {
        name:"Birvarinder Singh",
        image:"https://media-exp1.licdn.com/dms/image/C5103AQE3DZn8BTKOvg/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=CdRruW3ANSA0tesBej0gQDdPQ6q4HqXjaaT0tKfFqTI",
        contact : {
            linkedin:"https://www.linkedin.com/in/birvarindersingh/",
            github : "https://github.com/singhbir",
            email : "singhbirvarinder@gmail.com"
        }
    }

]

const Developers = () => {
    const devRef = useRef({tile:[]});
    let timeline = new TimelineLite();
    useEffect(()=>{    
         let observer = new IntersectionObserver(async (obj)=>{
            if(obj[0].intersectionRatio > 0.002){

                await animation();
                observer.unobserve(document.querySelector('.developers'));
            }
                   
        });
        observer.observe(document.querySelector('.developers'));
        
    },[])

    const animation = () => {
        timeline.to(document.querySelector('.dev-container'),0.2,{opacity:1,ease:Power2.easeInOut})
                .staggerFrom(devRef.current.tile,0.5,{y:-100,x:-100,opacity:0,ease:Power2.easeInOut},0.2)
        
    }
    const icon = (key) => {
        switch(key.toUpperCase()){
            case 'EMAIL' : return <MdEmail/>
            case 'FACEBOOK': return <FaFacebookSquare/>
            case 'TWITTER' : return <FaTwitterSquare/>
            case 'LINKEDIN' : return <FaLinkedin/>
            case 'SNAPCHAT' : return <FaSnapchatSquare/>
            case 'INSTAGRAM' : return <FaInstagram/>
            case 'GITHUB' : return <FaGithubSquare/>
            case 'PHONE' : return <FaPhone/>
            default : return 'none'; 
        }

    }
    return (
        <div className="developers" id="developers">
            <div className="heading">Developers</div>
            <div className="dev-container">
            {devs.map((dev,index) => (
                <div className="dev-tile" key={"dev"+index} ref={el => devRef.current.tile[index] = el}>
                    <img className="image" src={dev.image} alt="profile"/>
                    <div className="name">{dev.name}</div>
                    <div className="social">
                        {Object.keys(dev.contact).map(social => (<div className="tile" key={"dev-social"+social} onClick={() => window.open(social === 'email'? "mailto:"+dev.contact[social]:dev.contact[social])}>{icon(social)}</div>))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Developers;