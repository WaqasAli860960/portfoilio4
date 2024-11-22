import React, { useState } from 'react';
import './Port.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import img1 from "./pic1.png"
import img2 from "./pic4.png"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import img3 from './mypic.png';
import img5 from "./vig5.png";
import img6 from "./vig6.png";
import img7 from "./vig7.png";
import img8 from "./23.png";
import img9 from "./24.png";
import img10 from "./25.png";
import img11 from "./1.png";
import img12 from "./2.png";
import img13 from "./16.png";
import img14 from "./3.png";
import img15 from "./4.png";
import img16 from "./17.png";
import img17 from "./18.png";
import img18 from "./20.png";
import img19 from "./11.png";
import img20 from "./12.png";
import img21 from "./13.png";
import img22 from "./10.png";
import img23 from "./14.png";
import img24 from "./15.png";
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  background: 'none',
  boxShadow: 'none',

}));

function Port() {
  const [toggle, setToggle] = useState(false);
  let [light, setLight] = useState(true);
  let [user, setUser] = useState({
    name: "",
    email: "",
    subject: "", 
    massage:"",// Corrected from 'number'
  });

  let getUserData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  let postData = async (e) => {
    e.preventDefault();
    let { name, email, subject,massage } = user; // Corrected from 'massage'
    
    let res = await fetch('https://portfolio4-e1d68-default-rtdb.firebaseio.com/.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        massage,
      }),
    });

    if (res.ok) {
      setUser({
        name: "",
        email: "",
        subject: "", 
        massage:"",// Corrected from 'number'
      });
      alert("Data sent successfully");
    } else {
      alert("Please fill out the form correctly.");
    }
  };
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setToggle(false); // Close the sidebar when a section is clicked
    }
  };

  const handleHomeClick = () => scrollToSection('home');
  const handleAboutClick = () => scrollToSection('about');
  const handleMyWorkClick = () => scrollToSection('my-work');
  const handleSkillClick = () => scrollToSection('skill');
  const handleContactClick = () => scrollToSection('contact');

  return (
    <>
      <div className={light ? "parent" : "parent1"}>
        <div className={light ? 'App' : 'App3'}>
          {/* Desktop Navigation Menu */}
          <ul>
            <li className='logo-container'>
              {light ? <img className="logo" src={img1} alt="Logo" /> : <img className="logo" src={img2} alt="Logo" />}
            </li>
            <li className={light ? "nav-buttons" : "nav-buttons1"}>

              <button onClick={handleHomeClick}>Home</button>
              <button onClick={handleAboutClick}>About</button>
              <button onClick={handleMyWorkClick}>My Work</button>
              <button onClick={handleSkillClick}>Skill</button>
              <button onClick={handleContactClick}>Contact</button>
              <button className={light? 'mobile-D-N':'mobile-D-N1'} onClick={() => { setLight(!light) }}>{light? <NightlightRoundSharpIcon/>:<LightModeSharpIcon />}</button>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <h1 className={light ? 'well1' : 'well2'}>WELCOME TO MY PORTFOLIO</h1>
        </div>

        <div className={light ? 'App1' : 'App2'}>
          {/* Toggle button for mobile */}
          <button 
      className={`menu-btn ${toggle ? 'khan' : 'khan1'}`} 
      onClick={() => setToggle(!toggle)}
      style={light ? {} : { color: 'black' }} // Dynamically setting color
    >
      {toggle ? <FaTimes /> : <FaBars />}
    </button>

          {/* Mobile Navigation Menu */}
          <div className={`menu ${toggle ? 'menu-active' : ''}`}>
            <ul>
              <li>
                <button onClick={handleHomeClick}>Home</button><br />
                <button onClick={handleAboutClick}>About</button><br />
                <button onClick={handleMyWorkClick}>My Work</button><br />
                <button onClick={handleSkillClick}>Skill</button><br />
                <button onClick={handleContactClick}>Contact</button><br />
              </li>
            </ul>
          </div>
        </div>
        
        <div className={light ? 'FORHOME' : 'FORHOME1'}><button className={light? 'mobile-D-N':'mobile-D-N1'} onClick={() => { setLight(!light) }}>{light? <NightlightRoundSharpIcon/>:<LightModeSharpIcon />}</button>  <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><h1 className='well'>WELCOME TO MY PORTFOLIO</h1>
        </div>
        {/* Section Components */}
        <section id="home">

        
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

              {/* Left Section - Profile Image and Social Icons */}
              <Grid item xs={12} md={12} className="left-section">

               
                  <div className={light?"e-card playing":"e-card1 playing"}>
                    <div className="image"></div>

                    <div className={light?"wave":"evaw"}></div>
                    <div className={light?"wave":"evaw"}></div>
                    <div className={light?"wave":"evaw"}></div>

                    <div className="infotop">
                   <img className='icon' src={img3} alt="" srcset="" />
                   <br />
                      WAQAS ALI<br />
                      web dev
                      <div className="name">I'm a passionate web developer with experience in creating user-friendly and responsive websites. I specialize in React, Firebase, and Material UI, and I love turning ideas into reality through code. </div>
                     <br/>
                     <br/>
                     <br/>
                      <button class={light?"more":"more1"} onClick={handleMyWorkClick}> View My Work </button>
                      <button class={light?"more":"more1"} onClick={handleContactClick}>Contact Me </button>
                      
                    </div>
                   


                  </div>

             



              </Grid>





            </Grid>
          </Box>


        </section>

        <section id="about">
          
          <Grid item xs={12} md={12} className="left-section">

               
<div className={light?'about-div':'about1-div'}>
  <br />
  <h1></h1>
<p>My name is Waqas, and I am currently pursuing a BS in Computer Science (BSCS). I specialize in web development and have expertise in HTML, CSS, JavaScript, and React JS. Over the years, I have honed my skills to build functional, interactive, and responsive web applications.

In addition to web development, I am also skilled in whiteboard animation and 2D animation using Mango AM Soft. My passion for creativity extends to graphic design, where I enjoy creating visually appealing content.

I strive to continuously learn and grow by working on real-world projects. My goal is to leverage my technical and creative abilities to deliver high-quality digital solutions. I am always open to exploring new challenges and improving my skills to stay updated with the latest trends in the tech and design industries.</p>
<button class={light?"more":"more1"} > More About Me </button>
</div>





</Grid>
        </section>

        <section id="my-work">
          <h1></h1>
          <div className='my-work'>
          <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <Item>  <div style={{ color: "white",position:"relative" }}>
     </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item>
      <div className='mywork-mywork'>

      <div ><img className='my-work-image' src={img5} alt="" srcset="" /></div>
      <div ><img className='my-work-image2' src={img6} alt="" srcset="" /></div>
      <div ><img className='my-work-image3' src={img7} alt="" srcset="" /></div>
      </div>
    </Item>
  </Grid>
  <Grid item xs={12} md={4}>
    <Item>  <div style={{ color: "white",position:"relative" }}>
      </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item>
      <div ><img className='my-work-image' src={img8} alt="" srcset="" /></div>
      <div ><img className='my-work-image2' src={img9} alt="" srcset="" /></div>
      <div ><img className='my-work-image3' src={img10} alt="" srcset="" /></div>
    </Item>
  </Grid>
  <Grid item xs={10} md={6}>
    <Item><div className='mywork-position'>
      <img className='mywork-pic11' src={img11} alt="" srcset="" />
      <img className='mywork-pic12' src={img12} alt="" srcset="" />
      </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item><div className='mywork-position'>
      <img className='mywork-pic11' src={img13} alt="" srcset="" />
      <img className='mywork-pic12' src={img14} alt="" srcset="" />
      <img className='mywork-pic13' src={img15} alt="" srcset="" />
      </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item><div className='mywork-position'>
      <img className='mywork-pic11' src={img16} alt="" srcset="" />
      
      </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item><div className='mywork-position'>
      <img style={{width:"18rem"}} className='mywork-pic11' src={img18} alt="" srcset="" />
      
      </div></Item>
      <Grid item xs={12} md={6}>
    <Item>
      <div className='mywork-mywork'>

      <div ><img className='my-work-image' src={img19} alt="" srcset="" /></div>
      <div ><img className='my-work-image2' src={img20} alt="" srcset="" /></div>
      <div ><img className='my-work-image3' src={img21} alt="" srcset="" /></div>
      </div>
    </Item>
  </Grid>
  <Grid item xs={12} md={4}>
    <Item>  <div style={{ color: "white",position:"relative" }}>
      </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item>
      <div ><img className='my-work-image' src={img24} alt="" srcset="" /></div>
      <div ><img className='my-work-image2' src={img22} alt="" srcset="" /></div>
      <div ><img className='my-work-image3' src={img23} alt="" srcset="" /></div>
    </Item>
  </Grid>
  </Grid>
</Grid>
          </div>
        </section>

        <section id="skill">
          <h1></h1>
          <Grid container spacing={1}>
  <Grid item xs={12} md={6}>
    <Item> <div class={light?"container":"container-1"}>
    <div class={light?"skill-box":"skill-box1"}>
      <span class="title">HTML,CSS,JS,REACT JS</span>
  
      <div class={light?"skill-bar":"skill-bar1"}>
        <span class={light?"skill-per html":"skill-per1 html"}>
          <span class="tooltip">90%</span>
        </span>
      </div>
    </div>
  </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item> <div class={light?"container":"container-1"}>
    <div class={light?"skill-box":"skill-box1"}>
      <span class="title">node js, express js, mongo db</span>
  
      <div class={light?"skill-bar":"skill-bar1"}>
        <span class={light?"skill-per node":"skill-per1 node"}>
          <span class="tooltip">70%</span>
        </span>
      </div>
    </div>
  </div></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item> <div class={light?"container":"container-1"}>
    <div class={light?"skill-box":"skill-box1"}>
      <span class="title">UI and UX </span>
  
      <div class={light?"skill-bar":"skill-bar1"}>
        <span class={light?"skill-per ui":"skill-per1 ui"}>
          <span class="tooltip">40%</span>
        </span>
      </div>
    </div>
  </div></Item>
  </Grid>
  
</Grid>
        </section>

        <section id="contact">
          <h1></h1>
          <div class={light?"form-card1-port":"form-card1-port1"}>
  <div class={light?"form-card2-port":"form-card2-port1"}>
    <form class={light?"form-port":"form-port1"} onSubmit={postData}>
      <p class={light?"form-heading-port":"form-heading-port1"}></p>

      <div class={light?"form-field-port":"form-field-port1"}>
        <input required="" placeholder="Name" class={light?"input-field-port":"input-field-port1"} type="text" name='name' value={user.name} onChange={getUserData} />
      </div>

      <div class={light?"form-field-port":"form-field-port1"}>
        <input
          required
          placeholder="Email"
          class={light?"input-field-port":"input-field-port1"}
          type="email"
          name='email'
          value={user.email} onChange={getUserData}
        />
      </div>

      <div class={light?"form-field-port":"form-field-port1"}>
        <input
          required
          placeholder="Subject"
          class={light?"input-field-port":"input-field-port1"}
          type="text"
          name='subject'
          value={user.subject} onChange={getUserData}

        />
      </div>

      <div class={light?"form-field-port":"form-field-port1"}>
        <textarea
          required
          placeholder="Message"
          cols="30"
          rows="3"
          class={light?"input-field-port":"input-field-port1"}
          name='massage'
          value={user.massage} onChange={getUserData}
          
        ></textarea>
      </div>

      <button class={light?"sendMessage-btn-port":"sendMessage-btn-port1"} type='submit'>Send Message</button>
    </form>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>

        </section>
       <footer className="bg-body-tertiary text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(f,f,f,f 0.05)" }}
      >
        © 2024 Copyright:{" "}
        <a className="text-body" href="https://portfolio4-e1d68.web.app/">
          https://portfolio4-e1d68.web.app/
          
        </a>
      </div>
    </footer>
      </div>
    </>
  );
}

export default Port;
