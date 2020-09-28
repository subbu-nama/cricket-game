import React from "react";
import './App.css';
import { BALL_RESULT, BATTING_TABLE_HEADERS, BOWLING_TABLE_HEADERS } from './constants';
export default class App extends React.Component {

  constructor() {
    super();
    this.ballResults = [0, 1, 2, 3, 4, 5, 6, 'wd', 'nb', 'out'];
    this.currentBowler = {};
    this.bowlInterval = undefined;
    this.battingTeamIndex = 0;
    this.buttonTitle = "Start Game";
    this.isGameOver = false;
    this.state = {
      "isGameStarted": false,
      "teams": [
        [{
          "name": "A1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "B1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "C1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "D1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "E1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "F1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "G1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "H1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "I1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "J1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "K1",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        }
        ],
        [{
          "name": "A2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "B2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "C2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "D2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "E2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "F2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "G2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "H2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "I2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "J2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": true,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        },
        {
          "name": "K2",
          "batting": {
            "balls": 0,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "isOut": false,
            "wicketBy": ""
          },
          "bowling": {
            "isBowler": false,
            "overs": 0,
            "balls": 0,
            "isNBBall": false,
            "isWDBall": false,
            "isOutBall": false,
            "totalScoreOfOne": 0,
            "totalScoreOfTwo": 0,
            "totalScoreOfThree": 0,
            "totalScoreOfFour": 0,
            "totalScoreOfFive": 0,
            "totalScoreOfSix": 0,
            "totalScoreOfWD": 0,
            "totalScoreOfNB": 0,
            "totalWickets": 0,
            "totalNoRunBalls": 0
          }
        }
        ]
      ]
    };
  }

  startOrPause() {
    this.setState({ isGameStarted: !this.state.isGameStarted }, () => {
      if (this.state.isGameStarted) {
        this.buttonTitle = "Pause Game";
        this.startGame();
      } else {
        this.buttonTitle = "Resume Game";
        this.pauseGame();
      }
    });
  }

  startGame() {
    this.resetBowler();
    this.bowlInterval = setInterval(() => {
      if (this.currentBowler.bowling.overStarted && this.currentBowler.bowling.balls % 6 === 0) {
        this.swapBatsMan();
        this.resetBowler();
      }
      let result = this.bowl();
      this.updateCurrentOver(result);
      if (this.getTotalBallsPlayed(this.battingTeamIndex) === 120 || this.getLiveBatsMan(this.battingTeamIndex).length === 1 ||
        (this.battingTeamIndex && (this.getTotalScoreOfTeam(this.battingTeamIndex) + this.getTotalScoreOfNb(0) + this.getTotalScoreOfWd(0)) > (this.getTotalScoreOfTeam() + this.getTotalScoreOfNb(1) + this.getTotalScoreOfWd(1)))) {
        this.stopBatting();
      }
    }, 1000);
  }

  pauseGame() {
    this.stopBowlInterval();
  }

  stopBatting() {
    if (this.battingTeamIndex === 0) {
      this.battingTeamIndex = 1;
      this.currentBowler = {};
      this.resetBowler();
    } else {
      this.stopBowlInterval();
      this.buttonTitle = "Refresh the page to start new game";
      this.isGameOver = true;
      this.setState({ isGameStarted: !this.state.isGameStarted }, () => {
        console.log("Game is completed");
      });
    }
  }

  stopBowlInterval() {
    this.bowlInterval && clearInterval(this.bowlInterval);
  }

  bowl() {
    return this.ballResults[Math.floor(Math.random() * this.ballResults.length)];
  }

  resetBowler() {
    if ((!this.currentBowler.bowling || !this.currentBowler.bowling.overStarted) ||
      (this.currentBowler.bowling.overStarted && this.currentBowler.bowling.balls % 6 === 0)) {
      if (this.currentBowler.bowling) {
        this.currentBowler.bowling.overStarted = false;
      }
      const bowlerList = this.state.teams[this.battingTeamIndex === 0 ? 1 : 0].filter(item => item.bowling.isBowler && (!this.currentBowler.name || this.currentBowler.name !== item.name) && (Math.ceil(item.bowling.balls / 6) < 4));
      this.currentBowler = bowlerList[Math.floor(Math.random() * bowlerList.length)];
      this.currentBowler.bowling.overStarted = true;
    }
  }

  updateCurrentOver(result) {
    const isPrevBallNB = this.currentBowler.bowling.isNBBall;
    if (result === "out" && !isPrevBallNB) {
      this.state.teams[this.battingTeamIndex][0].batting.isOut = true;
      this.state.teams[this.battingTeamIndex][0].batting.wicketBy = this.currentBowler.name;
    }
    this.currentBowler.bowling.isNBBall = result === "nb" ? true : false;
    this.currentBowler.bowling.isWDBall = result === "wd" ? true : false;
    this.currentBowler.bowling.isOutBall = result === "out" ? true : false;
    if (this.currentBowler.bowling.isNBBall) {
      this.updateCurrentOverState('totalScoreOfNB');
    } else if (this.currentBowler.bowling.isWDBall) {
      this.updateCurrentOverState('totalScoreOfWD');
    } else if (this.currentBowler.bowling.isOutBall) {
      this.updateCurrentOverState('balls');
      this.updateCurrentBatsManState('balls');
      if (!isPrevBallNB) {
        this.updateCurrentOverState('totalWickets');
        this.swapBatsMan();
        this.getNextBatsMan();
      }
    } else {
      this.updateCurrentOverState('balls');
      this.updateCurrentBatsManState('balls');
      this.updateCurrentOverState(BALL_RESULT[result], result === 0 ? 1 : result);
      result && this.updateCurrentBatsManState(BALL_RESULT[result], result);
      if (result % 2 !== 0) {
        this.swapBatsMan();
      }
    }
    this.setState({ teams: this.state.teams });
  }

  updateCurrentOverState(key, value = 1) {
    this.currentBowler.bowling[key] += value;
  }

  updateCurrentBatsManState(key, value = 1) {
    this.state.teams[this.battingTeamIndex][0].batting[key] += value;
  }

  swapBatsMan() {
    [this.state.teams[this.battingTeamIndex][0], this.state.teams[this.battingTeamIndex][1]] = [this.state.teams[this.battingTeamIndex][1], this.state.teams[this.battingTeamIndex][0]];
  }

  getNextBatsMan() {
    this.state.teams[this.battingTeamIndex].splice(0, 0, ...this.state.teams[this.battingTeamIndex].splice(11 - (this.getLiveBatsMan(this.battingTeamIndex).length - 1), 1));
  }

  getTotalBallsPlayed(battingTeamIndex = 0, key = "batting") {
    return this.state.teams[battingTeamIndex].map(item => item[key].balls).reduce((a, b) => a + b, 0);
  }

  getTotalOversPlayed(battingTeamIndex = 0) {
    const totalBallsPlayed = this.getTotalBallsPlayed(battingTeamIndex);
    return totalBallsPlayed ? `${Math.floor(totalBallsPlayed / 6)}.${(totalBallsPlayed % 6)}` : '0.0';
  }

  getLiveBatsMan(battingTeamIndex = 0) {
    return this.state.teams[battingTeamIndex].filter(item => !item.batting.isOut);
  }

  getTotalScoreOfTeam(battingTeamIndex = 0) {
    return this.state.teams[battingTeamIndex].map(item => this.getTotalScoreOfPlayer(item)).reduce((a, b) => a + b, 0);
  }

  getTotalScoreOfPlayer(player, key = "batting") {
    let totalScore = 0;
    Object.keys(BALL_RESULT).filter(item => item !== "0").forEach(item => {
      totalScore += player[key][BALL_RESULT[item]];
    })
    return totalScore;
  }

  getBowlingOvers(item) {
    return `${Math.floor(item.bowling.balls / 6)}.${(item.bowling.balls % 6)}`;
  }

  getTotalScoreOfNb(battingTeamIndex = 0) {
    return this.state.teams[battingTeamIndex].map(item => item.bowling.totalScoreOfNB).reduce((a, b) => a + b, 0);
  }

  getTotalScoreOfWd(battingTeamIndex = 0) {
    return this.state.teams[battingTeamIndex].map(item => item.bowling.totalScoreOfWD).reduce((a, b) => a + b, 0);
  }

  getStrikeRate(player) {
    return player.batting.balls ? ((this.getTotalScoreOfPlayer(player) / player.batting.balls) * 100).toFixed(2) : 0;
  }

  getEcon(player) {
    return player.bowling.balls ? (this.getTotalScoreOfPlayer(player, 'bowling') / player.bowling.balls).toFixed(2) : 0;
  }

  getRunRate(battingTeamIndex) {
    const totalBallsPlayed = this.getTotalBallsPlayed(battingTeamIndex);
    return totalBallsPlayed ? (this.getTotalScoreOfTeam(battingTeamIndex) / (totalBallsPlayed / 6)).toFixed(2) : 0;
  }

  getFinalMessage() {
    let message = '';
    const teamAScore = this.getTotalScoreOfTeam(0) + this.getTotalScoreOfNb(1) + this.getTotalScoreOfWd(1);
    const teamBScore = this.getTotalScoreOfTeam(1) + this.getTotalScoreOfNb(0) + this.getTotalScoreOfWd(0);
    if (teamAScore === teamBScore) {
      message = 'Match is draw';
    } else if (teamAScore > teamBScore) {
      message = 'Team A won the game';
    } else {
      message = 'Team B won the game';
    }
    return message;
  }

  getTeamInfo(battingTeamIndex = 0) {
    return (
      <React.Fragment>
        <div className={'element-ppadding'}>
          <div>{battingTeamIndex === 0 ? (`Team A:  ${(this.getTotalScoreOfTeam(battingTeamIndex) + this.getTotalScoreOfNb(battingTeamIndex + 1) + this.getTotalScoreOfWd(battingTeamIndex + 1))} /  ${(11 - this.getLiveBatsMan(battingTeamIndex).length)} ( ${this.getRunRate(battingTeamIndex)} ), Overs ${this.getTotalOversPlayed(battingTeamIndex)} , Extras ${(this.getTotalScoreOfNb(battingTeamIndex + 1) + this.getTotalScoreOfWd(battingTeamIndex + 1))}`) : (`Team B: ${(this.getTotalScoreOfTeam(battingTeamIndex) + this.getTotalScoreOfNb(battingTeamIndex - 1) + this.getTotalScoreOfWd(battingTeamIndex - 1))} / ${(11 - this.getLiveBatsMan(battingTeamIndex).length)}, target ${(this.getTotalScoreOfTeam(0) + this.getTotalScoreOfNb(1) + this.getTotalScoreOfWd(1))} , Overs ${this.getTotalOversPlayed(battingTeamIndex)}, Extras ${(this.getTotalScoreOfNb(0) + this.getTotalScoreOfWd(0))}`)}</div>
          <div className={'flex-container'}>
            <table>
              {
                Object.keys(BATTING_TABLE_HEADERS).map((item, index) => {
                  return (
                    <th>{item}</th>
                  );
                })
              }
              <tbody>
                {
                  this.state.teams[battingTeamIndex].map((item, index) => {
                    return (
                      <tr className={index === 0 ? 'active-state-one' : (index === 1 ? 'active-state-two' : (item.batting.isOut ? 'batsman-out' : ''))}>
                        <td>{item.name}</td>
                        <td>{this.getTotalScoreOfPlayer(item)}</td>
                        <td>{item.batting.balls}</td>
                        <td>{(item.batting.totalScoreOfFour / 4)}</td>
                        <td>{(item.batting.totalScoreOfSix / 6)}</td>
                        <td>{item.batting.wicketBy}</td>
                        <td>{this.getStrikeRate(item)}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
            <table className={'bowling-table'}>
              {
                Object.keys(BOWLING_TABLE_HEADERS).map((item, index) => {
                  return (
                    <th>{item}</th>
                  );
                })
              }
              <tbody>
                {
                  this.state.teams[battingTeamIndex === 0 ? battingTeamIndex + 1 : battingTeamIndex - 1].filter(item => item.bowling.isBowler).map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{this.getBowlingOvers(item)}</td>
                        <td>{this.getTotalScoreOfPlayer(item, 'bowling')}</td>
                        <td>{item.bowling.totalWickets}</td>
                        <td>{this.getEcon(item)}</td>
                        <td>{item.bowling.totalNoRunBalls}</td>
                        <td>{item.bowling.totalScoreOfFour / 4}</td>
                        <td>{item.bowling.totalScoreOfSix / 6}</td>
                        <td>{item.bowling.totalScoreOfWD}</td>
                        <td>{item.bowling.totalScoreOfNB}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>

          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className={'flex-container'}>
          <button title={this.buttonTitle} onClick={() => this.startOrPause()} className={'cursor'}>{this.state.isGameStarted ? 'Stop' : 'Start'}</button>
          <div>{this.isGameOver ? this.getFinalMessage() : ''}</div>
        </div>
        {this.getTeamInfo(0)}
        {this.battingTeamIndex ? this.getTeamInfo(this.battingTeamIndex) : ''}
      </React.Fragment>
    )
  }
}
