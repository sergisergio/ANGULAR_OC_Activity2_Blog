import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fourofour',
  templateUrl: './fourofour.component.html',
  styleUrls: ['./fourofour.component.css']
})
export class FourofourComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
