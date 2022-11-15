
import { Grid,Card } from '@nextui-org/react'
import {useRouter} from 'next/router'


export const FavoriteCardPokemon = ({id}) => {
       const router = useRouter()
    const favoriteClick = ()=>{
       router.push(`/pokemon/${id}`)
    }
  return (
    <Grid xs={6} sm={3} md={2} lg={1} key={id} onClick={favoriteClick}>
     <Card isHoverable isPressable css={{padding:10}}>
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={'100%'}
            height={140}
            />
       </Card>
    </Grid>
  )
}
