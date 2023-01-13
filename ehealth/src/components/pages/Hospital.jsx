import React from "react";
import { Button, Card } from 'antd';

const Hospital =({hospital}) =>{

    const { Meta } = Card;
  return (
    <Card
    hoverable
    style={{ width: 280, marginBottom:30, marginLeft:30 }}
    cover={<img alt={hospital.Name} src={hospital.CoverImg}   style={{ height: 200}}/>}
  >
    <Meta title={`Name: ${hospital.Name}`} description={`Address: ${hospital.Address}`}  />
  </Card>
  )
}

export default Hospital
