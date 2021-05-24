import React from 'react';
import Menuitem from '../menu-item/menu-item.component';
import '../directory/directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[{
                title:'hats',
                imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1
                },
                {
                title:'Jacket',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2
                },
                {
                    title:'Jacket 3',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    id:3
                },
                {
                    title:'Jacket 4',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'large',
                    id:4
                },
                {
                    title:'Jacket 5',
                    imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    size: 'large',
                    id:5
                }  
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu"> 
            {  
                this.state.sections.map(({ id,imageUrl,title,size})  =>(
                <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))   
            }         
            
            </div>
        )
    }
}

export default Directory;