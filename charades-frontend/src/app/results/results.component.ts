import {Component, OnInit} from '@angular/core';
import {ColorSchemeService} from '../_services/color-scheme.service';
import {Player} from '../_models/player';
import {Category} from '../_models/category';
import {PlayerService} from '../_services/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  categoryID = localStorage.getItem('categoryID');
  ownCategory = localStorage.getItem('ownCategory');
  userID = localStorage.getItem('userID');
  gameID = localStorage.getItem('gameID');

  max = 0;
  category = new Category('', '');
  players: Array<Player> = [];

  constructor(private colorSchemeService: ColorSchemeService,
              private playerService: PlayerService,
              private router: Router) {
    this.colorSchemeService.load();

    this.playerService.index(this.gameID);
    this.playerService.playersObservable.subscribe(
      players => {
        this.players = players;
        this.players.forEach(player => {
          if (player.points === null) {
            player.points = 0;
          }
          if (this.max < player.points) {
            this.max = player.points;
          }
        });
      });

    if (this.ownCategory === 'true') {
      this.category.name = localStorage.getItem('categoryName');
    } else {
      this.category.name = localStorage.getItem('categoryID');
    }
  }

  ngOnInit(): void {
  }

  backToProfile(): void {
    this.router.navigate(['p']);
  }
}
