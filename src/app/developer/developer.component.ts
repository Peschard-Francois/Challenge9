import { Component, OnInit } from '@angular/core';
import { Developer } from "../common/Developer";
import {Skill} from "../common/Skill";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public ficheDev: any;
  public skills: Skill[] | undefined
  constructor() { }
  ngOnInit(): void {
    this.ficheDev = new Developer('Peschard-Glenard', 'François', 36, 'Homme', 'Developer en formation',this.skills)
    this.skills = [{
      name :"Angular",
      logo :"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      site :"https://angular.io/"
    },{
      name :"Symfony",
      logo :"https://worldvectorlogo.com/fr/logo/symfony",
      site :"https://symfony.com/"
    },{
      name :"PHP",
      logo :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      site :"https://www.php.net/manual/fr/intro-whatis.php"
    }]
  }
}
