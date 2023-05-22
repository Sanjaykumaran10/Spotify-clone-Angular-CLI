import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistServiceService {
  private playlistData: any;

  constructor() { }

  setPlaylistData(data: any) {
    this.playlistData = data;
  }

  getPlaylistData() {
    return this.playlistData;
  }
}
