import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
import { IoMdArrowDropdown } from 'react-icons/io'

const TextboxDropdown = ({nametext}) => {
    return (
        <div className='dropdown-btn'>
            <p style={{color: '#767980', fontFamily: 'Open Sans', fontSize: '12px', margin: '0', padding: '0 6px', backgroundColor: 'white', marginTop: '-10px', height: '15px', whiteSpace: 'nowrap', textAlign: 'center'}} >{nametext}</p>
            {/* <input className='textbox' style={{border: 'none', fontSize: '21px', marginTop: '2px'}} type="text" /> */}
            <Menu>
                <MenuButton as={Button} rightIcon={<IoMdArrowDropdown />} style={{width: '100%', height: '36px',opacity: '0.6',  textAlign:'left', paddingLeft: '0', paddingRight: '0', backgroundColor: 'white', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '14px', lineHeight: '24px', marginTop: '1px'}}>
                    Bangalore
                </MenuButton>
                <MenuList style={{width: '350px', marginLeft:'-17px'}}>
                    <MenuItem>Kolkata</MenuItem>
                    <MenuItem>Mumbai</MenuItem>
                    <MenuItem>New Delhi</MenuItem>
                    <MenuItem>Pune</MenuItem>
                </MenuList>
            </Menu>
        </div>
      )
}

export default TextboxDropdown