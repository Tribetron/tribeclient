import React,{useEffect,useState} from 'react';
import { fields } from './Data';

const RandomFields = () => {
    const now = Date.now();
    const [data, setData] = useState(fields);
    const [style,setStyle] = useState({});

    const randommisePosition =()=>{
        const random = Math.floor(Math.random() * 100) + 1;
        if(random>85){
            randommisePosition()
        }else {
            return random + '%'
        }
    }

    useEffect(()=>{
        const reShuffle = setInterval(()=>{
            data.map((x)=>{
                x.style = {
                        top:randommisePosition(),
                        bottom:randommisePosition(),
                        left:randommisePosition(),
                        right:randommisePosition(),
                        position: 'absolute',   
                        margin:10
                        }
               return x;
            })
             setData(data);
             setStyle(randommisePosition())
        },500);

        return ()=>clearInterval(reShuffle);
    },[now, data])

  return (
          <div className='col-randomise-fields'>
            {data.map((x,index)=>{
            return <p style={x.style} key={index}>{x.title}</p>
            })}
          </div>
  )
}

export default RandomFields