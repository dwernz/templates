import BootstrapButton from '../../components/buttons/bootstrap-button/bootstrap-button.component';

import { ButtonsContainer } from './home.styles';

const Home = () => {
    return (
        <div>
            <a href='/template'>Template</a>

            <h1>Button Examples</h1>
            <p>These were styled after Bootstrap, and includes their predefined button styled.</p>
            <p>Developers can currently specify text, color, and size.</p>
            <p>Colors are as listed, and sizes are extra-small, small, large, and extra-large. Default size does not need to be specified.</p>
            <ButtonsContainer>
                <BootstrapButton text="Primary" color='primary' />
                <BootstrapButton text="Secondary" color='secondary' />
                <BootstrapButton text="Success" color='success' />
                <BootstrapButton text="Danger" color='danger' />
                <BootstrapButton text="Warning" color='warning' />
                <BootstrapButton text="Info" color='info' />
                <BootstrapButton text="Light" color='light' />
                <BootstrapButton text="Dark" color='dark' />
            </ButtonsContainer>
            <div>
                
            </div>
            <ButtonsContainer>
                <BootstrapButton text="Primary" color='primary' size="extra-small" />
                <BootstrapButton text="Primary" color='primary' size="small" />
                <BootstrapButton text="Primary" color='primary' />
                <BootstrapButton text="Primary" color='primary' size="large" />
                <BootstrapButton text="Primary" color='primary' size="extra-large" />
            </ButtonsContainer>
        </div>
    )
}

export default Home;