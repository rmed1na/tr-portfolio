// Chakra
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Image,
    Text
} from "@chakra-ui/react";
// CC
import data from '../utils/data';

export default function WorkGrid() {
    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)'>
                {data && data.map((item, index) => {
                    return (
                        <GridItem key={index} w='100%'>
                            <Box position="relative" h='475px'>
                                <Image
                                    position="absolute"
                                    src={item.coverImage}
                                    fit='cover'
                                    zIndex="2"
                                    transition='all 0.2s ease-in-out'
                                    h='full'
                                    w='full'
                                    _hover={{
                                        opacity: 0
                                    }}
                                />
                                <Box position="relative" h='full'>
                                    <Image
                                        filter='auto'
                                        brightness='40%'
                                        position="absolute"
                                        src={item.hoverImage}
                                        fit='cover'
                                        h='full'
                                        w='full'
                                    />
                                    <Flex
                                        position='absolute'
                                        direction='column'
                                        alignItems='center'
                                        justify='center'
                                        gap={2}
                                        w='full'
                                        h='full'
                                        color='white'>
                                        <Text fontSize='2rem'>{item.name}</Text>
                                        {item.tags && item.tags.map((tag, index) => {
                                            return <Text key={index} fontSize='1.5rem'>#{tag}</Text>
                                        })}
                                    </Flex>
                                </Box>
                            </Box>
                        </GridItem>
                    )
                })}
            </Grid>
        </>
    )
}