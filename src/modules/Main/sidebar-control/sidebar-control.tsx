import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import useScrollPosition from '../../../hook/useScrollPosition';
import styled from 'styled-components';



// styled components
export const HorizontalFormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    margin: 0;
    padding-left: 8px;
    font-weight: 500 !important;
  }
`;

export const VerticalFormItem = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin: 0;
    padding: 0;
    font-weight: 500 !important;
  }
`;


const SidebarControl = () => {
  const scrollPosition  = useScrollPosition();
  
    
  const footerFixed = useSelector((state:any)=>state.ui.footerFixed);
  const headerFixed = useSelector((state:any)=>state.ui.headerFixed);
  
  const getContainerPaddingTop = useCallback(()=>{
    if(headerFixed){
        return `${16 - (scrollPosition <= 16 ? scrollPosition : 0)}px`
    }
    return `${73 -(scrollPosition <= 37 ? scrollPosition : 73)}px`
  },[scrollPosition,headerFixed])
  
    
  return (
    <aside 
    className='control-sidebar control-sidebar-dark' 
    style={{
        top:0,
        bottom:footerFixed ? "57px" :"0px",
        padding: `${getContainerPaddingTop()} 16px 16px 16px`,
        overflowY:'scroll'
    }}
    >
     <h4>mateen.dev</h4>
     <hr className="mb-2" />
     <div style={{padding: '8px 0'}}>
        
     </div>
     
    </aside>
  )
}

export default SidebarControl