const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

let {
    data:{title}    
}=response;

let {
    data:{author}
}=response;

let {
    data:{author:{name:authorName,email:authorEmail}}

}=response

console.log(title);
console.log(author);
 console.log(authorName);
 console.log(authorEmail);

