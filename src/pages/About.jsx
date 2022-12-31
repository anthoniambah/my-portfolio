import React from "react";
import { Box, Image, Button, Spacer, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bg from "../../public/assets/bg1.jpg";
import image3 from "../../public/assets/image3.png";

function About() {
  return (
    <Box
      bgImage={bg}
      bgSize="cover"
      h="100vh"
      w="100%"
      bgRepeat="no-repeat"
      //   flexDirection="column"
    >
      <Box pt={["1", "19"]}>
        <Image
          src={image3}
          alt=""
          borderRadius="50%"
          p="5"
          boxShadow="2xl"
          h={["25vh", "35vh"]}
          m="auto"
        />
      </Box>
      <Box
        color="white"
        textAlign={["auto", "center"]}
        w="80%"
        m="auto"
        fontSize={["15px", "30px"]}
        pt={["3", "0"]}
      >
        My name is Anthonia Chinenye Mbah. A graduate with Second Class (Upper)
        from the prestigious University of Benin, Benin City, Edo State. I
        picked an interest in Web development after graduation and have decided
        to pursue it. I have a few experience working with HackPiy using HTML,
        CSS, JavaScript and ReactJs. I believe I do have a long way to go, and I
        know continuous practice will help. I hope to grow and be a better
        version of myself.
      </Box>
      <Flex
        w={["100%", "70%"]}
        m="auto"
        flexDirection="row"
        flexWrap="wrap"
        px={["3.5", "0"]}
      >
        <Link to="/">
          <Button
            mt={["3", "10"]}
            size={["md", "lg"]}
            variant="outline"
            colorScheme="teal"
          >
            Home
          </Button>
        </Link>
        <Spacer />
        <Link to="/about">
          <Button
            mt={["3", "10"]}
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
            mt={["3", "10"]}
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
            mt={["3", "10"]}
            size="lg"
            variant="outline"
            colorScheme="teal"
          >
            Contact Me
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default About;
