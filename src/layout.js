import React, {useState} from 'react';
import SideBar from './sidebar';
import './layout.css'

const Layout = ({children}) => {
    const [change, setChange] = useState(false)
    const handleClick = () => {
        setChange(!change)
        console.log('cliked')
    }
    console.log(change)
    return (
        <>
            <div>
                <SideBar clickMe={handleClick} mchange={change}/>
                <div className={`${change ? 'sname' : 'dname'}`}>
                    <main>{children}</main>
                </div>
                {/*<Footer/>*/}
            </div>
        </>
    )
}

export default Layout;