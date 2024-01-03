import axios from "axios";

interface User {
   id: 1,
   name: string,
   username: string,
   email: string,
   address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: { 
         lat: string,
         lng: string
      }
   },
   phone: string,
   website: string,
   company: {
     name: string,
     catchPhrase: string,
     bs: string
   }
}
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
   .then((response) => {
      response.data.forEach(parseResult);
   })


function parseResult(user: User) {
   console.log(user.name);
   console.log(user.phone);
   console.log(user.email);
}