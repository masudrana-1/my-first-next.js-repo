import DashBoardLayout from "../../components/Layouts/DashBoardLayout";

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return(
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}