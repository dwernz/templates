import { Button } from "./bootstrap-button.styles";

/*
    text specifies the text the button will display.

    color defines the colors.
        current list: primary, secondary, success, danger, warning, info, light, dark

    size determines the size of the button.
        current list: extra-small, small, default, large, extra-large
        note: default does not need to be specified.
*/

const BootstrapButton = ({text, color, size}) => {
    return (
        <Button className={`${color} ${size}`}>
            {text}
        </Button>
    )
}

export default BootstrapButton;