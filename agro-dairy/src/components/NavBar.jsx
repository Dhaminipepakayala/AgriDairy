import { AppBar,Toolbar,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { BiCartAdd } from "react-icons/bi";

 const Header = styled(AppBar)`
 background:black;
 `
 const Tabs=styled(NavLink)`
 font-size:20px;
 margin-right:30px;
 text-decoration:none;
 color:inherit;
 `

const NavBar = () =>{
   return (
    <Header position="static">
        <Toolbar>
               <Tabs to='/'>Dashboard</Tabs>
               <Tabs to='/Products'>Products</Tabs>
               
               <Tabs to='/cart' style={{marginLeft:'75%'}}><BiCartAdd  size={40} /></Tabs>
        </Toolbar>

    </Header>
   )
}
export default NavBar;