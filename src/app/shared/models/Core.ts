export interface Inavigator {
    name: string,
    link: string,
}

export interface Ifooter {
    img?: Image,
    creator: string,
    from: string
}

export interface Image {
    src: string,
    alt: string,
}