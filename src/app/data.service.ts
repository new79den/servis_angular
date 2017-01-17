export class DataService {
  private data: string[] = [];

  setData(val:string){
    this.data.push(val);
  }
  getData(){
    return this.data;
  }

}
