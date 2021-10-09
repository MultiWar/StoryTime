import { Button, ButtonGroup, Flex, HStack, Image } from "@chakra-ui/react"
import { AnimateSharedLayout } from "framer-motion"
import { useRouter } from "next/dist/client/router"
import { CustomLink } from "../Link"
import { HeaderItem } from "./HeaderItem"

export const Header = () => {
    const isLoggedIn = true
    const router = useRouter()
    return (
        <Flex bg='gray.900' h='70px' align='center' justify='space-between'  px={8}>
            <Image src="/ST.svg" alt="" boxSize='50px' />
            <ButtonGroup variant='ghost' spacing={5}>
                <AnimateSharedLayout>
                    <HeaderItem to='/'>Home</HeaderItem>
                    <HeaderItem to='/authors'>Autores</HeaderItem>
                    <HeaderItem to='/stories'>Histórias</HeaderItem>
                    <HeaderItem to='/categories'>Categorias</HeaderItem>
                    <HeaderItem to='/genres'>Gêneros</HeaderItem>
                </AnimateSharedLayout>
            </ButtonGroup>
            {
            isLoggedIn ? (
                <Button variant='ghost' onClick={() => router.push('/stories/new')}>
                    Nova história
                </Button>
            ) : (
                <CustomLink href='/login'>Logar</CustomLink>
            )}
        </Flex>
    )
}