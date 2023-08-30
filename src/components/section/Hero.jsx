import '../section/allSections.css'

const Hero = () => {
  return (
    <>
        <section id="hero" className="flex container hero">
        <div className="self-center">
            <h1><span className="font-thin">Hi, nama saya</span><br />Dedik Sugiharto! </h1>
            <p className="font-regular">Saya seorang software-engineer,pembaca<br />buku, warga NU, dan juga murid (online)<br />Pak Fahruddin Faiz.</p>
            <div className="overview-button">
                <p>Go To Overview</p>
                <a href="#"><img src="/public/assets/arrow.png" alt="logo panah" style={{marginTop:"15px"}}/></a>
            </div>
            <div className="info">
                <div>
                    <h5>PROJECTS</h5>
                    <h4>12</h4>
                </div>
                <div>
                    <h5>EXPERIENCE</h5>
                    <h4>8 yrs</h4>
                </div>
                <div>
                    <h5>NATIONALITY</h5>
                    <h4>IDN 🇮🇩</h4>
                </div>
            </div>
        </div>
        <div className="hero-image self-center">
            <img src="/public/assets/hero-image.png" alt="" />
        </div>
        </section>
    </>
  )
}

export default Hero