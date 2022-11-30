export class Dispositif {

    private idDispositif: number;
    private measure: string;
    private dispositif: string;
    // private isIncompatibilite = false;

    constructor(idDispositif: number, measure: string, dispositif: string, isIncompatibilite: boolean){
        this.idDispositif = idDispositif;
        this.dispositif = dispositif;
        this.measure = measure;
        // this.isIncompatibilite = false;
    }
}