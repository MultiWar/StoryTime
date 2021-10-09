import { Editor, Transforms, Text as SlateText } from "slate"

export const isBoldMarkActive = (editor: Editor) => {
    const [match] = Editor.nodes(editor, {
        match: (n: any) => n.bold === true,
        universal: true
    })

    return !!match
}

export const toggleBoldMark = (editor: Editor) => {
    const isActive = isBoldMarkActive(editor)
    Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => SlateText.isText(n), split: true }
    )
}