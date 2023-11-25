import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import { ConfigModule } from '@nestjs/config';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonService],
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env.test',
        }),
        GraphQLRequestModule.forRoot(GraphQLRequestModule, {
          endpoint: process.env.POKEMON_GRAPHQL_END_POINT,
          options: {
            headers: {
              'content-type': 'application/json',
            },
          },
        }),
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a Pokemon', async () => {
    const pokemon = await service.findOne('Pikachu');
    console.log('pokemon', pokemon);
    expect(pokemon).toBeDefined();
    expect(pokemon?.name).toEqual('Pikachu');
    expect(pokemon?.types).toContain('Electric');
  });
});
