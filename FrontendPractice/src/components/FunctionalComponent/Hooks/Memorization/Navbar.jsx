<li><Link to="/contact" className='link'>Contact</Link></li>
<li><Link to="/sign-up" className='link'>Sign-up</Link></li>
<div>
    <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
    <span onMouseEnter={toggleDrop}>Hooks</span>
    {dropdown && (
        <ul>
        <ul onMouseLeave={toggleDrop}>
            <li><Link to="/usestate" >useState</Link></li>
            <li><Link to="/useEffect">useEffect</Link></li>
            <li><Link to="/useeffectapi">useEffectApi</Link></li>                      
            <li><Link to="/UseRef">UseRef</Link></li>
            <li><Link to="/UseMemo">UseMemo</Link></li>
            <li><Link to="/UseReducer">UseReducer</Link></li>
            <li><Link to="/UseCallback">UseCallback</Link></li>
            <li><Link to="/List">List</Link></li>
            <li><Link to="/Student">Student</Link></li>

</ul>)}
</div>