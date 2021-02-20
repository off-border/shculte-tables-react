import { connect } from "react-redux";
import MainLayout from "./MainLayout";

const mapStateToProps = state => ({
    rowSize: state.rowSize,
});



export default connect(mapStateToProps, {})(MainLayout);