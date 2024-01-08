import { GlobalStyle, W3Row, W3Top } from "./the-cafe.styles";
import '../../assets/styles/w3.css';

const TheCafe = () => {
    
    return (
        <div className='the-cafe-container'>
            <GlobalStyle />
            <div className='the-cafe-body'>
                <div className='w3-top'>
                    <div className='w3-row w3-padding w3-black'>
                        <div class="w3-col s3">
                        <a href="#" class="w3-button w3-block w3-black">HOME</a>
                        </div>
                        <div class="w3-col s3">
                        <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
                        </div>
                        <div class="w3-col s3">
                        <a href="#menu" class="w3-button w3-block w3-black">MENU</a>
                        </div>
                        <div class="w3-col s3">
                        <a href="#where" class="w3-button w3-block w3-black">WHERE</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Header className="bgimg w3-display-container w3-grayscale-min" id="home">
                <div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                    <span class="w3-tag">Open from 6am to 5pm</span>
                </div>
                <div class="w3-display-middle w3-center">
                    <span class="w3-text-white" style={{fontSize: 90 + "px"}}>the<br />Cafe</span>
                </div>
                <div class="w3-display-bottomright w3-center w3-padding-large">
                    <span class="w3-text-white">15 Adr street, 5015</span>
                </div>
            </Header> */}
        </div>
    )
}

export default TheCafe;