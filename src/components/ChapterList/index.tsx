import { Stack } from "@chakra-ui/layout"
import { ChapterListItem } from "./ChapterListItem"

type Chapter = {
    id: string,
    title: string,
    warnings: Warning[],
    authors: User[]
}

type Warning = {
    id: string,
    title: string,
    initials: string
}

type User = {
    id: string,
    username: string,
    pronouns: string
}

interface ChapterListProps {
    chapters: Chapter[]
}

export const ChapterList = ({ chapters }: ChapterListProps) => {
    return (
        <Stack mt={5}>
            {chapters.map(chapter => (
                <ChapterListItem key={chapter.id} chapter={chapter} />
            ))}
        </Stack>
    )
}