import Navbar from "./components/navbar/navbar.component";
import { GlobalStyle } from "./resto.styles";

const Resto = () => {
    return (
        <div className='resto-container'>
            <GlobalStyle />
            <Navbar />
        </div>
    )
}

export default Resto;