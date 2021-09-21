import React from "react";
// import styles from './index.module.scss'
import { Header, Footer, Filters, Todos } from "../../";

interface IComponentProps {
  children?: React.ReactNode;
}

const TodosContainer = (props?: IComponentProps) => {
  return (
    <div>
      <Header />
      <Todos />
      <Filters />
      <Footer />
    </div>
  );
};

export default TodosContainer;

// // // stateless

// interface IComponentProps {
//    data?: string
//    children?: React.ReactNode
// }

// interface IComponentState {
//     value?: string
// }

// const TodosContainer = ({data, children }: IComponentProps) => {
//     const [value, setValue] = useState<string | null>(null)
// return <div className={styles.todosContainer}>
//     {children}
//     <div>{data}</div>
//     <button onClick={() => setValue("Test")}>Click Me!</button>
//     <div>{value}</div>
// </div>
// }

// export default TodosContainer;

// // class TodosContainer extends React.Component<IComponentProps, IComponentState>  {
// //     constructor(props: IComponentProps){
// //         super(props)

// //         this.state = {}
// //     }
// // clickMeFunction(){
// //    this.setState({value: "123456789"})
// // }

// //     render() {
// //         return <div>
// //         {this.props.children}
// //         <div>{this.props.data}</div>
// //         <button onClick={this.clickMeFunction}>Click Me!</button>
// //         <div>{this.state.value}</div>
// //         </div>
// //     }
// // }

// // export default TodosContainer;
