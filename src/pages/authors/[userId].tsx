import { Avatar, Box, chakra, Container, Editable, EditableInput, EditablePreview, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { request } from "../../lib/datocms";
import { Image as DatoCMSImage } from 'react-datocms'
import { StoriesList } from "../../components/StoriesList";
import { EditableControls } from "../../components/Form/EditableControls";

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
    title: string
}

type Story = {
    id: string,
    title: string,
    summary: string,
    chapters: Chapter[],
    categories: Category[],
    genres: Genre[]
}

type Chapter = {
    id: string,
    title: string,
    coverImage: CoverImage | null,
    warnings: Warning[]
}

interface AuthorProps {
    user: User,
    recentStories: Story[],
    totalNumberOfStories: number,
}

export default function Author({ user, recentStories, totalNumberOfStories }: AuthorProps) {
    const userId = '51549093'
    return (
        <Flex maxW='1000px' mx='auto' direction='column' bg='gray.700' borderRadius='lg' overflow='hidden' mt={10} pb={8}>
            <DatoCMSImage data={user.coverImage.responsiveImage} />
            <Flex px={10} direction='column'>
                <Flex align='center' direction='column'>
                    <Stack spacing={4} width='max-content' align='center' >
                        <Avatar size='2xl' src={user.image} mt={-16} />
                        <Heading>{user.username}</Heading>
                    </Stack>
                    <Text>{user.pronouns}</Text>
                    {/* <Stack w='min-content' textAlign='center' mt='auto' mb='1'>
                        <Text fontSize='1.5rem'>{totalNumberOfStories}</Text>
                        <Text>Histórias</Text>
                    </Stack> */}
                </Flex>
                <Box mt={6}>
                    <Heading fontWeight='bold' size='md'>Sobre:</Heading>
                    <Container mt={2} ml='0' fontSize='1rem'>
                        {userId === user.id ? (
                            <Editable
                                defaultValue={user.biography || "Este usuário ainda não possui uma biografia."}
                                display='flex'
                                flexDir='row'
                                submitOnBlur={false}
                                selectAllOnFocus={false}
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                <EditableInput as='textarea' />
                                <EditableControls />
                            </Editable>
                        ) : (
                            user.biography || "Este usuário ainda não possui uma biografia."
                        )}
                    </Container>
                </Box>
                <Flex mt={10} direction='column'>
                    <Text mt={2}>
                        <chakra.span fontSize='xl' fontWeight='medium' mr={2}>
                            Histórias mais recentes
                        </chakra.span>
                        ({totalNumberOfStories} histórias)
                    </Text>
                    <StoriesList stories={recentStories} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { userId } = ctx.params

    const AUTHORS_QUERY = `
        query AuthorPage($anyIn: [ItemId], $eq: ItemId) {
            user(filter: {id: {eq: $eq}}) {
                id
                username
                image
                biography
                pronouns
                coverImage {
                    responsiveImage(imgixParams: {w: 1000, h: 300, fit: crop, auto: format}) {
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
                stories {
                    id
                    title
                    summary
                    coverImage {
                        responsiveImage(imgixParams: {w: 1000, h: 300, fit: crop, auto: format}) {
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
                    categories {
                        id
                        title
                        slug
                    }
                    genres {
                        id
                        title
                        slug
                    }
                    warnings {
                        id
                        title
                    }
                    chapters {
                        id
                        title
                    }
                }
            }
            _allStoriesMeta(filter: {authors: {anyIn: $anyIn}}) {
                count
            }
        }
    `

    const data = await request({query: AUTHORS_QUERY, variables: {anyIn: [userId], eq: userId}})

    const props = {
        user: {
            id: data.user.id,
            username: data.user.username,
            image: data.user.image,
            coverImage: data.user.coverImage,
            biography: data.user.biography,
            pronouns: data.user.pronouns
        },
        recentStories: data.user.stories,
        totalNumberOfStories: data._allStoriesMeta.count
    }

    return {
        props
    }
}