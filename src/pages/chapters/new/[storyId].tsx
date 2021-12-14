import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CustomInput } from "../../../components/Form/CustomInput";
import { Stack, Select, CheckboxGroup, Button } from "@chakra-ui/react";
import { CustomTextarea } from "../../../components/Form/CustomTextarea";
import { RichTextEditor } from "../../../components/RichTextEditor";
import { CustomRichTextEditor } from "../../../components/Form/RichTextInput";
import { useState } from "react";
import { slateToDast } from "../../../components/RichTextEditor/helperFunctions";

const newChapterSchema = yup.object().shape({
    title: yup.string().trim().required('Este campo é obrigatório').min(3, 'O título precisa ter no mínimo 3 caracteres'),
    summary: yup.string()
})

const initialNode = {
    children: [
        {
            "type":"paragraph",
            "children": [
                {
                    "text":"A line of text in a "
                },
                {
                    "text":"paragraph",
                    "highlight":true
                },
                {
                    "text":"."
                }
            ]
        },
        {
            "type":"paragraph",
            "children": [
                {
                    "text":"Another "
                },
                {
                    "text":"paragraph",
                    "strong":true,
                    "emphasis":true,
                    "underline":true,
                    "strikethrough":true,
                    "code":true,
                    "highlight":true
                }
            ]
        },
        {
            "type":"heading",
            "children": [
                {
                    "text":"aasdasdasd"
                }
            ]
        },
        {
            "type":"blockquote",
            "children": [
                {
                    "text":"sdasdasdasd"
                }
            ]
        },
        {
            "type":"paragraph",
            "children": [
                {
                    "text":""
                }
            ]
        },
        {
            "type":"thematicBreak",
            "children": [
                {
                    "text":""
                }
            ]
        },
        {
            "type":"paragraph",
            "children": [
                {
                    "text":"sdasdasasd"
                }
            ]
        },
        {
            "type":"paragraph",
            "children": [
                {
                    "text":"asdasdasdasdas"
                },
                {
                    "text":"dsdas",
                    "emphasis":true,
                    "strong":true,
                    "underline":true,
                    "strikethrough":true,
                    "code":true,
                    "highlight":true
                },
                {
                    "text":"dasd"
                }
            ]
        }
    ]
}

export default function NewChapter() {
    const { register, formState, handleSubmit, control } = useForm({
        resolver: yupResolver(newChapterSchema)
    })

    function submitChapter(data) {
        const newNode = slateToDast(initialNode)
        console.log(newNode)
    }

    const { errors } = formState

    return (
        <Flex maxW='800px' mx='auto' direction='column' bg='gray.700' borderRadius='lg' overflow='hidden' mt={10} p={8}>
            {/* <Container>
                {idk.length > 0 && (
                    <chakra.pre>
                        {JSON.stringify(idk)}
                    </chakra.pre>
                )}
            </Container> */}
            <Heading textAlign='center'>Novo capítulo de [Inserir Nome da História]</Heading>
            <Stack
                as='form'
                onSubmit={handleSubmit(submitChapter)}
                spacing={6}
                mt={6}
            >
                <CustomInput name='title' label='Título' {...register('title')} error={errors.title} />
                <CustomInput name='summary' label='Sinopse' {...register('summary')} error={errors.summary} />
                <Controller 
                    name='startingNotes'
                    control={control}
                    rules={{required: true}}
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <CustomRichTextEditor label='Notas iniciais' name='startingNotes' value={value} onChange={onChange} error={error} />
                    )}
                />
                {/* <CustomTextarea name='startingNotes' label='Notas iniciais' {...register('startingNotes')} error={errors.startingNotes} /> */}
                <Controller 
                    name='text'
                    control={control}
                    rules={{required: true}}
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <CustomRichTextEditor label='Texto' name='text' value={value} onChange={onChange} error={error} />
                    )}
                />
                {/* <CustomTextarea name='text' label='Texto' {...register('text')} error={errors.text} /> */}
                {/* <CustomTextarea name='endingNotes' label='Notas finais' {...register('endingNotes')} error={errors.endingNotes} /> */}
                <Controller 
                    name='endingNotes'
                    control={control}
                    rules={{required: true}}
                    render={({
                        field: { onChange, value },
                        fieldState: { error }
                    }) => (
                        <CustomRichTextEditor label='Notas finais' name='endingNotes' value={value} onChange={onChange} error={error} />
                    )}
                />
                <CheckboxGroup></CheckboxGroup>
                <Button type='submit'>Enviar</Button>
            </Stack>
        </Flex>
    )
}