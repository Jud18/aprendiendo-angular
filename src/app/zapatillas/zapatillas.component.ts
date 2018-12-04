import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'app-zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit {
    public titulo = 'Componente de Zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.marcas = new Array();
        this.color = 'yellow';
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((values, index) => {
            if (this.marcas.indexOf(values.marca) < 0) {
                this.marcas.push(values.marca);
            }
        });
    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index) {
        // delete this.marcas[index];
        // Desde cual indice quiero borrar y cuantos elementos a partir de él
        this.marcas.splice(index, 1);
    }

    onBlur() {
        console.log('Haz salido del input');
    }

}
