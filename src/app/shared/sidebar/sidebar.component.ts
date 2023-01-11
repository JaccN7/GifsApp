import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    get historial() {
        return this.gifsService.historial; // con esto retornamos una copia del arreglo, asi no manipulamos el arreglo original
    }

    constructor(private gifsService: GifsService) { // inyectamos el servicio en el constructor, esto nos permite acceder a los metodos del servicio
    }

    searchGif(item: string) {
        this.gifsService.searchesGifs(item);
    }

}
