
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class PokemonDimension {
    minimum?: Nullable<string>;
    maximum?: Nullable<string>;
}

export class Pokemon {
    id: string;
    number?: Nullable<string>;
    name?: Nullable<string>;
    weight?: Nullable<PokemonDimension>;
    height?: Nullable<PokemonDimension>;
    classification?: Nullable<string>;
    types?: Nullable<Nullable<string>[]>;
    resistant?: Nullable<Nullable<string>[]>;
    attacks?: Nullable<PokemonAttack>;
    weaknesses?: Nullable<Nullable<string>[]>;
    fleeRate?: Nullable<number>;
    maxCP?: Nullable<number>;
    evolutions?: Nullable<Nullable<Pokemon>[]>;
    evolutionRequirements?: Nullable<PokemonEvolutionRequirement>;
    maxHP?: Nullable<number>;
    image?: Nullable<string>;
}

export class PokemonEvolutionRequirement {
    amount?: Nullable<number>;
    name?: Nullable<string>;
}

export class PokemonAttack {
    fast?: Nullable<Nullable<Attack>[]>;
    special?: Nullable<Nullable<Attack>[]>;
}

export class Attack {
    name?: Nullable<string>;
    type?: Nullable<string>;
    damage?: Nullable<number>;
}

export abstract class IQuery {
    abstract pokemon(name: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
}

type Nullable<T> = T | null;
