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
                <Flex my={8} mx={[8, 12]} direction='row' justify='space-between'>
                    <Link fontSize={['0.875rem', '1.125rem']}>Thania Rodriguez</Link>
                    <Box fontSize={['0.875rem', '1.125rem']}>
                        <HStack spacing={5}>
                            <Link>About Me</Link>
                            <Link>Contact</Link>
                        </HStack>
                    </Box>
                </Flex>
                <Flex mt={5} ml={[6, 12]} mr={[6, 0]} justify='space-between' direction={['column', 'row']}>
                    <Box w={['100%', '50%']} color='#454545'>
                        <Heading fontSize={['1.625rem', '2.5rem']} fontWeight={700} mb={4}>Brand & UX/UI Designer</Heading>
                        <Text fontSize={['1rem' ,'1.5rem']} fontFamily='Montserrat' mb={5}>I help clients around the world find their brand identity and create engaging experiences through design.</Text>
                        <Button 
                            mt={5}
                            mb={10}
                            borderRadius='56px'
                            fontSize={['1rem' ,'1.25rem']}
                            fontWeight={700}
                            py={['1rem', '1.5rem']}
                            px='1.5rem'
                            bg='linear-gradient(180deg, #DB239C 0%, #3D1878 100%)'
                            color='white'
                            boxShadow='3px 4px 6px -3px rgba(0,0,0,0.75)'
                            _hover={{
                                bg: 'linear-gradient(90deg, #DB239C 0%, #3D1878 100%)'
                            }}
                        >Let's work</Button>
                    </Box>
                    <Box 
                        w={['100%', '50%']} 
                        opacity='0.1'
                        position={['absolute', 'relative']}
                        left={['0', 'initial']}
                        top={['0', 'initial']}
                        zIndex={-1}
                    >
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