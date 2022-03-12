import React from 'react'
import { useGlobalContext } from '../cock-ctx';
import Cocktail from './Cocktail';
import Loading from './Loading';

const List = () => {
    const { loading, cocktails } = useGlobalContext()

    if (loading) {
        return <Loading />
    }

    if (cocktails.length < 1) {
        return <p>There are no drinks</p>
    }

  return (
    <section className='section'>
        <h2 className='section-title'>Cocktails</h2>
        <div className='cocktails-center'>
            {cocktails.map((drink) => {
                return (
                    <Cocktail 
                    key={drink.idDrink}
                    id={drink.idDrink}
                    image={drink.strDrinkThumb}
                    name={drink.strDrink} 
                    glass={drink.strGlass}
                    info={drink.strAlcoholic}
                    />
                );
            })}
        </div>
    </section>
  )
}

export default List