export type TUser = {
    level: number,
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
