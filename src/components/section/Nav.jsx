import '../section/allSections.css'

const Nav = () => {
  return (
    <>
         <header id="header" className="container header">
        <div className="nav">
            <div className="logo">
                <a href="">S</a>
            </div>
            <nav>
                <ul>
                    <li>Overview</li>
                    <li>Projects</li>                
                    <li>Skills</li>                
                    <li>Contract</li>           
                </ul>
            </nav>
        </div>
        <div className="button">
            <a href="">Punya Project?</a>
        </div>        
    </header>
    </>
  )
}

export default Nav