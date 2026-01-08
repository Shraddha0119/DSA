// // add tow number

// let l1=[234]
// let l2=[345]

// var addtwonumber = function(l1,l2){
//     let dummy = new ListNode (0)
//     let current=dummy;
//     let carry=0;

//     while(l1!==null || l2!==null || carry!==null);{
//     let sum =carry;

//     if(l1!==null){
//         sum+=l1.val;
//         l1=l1.next;
//     }

//     if(l2!==null){
//         sum+=l2.val;
//         l2=l2.next;
//     }

//    carry=Math.floor(sum/10);
//    current.next=new ListNode(sum%10);
//    current=current.next;
// }
// return dummy.next;
// }

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// create linked list: 2 -> 3 -> 4
let l1 = new ListNode(2, new ListNode(3, new ListNode(4)));
// create linked list: 3 -> 4 -> 5
let l2 = new ListNode(3, new ListNode(4, new ListNode(5)));

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};

// print result
let result = addTwoNumbers(l1, l2);
while (result) {
    console.log(result.val);
    result = result.next;
}
