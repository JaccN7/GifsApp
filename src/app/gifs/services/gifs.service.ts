import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFSApp } from '../interface/gifs.interface';

@Injectable({
    providedIn: 'root' // esto nos permite que los servicios esten disponibles en toda la aplicacion al generarse el bundle de la aplicacion
})
export class GifsService {

    private _apiKey: string = '7bIpmMcuchwVNXxUYtnE2lpiVWVWCfWr';
    private _servicioUrl: string = 'https://api.giphy.com/v1/gifs';
    private _historial: string[] = []; // se le coloca el guion bajo al nombre de una variable para indicar que es privada
    public results: Gif[] = [];

    get historial() {
        return [...this._historial]; // con esto retornamos una copia del arreglo, asi no manipulamos el arreglo original
    }

    constructor(private http: HttpClient) { 
        if (localStorage.getItem('historial')) {
            this._historial = JSON.parse(localStorage.getItem('historial')!); // con esto obtenemos el arreglo del localstorage // el ! es conocido como non-null assertion operator y permite que el compilador de typescript sepa que el elemento no es nulo
        }
        if (localStorage.getItem('results')) {
            this.results = JSON.parse(localStorage.getItem('results')!);
        }
        //this._historial = JSON.parse(localStorage.getItem('historial')!) || []; 
    }

    searchesGifs(query: string) {
        query = query.trim().toUpperCase(); // con esto eliminamos los espacios en blanco y convertimos el texto a mayusculas
        if (!this._historial.includes(query)) {
            this._historial.unshift(query); // con esto agregamos el elemento al inicio del arreglo
            this._historial = this._historial.splice(0, 10); // con esto limitamos el arreglo a 10 elementos
            localStorage.setItem('historial', JSON.stringify(this._historial)); // con esto guardamos el arreglo en el localstorage
        }

        const params = new HttpParams()
                .set('api_key', this._apiKey)
                .set('limit', '10')
                .set('q', query);

        console.log(params.toString());

        console.log(this._historial)
        this.http.get<GIFSApp>(`${ this._servicioUrl }/search`, { params })
            .subscribe((resp) => { // Suscribe es un metodo que nos permite obtener la respuesta de la peticion, es un observable. Y tiene un funcionamiento similar a una promesa
                console.log(resp.data)
                this.results = resp.data;
                localStorage.setItem('results', JSON.stringify(this.results));
            })
            
    };
}
