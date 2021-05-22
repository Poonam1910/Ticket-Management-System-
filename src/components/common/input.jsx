import React from "react";

const Input = ({ type,name, label, error, ...rest }) => {
  return (
    
    type ==='label'?    
      <div className="form-group">
      <label htmlFor={name}>{label}</label>
     <input {...rest} name={name} id={name} className="form-control" autoFocus /> 
     {error && <div className="alert alert-danger">{error}</div>}
    </div>    
    :
      <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} className="form-control" autoFocus /> 
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
