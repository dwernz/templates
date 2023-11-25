import { RowWrapper } from "./row.styles";

const Row = ({ children }) => {
    return (
        <RowWrapper>
            {children}
        </RowWrapper>
    )
}

export default Row;