import { Button, Flex, Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid 
      bgImage="url('/landingPageBackground.jpg')"
      bgPosition='center'
      bgSize='cover'
      w='100%'
      h='calc(100vh - 70px)'
      p='3'
      templateColumns='repeat(5, 1fr)'
      gap='2'
    >
      <GridItem colSpan={3} px='10' py='20'>
        <Heading fontSize='3.5rem' fontWeight='900'>Venha compartilhar suas histórias com o mundo</Heading>
        <Text fontSize='1.75rem' fontWeight='500' mt={8}>StoryTime é onde todos podem criar e compartilhar suas histórias, com um sistema pensado para você, seja leitor ou escritor.</Text>
        <HStack spacing={4} mt={6}>
          <Button variant='solid' size='lg'>Me cadastrar</Button>
          <Button variant='outline' size='lg'>Já estou cadastrado</Button>
        </HStack>
      </GridItem>
    </Grid>
  )
}
 