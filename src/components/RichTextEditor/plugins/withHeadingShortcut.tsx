import { Editor, Text as SlateText, Transforms } from "slate";

export const withHeadingShortcut = (editor: Editor) => {
    const { insertText } = editor

    const turnIntoHeading = (level: 1 | 2 | 3) => {
        Editor.deleteBackward(editor, {unit: 'line'})
        Transforms.wrapNodes(editor, { type: 'heading', level: level, children: [] })
    }

    editor.insertText = text => {
        insertText(text)

        const textNodes = Array.from(Editor.nodes(editor, { match: n =>  SlateText.isText(n)}))
        if(!textNodes.length) {
            return
        }

        const [node] = textNodes[0] as any
        switch(node.text) {
            case '### ':
                turnIntoHeading(3)
                break;
            case '## ':
                turnIntoHeading(2)
                break;
            case '# ':
                turnIntoHeading(1)
                break;
            default:
                break;
        }
    }
    return editor
}