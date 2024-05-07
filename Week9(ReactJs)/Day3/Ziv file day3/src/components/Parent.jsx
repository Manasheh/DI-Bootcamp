import Test from './Test'
const Parent = (props) => {
  console.log(props);
  //   return <h2>Parent</h2>;
  if(props.auth === 'admin'){
    return props.children;
  }
  return <Test/>
};
export default Parent;
