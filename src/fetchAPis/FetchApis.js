import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState('');
  
    useEffect(() => {
      fetch("http://localhost:3001/")
        .then(response => response.json())
        .then(data => setData(data));
    });
  
    return (
      <div>Fetched data{data}
      </div>
    );
  }