import RootLayout from "../../components/Layouts/RootLayout";

const Contact = () => {
    return (
        <div>
            <h1>This is contact page</h1>
        </div>
    );
};

export default Contact;


Contact.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }