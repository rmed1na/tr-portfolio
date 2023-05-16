// Chakra
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
    useDisclosure
} from "@chakra-ui/react";
// CC
import data from '../utils/data';
import { useState } from "react";

export default function WorkGrid() {
    const { 
        isOpen: isDrawerOpen, 
        onOpen: onDrawerOpen, 
        onClose: onDrawerClose 
    } = useDisclosure()

    const [selectedWork, setSelectedWork] = useState();

    function showWorkDetails(work) {
        onDrawerOpen();
        setSelectedWork(work);
    }

    return (
        <>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                {data && data.map((item, index) => {
                    return (
                        <GridItem key={index} w='100%' cursor='pointer' onClick={() => showWorkDetails(item)}>
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

            <Drawer
                isOpen={isDrawerOpen}
                onClose={onDrawerClose}
                placement='right'
                size='xl'
            >
                <DrawerOverlay />
                <DrawerContent p={5} color='rgba(69, 69, 69, 1)'>
                    <DrawerCloseButton outline='none' m={5} />
                    <DrawerHeader fontSize='1.75rem'>{selectedWork?.name}</DrawerHeader>

                    <DrawerBody>
                        <Flex gap={[5, 10]} direction={['column', 'row']}>
                            <Text fontFamily='Montserrat' w={['full', '65%']}>{selectedWork?.legend}</Text>
                            <Box color='rgba(157,157,157,1)' w={['full', '35%']}>
                                <Text fontFamily='Montserrat'>Date: {selectedWork?.date}</Text>
                                <Text fontFamily='Montserrat'>Client: {selectedWork?.clientName}</Text>
                                <Text fontFamily='Montserrat'>Role: {selectedWork?.role}</Text>
                                <Text fontFamily='Montserrat'>URL: {selectedWork?.url}</Text>
                                <Text fontFamily='Montserrat'>Tags: {selectedWork?.tags.map((item) => {
                                    return `#${item} `
                                })}</Text>
                            </Box>
                        </Flex>
                        <Flex direction='column' gap={10}>
                            {selectedWork && selectedWork.images && selectedWork.images.map((image, index) => {
                                return <Image key={index} src={image} />
                            })}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}