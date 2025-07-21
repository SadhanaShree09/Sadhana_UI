import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function QuoteApp() {

    const quotes=[
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
        setIndex((index + 1) % quotes.length)
    };

    const prevQuote = () => {
          setIndex((index - 1 + quotes.length) % quotes.length)
    };
  
    const favQuote = () => {
        const exists = fav.some(
            favQuote => favQuote.text === currentQuote.text && favQuote.author === currentQuote.author
        );

        if(!exists){
            setFav([...fav,currentQuote]);
        }

        if(exists){
            alert("Quote Already added to Fav");
        }
    };

    return(
        <div className="main-container">
            <div className="quote-container">
                <h1>Quote App</h1>
                <div className="quote-display" key={index}>
                    <div className="quote-text">"{currentQuote.text}"</div>
                    <div className="quote-author">- {currentQuote.author}</div>
                </div>
                <div className="quote-buttons">
                    <button className="quote-btn" onClick={prevQuote}>Previous Quote</button> 
                    <button className="quote-btn" onClick={nextQuote}>Next Quote</button>
                    <button className="quote-btn" onClick={favQuote}>Set Favourite</button>
                </div>
            </div>
            
            {fav.length > 0 && (
                <div className="favorites-section">
                    <h2>Favorite Quotes</h2>
                    <ul className="favorites-list">
                        {fav.map((fav, id) => (
                            <li key={id}>
                                <div className="quote-text">"{fav.text}"</div>
                                <div className="quote-author">- {fav.author}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            <div className="page-navigation">
                <Link to='/'>Go back to Home Page</Link>
                <Link to='/timeline'>Go to next page</Link>
            </div>
        </div>
    )
}

export default QuoteApp