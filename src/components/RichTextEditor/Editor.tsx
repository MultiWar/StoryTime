import { useMemo, useState, useCallback, KeyboardEvent } from "react"
import { createEditor, Descendant } from "slate"
import { Editable, Slate, withReact } from 'slate-react'
import { CustomElement } from "../../../slate"
import { DefaultElement, HeadingElement, LinkElement } from './customElements'
import { BoldLeaf } from "./customLeaves"
import { toggleBoldMark } from "./helperFunctions"
import { withHeadingShortcut } from "./plugins/withHeadingShortcut"

export const MyEditor = () => {
    const editor = useMemo(() => withHeadingShortcut(withReact(createEditor())), [])
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
            case 'link':
                return <LinkElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => {
        return <BoldLeaf {...props}/>
    }, [])

    const handleEvents = (e: KeyboardEvent<HTMLDivElement>) => {
        if(!e.ctrlKey) {
            return
        }

        switch(e.key) {
            case 'b':
                e.preventDefault()
                toggleBoldMark(editor)
                break;
            // case 'h':
            //     e.preventDefault()
            //     const [match] = Editor.nodes(editor, {
            //         match: (n: any) => n.type === 'heading'
            //     })
            //     Transforms.setNodes(
            //         editor, 
            //         { type: match ? 'paragraph' : 'heading' },
            //         { match: n => Editor.isBlock(editor, n) }
            //     )
            //     break;
            default:
                break;
        }
    }

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={v => setValue(v)}
        >
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={event => handleEvents(event)}
            />
        </Slate>
    )
}