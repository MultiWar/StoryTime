import { Wrap, WrapItem } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { UserCard } from "../../components/UserCard";
import { request } from "../../lib/datocms";

type User = {
    id: string,
    username: string,
    image: string,
    biography: string,
    pronouns: string,
    coverImage: {
        responsiveImage: any
    },
    stories: [{
        id: string
    }]
}

interface AuthorsProps {
    users: User[]
}

export default function Authors({users}: AuthorsProps) {
    return (
        // <Stack mx='auto' maxW='1000px' mt='24'>
        //     {users.map(user => (
        //         <Grid key={user.id} templateColumns='5rem 1fr' alignItems='center'>
        //             <GridItem>
        //                 <Avatar src={user.image} name={user.username} />
        //             </GridItem>
        //             <GridItem>
        //                 <CustomLink href={`/authors/${user.id}`} fontSize='1.5rem'>
        //                     {user.username}
        //                 </CustomLink>
        //             </GridItem>
        //         </Grid>
        //     ))}
        // </Stack>
        <Wrap mx='auto' maxW='1000px' mt='24'>
            {users.map(user => (
                <WrapItem key={user.id}>
                    <UserCard user={user} />
                </WrapItem>
            ))}
        </Wrap>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const ALL_AUTHORS_PAGE = `
        query AllAuthors {
            allUsers(filter: {stories: {exists: true}}) {
                id
                username
                biography
                image
                pronouns
                coverImage {
                    responsiveImage(imgixParams: {w: 250, h: 100, fit: crop, auto: format}) {
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
                }
            }
        }
    `

    const data = await request({query: ALL_AUTHORS_PAGE})

    return {
        props: {
            users: data.allUsers
        }
    }
}