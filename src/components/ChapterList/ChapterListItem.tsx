import { Grid, GridItem, HStack, Text } from "@chakra-ui/layout"
import { Tooltip, Tag } from "@chakra-ui/react"
import React from "react"
import { CategoryBadge } from "../CategoryBadge"
import { GenreTag } from "../GenreTag"
import NextLink from 'next/link'
import { CustomLink } from "../Link"
import { WarningTag } from "../WarningTag"

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

interface ChapterListItemProps {
    chapter: Chapter
}

export const ChapterListItem = ({ chapter }: ChapterListItemProps) => {
    return (
        <HStack key={chapter.id} h='60px' borderRadius='8' p='4' borderWidth='1px' borderColor='gray.300'>
            <Grid gridTemplateColumns='15rem 1fr 10rem' w='100%' h='100%' alignItems='center' gap={2}>
                <GridItem borderRight='1px' borderColor='gray.300' >
                    <Tooltip label={chapter.title} openDelay={500}>
                        <Text isTruncated>
                            <NextLink href={`/chapters/${chapter.id}`}>
                                <a>
                                    {chapter.title}
                                </a>
                            </NextLink>
                        </Text>
                    </Tooltip>
                </GridItem>
                <GridItem borderRight='1px' borderColor='gray.300'>
                    <HStack>
                        {chapter.authors.map(auth => (
                            <CustomLink
                                key={auth.id}
                                href={`/auhors/${auth.id}`}
                                hasTooltip={true}
                                tooltipLabel={`Ir para a página de ${auth.username} (${auth.pronouns})`}
                            >
                                {auth.username}
                            </CustomLink>
                        ))}
                    </HStack>
                </GridItem>
                <GridItem>
                    <HStack spacing={3}>
                        {chapter.warnings.map(war => (
                            <WarningTag key={war.id} warning={war} />
                        ))}
                    </HStack>
                </GridItem>
            </Grid>
        </HStack>
    )
}