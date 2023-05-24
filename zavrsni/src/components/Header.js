const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Izbornik</button>
        <h1>Pozdrav, kako vam možemo pomoći?</h1>
        <button onClick={props.handleLogout}>Odjavi se</button>
      </div>}

      {!isLoggedIn &&  <div className="App-header">
        <div></div>
        <h1>GPP Pričalica</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>}
      </>
    )
}
export default Header;