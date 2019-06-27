import React from 'react'

const MenuBar = ({ active, changeDisplay }) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  
  */

  // let classCheck = (id) => document.getElementById(id) === props.active ? 'item active' : 'item'

  return (
    <div className="ui four item menu">
      <a className={"item " + (active === "profile" && " active")} id="profile" onClick={(e) => changeDisplay(e.target.id)}>
        <i className="user large icon" id="profile" />
      </a>

      <a className={"item " + (active === "photo" && " active")} id="photo" onClick={(e) => changeDisplay(e.target.id)}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={"item " + (active === "cocktail" && " active")} id="cocktail" onClick={(e) => changeDisplay(e.target.id)}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={"item " + (active === "pokemon" && " active")} id="pokemon" onClick={(e) => changeDisplay(e.target.id)}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div >
  )

}

export default MenuBar
