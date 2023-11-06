import { Link } from "react-router-dom";


const SubmittedCard = ({ getAssignment, setGetAssignment, cardValue }) => {
    const { link,name,_id, message,email,status ,title,level,marks,photo } = cardValue;

    return (
        <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Level : {level}</div>
              <div className="text-sm opacity-50">Marks : {marks}</div>
            </div>
          </div>
        </td>
        <td className="w-[400px]">
          PDF: {link}
          <br/>
          <span className="badge badge-ghost badge-sm">{title}</span>
        </td>
        <td className="w-[400px]">
         {name}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td><button className="btn btn-sm bg-[#FEF2F2] text-red-500">pending</button></td>
        <th>
          <Link to={`/giveMark/${_id}`}><button className="btn">Give mark</button></Link>
        </th>
      </tr>   

    );
};

export default SubmittedCard;