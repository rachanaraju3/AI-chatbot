'use client'
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Chatbot from "./chat/chatbot";
import Navbar from "./components/navbar";
// import { config } from 'dotenv'



export default function Home() {
  return (
    <Box height='100vh' width='100vw' bgcolor={'#E5D3B3'}>
      <Navbar/>
      <Box display='flex' justifyContent='center' alignItems='center' padding={5}>
        <Typography variant="h4">Customer Support</Typography>
      </Box>
      <Chatbot/>
    </Box>
)
}
