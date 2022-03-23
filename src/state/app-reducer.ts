
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
            return {...state, setChange:true, minNumber:action.payload.min}
        case"RESET-COUNTER":
            return {...state, data:state.minNumber, disableItem:false}
        case "CHANGE-DATA":
         return {...state, data:action.payload.changeNum}
        case "CHANGE-DISABLE-ITEM":
            return {...state, disableItem:action.payload.disableItem}
        case "CHANGE-CHANGE":
            return {...state, change:action.payload.change}
        case "SET-ERROR":
            return {...state, isError:action.payload.isError}
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
    } as const
}
export const setMaxValue = (max:number) =>{
    return {
        type:"SET-MAX-VALUE",
        payload:{
            max,
        }
    }  as const
}
export const setMinValue = (min:number) =>{
    return {
        type:"SET-MIN-VALUE",
        payload:{
            min,
        }
    } as const
}

export const resetCounter = (minNumber:number) =>{
    return {
        type:"RESET-COUNTER",
        pyload:{
            minNumber
        }
    } as const
}
export const changeData = (changeNum:number) =>{
    return {
        type:"CHANGE-DATA",
        payload:{
            changeNum
        }
    } as const
}
export const changeDisableItem = (disableItem:boolean) =>{
    return {
        type:"CHANGE-DISABLE-ITEM",
        payload:{
            disableItem
        }
    } as const
}
export const changeChange = (change:boolean) =>{
    return {
        type:"CHANGE-CHANGE",
        payload:{
            change
        }
    } as const
}
export const setError = (isError:boolean) =>{
    return {
        type:"SET-ERROR",
        payload:{
            isError
        }
    }
}

type ChangeData = ReturnType<typeof changeData>
type SetMaxValue = ReturnType<typeof setMaxValue>
type ResetCounter = ReturnType<typeof resetCounter>
type SetMinValue = ReturnType<typeof setMinValue>
type SetLocalStorageType = ReturnType<typeof setLocalStorage>
