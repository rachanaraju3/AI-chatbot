'use client'
import Image from "next/image";
import { Box, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import Chatbot from "./chat/chatbot";
// import { config } from 'dotenv'



export default function Home() {
  const { GoogleGenerativeAI} = require("@google/generative-ai");
  const API_KEY = (process.env.NEXT_PUBLIC_GEMINI_API_KEY)
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `You are an AI-powered customer support assistant for PurelyYou, a platform that provides personalized skincare recommendations. Keep the following points in mind: 
    
    1. PurelyYou offers users personalized skincare recommendations based on the information they provide in our form. 
    2. Our platform helps users narrow down what items are best suited.
    3. We have a database of over 500 skincare items.
    4. The form that users fill out to get recommendations is acessed through clicking the 'Get customizing today' button on the homepage.
    5. Our homepage showcases some of the brands listed in our database.
    6. Our mission statement is as follows:
        "We believe that everyone deserves healthy, radiant skin. However, navigating the vast world of skincare can be overwhelming and confusing.
        Our mission is to simplify this process by offering expert guidance and personalized solutions that are easy to follow. By understanding your skin’s needs and providing tailored recommendations, we aim to empower you to achieve your best skin yet.
        Because when you feel good in your skin, it reflects in your confidence and overall well-being."
    7. Only answer questions regarding how to navigate the site, our mission statement, where to find some brands in our database. Do not give users skincare or beauty recommendations. If a user's query falls outside what you can respond reply with "I'm sorry I can only answer questions regarding PurelyYou and navigating their site. Do you have any questions regarding the organization or need assistance navigating the website?"
    8. Always maintain user privacy and do not share personal information.
    9. If you're unsure about any information, it's okay to say you don't know and offer to connect the user with a human representative.

    Your goal is to provide accurate information, assist with common inquiries, and ensure a positive experience for all users.`
  });

  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Hi! I'm the PurelyYou Support Agent, how can I help you today?`
  }])

  const [message, setMessage] = useState('')

  async function run(userMessage) {
    setMessage('')
    setMessages((messages)=>[
      ...messages,
      {role: 'user', content:userMessage}])

    console.log(userMessage)
    const result = await model.generateContent(userMessage)
    const response = await result.response
    const text = await response.text()
    setMessages((messages)=>[
      ...messages,
      {role: 'assistant', content:text}
    ])
    console.log(result)
    console.log(response.body)
  }

  return <Chatbot></Chatbot>
  // <Box width='100vw' height='100vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
  //   <Stack direction='column' width='600px' height='700px' border='1px solid black' padding={2} spacing={3}>
  //     <Stack direction='column' spacing={2} flexGrow={1} overflow='auto' maxHeight='100%'>
  //       {messages.map((message, index)=>(
  //         <Box key={index} display='flex' justifyContent={message.role === 'assistant' ? "flex-start" : "flex-end"}>
  //           <Box bgcolor={message.role==='assistant' ? 'primary.main' : 'secondary.main'} color='white' borderRadius={16} padding={3}>
  //             {message.content}
  //           </Box>
  //         </Box>
  //       ))}
  //     </Stack>
  //     <Stack direction='row' spacing={2}>
  //       <TextField label='message' fullWidth value={message} onChange={(e) =>setMessage(e.target.value)}/>
  //       <Button variant="contained" onClick={()=>{run(message)}}>Send</Button>
  //     </Stack>
  //   </Stack>
  // </Box>
}
