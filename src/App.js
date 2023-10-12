import Questions from './Questions'
import Accordion from './Accordion'

function App() {

  return (
    <div className='max-w-lg bg-blue-500 mx-auto text-white p-4'>
      <h1 className='text-2xl font-semibold text-center'>Frequently Asked Questions</h1>
      {Questions.map((q) => {
        return(
          <Accordion title={q.title} info={q.info}/>
          )
      })}
    </div>
  );
}

export default App;
