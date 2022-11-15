import {  Card, Grid, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const PokemonCard = ({pokemon}) => {

    const router = useRouter()
    const onClick =()=>{
        router.push(`/name/${pokemon.name}`)
    }
  return (
    <Grid xs={6} sm={3}  md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
               <Card.Body >
                 <Image src={pokemon?.img}  width="250" height={140} alt={pokemon?.name}/>
              </Card.Body> 
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{pokemon?.name}</Text>
                  <Text>#{pokemon?.id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
  )
}
