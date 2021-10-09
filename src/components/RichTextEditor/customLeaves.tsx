import { chakra } from "@chakra-ui/system"

export const BoldLeaf = props => {
    return (
        <chakra.span 
            fontWeight={props.leaf.bold ? 'bold' : 'regular'} 
            {...props.attributes}
        >
            {props.children}
        </chakra.span>
    )
}