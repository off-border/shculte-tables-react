import { useSelector } from "react-redux";
import { getNumbers } from "../store/selectors";
import MainLayout from "./MainLayout";

export default function MainLayoutContainer() {
    const numbers = useSelector(getNumbers);
    
    return <MainLayout numbers={numbers} />
}