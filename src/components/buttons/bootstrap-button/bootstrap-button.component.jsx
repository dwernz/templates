import { Button } from "./bootstrap-button.styles";

const BootstrapButton = ({text, theme, color, size}) => {
    return (
        <Button theme={theme} className={`${color} ${size}`}>
            {text}
        </Button>
    )
}

export default BootstrapButton;