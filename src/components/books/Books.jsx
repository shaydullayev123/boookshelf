// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBooks } from "../../redux/actions/booksAction";

// const Books = () => {
//   const { books, loading } = useSelector((state) => state.books);
//   console.log(books);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getBooks());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <div className="cards d-flex align-items-center justify-content-between gap-3 flex-wrap">
//         {loading ? (
//           <h1>Loading....</h1>
//         ) : (
//           books?.map((el) => {
//             return (
//               <div className="card" key={el.id} style={{ width: "18rem" }}>
//                 <div className="card-body">
//                   <h5 className="card-title">{el.volumeInfo.title}</h5>
//                   <p
//                     className="card-text"
//                     style={{ overflow: "scroll", height: "150px" }}
//                   >
//                     {el.volumeInfo.description}
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Batafsil
//                   </a>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Books;
