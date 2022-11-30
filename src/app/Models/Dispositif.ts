export class Dispositif {

    public idDispositif: number;
    public measure: string;
    public dispositif: string;

    constructor(idDispositif: number, measure: string, dispositif: string) {
        this.idDispositif = idDispositif;
        this.dispositif = dispositif;
        this.measure = measure;
    }
}