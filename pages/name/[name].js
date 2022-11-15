import { useState } from "react"
import { Layout } from "../../components/layouts"
import { pokeApi } from "../../api"
import { Button, Card, Container, Grid, Text } from "@nextui-org/react"
import Image from "next/image"
import { localFavorites,getPokemonInfo } from "../../utils"
import confetti from "canvas-confetti"





const PokemonByNamePage = ({pokemon}) => {
  const [isInFavorites,setIsInFavorites]=useState(localFavorites.exitFavorites(pokemon.id))

const onToggleFavorite= ()=>{
  localFavorites.toggleFavorite(pokemon.id)
  setIsInFavorites(!isInFavorites)
  if (!isInFavorites) return confetti({
      zIndex:999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:1,
        y:0
      }
  }) 
    
  
}

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{marginTop:'5px'}}gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding:'20px'}}>
            <Card.Body>
              <Image
               src={pokemon.sprites.other?.dream_world.front_default||"/no-image.npg"}
               width="250"
               height="250"
               alt={pokemon.name}
               />
            </Card.Body>

          </Card>

        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
              <Text h2 transform="capitalize">{pokemon.name}</Text>
              <Button
               color='gradient' 
               ghost={!isInFavorites}
               onClick={onToggleFavorite}>
                {isInFavorites ? 'En Favoritos':'Guardar en Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                 src={pokemon.sprites.front_default} 
                 width='100' 
                 height='100' 
                 alt={pokemon.name}/>

                <Image
                 src={pokemon.sprites.back_default} 
                 width='100' 
                 height='100' 
                 alt={pokemon.name}/>

                <Image
                 src={pokemon.sprites.front_shiny} 
                 width='100' 
                 height='100' 
                 alt={pokemon.name}/>

                <Image
                 src={pokemon.sprites.back_shiny} 
                 width='100' 
                 height='100' 
                 alt={pokemon.name}/>
              </Container>
            </Card.Body>
          </Card>

        </Grid>

      </Grid.Container>
    </Layout>
  )
}

export default PokemonByNamePage

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  
const {data} = await pokeApi.get('/pokemon?limit=151')
 
   const pokemonName = data.results.map(pokemon=>pokemon.name)

  return {
    paths: pokemonName.map((name)=>({params:{name}})),
    fallback: false
  }
}

export const getStaticProps = async({params})=>{
   const {name} = params
 
  return{
    props:{
      pokemon: await getPokemonInfo(name)
    }
  }
}
