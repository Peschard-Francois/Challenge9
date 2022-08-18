import {Component, Input, OnInit} from '@angular/core';
import { Skill } from "../common/Skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skills: Skill | undefined;
  constructor() { }
  ngOnInit(): void {
  }
}
