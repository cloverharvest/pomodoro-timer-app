import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'pomodoro-timer',
  template: `
    <h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>
    <p>
      <button (click)="togglePause()">
        {{ buttonLabel }}
      </button>
    </p>
  `
})

class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

//this timer countdowns from 25 minutes to 0,
  constructor() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

//then starts all over again
  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = "Pause";

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}


bootstrap(PomodoroTimerComponent);
