import Head from "next/head"
import { Box } from "@mui/material"
import { FC } from "react"
import { Nabvar, SideBar } from "../ui"

interface Props{
    title?:string,
    children:any
}
export const Layout:FC<Props> = ({title = 'OpenJira',children}) => {
    return(
        <Box sx={{flexFlow:1}}>
            <Head>
                <title>{title}</title>
            </Head>
            <Nabvar/>
            <SideBar/>

            <Box sx={{padding:'10px 20px'}}>
                {children}
            </Box>
        </Box>
    )
}