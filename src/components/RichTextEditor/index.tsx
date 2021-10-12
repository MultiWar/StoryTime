import { MyEditor } from "./Editor"

export const RichTextEditor = ({ onChange, value }) => {
    return (
        <MyEditor onChange={onChange} value={value} />
    )
}