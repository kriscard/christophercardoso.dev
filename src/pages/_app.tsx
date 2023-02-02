import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"

import { client } from "../services/apollo-client"
import "../styles/globals.css"
import LayoutWrapper from "../components/LayoutWrapper"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ApolloProvider>
  )
}
