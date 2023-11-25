import { Resolver, Query, Args } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './graphql';

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query('pokemon')
  findOne(@Args('name') name: string): Promise<Pokemon | undefined> {
    return this.pokemonService.findOne(name);
  }
}
