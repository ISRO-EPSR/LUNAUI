import React, { Fragment } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <div id="home">
                    <Menu />
                    <main>
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./assets/assets/download.jpg" className="d-block w-100" alt="..." />
                                    <rect width="100%" height="100%" fill="#777">
                                        <div className="container">
                                            <div className="carousel-caption text-start">
                                                <h1>Enhancement of Moon PSR images into </h1>
                                                <p>
                                                with precise edge detection, detail preservation, and contrast adjustment for clear, high-quality image
                                                </p>
                                                <p>
                                                    <Link to="/enhance"><a className="btn btn-lg btn-light" href="./pages/app.html"><b>Try Now</b></a></Link>
                                                </p>
                                            </div>
                                        </div>
                                    </rect></div>
                                <div className="carousel-item">
                                    <img src="./assets/assets/img2.webp" className="d-block w-100" alt="..." />
                                    <rect width="100%" height="100%" fill="#777">
                                        <div className="container">
                                            <div className="carousel-caption">
                                                <h1>Low light to high quality</h1>
                                                <p>
                                                    Enhance not only Moon PSR images but also day to day life images.
                                                </p>
                                                <p><Link to="/enhance"><a className="btn btn-lg btn-light" href="./pages/app.html"><b>Convert Now</b></a></Link></p>
                                            </div>
                                        </div>
                                    </rect></div>
                                <div className="carousel-item">
                                    <img src="./assets/assets/img4.jpg" className="d-block w-100" alt="..." />
                                    <rect width="100%" height="100%" fill="#777">
                                        <div className="container">
                                            <div className="carousel-caption text-end">
                                                <h1>Usecase beyond Space</h1>
                                                <p>
                                                    Not only space but Military, medical, defense can also benefit.
                                                </p>
                                                <p><Link to="/enhance"><a className="btn btn-lg btn-light" href="./pages/app.html"><b>Try Now</b></a></Link></p>
                                            </div>
                                        </div>
                                    </rect></div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        {/* Marketing messaging and featurettes
  ================================================== */}
                        {/* Wrap the rest of the page in another container to center all the content. */}
                        <div className="container marketing">
                            {/* Three columns of text below the carousel */}
                            <div className="row">
                                <div className="col-lg-4">
                                    <svg className="p-b-5" width={100} height={100} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M43.3333 26.6667V37.3333L39.3333 38.6667L35.2133 31.3333C34.8667 30.72 33.8933 31.0267 34 31.7467L35.3333 44L22 38.6667L23.5333 27.92C23.8486 25.7221 24.9456 23.7115 26.6231 22.2568C28.3006 20.8022 30.4463 20.0009 32.6667 20H43.3333L41.2267 23.16C42.48 23.84 43.3333 25.1467 43.3333 26.6667ZM18 22.6667H22.7733C23.44 21.6533 24.2667 20.76 25.2133 20H18C17.2667 20 16.6667 20.6 16.6667 21.3333C16.6667 22.0667 17.2667 22.6667 18 22.6667ZM20.4533 30.6667H15.3333C14.6 30.6667 14 31.2667 14 32C14 32.7333 14.6 33.3333 15.3333 33.3333H20.0667L20.4533 30.6667ZM16.6667 28H20.8267L20.8933 27.5467C21 26.7733 21.1867 26.04 21.44 25.3333H16.6667C15.9333 25.3333 15.3333 25.9333 15.3333 26.6667C15.3333 27.4 15.9333 28 16.6667 28Z" fill="black" />
                                        <circle cx={29} cy={29} r="28.5" stroke="black" />
                                    </svg>
                                    <h3 className="fw-normal features text-black">Fast Processing</h3>
                                    <p>
                                        Get your Enhanced image as fast as possible, you just have to upload the image.
                                    </p>
                                </div>
                                {/* /.col-lg-4 */}
                                <div className="col-lg-4">
                                    <svg width={100} height={100} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37 20H33.8C33.4 18.8 32.3 18 31 18C29.7 18 28.6 18.8 28.2 20H25C23.9 20 23 20.9 23 22V34C23 35.1 23.9 36 25 36H37C38.1 36 39 35.1 39 34V22C39 20.9 38.1 20 37 20ZM31 20C31.6 20 32 20.5 32 21C32 21.5 31.5 22 31 22C30.5 22 30 21.5 30 21C30 20.5 30.4 20 31 20ZM33 31H26V29H33M36 27H26V25H36M21 38H35V40H21C19.9 40 19 39.1 19 38V24H21" fill="black" />
                                        <circle cx={29} cy={29} r="28.5" stroke="black" />
                                    </svg>
                                    <h3 className="fw-normal features text-black">End-to-End</h3>
                                    <p>
                                        Whole project is implemented end to end.
                                    </p>
                                </div>
                                {/* /.col-lg-4 */}
                                <div className="col-lg-4">
                                    <svg width={100} height={100} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.8326 18L19 20.0698L24.1332 32.0555L26.1223 31.2036L24.7891 21.9343L24.7273 21.5041L28.5214 20.9584L27.9169 19.5468C27.1113 19.729 26.5227 19.7133 25.6278 20.5639L25.3383 20.8388L25.0399 20.574C24.1649 19.7979 24.034 18.8082 23.8326 18V18ZM24.7459 18.0238C24.9025 18.6421 25.0131 19.196 25.3629 19.6502C25.9819 19.1571 26.5435 18.9632 27.0507 18.8422C26.3512 18.4716 25.6188 18.2522 24.7459 18.0238V18.0238ZM30.9149 21.4924L25.7114 22.2407L27.5675 35.1467L29.3533 34.8899L30.4731 25.5214L30.5246 25.0899L34.6819 25.5868L34.4598 24.0434C33.6344 24.011 33.07 23.8435 31.9854 24.4334L31.6348 24.6242L31.4149 24.291C30.7707 23.3149 30.9004 22.3252 30.9149 21.4924V21.4924ZM31.7909 21.7515C31.7821 22.3895 31.7457 22.9532 31.966 23.4824C32.6915 23.1663 33.2842 23.1243 33.8055 23.1387C33.2257 22.5997 32.575 22.1981 31.7909 21.7515V21.7515ZM31.2846 26.0562L29.7371 39.0029L38.0805 40L39.2684 30.0619C38.4795 29.8169 37.9776 29.5088 36.7772 29.798L36.3892 29.8915L36.2632 29.5129C35.8935 28.4033 36.2749 27.4808 36.5045 26.6802L31.2846 26.0562ZM37.2836 27.1572C37.11 27.7712 36.9289 28.3062 37.0047 28.8744C37.7874 28.7568 38.3707 28.8697 38.8705 29.0185C38.45 28.3478 37.9254 27.7915 37.2836 27.1572V27.1572Z" fill="black" />
                                        <circle cx={29} cy={29} r="28.5" stroke="black" />
                                    </svg>
                                    <h3 className="fw-normal features text-black">Luna-MirNet</h3>
                                    <p>
                                        luna-MirtNet (base model MirNet) model we have trained specially for moon surface images and PSR images.
                                    </p>
                                </div>
                                {/* /.col-lg-4 */}
                            </div>
                            {/* /.row */}
                            {/* START THE FEATURETTES */}
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading fw-normal lh-1 text-black">
                                        Luna which is 
                                        <span className="text-muted"> beyond space </span>
                                    </h2>
                                    <p className="lead">
                                        Luna which is developed by ByteClub, Is not only useful for Space organisation
                                        but also for rescue teams.
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="./assets/assets/img4.jpg" width={500} height={500} alt />
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="featurette-heading fw-normal lh-1 text-black">
                                        Moon exploration Will Be
                                        <span className="text-muted"> more efficient</span>
                                    </h2>
                                    <p className="lead">
                                    Discover a new era of efficiency in space exploration with EPSR. 
                                    Our advanced image enhancement technology brings hidden details of shadowed lunar 
                                    regions to light, optimizing data analysis and mission planning. With EPSR, space missions 
                                    become faster, more precise, and less reliant on guesswork—making every exploration more 
                                    impactful.
                                    </p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="./assets/assets/moon_exploration.png" width={500} height={500} alt />
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading fw-normal lh-1 text-black">
                                        Empowers Space organisation<span className="text-muted"> With Luna</span>
                                    </h2>
                                    <p className="lead">
                                    EPSR is revolutionizing the way space organizations explore the Moon. 
                                    By enhancing images of Permanently Shadowed Regions, EPSR empowers scientists 
                                    with clearer, more detailed visuals, enabling groundbreaking research and better
                                     decision-making for future missions. Unlock the hidden mysteries of the lunar 
                                     surface with EPSR and drive your exploration capabilities to new heights
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="./assets/assets/space_org.png" width={500} height={500} alt />
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            {/* /END THE FEATURETTES */}
                        </div>
                        {/* /.container */}
                        {/* FOOTER */}
                        <footer className="container">
                            <p className="float-end "><a href="#" className="text-black">Back to top</a></p>
                            <p>
                                © 2024–2025 Luna, ByteClub
                            </p>
                        </footer>
                    </main>
                </div>
            </Fragment>

        );

    }
}
export default Home