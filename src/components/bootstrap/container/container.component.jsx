import { ContainerWrapper } from "./container.styles"

const Container = ({children}) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

export default Container;