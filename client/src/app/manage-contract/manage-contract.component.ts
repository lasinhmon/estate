import { Component, ElementRef, OnInit , ViewChild } from '@angular/core';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';

@Component({
  selector: 'app-manage-contract',
  templateUrl: './manage-contract.component.html',
  styleUrls: ['./manage-contract.component.css']
})
export class ManageContractComponent implements OnInit{
  objContract: Contract=new Contract();
  contracts:Contract[];
  @ViewChild('closeButton') closeButton: ElementRef<any>;

  constructor(private contractService: ContractService){}
  ngOnInit(): void {
      this.getContracts();
  }
  private getContracts(){
    this.contractService.getContractsList().subscribe(data=>{
      this.contracts = data
    })
  }
  public getContractById(contractId: number){
    console.log(contractId);
    this.contractService.getContractById(contractId).subscribe((respData: any) => {
      if(respData){
        this.objContract = respData;
      }
    });
  }
}
