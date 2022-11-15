
import { Card, Grid } from '@nextui-org/react'
import  { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import {NoFavorite} from '../../components/ui'
import{localFavorites} from '../../utils'

const FavoritosPage = () => {

  const [favorites,setFavorites]= useState([])

   useEffect(()=>{
    setFavorites(localFavorites.pokemons())
   },[])

  return (
    <Layout title={"Favoritos"}>
       
       {
        favorites.length === 0
         ?
         (<NoFavorite/>)
         :(
          <FavoritePokemons pokemons={favorites}/>
         )
       }

        
    </Layout>
  )
}

export default FavoritosPage