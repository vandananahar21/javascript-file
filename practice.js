let num2 = 6;
num2--;



arr=[55,23,27,65]
for(i=0; i<4; i++){
    for(j=1; j<3; j++){
        if(arr[i]> arr[j]){
            temp =arr[i]
            arr[i]=arr[j]
            arr[j]= temp
            console.log(arr)
        }
    }
}
