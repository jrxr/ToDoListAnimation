import React from "react";
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AnimatedColorBox from "../components/AnimatedColorBox";
import Navbar from "../components/Navbar";
import Masthead from "../components/Masthead";
import LinkButton from "../components/LinkButton";

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead
        title="Sobre este aplicativo"
        image={require("../assets/about-masthead.png")}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
        <Box alignItems="center">
            <Image
              source={require('../assets/agacyjunior.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full" marginBottom="5">
            Esse aplicativo foi criado afins de estudos, para melhorar
            minhas habilidades como desenvolvedor. Sempre buscando me
            aperfeiçoar e ir para o próximo nível 🚀💻
          </Text>

          <LinkButton
            colorScheme={useColorModeValue("blue", "darkBlue")}
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/agacyjunior/"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            Linkedin
          </LinkButton>
          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://github.com/jrxr"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Github
          </LinkButton>

          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://portfolio-jrxr.vercel.app/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            Meu Portfólio
          </LinkButton>
          <LinkButton
            colorScheme="green"
            size="lg"
            borderRadius="full"
            href="https://api.whatsapp.com/send?phone=5561982029144&text="
            leftIcon={
              <Icon as={Feather} name="phone" size="sm" opacity={0.5} />
            }
          >
            Telefone para contato
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
