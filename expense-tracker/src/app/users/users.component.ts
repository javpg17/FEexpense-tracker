import { Component } from '@angular/core';

@Component({
    selector: 'users',
    template: `<h1> Users {{titulo}} </h1>`,
    styles: [`h1 {color:blue}`]
})

export class UsersComponent {
    public titulo;

    constructor() {
        this.titulo = 'Test';
    }
}
