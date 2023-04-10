// Chakra
import { 
    Flex, 
    Text,
    Icon,
    Image
} from "@chakra-ui/react";
// Icons
import { MdConstruction } from 'react-icons/md';
import kermitFlow from '../assets/images/kermit-flow.png';
import kermitBlanket from '../assets/images/kermit-blanket.png';

export default function ConstructionBanner() {
    return (
        <>
            <Flex 
                w='full' 
                background='#FFBC0A' 
                textAlign='center'
                align='center'
                gap={2}
                justify='center'
            >
                <Image boxSize={8} src={kermitBlanket} />
                <MdConstruction />
                <Text py={1} fontWeight={500}>This website is under construction</Text>
                <MdConstruction />
                <Image boxSize={8} src={kermitFlow} />
            </Flex>
        </>
    )
}