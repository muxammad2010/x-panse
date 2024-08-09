import "./Pricing.css"
import { FaCheck } from "react-icons/fa6";
const Pricing = () => {
    return (
        <section className="Pricing">
            <div className="pricing1">
                <h1>Choose your flexible plan.</h1>
            </div>
            <div className="pricing2">
                <div className="plan">
                    <img src="./src/assets/Icons.png" alt="" />
                    <h3>Starter Plan</h3>
                    <ul>
                        <li>
                            <a href="/"><FaCheck />Store unlimited data</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Export to pdf, xls, csv</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Cloud server support</a>
                        </li>
                    </ul>
                    <h1>$9.99/<span>year</span></h1>
                    <span>up to 3 user + 1.99 per user</span>
                    <button>Get this</button>
                </div>
                <div className="plan">
                    <img src="./src/assets/Icons (1).png" alt="" />
                    <h3>Starter Plan</h3>
                    <ul>
                        <li>
                            <a href="/"><FaCheck />Store unlimited data</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Export to pdf, xls, csv</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Cloud server support</a>
                        </li>
                    </ul>
                    <h1>$19.99/<span>year</span></h1>
                    <span>up to 3 user + 1.99 per user</span>
                    <button>Get this</button>
                </div>
                <div className="plan">
                    <img src="./src/assets/Icons (2).png" alt="" />
                    <h3>Starter Plan</h3>
                    <ul>
                        <li>
                            <a href="/"><FaCheck />Store unlimited data</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Export to pdf, xls, csv</a>
                        </li>
                        <li>
                            <a href="/"><FaCheck />Cloud server support</a>
                        </li>
                    </ul>
                    <h1>$29.99/<span>year</span></h1>
                    <span>up to 3 user + 1.99 per user</span>
                    <button>Get this</button>
                </div>
            </div>
        </section>
    )
}

export default Pricing