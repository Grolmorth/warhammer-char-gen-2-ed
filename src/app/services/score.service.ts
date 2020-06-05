import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Score } from './score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private dbPath = '/highscore';

  highscoreRef: AngularFirestoreCollection<Score> = null;

  constructor(public db: AngularFirestore) {
    this.highscoreRef = db.collection(this.dbPath);
  }

  addScore(score: Score): void {
    const param = JSON.parse(JSON.stringify(score));
    this.highscoreRef.add(param);
  }
  getScoreList(): AngularFirestoreCollection<Score> {

    return this.highscoreRef;
  }
}
