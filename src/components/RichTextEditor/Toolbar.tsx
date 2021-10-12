import { IconButton } from "@chakra-ui/button"
import { HStack } from "@chakra-ui/layout"
import { useSlate } from "slate-react"
import { isBlockActive, isMarkActive, toggleBlock, toggleMark } from "./helperFunctions"
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaCode, FaHeading, FaQuoteLeft, FaHighlighter } from 'react-icons/fa'
import { BsDash } from 'react-icons/bs'

export const Toolbar = () => {
    return (
        <HStack width='100%' bgColor='gray.700' borderRadius={6} spacing={2}>
            <MarkButton format='bold' icon={<FaBold />} ariaLabel='bold selection' />
            <MarkButton format='italic' icon={<FaItalic />} ariaLabel='italic selection' />
            <MarkButton format='underline' icon={<FaUnderline />} ariaLabel='underline selection' />
            <MarkButton format='strikethrough' icon={<FaStrikethrough />} ariaLabel='strikethrough selection' />
            <MarkButton format='code' icon={<FaCode />} ariaLabel='turn selection into code' />
            <MarkButton format='highlight' icon={<FaHighlighter />} ariaLabel='highlight selection' />
            <BlockButton format='heading' icon={<FaHeading />} ariaLabel='turn selection into a Heading' />
            <BlockButton format='quote' icon={<FaQuoteLeft />} ariaLabel='turn selection into a quote' />
            <BlockButton format='divider' icon={<BsDash />} ariaLabel='create divider' />
        </HStack>
    )
}

const BlockButton = ({ format, icon, ariaLabel }) => {
    const editor = useSlate()

    return (
        <IconButton
            icon={icon}
            aria-label={ariaLabel}
            backgroundColor={isBlockActive(editor, format) ? 'brand.600' : 'gray.700'}
            color={isBlockActive(editor, format) ? 'brand.100' : 'gray.100'}
            _hover={{color: 'brand.600', bgColor: 'brand.200'}}
            onClick={e => {
                e.preventDefault()
                toggleBlock(editor, format)
            }}
        />
    )
}

const MarkButton = ({ format, icon, ariaLabel }) => {
    const editor = useSlate()

    return (
        <IconButton
            icon={icon}
            aria-label={ariaLabel}
            backgroundColor={isMarkActive(editor, format) ? 'brand.600' : 'gray.700'}
            color={isMarkActive(editor, format) ? 'brand.100' : 'gray.100'}
            _hover={{color: 'brand.600', bgColor: 'brand.200'}}
            onClick={e => {
                e.preventDefault()
                toggleMark(editor, format)
            }}
        />
    )
}