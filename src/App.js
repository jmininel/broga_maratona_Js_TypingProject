import React from 'react';


const App = () => {
    return (
       <div className="container">
      <div className="valid-keys">
         <span className="matched">juli</span>
         <span className="remainder">ana</span>
      </div>
       <div className="typed-keys">grfgr</div>
       <div className="completed-words">
           <ol>
               <li>cidade</li>
               <li>carro</li>
            </ol>
         </div>
      </div>
    );
};

export default App;