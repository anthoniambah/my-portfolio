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
  Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import bg from "../../public/assets/bg1.jpg";
import image3 from "../../public/assets/image3.png";

function Projects() {
  return (
    <Box
      bgImage={bg}
      bgSize="cover"
      h="100vh"
      w="100%"
      bgRepeat="no-repeat"
      color="white"
    >
      <Flex w="100%">
        <Box w="30%">
          <Image src={image3} alt="" w="70%" h="40vh" pt="10" pl="10" />
        </Box>
        {/* <Box w="70%" pt="20">
          <Heading>PROJECTS</Heading>
          <br />
          <UnorderedList fontSize="25px">
            <Box>Click on text to view the projects.</Box> <br />
            <ListItem>
              <Link href="https://hackpiy-first-task.netlify.app/" textDecoration='none'>
                BankApp: This was the first project using CSS.
              </Link>
            </ListItem>
            <br />
            <ListItem>
              <Link href="https://second-task-hackpiy.netlify.app/" textDecoration='none'>
                Wicrypt: Sketch on Wicrypt landing page using ReactJs.
              </Link>
            </ListItem>
            <br />
            <ListItem>
              <Link href="https://coinbase-chakra.netlify.app/" textDecoration='none'>
                Coinbase: Coinbase sign up page using Chakra.
              </Link>
            </ListItem>
          </UnorderedList>
          <Flex w="70%" pt='15'>
          <RouterLink to="/">
              <Button mt="10" size="lg" variant="outline" colorScheme="teal">
                Home
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/about">
              <Button mt="10" size="lg" variant="outline" colorScheme="teal">
                About Me
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/projects">
              <Button mt="10" size="lg" variant="outline" colorScheme="teal">
                Projects
              </Button>
            </RouterLink>
            <Spacer />
            <RouterLink to="/contactme">
              <Button mt="10" size="lg" variant="outline" colorScheme="teal">
                Contact Me
              </Button>
            </RouterLink>
          </Flex>
        </Box> */}
      </Flex>
    </Box>
  );
}

export default Projects;
