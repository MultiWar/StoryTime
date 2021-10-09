import { Flex, Heading, Text, SimpleGrid, Spinner, Container, HStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { Image as DatoCMSImage } from 'react-datocms'
import { CategoryBadge } from "../../components/CategoryBadge";
import { ChapterList } from "../../components/ChapterList";
import { GenreTag } from "../../components/GenreTag";
import { CustomLink } from "../../components/Link";
import { request } from "../../lib/datocms";

type User = {
    id: string,
    username: string,
    image: string,
    coverImage: CoverImage,
    biography: string,
    pronouns: string
}

type CoverImage = {
    responsiveImage: any
}

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

type Warning = {
    id: string,
    title: string,
    initials: string
}

type Story = {
    id: string,
    title: string,
    summary: string,
    coverImage: CoverImage | null,
    authors: User[],
    chapters: Chapter[],
    categories: Category[],
    genres: Genre[]
}

type Chapter = {
    id: string,
    title: string,
    coverImage: CoverImage | null,
    warnings: Warning[],
    authors: User[]
}

interface StoryProps {
    story: Story,
    numberOfChapters: number
}

export default function Story({ story, numberOfChapters }: StoryProps) {
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
            {story.coverImage && <DatoCMSImage data={story.coverImage.responsiveImage} />}
            <Flex direction='column' px={8}>
                <Heading textAlign='center' mt='4'>{story.title}</Heading>
                <Text ml='4' fontSize='lg' textAlign='center'>Escrito por {story.authors.map((author, index) => (
                    <Fragment key={author.id}>
                        <CustomLink 
                            href={`/authors/${author.id}`} 
                            hasTooltip={true} 
                            tooltipLabel={`Ir para a página de ${author.username} (${author.pronouns})`}
                        >
                            {author.username}
                        </CustomLink>
                        {index === story.authors.length - 1 ? "." : ", "}
                    </Fragment>
                ))}</Text>
                <HStack spacing='2' mt={8}>
                    <Text>Categorias:</Text>
                    <HStack spacing='4' >
                        {story.categories.map(cat => (
                            <CategoryBadge key={cat.id} category={cat.title} slug={cat.slug} />
                        ))}
                    </HStack>
                </HStack>
                <HStack spacing='2' mt={4}>
                    <Text>Gêneros:</Text>
                    <HStack spacing='4'>
                        {story.genres.map(genre => (
                            <GenreTag key={genre.id} genre={genre.title} slug={genre.slug} />
                        ))}
                    </HStack>
                </HStack>
                {story.summary && (
                    <Flex direction='column' mt={10}>
                        <Text fontSize='lg'>Sinopse:</Text>
                        <Container maxW='container.lg'>
                            <Text>{ story.summary }</Text>
                        </Container>
                    </Flex>
                    )
                }
                <Flex px={10} direction='column'>
                    <Text fontSize='xl' mt={8} textAlign='center'>Todos os capítulos ({numberOfChapters})</Text>
                    <ChapterList chapters={story.chapters} />
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
    const { storyId } = ctx.params

    const STORY_QUERY = `
    query Story($storyId: ItemId) {
        story(filter: {id: {eq: $storyId}}) {
          id
          title
          summary
          coverImage {
              responsiveImage (imgixParams: {w: 1000, h: 300, fit: crop, auto: format}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
            }
          chapters {
            id
            title
            warnings {
              id
              title
              initials
            }
            authors {
              id
              username
              pronouns
            }
          }
          warnings {
            id
            title
          }
          authors {
            id
            username
            pronouns
            coverImage {
              responsiveImage {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
              }
            }
          }
          genres {
            id
            title
          }
          categories {
            id
            title
          }
        }
        _allChaptersMeta(filter: {story: {eq: $storyId}}) {
          count
        }
      }
      
    `

    const data = await request({ query: STORY_QUERY, variables: { storyId: storyId } })

    return {
        props: {
            story: data.story,
            numberOfChapters: data._allChaptersMeta.count
        },
    }
}