import React from "react";
import {
  Box,
  Image,
  Heading,
  ListItem,
  UnorderedList,
  Button,
  Spacer,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


function Projects() {
  return (
    <Box
      bgImage="/assets/bg1.jpg"
      bgSize="cover"
      h="100vh"
      w="100%"
      bgRepeat="no-repeat"
      color="white"
    >
      <Flex w="100%" flexDirection={["column", "column", "row"]}>
        <Box w={["100%", "70%", "30%"]} m={["0", "auto", "0"]}>
          <Image
            src="/assets/image3.png"
            alt=""
            w={["100%", "90%", "70%"]}
            m={["0", "auto", "0"]}
            h="40vh"
            pt="10"
            pl="10"
          />
        </Box>
        <Box
          w={["90%", "70%", "70%"]}
          m={["auto", "auto", "0"]}
          pt={["10px", "10px", "20"]}
        >
          <Heading textAlign={["center", "left", "left"]}>PROJECTS</Heading>
          <br />
          <UnorderedList fontSize={["20px", "20px", "25px"]}>
            <Box>Click on text to view the projects.</Box> <br />
            <ListItem>
              <Link
                href="https://hackpiy-first-task.netlify.app/"
                textDecoration="none"
              >
                BankApp: This was the first project using CSS.
              </Link>
            </ListItem>
            <br />
            <ListItem>
              <Link
                href="https://second-task-hackpiy.netlify.app/"
                textDecoration="none"
              >
                Wicrypt: Sketch on Wicrypt landing page using ReactJs.
              </Link>
            </ListItem>
            <br />
            <ListItem>
              <Link
                href="https://coinbase-chakra.netlify.app/"
                textDecoration="none"
              >
                Coinbase: Coinbase sign up page using Chakra.
              </Link>
            </ListItem>
          </UnorderedList>
          <Flex
            w={["100", "100%", "80%"]}
            pt="15"
            flexWrap={"wrap"}
            justifyContent={["space-between", "", ""]}
          >
            <RouterLink to="/">
              <Button
                mt={["5", "5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Home
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/about">
              <Button
                mt={["5", "5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                About Me
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/projects">
              <Button
                mt={["5", "5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Projects
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/contactme">
              <Button
                mt={["5", "5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Contact Me
              </Button>
            </RouterLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Projects;
