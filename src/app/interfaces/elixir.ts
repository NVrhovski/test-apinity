import { ingredient } from "./ingredient";
import { inventor } from "./inventor";

export interface elixir {
    id: string,
    name: string | null,
    effect: string | null,
    sideEffects: string | null,
    characteristics: string | null,
    time: string | null,
    difficulty: string,
    ingredients: ingredient[],
    inventors: inventor[],
    manufacturer: string | null
}