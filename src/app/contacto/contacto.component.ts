import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
    public usuario: ContactoUsuario;

    constructor() {
        this.usuario = new ContactoUsuario('', '', '', '');
    }

    ngOnInit() {
    }

    onSubmit(form) {
        console.log(this.usuario);
        form.reset();
    }

}
