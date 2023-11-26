import { Progress, ProgressBar, ProgressItem, ProgressPercent, ProgressTitle } from "./progress-item-container.styles";

const ProgressItemContainer = ({skill, progress}) => {
    return (
        <ProgressItem>
            <ProgressTitle>{skill}</ProgressTitle>
            <Progress>
                <ProgressBar 
                    role="progressbar"
                    aria-valuemin='0' 
                    aria-valuemax='100' 
                    style={{width: `${progress}%`}} >
                    <ProgressPercent> {progress}%</ProgressPercent>
                </ProgressBar>
            </Progress>
        </ProgressItem>
    )
}

export default ProgressItemContainer;