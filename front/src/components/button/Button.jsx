import { Link } from "react-router-dom";

const Button = ({link, name}) => {
  return (
    <Link to={link} >
      <button className="rounded bg-fuchsia-400 border-2 border-fuchsia-200 p-2.5 m-2.5 hover:bg-fuchsia-300 hover:border-fuchsia-500 text-xl font-semibold flex table-row " >{name}</button>
    </Link>
  );
};
export default Button;

