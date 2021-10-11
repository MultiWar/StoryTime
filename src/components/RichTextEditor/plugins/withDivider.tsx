import { Editor, Path, Range, Text as SlateText, Transforms, Node as SlateNode } from "slate";
import { toggleBlock } from "../helperFunctions";

export const withDivider = (editor: Editor) => {
    const { insertBreak,  } = editor

    editor.isVoid = element => {
        return element.type === 'divider'
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