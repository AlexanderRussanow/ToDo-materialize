export {}

const initial = {
    name: "Axel",
    age: 18,
    occupation: "student"
}


type InitialStateType = typeof initial

type ForOurActionType = ReturnType<ForActionCreator<typeof actionAll>>

const reducerOne = (state: InitialStateType = initial, action: ForOurActionType) => {
    switch(action.type) {
        case "BLA": 
            return {...state, name: action.firstName + " " + action.lastName}
        case "NU": 
            return {...state, age: action.age}
    }
    return state
}


const actionAll = {
    action1: (age: number) => ({type: "NU", age} as const),
    action2: (firstName: string, lastName: string) => ({type: "BLA", firstName, lastName} as const)
}

type ForActionCreator<T> = T extends {[key: string]: infer U} ? U : never 


const hipHop: ForOurActionType = {type: 'BLA', firstName: 'ghghghgh', lastName: "ghghgh"}

// const shalaBala: ReturnType<ForActionCreator<actionAll>> = {type: "", }