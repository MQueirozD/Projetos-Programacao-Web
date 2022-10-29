import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  @Input() estaAutenticado: boolean = false;

  menus: any = [
    { rota: 'calculadora', titulo: 'Calculadora' },
    { rota: 'calcula-media-simples', titulo: 'Calcula Média' },
    { rota: 'cadastra-aluno', titulo: 'Cadastra Aluno' },
    { rota: 'apolice-de-seguro', titulo: 'Apólice de Seguro' },
    { rota: 'teste', titulo: 'Teste' },
    { rota: 'pai', titulo: 'Rota Aninhada' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
