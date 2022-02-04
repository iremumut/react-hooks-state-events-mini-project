import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text:'',
    category: 'Code'
  })

  const catOptions = categories.map((cat) => {
    return <option key={cat}> {cat} </option>
  })

  function handleOnChange(e){
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  function submitHandler(e){
    e.preventDefault();
    onTaskFormSubmit(formData);
  }

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleOnChange}>
          {/* render <option> elements for each category here */}
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
