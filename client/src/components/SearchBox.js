import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else navigate('/');
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        placeholder='Search products...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className='me-4 rounded'
      ></Form.Control>
      <Button type='submit' className='rounded' variant='outline-success'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
