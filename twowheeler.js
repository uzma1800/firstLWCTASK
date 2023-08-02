import { LightningElement,track } from 'lwc';
import LightningConfirm from "lightning/confirm";
import LightningAlert from "lightning/alert";
import LightningPrompt from 'lightning/prompt';

export default class Salesforceplsgod extends LightningElement {

    @track fullName = {firstName:"" , lastName:""};
    @track details = {Address:"",mobNum:"",panNo:"",bikeModel:"",bikePrice:"",loantaken:""};
    @track loandetails = {loanCompany:"",loanAmount:""};
    
    handleChange(event){
        
    const field=event.target.name;
    let name = event.target.name;
    let value = event.target.value;
    
    if(field === 'firstname' ) { 
    this.fullName.firstName = event.target.value;
    }
    else if(field === 'lastname' ) { 
    this.fullName.lastName = event.target.value;
    }
    else if(field === 'address' ) { 
        this.details.Address = event.target.value;
    }
    else if(field === 'mobnum' ) { 
            this.details.mobNum = event.target.value;
    }
    else if(field === 'panno' ) { 
        
        this.details.panNo = event.target.value;
    }
    else if(field === 'bikemodel' ) { 
        this.details.bikeModel = event.target.value;
    }
    else if(field === 'bikeprice' ) { 
        this.details.bikePrice = event.target.value;
    }
    else if (field === 'valid') {
        this.details.loantaken = event.target.checked;
    }
    else if(field === 'loancompany'){
        this.loandetails.loanCompany = event.target.value;
    }
     else if(field === 'loanamount'){
        this.loandetails.loanAmount = event.target.value;
     }
    }
    
    value = 'false';
        get insuranceOptions() {
            return [
                { label: 'true', value: 'true' },
                { label: 'false', value: 'false' },        
            ];
        }
        visible='';
        visible1='';
    
        handleChangebox(event) {
            //const1='NO'
            this.value = event.target.value;
            if(this.value === 'true'){
                this.visible = 'true';
            } else if(this.value === 'false'){
                this.visible = '';
            } 
    }

    handleShowDetails(){
    
    const details = `first Name: ${this.fullName.firstName}\nLast Name: ${this.fullName.lastName}\nAddress: ${this.details.Address}\nMobile: ${this.details.mobNum}\nPAN No.: ${this.details.panNo}\nBike Model: ${this.details.bikeModel}\nBike Price: ${this.details.bikePrice}\nLoan taken: ${this.value}\n`;
    const details2 = `Loan Company: ${this.loandetails.loanCompany}\nLoan Amount: ${this.loandetails.loanAmount}\n`;

    if(this.details.mobNum==='' || this.loandetails.panNo==='' || this.fullName.firstName===''){
        alert('REQUIRED FIELDS ARE EMPTY , PLEASE FILL THEM');
        return true;
    }
    
    if(this.value==='true'){
        if(this.loandetails.loanAmount==='' || this.loandetails.loanCompany===''){
            alert('REQUIRED FIELDS ARE EMPTY , PLEASE FILL THEM');
            return true;
        }
    }
    
    if (this.visible) {
        window.alert(details);
        window.alert(details2);
        // Only include loan details if valid is true
        details += `\nLoan Company: ${this.loandetails.loanCompany}\nLoan Amount: ${this.loandetails.loanAmount}`;
    } 
    
    window.alert(details);
        }
    
    }