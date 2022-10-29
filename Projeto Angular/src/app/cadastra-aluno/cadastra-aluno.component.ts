import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css']
})
export class CadastraAlunoComponent implements OnInit {
  // campos: RA, nome, email, celular
  ra: String;
  nome: String;
  email: String;
  celular: number;
 
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.celular = this.route.snapshot.params['celular'] ?
      parseFloat(this.route.snapshot.params['celular']) : 0;
  }
  
  enviar(){

    // if(this.sexo = ("mulher")) {
    //   alert('Mulher!!') 
    // }
    // else if (this.sexo = ("Homem")){
    //   alert('Homem!')
    // }
    // else{
    //   alert("Selecione um!!")
    // }
  
    // alert(this.valorAutomovel)
  
  }
  

}
