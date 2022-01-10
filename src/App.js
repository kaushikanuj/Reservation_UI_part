import React from 'react'
import './App.css';
import SideBar from './sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
import Layout from './layout';


class App extends React.Component {
  constructor(props) {
      super(props);
  }
  render(){
    const columns = [
      {
          Header: 'VCENTER NAME',
          accessor: 'created',
          width: 220,
      },
      {
          Header: 'STATUS',
          accessor: 'role',
          width: 220,
      },
      {
        Header: 'LAST SUCCESSFUL UPDATE',
        accessor: 'lrole',
        width: 280,
      },
      {
        Header: 'LAST CONNECTION ATTEMPT',
        accessor: 'mrole',
        width: 280,
    },

  ]
    return (
      <>
      <Layout>
      <div className='main-wrapper'>
        <div class='main'>
                      <div class=''>
                          <div className='main-table-section'>
                              <div className='heading-section'>
                                <p>Status</p>
                              </div>
                              <ReactTable
                                  // data={this.state.roles.length > 0 ? this.state.roles : []}
                                  columns={columns}
                                  // defaultSorted={[{id: 'created', desc: true}]}
                                  pageSize={10}
                                  // showPageSizeOptions={false}
                                  // showPageJump={false}
                              />
                          </div>
                      </div>
                  </div>
      </div>
      </Layout>
      </>
    );
  }
}

export default App;
