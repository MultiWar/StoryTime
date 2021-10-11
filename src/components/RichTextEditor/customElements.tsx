import { Box, Divider, Stack, Text } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/system"
import { CustomLink } from "../Link"

export const DefaultElement = props => {
    return (
        <Text {...props.attributes} mt={2}>{props.children}</Text>
    )
}

export const HeadingElement = props => {
    return (
        <Heading 
            {...props.attributes} 
            size='lg'
            as='h3'
        >
            {props.children}
        </Heading>
    )
}

export const QuoteElement = props => {
    return (
        <Stack px={10} py={2} my={4} borderLeft='2px' borderColor='gray.300'>
            <Text {...props.attributes} fontSize='lg'>{props.children}</Text>
        </Stack>
    )
}

export const DividerElement = props => {
    return (
        <Box w='100%'>
            <Divider my={8} backgroundColor='gray.300' width='100%' mx='auto' variant='dashed' {...props.attributes} />
            {props.children}
        </Box>
    )
}