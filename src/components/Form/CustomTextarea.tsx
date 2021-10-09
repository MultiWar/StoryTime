import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface CustomTextareaProps extends TextareaProps {
    name: string,
    label?: string,
    error?: FieldError
}

const BaseTextarea: ForwardRefRenderFunction<HTMLTextAreaElement, CustomTextareaProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Textarea 
                name={name}
                id={name}
                bgColor='gray.800'
                variant='filled'
                _hover={{bgColor: 'gray.800'}}
                _focus={{bgColor: 'gray.900', borderColor: 'brand.500'}}
                size='lg'
                ref={ref}
                {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const CustomTextarea = forwardRef(BaseTextarea)