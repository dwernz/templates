import BootstrapButton from '../../components/buttons/bootstrap-button/bootstrap-button.component';
import { ButtonsContainer } from './template.styles';

const Template = () => {
    return (
        <div>
            <h1>TEMPLATE!</h1>
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

export default Template;