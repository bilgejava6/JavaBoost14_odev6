import React from 'react'
import { useSelector } from 'react-redux';

function UserCard(props:{image:string, name: string}) {
  const userIndex = useSelector((state: any)=> state.user.indexUser);
  
  return (
    <div className="row p-2 shadow mt-5 mb-5 text-center justify-content-center">
        <img src={props.image} style={{ width:'100px', borderRadius:'50%'}} />
        <label style={{margin:'5px'}}>{props.name}</label>
    </div>
  )
}
export default UserCard;