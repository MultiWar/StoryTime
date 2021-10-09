import { AspectRatio, Box, Grid, GridItem, HStack, Tag, Text, Tooltip } from "@chakra-ui/react"
import { CategoryBadge } from "../CategoryBadge"
import { GenreTag } from "../GenreTag"
import NextLink from 'next/link'

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
    genres: Genre[],
    chapters: Chapter[],
    warnings?: Warning[]
}

interface StoryListItemProps {
    story: Story
}

export const StoryListItem = ({ story }: StoryListItemProps) => {
    return (
        <HStack key={story.id} h='60px' borderRadius='8' p='4' borderWidth='1px' borderColor='gray.300'>
            <Grid gridTemplateColumns='15rem 10rem 1fr 3rem 8rem' w='100%' h='100%' alignItems='center' gap={2}>
                <GridItem>
                    <Tooltip label={story.title} openDelay={500}>
                        <Text isTruncated>
                            <NextLink href={`/stories/${story.id}`}>
                                <a>
                                    {story.title}
                                </a>
                            </NextLink>
                        </Text>
                    </Tooltip>
                </GridItem>
                <GridItem>
                    <HStack>
                        {story.categories.map(cat => (
                            <CategoryBadge key={cat.id} category={cat.title} slug={cat.slug} />
                        ))}
                    </HStack>
                </GridItem>
                <GridItem>
                    <HStack spacing={3}>
                        {story.genres.map(genre => (
                            <GenreTag genre={genre.title} key={genre.id} slug={genre.slug} />
                            ))}
                    </HStack>
                </GridItem>
                <GridItem textAlign='center'>
                    {story.warnings.length > 0 && (
                        <Tag colorScheme='red' variant='solid'>TW</Tag>
                    )}
                </GridItem>
                <GridItem textAlign='center'>
                    <Text fontSize='.80rem'>{story.chapters.length} chapters</Text>
                </GridItem>
            </Grid>
        </HStack>
    )
}