const o={method:"POST",body:JSON.stringify(),headers:{"Content-type":"application/json"}};fetch("https://jsonplaceholder.typicode.com/todos/",o).then((o=>{if(console.log(o),!o.ok)throw new Error(o.statusText)})).catch((o=>console.log(o)));
//# sourceMappingURL=crud.e1f96423.js.map
