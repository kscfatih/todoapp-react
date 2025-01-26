import Table from "./Table"

export default function App(){

  
  const insan = {
    isim : 'fatih',
    soyisim : 'kuşçu'
  }

  const welcometojsx =  <h1>Merhaba {insan.isim} </h1>

  const isimler = ['ayşe','ali','fatma','hüseyin']
  

  



  return (
    <div>
     {welcometojsx}
      <ul>
        {isimler.map(
          (isim, index) => 
            <>
             <li> {isim} {index} </li>
            </>
        )}
      </ul>
      <hr />
      <Table/>
      
    </div>
  )
}

