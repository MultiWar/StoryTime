import { Box, Stack } from "@chakra-ui/layout"
import isHotkey from "is-hotkey"
import { useMemo, useState, useCallback, KeyboardEvent } from "react"
import { createEditor, Descendant } from "slate"
import { withHistory } from "slate-history"
import { Editable, Slate, withReact } from 'slate-react'
import { CustomElement } from "../../../slate"
import { DefaultElement, DividerElement, HeadingElement, QuoteElement } from './customElements'
import { Leaf } from "./customLeaves"
import { toggleMark } from "./helperFunctions"
import { withDivider } from "./plugins/withDivider"
import { Toolbar } from "./Toolbar"

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
    'mod+k': 'strikethrough'
}

export const MyEditor = () => {
    const editor = useMemo(() => withDivider(withHistory(withReact(createEditor()))), [])
    const initialValue: CustomElement[] = [
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        }
    ]
    const [value, setValue] = useState<Descendant[]>(initialValue)

    const renderElement = useCallback(props => {
        switch(props.element.type) {
            case 'heading':
                return <HeadingElement {...props} />
            case 'quote':
                return <QuoteElement {...props} />
            case 'divider':
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
        >
            <Slate
                editor={editor}
                value={value}
                onChange={v => setValue(v)}
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