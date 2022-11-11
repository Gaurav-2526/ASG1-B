import React from 'react'
import App from './App';

function UserDataTable({users}){

    return(
        <div>
            {table(users)}
        </div>
    )

    function table(users){
        if(users.length)
          return <table border="1">
          <tr>
              <th>
                  UserId
              </th>
              <th>
                  Id
              </th>
              <th>
                  Title
              </th>
              <th>
                  body
              </th>
          </tr>
          {users.map(user=>
              <tr>
                  <td>
                      {user.userId}
                  </td>
                  <td>
                      {user.id}
                  </td>
                  <td>
                      {user.title}
                  </td>
                  <td>
                      {user.body}
                  </td>
              </tr>


          )}
      </table>
      else <p>No Data Found</p>
    }
}

export default UserDataTable;