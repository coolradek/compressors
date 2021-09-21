import { Compressor } from "./compressor";

export class Record {
    public constructor (
        private readonly _compressor: Compressor,
        private readonly _runninghours: number,
        private readonly _loadhours: number,
        private readonly _energy: number

    ) {}

    public get compressor(): Compressor {
        return this._compressor
    }

    public get runninghours(): number {
        return this._runninghours
    }

    public get loadhours(): number {
        return this._runninghours
    }
}
