export interface Imallets{
    _id?: string,
    name?: string,
    color?: string,
    type?: string,
    format_game?: string,
    card?:[Icards],
    dock?:[Icards] 
}
export interface Icards{
    _id?: string,
    name?: string,
    manna_cost?: string,
    types?: string,
    abilities?:string,
    forceAndResistance?: string,
    img?: Image,
    img_card?: Image
}



export interface Image{
    src: string,
    alt?: string
}