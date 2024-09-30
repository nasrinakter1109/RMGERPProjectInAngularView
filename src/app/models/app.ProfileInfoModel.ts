// import { ServiceSubTypeModel } from "src/app/models/app.ServiceSubTypeModel";

export class ProfileInfoModel {
    // public name: string = "";
    // public personNidNo : string = "";
    // public personContactNo: string = "";
    // public personEmail: string = "";
    // public bussinessName : string = "";
    // public personPresentAddress : string = "";
    // public userTypeId: string ="";
    // public userId: number = 0;


    public id: number=0;

    //Person Basic Information
    public personAcNo : string='';
    public personFirstName : string='';
    public personLastName : string ='';
    public personContactNo : string ='';
    public personEmail : string ='';
    public areMarried : boolean=false;
    public personNidNo : string ='';
    public personTinNo : string ='';
    public personFatherName : string ='';
    public personMotherName : string ='';
    public personHusbandName : string ='';
    public personWifeName : string ='';
    public currentUtcTimeZone : string ='';
    public personImgUrl : string ='';
    public personGender : number=0;
    public degreeId : number=0;

    //Permanent Address
    public personPermanentAddress : string ='';
    public permanentDivisionId : number=0;
    public permanentDistrictId : number=0;
    public permanentUpazilaId : number=0;
    public permanentThanaId : number=0;
    public permanentPostCodeId : number=0;

    //Present Address
    public personPresentAddress : string ='';
    public presentDivisionId : number=0;
    public presentDistrictId : number=0;
    public presentUpazilaId : number=0;
    public presentThanaId : number=0;
    public presentPostCodeId : number=0;

    //Business Information
    public bussinessName : string ='';
    public bussinessAddress : string ='';
    public bussinessDivisionId : number=0;
    public bussinessDistrictId : number=0;
    public bussinessUpazilaId : number=0;
    public bussinessThanaId : number=0;
    public bussinessPostCodeId : number=0;
    public salesZone : string ='';
    public tradeLicenseNo : string ='';
    public taxStatus : number=0;

    public commissionId : number=0;
    public outletName : string ='';
    public outletAddress : string ='';
    public personNidImgUrl : string ='';
    public tradelicenseImgUrl : string ='';

    public outletImgUrl : string ='';
    public ownerImgUrl : string ='';
    public bussinessDocUrl : string ='';

    //Bank Information
    public bankId : number=0;
    public bankAccountNo : string ='';
    public bankBranchId : number=0;
    public bankAccountType : string ='';
    public bankRoutingNumber : string ='';
    public businessTypeId : number=0;
    public businessSubTypeId : number=0;

    //login
    public userPassword : string ='';
    public userPin : string ='';

    //Relation
    public userTypeId : number=0;
    public roleId : number=0;
    public distributorId : number=0;
    public dsoId : number=0;
   // public services: ServiceSubTypeModel[];
    public isApproved: number=0;

    // public personFirstName: string ='';
    // public personLastName: string ='';
    // public personEmail: string ='';
    // public personContactNo: string ='';
}
