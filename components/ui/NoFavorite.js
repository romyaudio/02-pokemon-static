import { Container,Text } from "@nextui-org/react"
import Image from "next/image"

export const NoFavorite = () => (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        color:"White"
    }}>
        <Text h1>
            No Hay Favoritos
        </Text>
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            height='150'
            width='150'
            alt=''
            css={{ opacity: '0.1' }} />
    </Container>
)

