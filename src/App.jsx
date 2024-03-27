import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setbmi] = useState(0)

  //conditionaly render
  const [isHeight,setIsHeight] = useState(true)
  const [isWeight,setIsWeight] = useState(true)

  const validate = (e) =>{
    const {name,value} = e.target
    console.log(name);
    console.log(value);

    if(!!value.match(/^[0-9]*$/))
    {
      if(name=='height')
      {
        setHeight(value)
        setIsHeight(true)
      }
      else
      {
        setWeight(value)
        setIsWeight(true)
      }
    }
    else
    {
      if(name=='height')
      {
        setHeight(value)
        setIsHeight(false)
      }
      else
      {
        setWeight(value)
        setIsWeight(false)
      }
    }
  } 

  const handlebmi = () => {
    setbmi(parseInt(weight/((height/100)**2)))
  }

  const handleReset = () => {
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setbmi(0)
  }


  return (
    <>
      <div className='main '>
        <div className='sub rounded shadow p-5'>
          <h1>Body Mass Index</h1>
          <p>Calculate your BMI for free</p>

          <div className='result rounded shadow d-flex justify-content-center flex-column align-items-center w-100'>
            <h2>{bmi} kg/m²</h2>
            <p>overweight</p>
          </div>

          <form action="">
          <TextField name='height' value={height || ''} id="outlined-basic" label="Height (cm)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
          {!isHeight && <p className='text-danger'>Invalid Entry !!!</p>}
          <TextField name='weight' value={weight || ''} id="outlined-basic" label="Weight (kg)" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
          {!isWeight && <p className='text-danger'>Invalid Entry !!!</p>}

          <div className='mt-5 d-flex justify-content-between'>
          <Button variant="contained" color='success' className='w-50' onClick={handlebmi}>Calculate</Button>
          <Button variant="outlined" color='primary' className='w-50 ms-3' onClick={handleReset}>Reset</Button>
          </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default App
