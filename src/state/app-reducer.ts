
export type StateAppType ={
    disableItem:boolean
    change:boolean
    error:string
    isError:boolean
    minNumber:number
    maxNumber:number
    data:number,
    isMaxNumber:boolean,
    isMinNumber:boolean
}

let initialState ={
    disableItem:false,
    change:false,
    error:"",
    isError:false,
    minNumber:1,
    maxNumber:5,
    data:0,
    isMaxNumber:false,
    isMinNumber:false,
}
export type ActionType = SetLocalStorageType | SetMaxValue | SetMinValue | ResetCounter |ChangeData

export const appReducer = (state:StateAppType=initialState, action:any)=>{
    switch(action.type){
        case "SET-LOCAL-STORAGE":
        return {...state, minNumber:action.payload.min, maxNumber:action.payload.max, change:false, data:action.payload.min}
        case "SET-MAX-VALUE":
            state.isMaxNumber = state.data === state.maxNumber
            state.isMaxNumber ? state.error="error value" : state.error='';
            return {...state, setChange:true, maxNumber:action.payload.max}
        case "SET-MIN-VALUE":
            state.isMinNumber = state.data === state.minNumber
            state.isMinNumber ? state.error="error value" : state.error='';
            return {...state, setChange:true, minNumber:action.payload.min}
        case"RESET-COUNTER":
            return {...state, data:state.minNumber, disableItem:false}
        case "CHANGE-DATA":
            if (
                state.maxNumber < 0 ||
                state.minNumber < 0 ||
                state.maxNumber < state.minNumber ||
                state.minNumber > state.maxNumber ||
                state.minNumber === state.maxNumber
            ) return {...state, isError:true, disableItem:true}
            else return {...state, data:action.payload.changeNum}
        default:return {...state, data:state.minNumber}
    }
}


export const setLocalStorage = (max: number, min: number)=>{
    return {
        type:"SET-LOCAL-STORAGE",
        payload:{
            max,
            min
        }
    }
}
export const setMaxValue = (max:number) =>{
    return {
        type:"SET-MAX-VALUE",
        payload:{
            max,
        }
    }
}
export const setMinValue = (min:number) =>{
    return {
        type:"SET-MIN-VALUE",
        payload:{
            min,
        }
    }
}

export const resetCounter = (minNumber:number) =>{
    return {
        type:"RESET-COUNTER",
        pyload:{
            minNumber
        }
    }
}
export const changeData = (changeNum:number) =>{
    debugger
    return {
        type:"CHANGE-DATA",
        payload:{
            changeNum
        }
    }
}

type ChangeData = ReturnType<typeof changeData>
type SetMaxValue = ReturnType<typeof setMaxValue>
type ResetCounter = ReturnType<typeof resetCounter>
type SetMinValue = ReturnType<typeof setMinValue>
type SetLocalStorageType = ReturnType<typeof setLocalStorage>
