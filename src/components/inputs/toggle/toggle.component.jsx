import { Input, Label, Switch } from "./toggle.styles";

const Toggle = ({color, handleChange}) => {    
    return (
        <Label>
            <Input type='checkbox' color={color} onChange={handleChange} />
            <Switch />
        </Label>
    )
}

export default Toggle;