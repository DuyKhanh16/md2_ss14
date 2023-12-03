import React, { useId, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Home() {
    const data = useSelector(state=>state)
    const dispatch = useDispatch()
    const [users,setUsers] = useState(
        {
            name:"",
            email: "",
            school:"",
            id:""
        }
    )
    const changeValue = (e)=>{
        setUsers ({
            ...users,
            [e.target.name]:e.target.value 
        })
        
    }
        
    const handleAdd= ()=> {
        dispatch ({
            type: "ADD",
            payload:{
                ...users,
                id: Date.now()
            }
        })
        setUsers ({
            name: "",
            email: "",
            school: "",
            id: ""
        })
    }

  return (
    <>
        <label htmlFor="">Họ và tên</label>
        <input type="text" onChange={changeValue} name='name' /> <br />
        <label htmlFor="">Email</label>
        <input type="text" onChange={changeValue} name='email' /><br />
        <label htmlFor="">Trường học</label>
        <input type="text" onChange={changeValue} name='school' /><br /> <br />
        <button onClick={handleAdd}>Thêm</button> <br /> <br />

        <table>
            <thead>
                <tr>
                    <th style={{border:"1px solid black"}}>STT</th>
                    <th style={{border:"1px solid black"}}>Họ và tên</th>
                    <th style={{border:"1px solid black"}}>Email</th>
                    <th style={{border:"1px solid black"}}>Trường</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>(
                    <tr key={item.index}>
                        <td style={{border:"1px solid black"}}>{index+1}</td>
                        <td style={{border:"1px solid black"}}>{item.name}</td>
                        <td style={{border:"1px solid black"}}>{item.email}</td>
                        <td style={{border:"1px solid black"}}>{item.school}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}
