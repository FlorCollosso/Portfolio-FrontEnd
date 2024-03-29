import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillServService } from 'src/app/services/skill-serv.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill : Skills = null;

  constructor(private skillServ: SkillServService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.detail(id).subscribe(data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillServ.update(id, this.skill).subscribe(data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

}
