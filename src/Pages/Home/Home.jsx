import React,{Fragment} from 'react'
import './home.css'
import pdf from "../../assets/certificate.pdf"

const Home = () => {
  return (
    <Fragment>
      <div className="container" id="home">  
      <div class="home-wrapper">
    <div class="box">

    <div class="intro">
            <div class="block"></div>
            <p>Hey, I'm</p>
        </div>

        <div class="title">
            <span class="block"></span>
            <h1>Sunil Verma<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>MERN STACK DEVELOPER.</p>
        </div>

        <a href={pdf} download>
        <div className="cv-btn from-left">
            DownLoad CV
        </div>
        </a>

        <a href="#about">
        <div class="mouse_scroll">

<div class="mouse">
    <div class="wheel"></div>
</div>
<div>
    <span class="m_scroll_arrows unu"></span>
    <span class="m_scroll_arrows doi"></span>
    <span class="m_scroll_arrows trei"></span>
</div>
</div>
        </a>
    </div>
</div>
</div>
    </Fragment>
  )
}

export default Home