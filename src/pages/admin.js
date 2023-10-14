import DashBoardLayout from "@/components/Layouts/DashBoardLayout";

const Admin = () => {
    return (
        <div>
            <h1>This is Admin page</h1>
        </div>
    );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
    return(
        <DashBoardLayout>
            {page}
        </DashBoardLayout>
    )
}