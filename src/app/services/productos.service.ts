import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true; // bandera
  productos: Producto[] = []; // Array vacío

  url: string = 'https://base-jh-default-rtdb.firebaseio.com/';

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos() {

    this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
        /*.subscribe( (resp: Producto[]) => {

          console.log(resp);
          this.productos = resp;
          this.cargando = false;

         
        //  setTimeout(() => {
        //    this.cargando = false;
        //  }, 2000); // 2 segundos


        });*/
  }

}
