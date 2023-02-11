
//4-1 중복된 문자 제거
// function solution(s) {
//    return [...s].reduce((x,y) => x.includes(y)? x=x:x=x+y)
// }

// console.log(solution("people"))

//4-2 A로 B 만들기
// function solution(b, a) {    
//    return JSON.stringify([...b].reverse())  === JSON.stringify([...a])? 1:0;
// } // 이건 그냥 뒤집기만 하는거고!!

// function solution(b, a) {    
//    return JSON.stringify([...b].sort())  === JSON.stringify([...a].sort())? 1:0;
// }
// console.log(solution("olleh",	"hello"))
// 간만에 내 풀이 좀 좋다..?

//4-3 factorial
// function solution(n) {
//    let divide = 0;
//    let factorial = 1;
//    for(i=2; n>factorial; i++){
//       if(n>=factorial*i) {
//          factorial *= i; 
//          divide = i;
//       }else{
//          return divide;
//       }}
   
// }

// console.log(solution(7))

//function solution(n) {
//    let i = 1;
//    let f = 1;
//    while (f*i < n) f*=++i;
//    return i;
// }

// 4-4 2-dimension
// function solution(num_list, n) {
//     let result = [];
//     for(i=0; i<num_list.length/n; i++){
//         result[i] = [];
//         for(j=0; j<n; j++){
//             result[i].push(num_list[n*i+j])
//         }
//     }
//     return result;
//  }

//  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2))

//훨씬 간결한 풀이
// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }

// 4-5 가장 가까운 수
// 내풀이다냥
// function solution(array, n) {
//     return array.sort((a,b) => a-b).reduce((acc,cu) => Math.abs(n-acc)<=Math.abs(n-cu)? acc=acc:acc=cu)
// }

// 이건 뭐냥

// let solution=(r,n)=>r.map(e=>[e,Math.abs(e-n)]).sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0][0]

// 4-6 응급순위 

// function solution(emergency) {
//     let emergencyCopied = emergency.slice()
//     let first = emergencyCopied.sort((a,b)=>b-a)
//     return emergency.map(x => x = first.indexOf(x) + 1)
//   }

// console.log(solution([3, 76, 24]))

// function solution(emergency) {
//         let first = [...emergency].sort((a,b)=>b-a)
//         return emergency.map(x => x = first.indexOf(x) + 1)
//       }
// spread 문법으로 훨씬 간결하게


//4-7 k의 개수
// function solution(i, j, k) {
//     // i 2- j 102 k 6 차 100, 합 104 / 4 4
//     // 22-102 6
//     // i 8- j 102 k 6 차 94, 합 110 / -2 6
// //     if(k>i){
// //     let upper_interval = k-i
    
// //     }
// //     else if(k<i)
// //     let lower_interval = (10-i) + k
//     let counter = 0;
//     for(iter=i; iter<=j; iter++){
//        counter += iter.toString().split('').filter(x => x.includes(k)).length
//     }
//     return counter;    
// }

// console.log(solution(1,12,1))

// 이진수 더하기
// function solution(bin1, bin2) {
//     // 11011 111 = 11221 >reverse  12211
//     // 1,0이면 유지, 2면 0으로 바꾸고 다음자리 +1
//     //> 10001
//     let sum = Number(bin1) + Number(bin2)
//     let operator = 0;
//     let array = sum.toString().split('').reverse().map( x => {
//        if (Number(x)+operator === 0 || Number(x)+operator===1) {
//         let temp = Number(x) + operator
//         operator = 0;
//         return temp;}
//         else if(Number(x) === 2 && operator === 1){
//             operator = 1;
//             return 1
//         } 
//         else {operator = 1;
//             return 0}}).reverse()
//         console.log(array[0])
//         if(array[0]===0) array.unshift(1)
//         else if(array[0]===1 && operator===1) array.unshift(1)
//     return array.join('')
// }
// console.log(solution(	"1001", "1111"))
//2112

// function solution(array) {
//     let result = 0;
//      for (let i in array){
//          let str = array[i].toString() 
//        if(str.includes('7')){
//            result += str.split('').filter(x => x==='7').length
//        }  
//      }
//      return result;
//  }

