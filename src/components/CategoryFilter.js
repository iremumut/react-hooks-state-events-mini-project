import React, {useState} from "react";

function CategoryFilter({categories, filterTasks}) {

  const [selectedBtnName, setSelectedBtnName] = useState('');

  function handleClick(e){
    setSelectedBtnName(e.target.name);
    filterTasks(e.target.name);
  }


  const buttons = categories.map((category)=>(
    <button key={category} name={category} onClick={handleClick} className={selectedBtnName===category? 'selected' : ''}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttons}
    </div>
  )
}

export default CategoryFilter;
