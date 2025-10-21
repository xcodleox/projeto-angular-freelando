import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Habilidade } from '../models/habilidade.interface';
import { Idioma } from '../models/idioma.interface';

interface CadastroData{
  foto?: string | ArrayBuffer | null;
  resumo?: string;
  habilidadesSelecionadas?: Array<Habilidade> ;
  idiomas?: Array<Idioma>;
  portifolio?: string;
  linkedin?: string;
  areaAtuação?: string;
  nivelExperiencia?: string;
  nomeCompleto?: string;
  estado?: string;
  cidade?: string;
  email?: string;
  senha?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private cadastroDataSubject = new BehaviorSubject<CadastroData>({});
  cadastroData$ = this.cadastroDataSubject.asObservable();

  constructor() {
    const savedData = localStorage.getItem('cadastroData')
    if(savedData){
      this.cadastroDataSubject.next(JSON.parse(savedData));
    }
   }

   updateCadastroData(data: Partial<CadastroData>): void{
      const currentData = this.cadastroDataSubject.value;
      const updateData = {...currentData, ...data};
      this.cadastroDataSubject.next(updateData);

      localStorage.setItem('cadastroData', JSON.stringify(updateData));
   }

   getCadastroData(): CadastroData{
    return this.cadastroDataSubject.value;
   }

}
