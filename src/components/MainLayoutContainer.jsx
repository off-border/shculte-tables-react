import { useSelector } from "react-redux";
import { getNumbers } from "../store/selectors";
import MainLayout from "./MainLayout";

export default () => {
    const numbers = useSelector(getNumbers);
    
    return <MainLayout numbers={numbers} />
}