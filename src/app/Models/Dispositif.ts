export class Dispositif {

    public idDispositif: number;
    public measure: string;
    public dispositif: string;
    public programme: string;

    constructor(idDispositif: number, measure: string, dispositif: string, programme: string) {
        this.idDispositif = idDispositif;
        this.dispositif = dispositif;
        this.measure = measure;
        this.programme = programme;
    }
}