// async function ServerSideFetch() {
//   const res = await  fetch('https://jsonplaceholder.typicode.com/users')

//   if(!res.ok) {
//     throw new Error('the data not fetch')
//   }
//   return res.json()
// }

// type Posts = {
//     name:string,
//     username:string,
//     id:number
// }


// async function FetchData() {
//    const data = await ServerSideFetch();

//    console.log(data);
   
//   return (
//     <>
//     <div>FetchData</div>
//     {

//         data.map((post:Posts) => (
//             <div key={post.id}>
//                 <h4>{post.name}</h4>
//                 <h3>{post.username}</h3>
//             </div>
//        ))
//        }
//        </>
//   )
// }

// export default FetchData