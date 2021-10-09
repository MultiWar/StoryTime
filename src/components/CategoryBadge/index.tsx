import { Badge, filter } from "@chakra-ui/react";
import NextLink from 'next/link'

interface CategoryBadgeProps {
    category: string,
    slug: string
}

export const CategoryBadge = ({ category, slug }: CategoryBadgeProps) => {
    let colorScheme: string
    switch(category) {
        case "Original Fiction":
            colorScheme = 'green'
            break;
        case "Fanfic":
            colorScheme = 'yellow'
            break;
        default:
            colorScheme = 'gray'
    }
    return (
        <NextLink href={`/categories/${slug}`}>
            <a>
                <Badge 
                    colorScheme={colorScheme}
                    sx={{
                        '&:hover': {
                            filter: 'brightness(0.8)'
                        }
                    }}
                >{category}</Badge>
            </a>
        </NextLink>
    )
}