import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return <div>
        <div className="sub-cont"></div>
        <div className="about-header">
            <h1 className="header-h1">
                An About us Page, where you can know  <br /> <br /> more about our Company and our services!
            </h1>
        </div>
        <div className="content-cont">
            <div className="left-span">
                Welcome to Loty-store, your ultimate destination for all the trendy 
                Tee's
                <br/>
                <br/>
                <br/>
                <button  onClick={() => navigate("/products") }>
                    Shop with us Today
                </button>
            </div>
        </div>
    </div>
};
 
export default About;