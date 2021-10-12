import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input, InputProps } from "@chakra-ui/input";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { RichTextEditor } from "../RichTextEditor";

interface CustomInputProps extends InputProps {
    name: string,
    label?: string,
    error?: FieldError
    onChange: (v: any) => void,
    value: any
}

const BaseRichTextEditor: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> = ({ name, label, error = null, value, onChange }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            {/* <Input 
                name={name}
                id={name}
                bgColor='gray.800'
                variant='filled'
                _hover={{bgColor: 'gray.800'}}
                _focus={{bgColor: 'gray.900', borderColor: 'brand.500'}}
                size='lg'
                ref={ref}
                {...rest}
            /> */}
            <RichTextEditor onChange={onChange} value={value} />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const CustomRichTextEditor = forwardRef(BaseRichTextEditor)