export class Logger{
  filename:string = '.\hrokulog.log'
  static instance:Logger | undefined = undefined;

  private constructor(){

    
  }

  static createInstance(){
    if (this.instance === undefined) {
        this.instance = new Logger();
    }
    return this.instance;
  }

}