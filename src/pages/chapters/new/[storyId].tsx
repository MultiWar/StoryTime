import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CustomInput } from "../../../components/Form/CustomInput";
import { Stack, Select, CheckboxGroup } from "@chakra-ui/react";
import { CustomTextarea } from "../../../components/Form/CustomTextarea";
import { RichTextEditor } from "../../../components/RichTextEditor";

const newChapterSchema = yup.object().shape({
    title: yup.string().trim().required('Este campo é obrigatório').min(3, 'O título precisa ter no mínimo 3 caracteres'),
    summary: yup.string()
})

export default function NewChapter() {
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(newChapterSchema)
    })

    function submitChapter(data) {
        console.log(data)
    }

    const { errors } = formState

    return (
        <Flex maxW='800px' mx='auto' direction='column' bg='gray.700' borderRadius='lg' overflow='hidden' mt={10} p={8}>
            <Heading textAlign='center'>Novo capítulo de [Inserir Nome da História]</Heading>
            <Stack
                as='form'
                onSubmit={handleSubmit(submitChapter)}
                spacing={6}
                mt={6}
            >
                <CustomInput name='title' label='Título' {...register('title')} error={errors.title} />
                <CustomInput name='summary' label='Sinopse' {...register('summary')} error={errors.summary} />
                <CustomTextarea name='startingNotes' label='Notas iniciais' {...register('startingNotes')} error={errors.startingNotes} />
                <RichTextEditor />
                <CustomTextarea name='text' label='Texto' {...register('text')} error={errors.text} />
                <CustomTextarea name='endingNotes' label='Notas finais' {...register('endingNotes')} error={errors.endingNotes} />
                <CheckboxGroup></CheckboxGroup>
            </Stack>
        </Flex>
    )
}