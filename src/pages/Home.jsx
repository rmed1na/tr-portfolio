// Chakra
import {
    Box,
    Flex,
    Link,
    HStack,
    Heading,
    Text,
    Button,
    Image
} from "@chakra-ui/react";
// CC
import WorkGrid from "../components/WorkGrid";
import headerImage from '../assets/images/header.png';
import ConstructionBanner from "../components/ConstructionBanner";

export default function Home() {
    return (
        <>
            {/* <ConstructionBanner /> */}
            <Flex direction='column'>
                <Flex my={8} mx={12} direction='row' justify='space-between'>
                    <Link fontSize='1.125rem'>Thania Rodriguez</Link>
                    <Box fontSize='1.125rem'>
                        <HStack spacing={5}>
                            <Link>About Me</Link>
                            <Link>Contact</Link>
                        </HStack>
                    </Box>
                </Flex>
                <Flex mt={5} ml={12} justify='space-between'>
                    <Box w='50%' color='#454545'>
                        <Heading fontSize='2.5rem' fontWeight={700} mb={4}>Brand & UX/UI Designer</Heading>
                        <Text fontSize='1.5rem' fontFamily='Montserrat' mb={5}>I help clients around the world find their brand identity and create engaging experiences through design.</Text>
                        <Button 
                            mt={5}
                            mb={10}
                            borderRadius='56px'
                            fontSize='1.25rem'
                            fontWeight={700}
                            py='1.5rem'
                            px='1.5rem'
                            bg='linear-gradient(180deg, #DB239C 0%, #3D1878 100%)'
                            color='white'
                            _hover={{
                                bg: 'linear-gradient(90deg, #DB239C 0%, #3D1878 100%)'
                            }}
                        >Let's work</Button>
                    </Box>
                    <Box w='50%' opacity='0.2'>
                        <Image 
                            src={headerImage} 
                            w='full' 
                            fit='cover'
                        />
                    </Box>
                </Flex>
                <WorkGrid />
            </Flex>
        </>
    )
}