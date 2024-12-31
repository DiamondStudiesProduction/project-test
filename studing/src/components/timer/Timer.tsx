export class Timer {
    private timer?: any;
    private intervalTime: number;
  
    private callback?: () => void;
  
    time: number;
  
    constructor(intervalTime: number = 1000) {
      this.timer = undefined;
      this.callback = undefined;
      this.time = 0;
      this.intervalTime = intervalTime;
  
      this.updateTime();
    }
  
      /* Задаём callback снаружи */
    onChange(callback: () => void) {
      this.callback = callback;
    }
  
    updateTime() {
      this.time = Date.now();
  
          /* Вызываем callback на каждое обновление */
      this.callback?.();
    }
  
    start() {
      this.timer = setInterval(() => {
        this.updateTime();
      }, this.intervalTime);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  } 