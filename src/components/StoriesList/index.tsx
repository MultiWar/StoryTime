import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Grid, HStack, Stack, Text } from "@chakra-ui/react"
import { StoryListItem } from "./StoryListItem"

type Category = {
    id: string,
    title: string,
    slug: string
}

type Genre = {
    id: string,
    title: string,
    slug: string
}

type Chapter = {
    id: string,
    title: string,
}

type Warning = {
    id: string,
    title: string
}


type Story = {
    id: string,
    title: string,
    categories: Category[],
    summary: string,
    genres: Genre[],
    chapters: Chapter[],
    warnings?: Warning[]
}

interface StoriesListProps {
    stories: Story[]
}

export const StoriesList = ({ stories }: StoriesListProps) => {
    return (
        <Stack mt={5} spacing={4} >
            {stories.map(story => (
                <StoryListItem story={story} key={story.id} />
            ))}
        </Stack>
    )
}