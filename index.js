// javascript

// console.log("Hello world!")

// let x = 10;
// let y = 5;
// let z = 15;
// b = x + y + z;
// console.log(b)

// let name = "chioma";
// let age = 30;
// c = `${name} is ${age} years old`
// console.log(c)


// let name = "chioma";
// let yb = 1995;
// db = `${name} is ${2023 - yb}`;
// console.log(db)

////string methods in javascript

// let name = "12345";
// let text_val = name.length;
// //console.log(text_val)
// let slice_text = name.slice(-5, -2);
// console.log(slice_text)


// let str = "Apple, Banana, Kiwi";
// let part = str.substr(4, 10);
// console.log(part);

// let str = "jones, had a great interview with jumia";
// let str_replace = str.replace("jones", "amaka");
// console.log(str_replace)


// let numb = 5;
// let text = numb.toString();
// console.log(typeof(text))
// console.log(typeof(numb))


/////array methods

// const cars = ["Saab", "Volvo", "BMW"];
// cars[1] = "toyota";
// console.log(cars)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// console.log(fruits);


//iterations in javascript


let numbers = [1, 2, 3, 4, 5];
const arr = []
//let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] %2 != 0)  {
        arr.push(numbers[i])
        //console.log(numbers[i]);
    }
    
    //sum += numbers[i];
}
//console.log(arr)
//console.log(sum); // 15


let names = ["jola", "tamuno", "philia"]
const arry = []

for (let i =0; i<names.length; i++){
      let name_length = names[i].length;
      arry.push(name_length);
      //console.log(name_length)


}
//console.log(arry)
const num_arr = [3, 6, 8, 10]
const arr_numb = [10, 12, 8, 9]
const arr_dff = []

if (num_arr.length == arr_numb.length){
    for (let i = 0; i<num_arr.length; i++){
        let diff = arr_numb[i] - num_arr[i];
        arr_dff.push(diff)
    }
}
else{
    console.log("Fail")
}

//console.log(arr_dff)
//console.log(num_arr.length)

// mean

const stat_arr = [10, 15, 22, 40]
let len = stat_arr.length

let sum_num = 0

for (let i=0; i<len; i++){
    sum_num = stat_arr[i] + sum_num;
    //console.log(sum_num)
}

let mean_val = sum_num / len
//console.log(`the mean of that arr is ${mean_val}`)
//console.log(sum_num)


///functions

function barisua(a, b) {
    d = a + b
    return d
}

//console.log(barisua(10, 21))

function barisua_pro(names) {
const arry = []

for (let i =0; i<names.length; i++){
      let name_length = names[i].length;
      arry.push(name_length)
      //console.log(name_length)
}
return arry
}
//console.log(barisua_pro(["james", "derrick", "coolie"]))





function mean_function(stat_arr){
    let len = stat_arr.length
    
    let sum_num = 0
    
    for (let i=0; i<len; i++){
        sum_num = stat_arr[i] + sum_num;
        //console.log(sum_num)
    }
    
    let mean_val = sum_num / len
    return mean_val
}

const b = [8, 19, 17, 21, 5, 4, 7]
//console.log(mean_function(b))




// median

let med_arr = [8, 14,12, 13, 16, 29, 16]
med_arr.sort(function(a, b){return a-b})
//console.log(med_arr)
let div2 = med_arr.length / 2;
let int_val = Math.floor(div2);
if (med_arr.length %2 != 0){
    console.log(med_arr)
    console.log(med_arr[int_val])
}
else if (med_arr.length %2 == 0) {
    //console.log("False")
let val_mid = int_val - 1
let median = ((med_arr[int_val]) + (med_arr[val_mid]))/2
console.log(med_arr)
console.log(median)
//console.log(med_arr[val_mid])

}



let assg = ["joe,blend", "kate,lepal", "mathy,donder"]
let first_arr = []
let second_arr = []
let final_count = []

for (let i =0; i < assg.length; i ++){
    let b = assg[i].split(",")[0]
    let k = assg[i].split(",")[1]
    first_arr.push(b)
    second_arr.push(k)
}

if (first_arr.length == second_arr.length){
    for (let i = 0; i < first_arr.length; i++){
        let count_a = first_arr[i].length - second_arr[i].length
        //console.log(count_a)
        final_count.push(count_a)
    }
//console.log(final_count)
}
else{
    //console.log("False")
}


// let num = [10, 15, 13, 3, 20, 6, 9, 11, 8, 23]
// let pos = num[0]

// for (let i =0; i<num.length; i++){
//     if (num[i] < pos){
//         pos = num[i]

//     }

// }
// console.log(pos)
// for (let i = 0; i < num.length; i++){
//     if (num[i] > pos){
//         console.log(pos = num[i])
//     }
// }



/// find the (sum arr/max_value) * (min_value)
//////Functions ----> Resuable blocks of code!!!!
let p = [10, 8, 16, 17]

function sum_array_func(array_val){
let array_sum = 0
for (let i = 0; i<array_val.length; i++){
   array_sum =  array_val[i] + array_sum
}
return array_sum
}

function MaxValue(array_val){
let pos = array_val[0]
for (let i =0; i<array_val.length; i++){
    if (array_val[i] > pos){
        pos = array_val[i]

    }
}
return pos
}


function MinValue(array_val){
    let pos = array_val[0]
    for (let i =0; i<array_val.length; i++){
        if (array_val[i] < pos){
            pos = array_val[i]
    
        }
    }
    return pos
    }




let total_func = sum_array_func(p)
let maxVal = MaxValue(p)
let minVal = MinValue(p)

let final_ans = (total_func/maxVal) * (minVal)
console.log(final_ans)

