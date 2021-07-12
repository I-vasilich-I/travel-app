export default interface Country {
  avatar: string,
  path: string,
  name: {
    [lang: string]: string,
  },
  capital: {
    [lang: string]: string,
  },
  population: number,
  area: number,
  region: {
    [lang: string]: string,
  },
  currency: string,
  flag: string,
  languages: {
    [lang: string]: string[],
  },
}
