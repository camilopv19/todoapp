function TodoApp() {
	const [text, setText] = React.useState("");
	const [list, setList] = React.useState([]);
  
	const newId = () => Math.random().toFixed(6) * 100000;
  
	const add = (e) => {
	  e.preventDefault();
	  const item = { text, id: newId(), done: false };
	  const newList = [...list];
	  newList.push(item);
	  setList(newList);
	  setText("");
	};
  
	const remove = (e, id) => {
	  e.preventDefault();
	  let newList = [];
	  list.map(item => {
		if (item.id !== id) newList.push(item);
	  });
	  setList(newList);
	};
  
	const markDone = (_, id) => {
	  const style = document.getElementById(id).style.textDecoration;
	  document.getElementById(id).style.textDecoration = style.length > 0 ? '' : 'line-through';
	};
  
	return (
	  <div className="app">
		<h1>Todos</h1>
		<div>
		  <input
			type="text"
			onChange={(e) => setText(e.target.value)}
			value={text}
		  />
		  <br />
		  <button className="add" type="submit" onClick={(e) => add(e)}>
			Add task
		  </button>
		</div>
		{list.length > 0 && (
		  <div className='list'>
			<br />
			<h2>To do List</h2>
			<ul>
			  {list.map(({ text, id, done }) => (
				<li
				  style={{ textDecoration: done ? "line-through" : "" }}
				  id={id}
				  key={id}
				  onClick={ e => markDone(e, id)}
				>
				  {text}
				  <button className="delete" type="submit" onClick={e => remove(e,id)}>Delete</button>
				</li>
			  ))}
			</ul>
		  </div>
		)}
	  </div>
	);
  }
  
  ReactDOM.render(<TodoApp />, document.querySelector("#app"));
  