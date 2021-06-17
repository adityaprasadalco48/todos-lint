import React from 'react';

export default function Testing() {
  var huskyItem = ['husky', 'eslint', 'prettier'];
  console.log('hello husky');
  console.log('try to do husky');
  return (
    <div>
      {huskyItem.map((item, index) => (
        <>
          <h2 key={index}>Testing for Husky ={item}</h2>
        </>
      ))}
    </div>
  );
}
