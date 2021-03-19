export {}

type UserType = {
    firstName: string 
    lastName: string 
    age: number 
}

type PhotoType = {
    large: string
    small : string
}

type ServerResponseType<D> = {
    errorCode: number
    message: Array<string>
    data: D 
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    message: ['it', 'kamasutra'],
    data: {
        firstName: "Alex",
        lastName: "Hey",
        age: 29
    }
}

const ServerResponseType2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    message: ['it', 'kamasutra'],
    data: {
        large: "hghghgh",
        small: "ghghghg"
    }
}

type Nullable<T> = null | T

const initialState = {
    age: 10,
    name: 'Dimych',
    photo: null as Nullable<PhotoType>,
    user: null as Nullable<UserType>
}

type StateType = typeof initialState

type ActionType = ReturnType<PropertiesType<typeof actions>>


const reducer = (state: StateType = initialState, action: ActionType) => {
   switch(action.type) {
       case "SET-AGE":
           return {...state, age: action.age}
       case "SET-NAME": 
        return {...state, name: action.firstName + " " + action.lastName}
    
   }
    return state
}




// const hipHop: SomeType<typeof obj>  = {}

// type SomeObjType = typeof obj.a | typeof obj.b | typeof obj.c

// const hipHop: SomeObjType = {name: "fhfhf", age: "hghgh", web}

// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

const obj = {
    a: {name: "sdffds"},
    b: {age: "dsdsds"},
    c: {web: {title: "dsdsdd"}}
}


type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never 



const puncRock: ReturnType<PropertiesType<typeof actions>> = {type: "SET-AGE", age: 23}

// type GetActionType<T> = ReturnType<PropertiesType<T>> 

const actions = {
    AC: (age: number) => ({type: 'SET-AGE', age} as const),
    AC2: (firstName: string, lastName: string) => ({type: 'SET-NAME', firstName, lastName} as const)
}

// type HipHop<T> = T extends "user" ? UserType : 
//                 T extends "photo" ? PhotoType : null

// const a: HipHop<"user"> = {
//     firstName: "dddd",
//     lastName: 'ghghgh',
//     age: 43
// }

// const b: HipHop<'photo'> = {
//     large: "fddfdfdf",
//     small: "ghhghgh"
// }

// type AC1Type = ReturnType<typeof AC>
// type AC2Type = ReturnType<typeof AC2>

// const action: AC1Type = {type: 'SET-AGE', age: 12  }
// const actionNew: AC2Type = {type: 'SET-NAME', firstName: 'ghghg', lastName: 'ffjfjjf'}