import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public selectedPlayer: Player = this.gameService.players[0]
  public pointOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50]
  public selectedPoints: number = 1
  public colors: string[] = ['#f52e2e', '#5463ff', '#ffc717', '#1f9e40']

  constructor(public gameService: GameService) { }

  selectPlayer(index: number) {
    this.selectedPlayer = this.gameService.players[index]
  }

  addPoints() {
    this.selectedPlayer.addPoints(this.selectedPoints)
    this.gameService.saveGame()
  }
  
  removePoints() {
    this.selectedPlayer.removePoints(this.selectedPoints)
    this.gameService.saveGame()
  }
}