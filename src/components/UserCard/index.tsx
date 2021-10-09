import { AspectRatio, Avatar, Box, Flex, Stack, Text, Tooltip } from "@chakra-ui/react"
import { Image as DatoCMSImage } from "react-datocms"
import { CustomLink } from "../Link"

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

interface UserCardProps {
    user: User
}

export const UserCard = ({ user }: UserCardProps) => {
    return (
        <Box maxW='xs' borderRadius='lg' borderWidth='1px' borderColor='gray.600' overflow='hidden'>
            <DatoCMSImage data={user.coverImage.responsiveImage} />
            <Flex justify='space-between' px={4}>
                <Avatar src={user.image} mt='-8' size='lg' />
                <Text mt={2}>{user.stories.length} histórias</Text>
            </Flex>
            <Flex p='2' direction='column'>
                <CustomLink href={`authors/${user.id}`} mx='auto' display='inline-block' fontSize='1.25rem'>{user.username}</CustomLink>
                <Text fontSize='.8rem' textAlign='center'>{user.pronouns}</Text>
                {/* <Tooltip label={user.biography} hasArrow >
                    <Text isTruncated mt={4}>{user.biography || "Este autor ainda não possui uma biografia."}</Text>
                </Tooltip> */}
            </Flex>
        </Box>
    )
}