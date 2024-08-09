import "./Header.css"
const Header = () => {
    return (
        <section className="container Header">
            <div className="header1">
                <img src="./src/assets/logo.png" alt="" />
            </div>
            <div className="header2">
                <ul>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">About us</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Feedback</a>
                    </li>
                </ul>
            </div>
            <div className="header3">
                <button>Request a demo</button>
            </div>
        </section>
    )
}

export default Header