import React,{useState} from 'react'
import './index.css';

const App = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [message, setMessage] = useState('');


    let imgsrc;
    if(bmi <1){
        imgsrc=null
    }
    else{
        if(bmi<25){
            imgsrc=<img src='../public/image/overweight.jpg' alt=''/>;
        }
        else if(bmi>= 25 && bmi<30){
            imgsrc=<img src='../public/image/perfectweight.jpg' alt=''/>;
        }
        else{
            imgsrc=<img src='../public/image/underweight.jpg' alt=''/>;
        }
    }

    let calcBmi =(event)=>{
        event.preventDefault()

        if(weight ===0 ||height ===0){
            alert('please enter a valid value')

        }
        else{
            let bmi=(weight/(height*height))
            setBmi(bmi.toFixed(1))


            if(bmi <25){
                setMessage('Your are underWeight')
                imgsrc=<img src='../public/image/overweight.jpg' alt=''/>;
            }
            else if(bmi>= 25 && bmi<30){
                setMessage('you are healthy  weight')
                 imgsrc=<img src='../public/image/overweight.jpg' alt=''/>;

            }
            else {
                setMessage('You are overweight')
                imgsrc=<img src='../public/image/overweight.jpg' alt=''/>;
            }
        }
    }

let reload =()=>{
    window.location.reload()
}


    return (
        <div className='app'>
        <div className='conatiner'>
        <h2 className='center'>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
            <div>
                <label>Weight (kg)</label>
                <input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div>
                <label>Height (meter)</label>
                <input value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>
        </form> 
        <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>

        </div>
        <div className='img-container'>
        <img src={imgsrc} alt=''/>

        </div>
        </div>
            
        </div>
    )
}

export default App
