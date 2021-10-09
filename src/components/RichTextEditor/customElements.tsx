import { Text } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/system"
import { CustomLink } from "../Link"

export const DefaultElement = props => {
    return (
        <Text {...props.attributes}>{props.children}</Text>
    )
}

export const HeadingElement = props => {
    const hLevel = props.attributes.level

    const hLevelToSize = {
        1: '2xl',
        2: 'xl',
        3: 'lg'
    }

    return (
        <Heading 
            {...props.attributes} 
            size={hLevelToSize[hLevel]}
            as={`h${hLevel}`}
        >
            {props.children}
        </Heading>
    )
}

export const LinkElement = props => {
    return (
        <CustomLink >{props.children}</CustomLink>
    )
}