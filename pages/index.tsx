import { Typography } from "@mui/material";
import { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage:NextPage = () => {
  return(
    <Layout title="OpenJira">
      <Typography variant="h1" color='primary'>
        Hola people
      </Typography>
    </Layout>
  )
}
export default HomePage