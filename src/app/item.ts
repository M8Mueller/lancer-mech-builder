export class Item {
  constructor(
    public name: string,
    public itemType: string,
    public tags: string[],
    
    public mount: string,
    public weaponType: string,
    public damage: string,

    public sp: number,

    public corp: string,
    public license: string,
    public rank: number) { }
}
