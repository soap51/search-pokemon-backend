import { Test, TestingModule } from '@nestjs/testing';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import { ConfigModule } from '@nestjs/config';

describe('PokemonResolver', () => {
  let resolver: PokemonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
      providers: [PokemonResolver, PokemonService],
    }).compile();

    resolver = module.get<PokemonResolver>(PokemonResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
