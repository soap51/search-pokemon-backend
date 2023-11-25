import { Injectable } from '@nestjs/common';
import { Pokemon } from './graphql';
import { GraphQLClient } from 'graphql-request';
import { InjectGraphQLClient } from '@golevelup/nestjs-graphql-request';

@Injectable()
export class PokemonService {
  constructor(@InjectGraphQLClient() private readonly client: GraphQLClient) {}

  async findOne(name: string): Promise<Pokemon | undefined> {
    const query = `
      query pokemon($id: String, $name: String) {
        pokemon(id: $id,name: $name) {
          ...PokemonFragment
          evolutions {
            ...PokemonFragment
          }          
        }
      }

      fragment PokemonFragment on Pokemon {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        evolutionRequirements {
          amount
        }
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    `;
    try {
      const data = await this.client.request<
        {
          pokemon: Pokemon;
        },
        { name }
      >(query, {
        name,
      });
      return data.pokemon;
    } catch (e) {
      console.log('e', e);
    }
  }
}
