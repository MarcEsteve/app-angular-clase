import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();    
  }
  //Métodos
  private cargarInfo(){ //Leer archivo de JSON
    this.http.get('assets/data/data-paginas.json')
      .subscribe( resp => {
        this.cargada = true;
        this.info = resp;
      }) 
  }
  private cargarEquipo(){ //Leer archivo de JSON de Firebase
    this.http.get('https://portfolio-angular-html-ddbb-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
      .subscribe( resp => {
        this.equipo = resp;
        console.log(resp);
      }) 
  }
}
