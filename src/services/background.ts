
export class BackgroundService{

  private isChange: boolean;


  changeBackground(change: boolean){
    this.isChange = change;
  }
  getStatus(){
    return this.isChange;
  }


}
