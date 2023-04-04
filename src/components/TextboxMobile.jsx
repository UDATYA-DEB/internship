import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'

const TextboxMobile = ({nametext1, nametext2}) => {
    return (
        <div className='fullname'>
            <div style={{display: 'flex'}}>
            <p style={{color: '#767980', fontFamily: 'Open Sans', fontSize: '12px', margin: '0', padding: '0 6px', backgroundColor: 'white', marginTop: '-10px', height: '15px', whiteSpace: 'nowrap', textAlign: 'center'}} >{nametext1}</p>
            <p style={{color: '#767980', marginLeft: '11px', fontFamily: 'Open Sans', fontSize: '12px', marginRight: '0', marginBottom: '0', padding: '0 6px', backgroundColor: 'white', marginTop: '-10px', height: '15px', whiteSpace: 'nowrap', textAlign: 'center'}} >{nametext2}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '6px'}}>
            <Menu>
                <MenuButton as={Button} rightIcon={<IoMdArrowDropdown style={{marginRight: '10px'}} />} style={{marginLeft: '2px', borderRight: '1px solid #767980', borderRadius: '0', width: '60px', height: '24px',  textAlign:'left', paddingLeft: '0', paddingRight: '0', backgroundColor: 'white', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '14px', lineHeight: '24px', marginTop: '1px'}}>
                    <img src="./images/flag2.svg" alt="flag1" />
                </MenuButton>
                <MenuList minW={0} w='45px' style={{marginLeft:'-13px'}}>
                    <MenuItem style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src="./images/flag2.svg" alt="flag1" /></MenuItem>
                    <MenuItem style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src="./images/flag2.svg" alt="flag1" /></MenuItem>
                    <MenuItem style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src="./images/flag2.svg" alt="flag1" /></MenuItem>
                </MenuList>
            </Menu>
            <input className='textbox' style={{opacity: '0.6',marginLeft: '11px', border: 'none', fontSize: '14px'}} type="text" />
            {/* <input type='' /> */}
            </div>
        </div>
      )
}

export default TextboxMobile