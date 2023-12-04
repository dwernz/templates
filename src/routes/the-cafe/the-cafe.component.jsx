import { GlobalStyle, W3Row, W3Top } from "./the-cafe.styles";

const TheCafe = () => {
    return (
        <div className='the-cafe-container'>
            <GlobalStyle />
            <div className='the-cafe-body'>
                <W3Top>
                    <W3Row className="w3-padding w3-black">
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
                    </W3Row>
                </W3Top>
            </div>
        </div>
    )
}

export default TheCafe;