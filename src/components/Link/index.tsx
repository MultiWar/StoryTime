import { Link, LinkProps, Tooltip } from "@chakra-ui/react";
import NextLink from 'next/link'
import { forwardRef } from "react";

interface CustomLinkProps extends LinkProps {
    hasTooltip?: boolean,
    tooltipLabel?: string
}

export const CustomLink = ({
    href, 
    color='brand.500', 
    fontWeight='bold', 
    _hover={color: 'brand.600'}, 
    hasTooltip = false,
    tooltipLabel,
    ...props
}: CustomLinkProps) => {

    if(hasTooltip) {
        return (
            <NextLink href={href} passHref>
                <Link
                    color={color}
                    fontWeight={fontWeight}
                    _hover={_hover}
                    {...props}
                >
                    <Tooltip label={tooltipLabel}>
                        { props.children }
                    </Tooltip>
                </Link>
            </NextLink>
        )
    }

    return (
        <NextLink href={href} passHref>
            <Link 
                color={color} 
                fontWeight={fontWeight}
                _hover={_hover} 
                {...props}
            >
                { props.children }
            </Link>
        </NextLink>
    )
}