import { Tag } from "@chakra-ui/tag"
import { Tooltip } from "@chakra-ui/tooltip"

type Warning = {
    id: string,
    title: string,
    initials: string
}

interface WarningTagProps {
    warning: Warning
}

export const WarningTag = ({ warning }: WarningTagProps) => {
    return (
        <Tooltip label={warning.title}>
            <Tag colorScheme='red' variant='solid'>
                {warning.initials}
            </Tag>
        </Tooltip>
    )
}