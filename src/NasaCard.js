import React from 'react';

const NasaCard = (props) => {
    return (
        <>
            <h1>Nasa Card!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa photo of the day"/>
        </>
    )
}

export default NasaCard;

// import React, { Component } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import { ReadableText } from "./styled-components/ReadableText";
// import { makeStyles } from "@material-ui/core/styles";
// import Tooltip from "@material-ui/core/Tooltip";

// export default class Objects extends Component {
//   render() {
//     if (!this.props.data) {
//       return <h1>Loading...</h1>;
//     }
//     return (
//       <div className="card">
//         {/* Title */}
//         <h1>{this.props.data[0].title}</h1>
//         {/* Youtube Video */}
//         {this.props.data[0].url.includes("image") ? (
//           <Tooltip title="Click on image to view the image in HD">
//             <img
//               src={this.props.data[0].url}
//               alt="Space Img"
//               onClick={() => window.open(this.props.data[0].hdurl, "_blank")}
//             />
//           </Tooltip>
//         ) : }

//         {/* Description */}
//         <ReadableText>{this.props.data[0].explanation}</ReadableText>
//         {/* <Placeholder dates={this.state.startDate} /> */}
//       </div>
//     );
//   }
// }