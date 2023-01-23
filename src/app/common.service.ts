import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  empData: any = []
  details:any={}

  constructor() { }

  empSave(name:any,address:any,dob:any,role:any,phone:any,gender:any){
    
      this.details={
        name,
        address,
        dob,
        role,
        phone,
        gender
      }
      console.log(this.details);
      this.empData.push(this.details);
      let empString = JSON.stringify(this.empData);
      localStorage.setItem("details", empString);
    
      return true
    }

}
