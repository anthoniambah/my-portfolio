import React from "react";
import "./Home.css";
import { Heading, Box, Flex, Spacer, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "../../public/assets/bg1.jpg";
import image3 from "../../public/assets/image3.png";

function Home() {
  return (
    <Flex
      bgImage={bg}
      bgSize="cover"
      h="100vh"
      w="100%"
      bgRepeat="no-repeat"
      color="white"
    >
      <Flex
        m="auto"
        align="center"
        w={["100%", "80%"]}
        minH={["90vh", "80vh"]}
        pt={["3"]}
        pl={["0", "15"]}
        flexDirection={["column", "column", "row"]}
      >
        <Box w={["80%", "90%", "35%"]} h={["40vh", "50vh"]} boxShadow="2xl">
          <Image
            p={["3", "5"]}
            boxShadow="2xl"
            src={image3}
            alt=""
            width="100%"
            h={["40vh", "50vh"]}
          />
        </Box>
        <Box
          textAlign="left"
          w={["100%", "100%", "60%"]}
          pl={["5", "10"]}
          pt={["7"]}
        >
          <Heading fontFamily="Verdana" fontSize={["30px", "30px", "60px"]}>
            Hi!
          </Heading>
          <Box fontSize={["20px", "30px",  "45px"]}>
            My name is Anthonia Mbah, <br /> Frontend Developer.
          </Box>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            px={["3.5", "0"]}
          >
            <Link to="/" display="inline-block">
              <Button
                mt={["5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Home
              </Button>
            </Link>
            <Spacer />
            <Link to="/about">
              <Button
                mt={["5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                About Me
              </Button>
            </Link>
            <Spacer />
            <Link to="/projects">
              <Button
                mt={["5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Projects
              </Button>
            </Link>
            <Spacer />
            <Link to="/contactme">
              <Button
                mt={["5", "10"]}
                size="lg"
                variant="outline"
                colorScheme="teal"
              >
                Contact Me
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
