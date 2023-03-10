import React from "react";
import { ChakraProvider, Link, Box, Heading, Text } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider resetCSS>
    <Heading textAlign="center" mb="20px" p="20px">
      TSI AI Suite Tools
    </Heading>
    <Box
      display="block"
      backgroundColor="linkedin.500"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://aisearch.mytsi.org/"
      >
        AI Search
      </Link>
      <Text color="twitter.200" fontWeight="bold" fontSize="lg">
        Search a Google Like AI for answers to your questions!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="facebook.500"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://gpt.mytsi.org//"
      >
        Chat GPT Clone
      </Link>
      <Text color="facebook.200" fontWeight="bold" fontSize="lg">
        GPT3 Clone with DALLE integration!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="pink.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://dalle2.mytsi.org/"
      >
        AI Image Generation
      </Link>
      <Text color="pink.100" fontWeight="bold" fontSize="lg">
        Generate Images using AI
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="purple.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://discord.com/oauth2/authorize?scope=bot&permissions=8&client_id=1065151705244766238"
      >
        Discord Bot
      </Link>
      <Text color="purple.100" fontWeight="bold" fontSize="lg">
        Get your own AI Bot in your Discord server!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="red.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://chatbot.mytsi.org/chat.html"
      >
        AI Support Bot
      </Link>
      <Text color="pink.100" fontWeight="bold" fontSize="lg">
        Responisve Web interface for GPT3 Davinci!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="cyan.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://imgai.mytsi.org/"
      >
        GPT and DALLE
      </Link>
      <Text color="twitter.100" fontWeight="bold" fontSize="lg">
        Customized and Branded version of GPT and DALLE!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="whatsapp.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://aiwrite.mytsi.org/"
      >
        AI Writing Assistant
      </Link>
      <Text color="whatsapp.50" fontWeight="bold" fontSize="lg">
        Start writing like a professiional writer!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="orange.400"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
      href="https://aiwrite.mytsi.org/"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://ai-advanced.mytsi.org/"
      >
        Advanced GPT Engine
      </Link>
      <Text color="orange.200" fontWeight="bold" fontSize="lg">
        Chat GPT Advnced version, multi AI Model switcher.
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="linkedin.500"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://ai-advanced.mytsi.org/"
      >
        AI Mobile App IOS and Android
      </Link>
      <Text color="twitter.200" fontWeight="bold" fontSize="lg">
        Mobile Apps iOS and Android with AI Integration using Appify!
      </Text>
    </Box>
    <Box
      display="block"
      backgroundColor="#9d3df7"
      borderRadius={20}
      border="regular"
      textAlign="center"
      alignItems="center"
      ml="20%"
      mr="20%"
      mb="20px"
      p="20px"
    >
      <Link
        color="white"
        fontWeight="bold"
        textAlign="center"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column-reverse"
        alignItems="center"
        isExternal
        fontSize="3xl"
        href="https://ai-saas-beta-production.up.railway.app/"
      >
        AI SAAS Platform
      </Link>
      <Text color="purple.100" fontWeight="bold" fontSize="lg">
        AI SAAS platform that runs on YOUR servers with Stripe API!
      </Text>
    </Box>
  </ChakraProvider>
);

export default App;
