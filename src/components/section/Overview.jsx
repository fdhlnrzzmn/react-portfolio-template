import '../section/allSections.css'

const Overview = () => {
  return (
        <>
            <section id="overview" className="container flex overview">
                <div className="overview-resume">
                <div>
                    <h2>Overview</h2>
                    <p>Nama saya Dedik Sugiharto, saya seorang<br />software-engineer sebelum kata software-engineer itu ada. Saya terbiasa ngoding di<br />Microsoft Word 2003.</p>
                </div>
                <div className="overview-list">
                    <h3>Pendidikan</h3>
                    <p><img src="./public/assets/dot.svg" alt="" />2003-2009 SDN California 2</p>
                    <p><img src="./public/assets/dot.svg" alt="" />2009-2012 SMP Los Santos 9</p>
                    <p><img src="./public/assets/dot.svg" alt="" />2012-2015 SMA Berlin Jakarta 64</p>
                </div>
                <div className="overview-list">
                    <h3>Pekerjaan</h3>
                    <p><img src="./public/assets/dot.svg" alt="" />Software Engineer at PT. Mencari Cinta Sejati</p>
                    <p><img src="./public/assets/dot.svg" alt="" />Co-founder at A.D.M (Artis Dunia Maya)</p>
                    <p><img src="./public/assets/dot.svg" alt="" />Manager at Liverpool F.C</p>
                    <p><img src="./public/assets/dot.svg" alt="" />Manager at Cliquers Cllamanya</p>
                </div>
                </div>
                <div className="overview-photo">
                <img src="./public/assets/overview-photo.png" alt="" />
                <p>Foto diambil 2018</p>
                </div>
            </section>
        </>
    )
}

export default Overview