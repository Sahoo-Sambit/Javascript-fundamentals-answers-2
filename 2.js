calculateTotalCartValue(125,20,30);
function calculateTotalCartValue(){
    let totalCost = 0;
    for(var i=0;i<arguments.length;i++){
        totalCost+=arguments[i];
    }
    console.log(`The total cart value is ${totalCost}`);
}