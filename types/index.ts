export type TUser = {
    level: number,
    redundant: boolean,
    user: {
        id: string,
        login: string,
        displayname: string,
        image: {
            versions: {
                large: string
            }
        }  
    }
}
