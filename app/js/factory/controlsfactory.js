
// Factory : controlsFactory
myApp.factory("controlsFactory",function(){
    
    var factory={};
    
    factory.controls=[
        // Page : Customer Master
    { page:"CustomerMaster", name:"SupplierCode", id:"supplierCode",labelClass:"col-sm-4",labelText:"Supplier Code",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Supplier Code"},
    { page:"CustomerMaster",name:"CompanyName", id:"companyName",labelClass:"col-sm-4",labelText:"Company Name",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Company Name"},
    { page:"CustomerMaster",name:"ContactPerson", id:"contactPerson",labelClass:"col-sm-4",labelText:"Contact Person",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Contact Person"}

        ];
        
        return factory;
});