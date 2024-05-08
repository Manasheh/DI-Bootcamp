import React from "react";
import posts from '../data/data1.json'

export class SocialMedia extends React.Component {

    render() {
        const media = posts.SocialMedias.map((media, index) => {
            return <li key={ index }>{media}</li>
        })
        return (
            <div>
                <ul>
                    {media}
                </ul>
            </div>
        )
    }
}

// import React from "react";
// import posts from '../data/data1.json';

// export class SocialMedia extends React.Component {
//     render() {
//         const media = posts.SocialMedias.map((media, index) => (
//             <li key={index}>{media}</li> // Use parentheses to return JSX
//         ));
//         return (
//             <div>
//                 <ul>{media}</ul> 
//             </div>
//         );
//     }
// }
