import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Digital Transformation: Navigating the Future of Business" img="card1.png" text="In an era where digital presence is not just an option but a necessity, we specialize in transforming traditional business operations into digital powerhouses. Our digital transformation services are designed to align with your strategic goals, ensuring a seamless transition into the digital realm. From automating processes to integrating the latest technologies, we drive innovation to optimize your operations, enhance customer engagement, and boost overall productivity. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Software Development: Tailored Solutions for Unique Needs" img="card2.png" text="Our passion for technology and innovation is reflected in our custom software development services. We don’t just build software; we create solutions that solve real-world problems. Our team of skilled developers works closely with clients to understand their unique challenges and objectives. Whether it’s developing a user-friendly app or a complex enterprise system, we deliver high-quality, scalable, and secure software solutions that align perfectly with your business needs." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Outsourced IT Services: Your Technology Partner" img="card3.png" text="We understand the challenges of managing IT operations, especially for businesses that need to focus on their core functions. Our outsourced IT services offer a hassle-free way to handle your IT needs. From 24/7 technical support to managing your IT infrastructure, we provide comprehensive services that ensure your technology runs smoothly and efficiently. Our team acts as an extension of your business, ensuring your IT requirements are met with professionalism and expertise." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
