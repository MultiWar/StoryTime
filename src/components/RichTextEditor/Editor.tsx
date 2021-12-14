import { Box, Stack } from "@chakra-ui/layout"
import isHotkey from "is-hotkey"
import { useMemo, useState, useCallback, KeyboardEvent, useEffect } from "react"
import { createEditor, Descendant } from "slate"
import { withHistory } from "slate-history"
import { Editable, Slate, withReact } from 'slate-react'
import { CustomElement } from "../../../slate"
import { DefaultElement, DividerElement, HeadingElement, QuoteElement } from './customElements'
import { Leaf } from "./customLeaves"
import { toggleMark } from "./helperFunctions"
import { withDivider } from "./plugins/withDivider"
import { withNormalizeLineBreak } from "./plugins/withNormalizeLineBreak"
import { Toolbar } from "./Toolbar"

export const HOTKEYS = {
    'mod+b': 'strong',
    'mod+i': 'emphasis',
    'mod+u': 'underline',
    'mod+,': 'code',
    'mod+k': 'strikethrough',
    'mod+m': 'highlight'
}

const initialValue: CustomElement[] = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    }
]

export const MyEditor = ({ onChange, value = initialValue }) => {
    const editor = useMemo(() => withNormalizeLineBreak(withDivider(withHistory(withReact(createEditor())))), [])
    // const [value, setValue] = useState<Descendant[]>(initialValue)

    // useEffect(() => {
    //     console.log(value)
    // }, [value])

    const renderElement = useCallback(props => {
        switch(props.element.type) {
            case 'heading':
                return <HeadingElement {...props} />
            case 'blockquote':
                return <QuoteElement {...props} />
            case 'thematicBreak':
                return <DividerElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    const handleEvents = (e: KeyboardEvent<HTMLDivElement>) => {
        for(const hotkey in HOTKEYS) {
            if(isHotkey(hotkey, e as any)) {
                e.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
            }
        }
    }

    return (
        <Box
            bgColor='gray.800'
            borderRadius='6'
            borderWidth='2px'
            borderColor='gray.900'
            borderStyle='solid'
            _focusWithin={{borderColor: 'brand.500', bgColor: 'gray.900'}}
            maxH='50rem'
            overflowY='auto'
        >
            <Slate
                editor={editor}
                value={value}
                onChange={onChange}
            >
                <Stack>
                    <Toolbar />
                    <Box
                        p={4}
                    >
                        <Editable
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                            onKeyDown={event => handleEvents(event)}
                        />
                    </Box>
                </Stack>
            </Slate>
        </Box>
    )
}