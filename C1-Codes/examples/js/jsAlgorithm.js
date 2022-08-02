(()=>{
    let  arr = [1,2,5,12,15,18,22,33,55,66,89];
    dichotomy(arr,33);// 7
    // 二分法查找对应值
    function dichotomy(arr,val) {
        console.log(arr,val,'1',arr.length%2,arr.length/2);
        // 判断取左取右
        let type = '';
        // 判奇偶
        if(Number.isInteger(arr.length/2)){
            // 取中值
            let mid1 = arr[arr.length/2-1];
            let mid2 = arr[arr.length/2];
            // 判大小
            if(val!==mid1&&val!==mid2){
                type = val<mid1?'l':'r';
            }else if(val === mid1&&val!==mid2){
                return 
            }else if(val !== mid1&&val===mid2){
                return 
            }
        }else{
            // 取中值
            let mid1 = arr[Math.ceil(arr.length/2)];
            // 判大小
            if(mid1!==val){
                type = val<mid1?'l':'r';
            }else{
                return 
            }


        }
        
    }
    // 去空值
    function filterEmpty(arr) {
        return arr.filter(item=>item !== null&&item !== undefined);
    }

})()