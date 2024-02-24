import { sleep } from "./helpers"

export const authLogin = (email: string, password: string) => {
    
    return new Promise(async (res, rej) => {
        await sleep(500);
        if (email === "mateen@gmail.com" && password === "mateen") {
            localStorage.setItem(
                "authentication",
                JSON.stringify({ profile: { email: "mateen@gmail.com" } })
            );
            return res({
                profile: { email: "mateen@gmail.com" },
            });
        }
        return rej({ message: "Credentials not found" })

    })


}


