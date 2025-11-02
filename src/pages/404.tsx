import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { GlobalStyle } from "../styled-components/global"
import Nav from "../components/nav"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main >
      <GlobalStyle/>
      <Nav/>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
