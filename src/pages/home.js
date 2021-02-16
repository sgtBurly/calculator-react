import style from "../css/Home.module.css"
import Calculator from "../components/Calculator"
const Home = () => {
    return (
        <div className= {Home}>
            <div className={ style.wrapper}>
                <Calculator />
            </div>
        </div>
    );
}
 
export default Home;