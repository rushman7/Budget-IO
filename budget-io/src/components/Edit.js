import React from 'react';

const Edit = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Edit Page, ID: {props.match.params.id}</h2>
    </div>
  )
}


export default Edit;