import { Box, BoxProps, Button } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router"
import { ReactElement } from "react";
import { CustomLink } from "../Link"

interface HeaderItemProps {
    to: string,
    children: string
}

const MotionBox = motion<BoxProps>(Box);

export const HeaderItem = ({ to, children }: HeaderItemProps) => {
    const router = useRouter()
    let isActive: boolean
    if(to === '/') {
        isActive = router.asPath === '/'
    } else {
        isActive = router.asPath.startsWith(to)
    }

    return (
        <Button
            color={isActive ? 'brand.500' : 'gray.100'}
            _hover={{ color: 'brand.600' }}
            h='70px'
            px='1'
            py='5'
            position='relative'
            onClick={() => router.push(to)}
            role='link'
        >
            {children}
            {isActive && (<MotionBox 
                position='absolute'
                left='0'
                right='0'
                bottom='1px'
                height='3px'
                bg='brand.500'
                layoutId='activeLink'
            />)}
        </Button>
    )
}