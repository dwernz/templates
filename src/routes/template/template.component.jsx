import { useState } from "react";
import Toggle from "../../components/inputs/toggle/toggle.component";
import { BinaryContainer, BinaryToggle } from "./template.styles";

const Template = () => {
    const [checked, setChecked] = useState(false);
    let [total, setTotal] = useState(0);
    
    const handleChange = (event) => {
        setChecked(!checked);

        const toggleId = event.target.id;
        const toggleValue = parseInt(toggleId.substrin)


        total = 0;
        
        // Code here
        
    }

    return (
        <div>
            <BinaryContainer>
                <BinaryToggle color='#2196F3' handleChange={handleChange}/>
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
                <BinaryToggle color='#2196F3' handleChange={handleChange} />
            </BinaryContainer>
            <h1>{total}</h1>
        </div>
    )
}

export default Template;