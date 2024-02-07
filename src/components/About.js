function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            #<img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            At Hedlamps, we are dedicated to redefining the landscape of IT services, offering cutting-edge solutions in digital transformation, bespoke software development, and comprehensive outsourced IT services. 
            Our mission is to empower businesses to navigate the ever-evolving digital world with ease and efficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
