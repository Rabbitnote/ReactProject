import Nav from './Navbar';
const Layout = (props)=>{
    return(<div>
        <Nav></Nav>
        {props.children}
    </div>)
}
export default Layout;