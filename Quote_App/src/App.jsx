import { use, useEffect, useState } from 'react';

function App() {
  const quotes =[
    {
      id : 1,
      text : "Be yourself; everyone else is already taken.",
      author : "Oscar Wilde" 
    },
    {
      id : 2,
      text : "Simplicity is the ultimate sophistication.",
      author : "Leonardo da Vinci" 
    },
    {
      id : 3,
      text : "Do or do not. There is no try.",
      author : "Yoda" 
    },
    {
      id : 4,
      text : "What you do makes a difference.",
      author : "Jane Goodall" 
    },
    {
      id : 5,
      text : "Stay hungry, stay foolish.",
      author : "Steve Jobs" 
    },
    {
      id : 6,
      text : "The only way out is through.",
      author : "Robert Frost" 
    },
    {
      id : 7,
      text : "You miss 100% of the shots you don't take.",
      author : "Wayne Gretzky" 
    },
    {
      id : 8,
      text : "Act as if what you do makes a difference. It does.",
      author : "William James" 
    },
    {
      id : 9,
      text : "Less is more.",
      author : "Ludwig Mies van der Rohe" 
    },
    {
      id : 10,
      text : "Life is really simple, but we insist on making it complicated.",
      author : "Confucius" 
    },
  ];

    const[index,setIndex] = useState(0);
    const[fav,setFav] = useState([]);

    const currentQuote = quotes[index];

    const nextQuote = () => {
      const next = (index+1) % 10;
      setIndex(next);
    };

    const favQuote = () => {
      const exists = fav.some(
      favQuote => favQuote.text === currentQuote.text && favQuote.author === currentQuote.author);
    
      if (!exists) {
      setFav([...fav, currentQuote]);
      }

      if(exists){
        alert("Quote Already Added to Favorites List");
      }
    };
    
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 from-10% via-sky-500 via-30% to-emerald-500  flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Quote App</h1>
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg text-center ">
            <p className='text-xl text-gray-700 italic mb-4'> Quote {currentQuote.id} : "{currentQuote.text}"</p>
            <p className='text-md text-gray-500 mb-6 font-medium'>-{currentQuote.author}</p>
          
            <div className='flex flex-wrap justify-center gap-5'>
              <button className='bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full' onClick={favQuote}>Add Fav</button>
              <button className='bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full' onClick={nextQuote}>Next Quote</button>
            </div>
          </div>
        
        {fav.length > 0 && (
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl flex-wrap'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Favorite Quotes</h2>
          <ul className="space-y-3 text-gray-700">
            {fav.map((fav,i)=>(
              <li key={i}>"{fav.text}" - {fav.author}</li>
            ))}
          </ul>
        </div>
        )}
    </div>
  );
}

export default App


function App(){
  const[data,setData] = useState([]
    
  )
}