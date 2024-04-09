// checking Usernames

let currentUsers: string[] = ["ameen" ,"qasim" ,"Zia" ,"Abishai" ,"kashif"];

let newUsers: string[] = ["robert" ,"Ameen" ,"mehar" ,"hamza" ,"ABISHAI"];


newUsers.forEach((name: string) => {
    if (currentUsers.some(user => user.toLowerCase() === name.toLowerCase())) {

        console.log(`${name} is not available.Please enter a new username`);
    } else {
        console.log(`${name} is available`);
    };
});

