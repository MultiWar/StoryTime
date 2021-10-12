import { Editor, Path, Range, Text as SlateText, Transforms, Node as SlateNode } from "slate";
import { toggleBlock } from "../helperFunctions";

export const withDivider = (editor: Editor) => {
    const { insertBreak, isVoid } = editor

    editor.isVoid = element => {
        return element.type === 'divider' ? true : isVoid(element)
    }

    // if current selection is void node, insert a default node below
    editor.insertBreak = () => {
        if(!editor.selection || !Range.isCollapsed(editor.selection)) {
            return insertBreak()
        }
        
        const selectedNodePath = Path.parent(editor.selection.anchor.path)
        const selectedNode = SlateNode.get(editor, selectedNodePath)

        if(Editor.isVoid(editor, selectedNode)) {
            Editor.insertNode(editor, {
                type: 'paragraph',
                children: [{text: ''}]
            })

            return
        }

        insertBreak()
    }

    return editor
}