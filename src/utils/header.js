//header有 userId, username, date等功能。



export function getHeader(){
    id=sessionStorage.getItem('userID');
    name=sessionStorage.getItem('username');
    return new Headers({
        userId:{id},
        username:name,
        

    });
}