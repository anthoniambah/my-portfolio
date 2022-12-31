import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


function ContactMe() {
  return (
    <Box
      bgImage="/assets/bg1.jpg"
      bgSze="cover"
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
          <Heading pt="20" textAlign={["center", "left", "left"]}>
            CONTACT ME
          </Heading>
          <br />
          <UnorderedList fontSize={["20px", "20px", "30px"]}>
            <ListItem>
              <Link href="https://github.com/anthoniambah">GitHub</Link>
            </ListItem>
            <br />
            <ListItem>
              <Link href="https://linkedin.com/in/anthonia-mbah">LinkedIn</Link>
            </ListItem>
            <br />
            <ListItem>
              <Link href="mailto: anthoniambah58@gmail.com">Gmail</Link>
            </ListItem>
            <br />
            <ListItem>+234 810 712 4996</ListItem>
          </UnorderedList>
          <Flex
            w={["100%", "100%", "80%"]}
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

export default ContactMe;
