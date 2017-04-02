import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    ngOnInit() {
        let maxChar = 7;
        this.titulo = this.titulo.length > maxChar 
            ? this.titulo.substr(0, maxChar) + '...' 
            : this.titulo;
    }
}