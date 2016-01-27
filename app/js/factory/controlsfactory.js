
// Factory : controlsFactory
myApp.factory("controlsFactory",function(){
    
    var factory={};
    
    factory.controls=[
        // Page : Customer Master
    { page:"CustomerMaster", name:"SrNo", id:"SrNo",labelClass:"col-sm-4",labelText:"Sr No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Sr No",inputtype:"textbox"},
    { page:"CustomerMaster", name:"SupplierCode", id:"SupplierCode",labelClass:"col-sm-4",labelText:"Supplier Code",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Supplier Code",inputtype:"textbox"},
    { page:"CustomerMaster",name:"CompanyName", id:"CompanyName",labelClass:"col-sm-4",labelText:"Company Name",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Company Name",inputtype:"textbox"},
    { page:"CustomerMaster",name:"ContactPerson", id:"ContactPerson",labelClass:"col-sm-4",labelText:"Contact Person",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Contact Person",inputtype:"textbox"},
    { page:"CustomerMaster",name:"MobileNo", id:"MobileNo",labelClass:"col-sm-4",labelText:"Mobile No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Mobile No",inputtype:"mobileno"},
    { page:"CustomerMaster",name:"PhoneNo", id:"PhoneNo",labelClass:"col-sm-4",labelText:"Phone No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Phone No",inputtype:"phoneno"},
    { page:"CustomerMaster",name:"EmailId", id:"EmailId",labelClass:"col-sm-4",labelText:"Email Id",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Email Id",inputtype:"email"},
    { page:"CustomerMaster",name:"Website", id:"Website",labelClass:"col-sm-4",labelText:"Website",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Website",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine1", id:"OfficeAddressLine1",labelClass:"col-sm-4",labelText:"Address Line 1",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 1",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine2", id:"OfficeAddressLine2",labelClass:"col-sm-4",labelText:"Address Line 2",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 2",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine3", id:"OfficeAddressLine3",labelClass:"col-sm-4",labelText:"Address Line 3",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 3",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeCity", id:"OfficeCity",labelClass:"col-sm-4",labelText:"City",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office City",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeState", id:"OfficeState",labelClass:"col-sm-4",labelText:"State",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office State",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficePin", id:"OfficePin",labelClass:"col-sm-4",labelText:"Pin",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Pin",inputtype:"pin"},
    { page:"CustomerMaster",name:"FactoryAddressLine1", id:"FactoryAddressLine1",labelClass:"col-sm-4",labelText:"Address Line 1",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 1",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryAddressLine2", id:"FactoryAddressLine2",labelClass:"col-sm-4",labelText:"Address Line 2",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 2",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryAddressLine3", id:"FactoryAddressLine3",labelClass:"col-sm-4",labelText:"Address Line 3",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 3",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryCity", id:"FactoryCity",labelClass:"col-sm-4",labelText:"City",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory City",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryState", id:"FactoryState",labelClass:"col-sm-4",labelText:"State",inputDivClass:"col-sm-8",inputClass:"",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryPin", id:"FactoryPin",labelClass:"col-sm-4",labelText:"Pin",inputDivClass:"col-sm-8",inputClass:"",inputtype:"pin"}
    
    

        ];
        
        return factory;
});