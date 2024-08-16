'use client'
import { Box, Typography, Stack} from "@mui/material";
import Chatbot from "./chat/chatbot";
import Navbar from "./components/navbar";
import Image from './essentials.jpg'
// import { config } from 'dotenv'



export default function Home() {
  return (
    <Box height='100vh' width='100vw' bgcolor={'#E5D3B3'}>
      <Stack display='flex' flex-direction='column' spacing={10}>
      <Navbar/>
      <Chatbot/>
      </Stack>
    </Box>
)
}
