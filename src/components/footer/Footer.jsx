import "./Footer.css"
const Footer = () => {
    return (
        <section className="container Footer">
            <div className="Footer1">
                <div className="logo">
                    <img src="./src/assets/logo.png" alt="" />
                </div>
                <div className="LINKS">
                    <h2>LINKS</h2>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Careers</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="LEGAL">
                    <h2>LEGAL</h2>
                    <ul>
                        <li>
                            <a href="/">Terms of use</a>
                        </li>
                        <li>
                            <a href="/">Terms of conditions</a>
                        </li>
                        <li>
                            <a href="/">Privecy policy</a>
                        </li>
                        <li>
                            <a href="/">Cookie policy</a>
                        </li>
                    </ul>
                </div>
                <div className="NEWSLATTER">
                    <h2>NEWSLATTER</h2>
                    <p>Over 25000 people have subscribed</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </form>
                    <p>We don’t sell your email and spam</p>
                </div>
            </div>
            <div className="Footer2"></div>
        </section>
    )
}

export default Footer