//  console.log(solution([7, 77, 17]))

 // 현타옴 split에 대해 다시 공부!! for in 도 다시 한 번 공부
// function solution(array) {
//     return array.join('').split('7').length-1;
// }

// function solution(n) {
//     let dupli = n
//     let result = [];
//     for(i=2; i<=dupli/2; i++){
//         if(n%i===0) {
//             result.push(i);
//             for(j=i; n%j===0; j=j){            
//             n = n/j;
//             }
//     }    
// }
// if(result.length === 0) result.push(dupli)
// return result;
// }

// console.log(solution(12))

// 잘라서 배열로 저장하기
// function solution(my_str, n) {
//   return my_str.match(new RegExp(`.{1,${n}}`, "g"));
// }

// 
// function solution(my_string) {
//     let array = my_string.split(' ')
//     let result = Number(array.shift())
//     for(i=0; i<(array.length-1); i+=2){
//         if(array[i]==="+"){
//             result += Number(array[i+1])
//         }
//         else{
//             result -= Number(array[i+1])
//         }
//     }
//     return result;
//  }

// 구슬을 나누는 경우의 수
// function solution(balls, share) {
//     if(balls === 1) return 1;
//     let sibling = 1;
//     let mother = 1;
//     for(i=0; i<balls-share; i++){
//         sibling *= (balls-i);
//     }
//     for(i=1; i<=balls-share; i++){
//         mother *= i;
//     }
    
//     return sibling/mother;
// }

// 최빈값 - 잘못생각한 풀이 고침
// function solution(array) {
//     newarray = array.map(x => {
//         let count = 0;
//         for (i=0; i<array.length; i++){
//           if(array[i] === x){count++} 
//       }
//         return count;
//     })
//     console.log(newarray)
//     const maxOf = Math.max(...newarray) 
//     if(maxOf === newarray.filter(x => x===maxOf).length){
//                         return array[newarray.indexOf(maxOf)];
//                         }
//     else{
//         return -1;
//     }
// }

// 다시생각한 풀이 - 객체로 만들어서 배열에 넣으려고함
//     let result = []
//     for (el in array){
//       el  
//     }
// } 

// console.log(solution([1, 2, 3, 3, 3, 4, 5, 5,5]))
// console.log(solution([1,1,2,2,3,3,4,4]))

// 이거 먼데..
// function solution(array) {
//     let m = new Map();
//     for (let n of array) m.set(n, (m.get(n) || 0)+1);
//     m = [...m].sort((a,b)=>b[1]-a[1]);
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }


//평행
    // 1-2 1-3 1-4  이렇게 3가지 경우의 수가 있음
    // 1-2 3-4 직선이 평행 또는 일치 하는 경우 > 기울기가 같음
    function solution(dots) {

        let a1 = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0])
        let a2 = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])
    
        let a3 = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0])
        let a4 = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])
    
        let a5 = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0])
        let a6 = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0])
    
        if(a1===a2||a3===a4||a5===a6) return 1
        else return 0
            // }
        // } 
    }


//singi hae
// function solution(dots) {
//     if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//         return 1;
//     return 0;
// }

// function calculateSlope(arr1, arr2) {
//     return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }

// 이거 재귀로 풀면 될듯? 수 연산자 수 연산자= 니까 맨앞에 - 오는거 고려해주고, 네번반복되는 재귀함수 한다음에 나머지 음수인지 양수인지 판단해서 수식 맞는지 map 돌리면 될듯

// ox퀴즈
// function solution(quiz) {
//     quiz.map(x => {
//        let newx = x.split(' ')
//        let X;
//         let Y;
//         let Z=0;
//         for(i=0; i<newx.length && Z===0; i++){
//             if(newx[i]==="=") return Z=i; //Z에 = 위치 기록
//             if(Number(newx[i])===NaN && newx[i]!=="=")  {
//                 Y=newx[i]
//             }
//             else if(Number(newx[i])!=="=") {
//                 X = X+Number(newx[i])
//             } 
//        }
//        if(newx[Z]==="-"){
//            Y==="+" ? X+Y
//        } 
// })

