import "./Home.css"
const Home = () => {
    return (
        <section className="container Home">
            <div className="home1">
                <h1>Track your Expenses & Save Money</h1>
                <p>Helps you to organize your income and expenses</p>
                <div className="home">
                    <button>Try free demo</button>
                    <p>— Web, iOS and Android</p>
                </div>
            </div>
            <div className="home2">
                <img src="./src/assets/home.png" alt="" />
            </div>
        </section>
    )
}

export default Home