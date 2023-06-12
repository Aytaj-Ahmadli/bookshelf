import React from "react";
import { useSelector } from "react-redux";

const ListBooks=()=>{
  const { booksState } = useSelector(state=>state)


  return(
    <table className="table table-stripped my-5">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Author</th>
        <th scope="col">Category</th>
        <th scope="col">Operations</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Button</td>
      </tr>
     
    </tbody>
  </table>
  )
}
export default ListBooks;