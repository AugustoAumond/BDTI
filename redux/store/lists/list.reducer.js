export default function listReducer (state = localStorage.getItem('tasks') || JSON.parse(localStorage.getItem('tasks')) === undefined ? JSON.parse(localStorage.getItem('tasks')) : {type: 'full', tasks: []}, action){
    
    switch(action.type){
        case 'add':
            action.payload[0].tasks = [...action.payload[0].tasks, action.payload[1]];

            localStorage.setItem('tasks', JSON.stringify(action.payload[0]));

            return action.payload[0];
        
        case 'del':
            action.payload[1].tasks.splice(action.payload[0], 1);

            if (action.payload[1].tasks.length > -1){

                action.payload[1].tasks.map((e, index) => {
                    e.id = index;
                });

               JSON.stringify(localStorage.setItem('tasks', JSON.stringify(action.payload[1]))); 

            } else {

                localStorage.removeItem('tasks'); 

            }

            return action.payload[1]; 
            
        case 'edit': 

            JSON.stringify(localStorage.setItem('tasks', JSON.stringify(action.payload[0])));

            console.log(action.payload[0]);

            return  action.payload[0]
                
        case 'finish':
            return 

        default:
        return state
    } 
}