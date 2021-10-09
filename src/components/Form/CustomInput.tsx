import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input, InputProps } from "@chakra-ui/input";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface CustomInputProps extends InputProps {
    name: string,
    label?: string,
    error?: FieldError
}

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, CustomInputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input 
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

export const CustomInput = forwardRef(BaseInput)