function mergeSort(list){
    if (list.length < 2){
        return list;
    }
    list = splitSingleListToTwoLists(list);
    let list1 = mergeSort(list[0]);
    let list2 = mergeSort(list[1]);
    return sortTwoListToSingleList(list1, list2);
}

function sortTwoListToSingleList(list1, list2){
    let i=0, j=0, k=0;
    let length1 = list1.length, length2 = list2.length, tempLgth;
    let resultLst = [], rests = [];

    while (i < length1 && j < length2){
        if (compareFcn(list1[i], list2[j])){
            resultLst.push(list1[i]);
            i++;
        }
        else{
            resultLst.push(list2[j]);
            j++;
        }
    }
    if (i === length1){
        k = j; tempLgth = length2; rests = list2;
    }
    else{
        k = i; tempLgth = length1; rests = list1;
    }
    for(; k<tempLgth; k++){
        resultLst.push(rests[k]);
    }
    return resultLst;
}

function splitSingleListToTwoLists(list){
    let length = list.length;
    let list1 = [], list2 = [];
    let i=0;
    for(; i<Math.floor(length/2); i++){
        list1.push(list[i]);
    }
    for (; i<length; i++){
        list2.push(list[i]);
    }
    return [list1,list2];
}

function compareFcn(work1, work2){
    return work1.numOfPotential < work2.numOfPotential;
}

module.exports = mergeSort;

