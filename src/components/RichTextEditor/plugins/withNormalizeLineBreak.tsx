import { Editor } from "slate";
import { HOTKEYS } from "../Editor";
import { toggleBlock, toggleMark } from "../helperFunctions";

export const withNormalizeLineBreak = (editor: Editor) => {
    const { insertBreak } = editor

    editor.insertBreak = () => {
        insertBreak()

        toggleBlock(editor, 'paragraph')

        // remove all marks
        for(const hotkey in HOTKEYS) {
            Editor.removeMark(editor, HOTKEYS[hotkey])
        }
    }

    return editor
}