import { Component } from '@angular/core';
/* As duas chaves {{ }} também chamados de dual bigode serve para interpolar (chamar)
uma variavel, nesse aqui daqui, a variavel title foi chamada */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html' 
  /*
  Nesse caso aqui eu troquei o template padrão do angular
  e coloquei um h1 para testar, agora vou colocar outro template.
  */
})

export class AppComponent {
  nome = 'Maria';
}
