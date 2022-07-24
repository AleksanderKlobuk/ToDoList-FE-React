import "./Card.css";
import {Card as Props} from './Interface'

const Card: React.FC<Props> = (props): JSX.Element => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;






//<div className={classes}>{props.children}</div>  - thanks to {props.children} we can use other
//classes jsx's //inside our div so basically we can use Card component as a wrapper
