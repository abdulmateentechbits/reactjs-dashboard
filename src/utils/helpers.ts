
export const sleep = (time:number)=>new Promise((res)=>setTimeout(res,time))
export const calculateWindowSize = (windowWidth: number): string => {
    if (windowWidth >= 1200) return "lg";
    if (windowWidth >= 992) return "md";
    if (windowWidth >= 768) return "sm";
    return "xs"
};

export const setWindowClasses =(classList:string)=>{
    const window: HTMLElement | null = document && document.getElementById("root");
    if(window){
        // @ts-ignore
        window.classList = classList;
    }

    
}