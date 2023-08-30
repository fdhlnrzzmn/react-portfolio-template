import '../section/allSections.css'

const Projects = () => {
  return (
    <>
        <section id="projects" className="container flex projects">
        <div className="projects-info">
            <div>
                <h2>Projects</h2>
                <p>Di halaman ini kamu akan menemukan proyek-<br />proyek yang pernah saya buat.</p>
            </div>
            <div className="project-category">
                <p><img src="./public/assets/dot.svg" alt="" />Semua Kategori</p>
                <p><img src="./public/assets/dot.svg" alt="" />UI Design</p>
                <p><img src="./public/assets/dot.svg" alt="" />Web Development</p>
                <p><img src="./public/assets/dot.svg" alt="" />Mobile Development</p>
            </div>
        </div>
        <div className="projects-list">
            <div className="card">
                <img src="./public/assets/project1.png" alt="" />
                <h4>Login Page UI Design</h4>
                <p>UI DESIGN</p>
            </div>
            <div className="card">
                <img src="./public/assets/project2.png" alt="" />
                <h4>Landing Page</h4>
                <p>WEB DEVELOPMENT</p>
            </div>
            <div className="card">
                <img src="./public/assets/project3.png" alt="" />
                <h4>Landing Page</h4>
                <p>WEB DEVELOPMENT</p>
            </div>
            <div className="card">
                <img src="./public/assets/project4.png" alt="" />
                <h4>Landing Page UI Design</h4>
                <p>UI DESIGN</p>
            </div>
            <div className="card">
                <img src="./public/assets/project5.png" alt="" />
                <h4>Mobile App</h4>
                <p>MOBILE DEVELOPMENT</p>
            </div>
            <div className="card">
                <img src="./public/assets/project6.png" alt="" />
                <h4>Login Page UI Design</h4>
                <p>MOBILE DEVELOPMENT</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects