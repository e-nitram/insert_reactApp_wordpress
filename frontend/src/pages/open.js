import React from 'react'
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import openmark from '../asstes/openmark.png'
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

const OpenButton = styled(Button)({
  maxWidth: 400,
  width: 'calc(100% - 40px)',
  height: '52px',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '100px',
  textTransform: 'none',
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  boxShadow: '5px 5px 20px 10px rgba(0, 0, 0, 0.06), 1px 1px 4px 1px rgba(0, 0, 0, 0.15), -5px -5px 20px 10px rgba(0, 0, 0, 0.06)',
  transition: 'width .4s',
  cursor: 'pointer',
  fontFamily: 'Source Sans Pro',
  zIndex: 99,
  border: '1px solid #4D7D6B',
  '&:focus': { outline: 'none' }
})

const Text = styled(Stack)({
  width: '348px',
  height: '52px',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 14,
  lineHeight: '19.6px',
  color: 'black',
  fontFamily: 'Source Sans Pro',
})

const IconMark = styled(Stack)({
  width: '52px',
  height: '52px',
  position: 'absolute',
  left: 0,
  backgroundColor: 'white',
  borderRadius: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #4D7D6B',
})

const Open = () => {
  const [context, setContext] = useAppContext();
  const [flag, setFlag] = useState(false);

  return (
    <OpenButton
      style={{
        maxWidth: !flag ? '211px' : '400px',
        backgroundColor: !flag ? 'white' : '#4D7D6B'
      }}
    >
      <a
        style={{
          width: '52px',
          height: '52px',
          position: 'absolute',
          left: 0,
          backgroundColor: 'white',
          borderRadius: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#4D7D6B'
        }}
        rel='noreferrer'
        target='_blank'
        href='https://humbee.com/'
      >
        <IconMark>
          <img
            width={24}
            height={24}
            src={openmark}
            alt='openmark'
            style={{
              '&:focus': { outline: 'none' },
            }}
          />
        </IconMark>
      </a>
      <Text
        style={{
          color: flag ? 'white' : 'black'
        }}
        onClick={() => {
          setFlag(true)
          setContext({ ...context, state: flag ? (context.latestState ? context.latestState : '/select') : context.state });
        }} >
        Book a table
      </Text>
    </OpenButton>
  )
}

export default Open;