import { chakra } from "@chakra-ui/system"

export const Leaf = ({ attributes, children, leaf }) => {
    if(leaf.strong) {
        children = <chakra.strong fontWeight='black'>{children}</chakra.strong>
    }

    if(leaf.emphasis) {
        children = <chakra.span as='em' fontStyle='italic'>{children}</chakra.span>
    }

    if(leaf.underline) {
        children = <chakra.span as='u' textDecoration='underline'>{children}</chakra.span>
    }

    if(leaf.code) {
        children = <chakra.code bgColor='gray.700' px='1' borderRadius='1' >{children}</chakra.code>
    }

    if(leaf.strikethrough) {
        children = <chakra.span as='s' textDecoration='line-through'>{children}</chakra.span>
    }
    
    if(leaf.highlight) {
        children = <chakra.mark backgroundColor='brand.600' color='gray.100'>{children}</chakra.mark>
    }

    return (
        <chakra.span {...attributes}>
            {children}
        </chakra.span>
    )
}