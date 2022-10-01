
export function add (list, obj){
    return {
        type: 'add',
        payload:[list, obj]
    }   
}

export function del (id, list){
    return {
        type: 'del',
        payload:[id, list]
    }
}

export function edit(newList){
    return {
        type: 'edit',
        payload:[newList]
    }
}

export function finished (list){
    return {
        type: 'finsh',
        payload:[list]
    }
}