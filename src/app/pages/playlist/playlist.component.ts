import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  public thumbnail!: string;
  public title!: string;
  public description!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.thumbnail = this.route.snapshot.queryParams['thumbnail'];
    this.title = this.route.snapshot.queryParams['title'];
    this.description = this.route.snapshot.queryParams['description'];
  }
}
