import { Flex, Heading, Text, SimpleGrid, Spinner, Container, HStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { Image as DatoCMSImage } from 'react-datocms'
import { CategoryBadge } from "../../components/CategoryBadge";
import { ChapterList } from "../../components/ChapterList";
import { GenreTag } from "../../components/GenreTag";
import { CustomLink } from "../../components/Link";
import { WarningTag } from "../../components/WarningTag";
import { request } from "../../lib/datocms";

type User = {
    id: string,
    username: string,
    image: string,
    biography: string,
    pronouns: string
}

type Warning = {
    id: string,
    title: string,
    initials: string
}
type Chapter = {
    id: string,
    title: string,
    summary: string,
    startingNotes: string,
    endingNotes: string,
    text: string,
    warnings: Warning[],
    authors: User[]
}

interface ChapterProps {
    chapter: Chapter,
}

export default function Chapter({ chapter }: ChapterProps) {
    const router = useRouter()

    if(router.isFallback) {
        return (
            <SimpleGrid placeItems='center' p={20}>
                <Spinner />
            </SimpleGrid>
        )
    }

    return (
        <Flex maxW='1000px' mx='auto' direction='column' bg='gray.700' borderRadius='lg' overflow='hidden' mt={10} pb={8}>
            <Flex direction='column' px={8}>
                <Heading textAlign='center' mt='4'>{chapter.title}</Heading>
                <Text ml='4' fontSize='lg' textAlign='center'>Escrito por {chapter.authors.map((author, index) => (
                    <Fragment key={author.id}>
                        <CustomLink 
                            href={`/authors/${author.id}`} 
                            hasTooltip={true} 
                            tooltipLabel={`Ir para a página de ${author.username} (${author.pronouns})`}
                            >
                            {author.username}
                        </CustomLink>
                        {index === chapter.authors.length - 1 ? "." : ", "}
                    </Fragment>
                ))}</Text>
                <HStack spacing='4' mt={8} px={8}>
                    {chapter.warnings.map(war => (
                        <WarningTag key={war.id} warning={war} />
                    ))}
                </HStack>
                {chapter.summary && (
                    <Flex direction='column' mt={6}>
                        <Text fontSize='lg'>Sinopse:</Text>
                        <Container maxW='container.lg'>
                            <Text>{ chapter.summary }</Text>
                        </Container>
                    </Flex>
                    )
                }
                <Flex px={10} direction='column' mt='10'>
                    {chapter.startingNotes && (
                        <Flex direction='column' borderY='1px dashed' borderColor='gray.300' py='4'>
                            <Text fontSize='lg' fontWeight='bold'>Notas iniciais:</Text>
                            <Container maxW='container.lg'>
                                <Text>{ chapter.startingNotes }</Text>
                            </Container>
                        </Flex>
                        )
                    }
                    <Container maxW='container.lg' mt={16}>
                        <Text>{chapter.text}</Text>
                    </Container>
                    {chapter.endingNotes && (
                        <Flex direction='column' mt='16' borderY='1px dashed' borderColor='gray.300' py='4'>
                            <Text fontSize='lg' fontWeight='bold'>Notas finais:</Text>
                            <Container maxW='container.lg'>
                                <Text>{ chapter.endingNotes }</Text>
                            </Container>
                        </Flex>
                        )
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }    
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { chapterId } = ctx.params

    const CHAPTER_QUERY = `
    query Chapter($chapterId: ItemId){
        chapter(filter: {id: {eq: $chapterId}}) {
          id
          title
          summary
          startingNotes
          text
          endingNotes
          _updatedAt
          authors {
            id
            username
            pronouns
            image
          }
          warnings {
            id
            title
            initials
          }
        }
      }
    `

    const data = await request({ query: CHAPTER_QUERY, variables: { chapterId: chapterId } })

    return {
        props: {
            chapter: data.chapter,
        },
    }
}