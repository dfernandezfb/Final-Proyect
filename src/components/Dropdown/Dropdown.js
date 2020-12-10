import {Link} from 'react-router-dom'
import styled from '@emotion/styled'
// import './Dropdown.css'

const Dropdown = ({buttonProps,containerProps, linksProps, tema}) =>
{
    const DropdownContainer=styled.div`
    position:relative;
    &:hover .dropdown-content{
        display:block
    }
    .dropdown-button
    {
        background-color: ${buttonProps.bg};
        padding:${buttonProps.p};
        margin: ${buttonProps.m};
        height:${buttonProps.h};
        width: ${buttonProps.w};
        border.radius: ${buttonProps.rad};
        cursor: ${buttonProps.cursor};
    }
    .dropdown-content
    {
        display: none;
        position: absolute;
        background-color:${containerProps.bg};
        left:-70px;
        min-width: ${containerProps.w};
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-radius: .2rem;
    }
    .dropdown-link
    {
        color:${linksProps.color}
        padding: 10px 16px;
        text-decoration: none;
        display: block;
        text-align: center;
    }
    .dropdown-link:hover
    {
        background-color: ${linksProps.bghover};
        color: ${linksProps.colorhover};
        text-decoration:none;
    }
    `
    // linksArray.map(linkTitle =>{
        
    // })
    return(
        <DropdownContainer>
            <div className='dropdown-button'>
                {buttonProps.title}
            </div>
            <div className={'dropdown-content'}>
                {linksProps.linksArray.map((linkTitle,index)=>{
                    return (<Link to={linkTitle.to} key={index} className={`dropdown-link`}>{linkTitle.title}</Link>)
                })}
            </div>
        </DropdownContainer>
        )
}

export default Dropdown