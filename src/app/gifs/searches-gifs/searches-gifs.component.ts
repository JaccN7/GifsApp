import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
    selector: 'app-searches-gifs',
    templateUrl: './searches-gifs.component.html',
    styleUrls: ['./searches-gifs.component.css']
})
export class SearchesGifsComponent {

    @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>; // el decorador viewchild nos permite acceder a los elementos del DOM // el ! es conocido como non-null assertion operator y permite que el compilador de typescript sepa que el elemento no es nulo // el elemento txtSearch es de tipo HTMLInputElement, el cual es un tipo de dato que nos permite acceder a los atributos de un input

    constructor(private gifsSevice: GifsService) {  // inyectamos el servicio en el constructor, esto nos permite acceder a los metodos del servicio
        
    }

    searchGifs(){
        const valor = this.txtSearch.nativeElement.value;
        if(valor.trim().length === 0){
            return;
        }
        console.log(valor)
        this.gifsSevice.searchesGifs(valor);
        this.txtSearch.nativeElement.value = '';
    }
}
