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
import bg from "../../public/assets/bg1.jpg";
import image3 from "../../public/assets/image3.png";

function ContactMe() {
  return (
    <Box
      bgImage={bg}
      bgSze="cover"
      h="100vh"
      w="100%"
      bgRepeat="no-repeat"
      color="white"
    >
      <Flex w="100%">
        <Box w="30%">
          <Image src={image3} alt="" w="70%" h="40vh" pt="10" pl="10" />
        </Box>
        <Box w="70%">
          <Heading pt="20">CONTACT ME</Heading>
          <br />
          <UnorderedList fontSize="30px">
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
          <Flex w="80%" pt="15">
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
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactMe;
