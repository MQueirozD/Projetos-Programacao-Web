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
    this.ra = this.route.snapshot.params['ra'] ?? "";
    this.nome = this.route.snapshot.params['nome'] ?? "";
    this.email = this.route.snapshot.params['email'] ?? "";
    this.celular = this.route.snapshot.params['celular'] ?? "";
  }
  
  enviar(){

    if (this.ra == null || this.nome == "" || this.email == "" || this.celular == null) {
      alert("Os campos não podem retornar vazios");
    }
    else {
      alert(this.nome + " cadastrado com sucesso!");
      alert("RA: " + this.ra  +
      "\nNome: " + this.nome +
      "\nE-mail: " + this.email +
      "\nCelular: " + this.celular );
    }
  
  }
  

}
