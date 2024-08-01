'use client';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams();
  const { name } = params;

  return (
    <div>
      <h1>Nice to meet you {name}.</h1>
    </div>
  );
};

export default page;
