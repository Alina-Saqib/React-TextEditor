import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'
       


    // })

    // const [btnText, setBtnText]= useState("Enable Light Mode")

    // const toggleStyle =() =>{

    //     if(myStyle.color ==='black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white' 

    //         })

    //         setBtnText("Enable Light Mode")
    //     }

    //     else{

    //         setmyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
        
    //     }

    // }


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',

    }
  return (
    <div className='container' >
         <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>

        <div className="accordion" id="accordionExample">
           
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Our Vision
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>At Textify, our vision is to empower individuals and businesses with a user-friendly and efficient text editing solution.
                     </strong> We understand the power of words and their 
                     impact on communication, 
                     expression, and information sharing. 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What We Offer
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>Textify offers a streamlined and intuitive text editing experience.</strong> 
                With a focus on simplicity and functionality, our platform provides an array of tools for 
                your text manipulation requirements.
                 Convert text to different cases, eliminate unnecessary spaces, craft aesthetically pleasing titles, 
                 and more – all in one place. We value your time and 
                 strive to make your text editing tasks efficient and enjoyable.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Why Choose Textify
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>User-Centric Approach </strong> Our web app is designed with you in mind. We've prioritized user-friendliness, ensuring that both newcomers and seasoned editors can navigate the platform effortlessly.
                <strong> Versatility </strong>

 From students to professionals, writers to marketers, Textify caters to various user needs. Our suite of text manipulation tools adapts to different contexts, making it a versatile asset in your digital toolkit.
<strong> Precision and Speed </strong>
At Textify, we believe that text editing should be both accurate and swift. Our tools are engineered to deliver precise results while saving you valuable time.
            </div>
            </div>
        </div>
        </div>

        {/* <div className="container2 my-3" >
        <button  onClick={toggleMode} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
       

      
    </div>
  )
}
