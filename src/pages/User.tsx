import { useDispatch, useSelector } from "react-redux"
import UserCard from "../components/molecules/UserCard"
import { IUser } from "../models/IUser";
import { ReducerType } from "../store";
import { fetchGetAllUsers } from "../store/features/userSlice";
import { useEffect, useState } from "react";

function User() {
  const dispatch = useDispatch<ReducerType>();
  const users: IUser[] = useSelector((state: any)=> state.user.userList)
  
  useEffect(()=>{
    dispatch(fetchGetAllUsers());
  },[dispatch]);
  
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <input  type="text" className="form-control" placeholder='işaretlenecek index numarası'/>
        </div>
      </div>
      <div className="row">
        {
            users.map((user,index)=>{
              return(
                <div className="col-3" key={index}>
                  <UserCard name={user.firstName} image={user.image} />
                </div>
              )
            })
        }
           
      </div>
    </div>
  )
}

export default User