import { ButtonGroup, IconButton, useEditableControls } from "@chakra-ui/react"
import { FiCheck } from 'react-icons/fi'
import { GrEdit } from 'react-icons/gr'
import { IoMdClose } from 'react-icons/io'

export const EditableControls = () => {
    const { getCancelButtonProps, getEditButtonProps, getSubmitButtonProps, isEditing } = useEditableControls()

    return isEditing ? (
        <ButtonGroup ml='4'>
            <IconButton icon={<IoMdClose fontSize='1rem' />} {...getCancelButtonProps()} aria-label='Cancel editing' size='xs' />
            <IconButton icon={<FiCheck fontSize='1rem' />} {...getSubmitButtonProps()} aria-label='Submit changes' size='xs' />
        </ButtonGroup>
    ) : (
        <IconButton icon={<GrEdit fontSize='1rem' />} {...getEditButtonProps()} aria-label='Edit' size='xs' ml='4' />
    )
}