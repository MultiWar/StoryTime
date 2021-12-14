import { Editor, Transforms, Text as SlateText, Element as SlateElement, Node as SlateNode, Path } from "slate"

export const isBlockActive = (editor: Editor, format: string) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    })

    return !!match
}

export const isMarkActive = (editor: Editor, format: string) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

export const toggleMark = (editor: Editor, format: string) => {
    const isActive = isMarkActive(editor, format)

    if(isActive) {
        Editor.removeMark(editor, format)
        return
    }
    Editor.addMark(editor, format, true)
}

export const toggleBlock = (editor: Editor, format) => {
    const isActive = isBlockActive(editor, format)

    const newProperties: Partial<SlateElement> = {
      type: isActive ? 'paragraph' : format,
    }

    if(format === 'thematicBreak') {
        addDivider(editor)
        return
    }

    Transforms.setNodes(editor, newProperties)
}

export const addDivider = (editor: Editor) => {
    const { selection } = editor
    const divider = [
        { type: 'thematicBreak' as const, children: [{text: ''}] },
        { type: 'paragraph' as const, children: [{text: ''}] }
    ]
    
    if(!!selection) {
        const [_parentNode, parentPath] = Editor.parent(editor, selection?.focus?.path)

        Transforms.insertNodes(editor, divider, {
            at: Path.next(parentPath),
            select: true
        })
    } else {
        Transforms.insertNodes(editor, divider, { select: true })
    }

}

export const slateToDast = (node: any) => {
    const marks = Object.keys(node).filter(key => node[key] === true)

    if(node?.text) {
        return {type: 'span', value: node?.text, marks}
    }

    if(node?.type === 'thematicBreak') {
        return {type: 'thematicBreak'}
    }

    if(node?.children && node?.children.length > 0) {
        return {type: node?.type, children: node?.children.map(c => slateToDast(c))}
    }
    
    return {}
}