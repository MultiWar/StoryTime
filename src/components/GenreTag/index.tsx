import { Tag } from "@chakra-ui/react";
import NextLink from 'next/link'

interface GenreTagProps {
    genre: string,
    slug: string
}

export const GenreTag = ({ genre, slug }: GenreTagProps) => {
    let colorScheme: string
    switch (genre.toLowerCase()) {
        case "science fiction":
            colorScheme = 'facebook'
            break;
        case "horror":
            colorScheme = 'brand'
            break;
        case "thriller":
            colorScheme = 'red'
            break;
        case "fantasy":
            colorScheme = 'yellow'
            break;
        default:
            colorScheme = 'gray'
            break;
    }

    return (
        <NextLink href={`/genres/${slug}`}>
            <a> 
                <Tag 
                    colorScheme={colorScheme} 
                    variant='solid'
                    sx={{
                        '&:hover': {
                            filter: 'brightness(0.8)'
                        }
                    }}
                >{genre}</Tag>
            </a>
        </NextLink>
    )
}