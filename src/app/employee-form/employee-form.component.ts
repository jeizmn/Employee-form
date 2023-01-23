import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray,FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  employeeForm = this.fb.group({
    name: ['', [Validators.required,Validators.pattern('[a-zA-Z, ]*')]],
    address: ['', [Validators.required,Validators.pattern('[a-zA-Z, ]*')]],
    dob: ['', Validators.required],
    role: ['', Validators.required],
    phone: ['', [Validators.required,Validators.pattern('[0-9]*')]],
    gender: ['', Validators.required]
  });

    

    
onSave(){
  
  var name=this.employeeForm.value.name;
  var address=this.employeeForm.value.address;
  var dob=this.employeeForm.value.dob
  var role=this.employeeForm.value.role;
  var phone=this.employeeForm.value.phone;
  var gender=this.employeeForm.value.gender;



    if(this.employeeForm.valid){
      const result=this.cs.empSave(name,address,dob,role,phone,gender);
      if(result){
        alert('Submitted');
        this.router.navigateByUrl('details');
      }
      else{
        alert('Error');
        this.router.navigateByUrl('');
      }
    }
    else{
      alert('Not Submitted');
    }
    
    
}
constructor(private router: Router,private fb:FormBuilder,private cs:CommonService) {
      
}

ngOnInit() {
  
}

}
  
  


 
    

