export class Compressor {
    public constructor(
        private readonly _name: string,
        private readonly _sn : number,
    ) {}


    public get name(): string {
        return this._name;
    }

    public get sn(): number {
        return this._sn
    }

}
