import RootLayout from "../../components/Layouts/RootLayout";

const About = () => {
    return (
        <div>
            <h1 style={{color: "red"}}>This is about page</h1>
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }