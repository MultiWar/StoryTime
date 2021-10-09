import { Box, ChakraProvider, Flex } from "@chakra-ui/react"
import Router, { AppProps } from "next/dist/next-server/lib/router/router"
import { Header } from "../components/Header"
import { theme } from "../styles/theme"
import NProgress from 'nprogress'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction='column' minH='100vh'>
        <Header />
        <Box minH='calc(100vh - 70px)' pb={10}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
