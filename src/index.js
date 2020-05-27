// TODO: Render the `App` component to the DOM
import App from './components/App.js';
ReactDOM.render(<App />, document.getElementById('app'));


// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     };
//   }
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//   render() {
//      {elements.map((value, index) => {
//           return <li style={style} onClick={this.onListItemClick.bind(this)} key={index}>{value}</li>
//         })}
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };
//     return (
//       <ul>
//         {elements.map((value, index) => {
//           return <li style={style} onClick={this.onListItemClick.bind(this)} key={index}>{value}</li>
//         })}
//       </ul>
//     );
// }
// };

// var GroceryList = () => (
// <div>
//   <h1>Grocery List</h1>
//   <GroceryListItem type={['Green Eggs', 'Ham', 'Cheese']} />
// </div>

// );

// var myList = React.createElement(GroceryList);
// ReactDOM.render(myList, document.getElementById('app'));